# M05 — Payment Integration (Razorpay)

> **Status:** Final v1.1 · Methods: **UPI, cards, net banking** (no EMI — D-09). Server-side verification mandatory. Verify endpoint and webhook share **one idempotent `markPaymentPaid()`** that deducts stock (guarded), confirms the order, clears the cart, and emails — exactly once.

## Overview
Razorpay standard checkout. The Razorpay order is created first (see M04), then payment is confirmed via either the browser verify call or the webhook — whichever arrives first. Confirmation is idempotent.

---

## Payment Flow
```
(order already PLACED with a Razorpay order — see M04)
1. Razorpay checkout modal → user pays
2a. Browser success → POST /payments/verify (signature)         ┐
2b. Razorpay webhook → POST /payments/webhook (raw-body sig)    ┘ whichever first
3. Verified → markPaymentPaid() runs ONCE (idempotent):
     guarded stock deduction → Order CONFIRMED → cart cleared → confirmation email
4. Success page
```

---

## Single Source of Truth: `markPaymentPaid()`
Both entry points call this. The PENDING→PAID guard makes it safe to call twice (browser + webhook).
```js
async function markPaymentPaid({ razorpayOrderId, razorpayPaymentId, method }) {
  const result = await prisma.$transaction(async (tx) => {
    const payment = await tx.payment.findUnique({
      where: { razorpayOrderId },
      include: { order: { include: { items: true } } },
    })
    if (!payment) throw httpError(404, 'Payment not found')
    if (payment.status === 'PAID') return { alreadyDone: true, orderId: payment.orderId } // idempotent no-op

    // Guarded stock deduction — atomic; fails safely if oversold (F-06)
    for (const item of payment.order.items) {
      const upd = await tx.product.updateMany({
        where: { id: item.productId, stockQty: { gte: item.quantity } },
        data:  { stockQty: { decrement: item.quantity } },
      })
      if (upd.count === 0) {
        // Rare: last unit sold between placement and payment. Record payment, flag for manual refund.
        await tx.payment.update({ where: { razorpayOrderId },
          data: { status: 'PAID', razorpayPaymentId, method, paidAt: new Date() } })
        await tx.order.update({ where: { id: payment.orderId },
          data: { status: 'CONFIRMED',
            notes: `${payment.order.notes ?? ''} [STOCK SHORTFALL — manual refund/restock needed]` } })
        return { stockShortfall: true, orderId: payment.orderId }
      }
      await tx.inventoryLog.create({ data: { productId: item.productId,
        type: 'ORDER_DEDUCTION', quantity: -item.quantity,
        reason: `Order ${payment.order.orderNumber}`, performedBy: 'SYSTEM' } })
    }

    await tx.payment.update({ where: { razorpayOrderId },
      data: { status: 'PAID', razorpayPaymentId, method, paidAt: new Date() } })
    await tx.order.update({ where: { id: payment.orderId }, data: { status: 'CONFIRMED' } })
    await tx.orderTracking.create({ data: { orderId: payment.orderId, status: 'CONFIRMED',
      message: 'Payment received', updatedBy: 'SYSTEM' } })
    await tx.cartItem.deleteMany({ where: { userId: payment.order.userId } })
    return { confirmed: true, orderId: payment.orderId }
  })

  if (result.confirmed) await sendOrderConfirmationEmail(result.orderId) // once, outside txn (D-02)
  // (stockShortfall path: surface in admin "needs attention" queue for manual refund)
  return result
}
```

---

## Entry Point 1 — Verify (browser) `POST /payments/verify`
```js
const crypto = require('crypto')

async function verifyPayment(req, res) {
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body
  const expected = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest('hex')
  if (expected !== razorpaySignature)
    return res.status(400).json({ error: 'Payment verification failed' })

  await markPaymentPaid({ razorpayOrderId, razorpayPaymentId })
  res.json({ success: true })
}
```

---

## Entry Point 2 — Webhook (raw body) `POST /payments/webhook`
**Correct raw-body verification (F-07):** the route must be registered with `express.raw()` **before** `express.json()`, and the HMAC is computed over the exact raw buffer — never over a re-serialized object.
```js
// app.js — register webhook BEFORE the global json parser
app.post('/api/v1/payments/webhook',
  express.raw({ type: '*/*' }),   // req.body is a Buffer, exactly as received
  paymentWebhook)
app.use(express.json())           // all other routes parse JSON normally
```
```js
function paymentWebhook(req, res) {
  const signature = req.headers['x-razorpay-signature']
  const rawBody = req.body  // Buffer — the exact signed payload
  const expected = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(rawBody)                       // raw buffer, NOT JSON.stringify(req.body)
    .digest('hex')
  if (expected !== signature) return res.status(400).send('Invalid signature')

  const evt = JSON.parse(rawBody.toString())
  const payment = evt.payload.payment.entity

  if (evt.event === 'payment.captured') {
    markPaymentPaid({                       // idempotent — safe even if verify already ran
      razorpayOrderId: payment.order_id,
      razorpayPaymentId: payment.id,
      method: payment.method,
    }).catch(err => console.error('webhook markPaymentPaid', err))
  }
  if (evt.event === 'payment.failed') {
    prisma.payment.update({ where: { razorpayOrderId: payment.order_id },
      data: { status: 'FAILED', failureReason: payment.error_description } }).catch(() => {})
  }
  res.status(200).json({ received: true })  // always 200 quickly; do work async
}
```
Register the webhook in the Razorpay dashboard → events: `payment.captured`, `payment.failed`.

---

## Frontend (Next.js)
```tsx
const handlePayment = async () => {
  await loadRazorpayScript()                       // injects checkout.js
  const { order, razorpayOrder } = await placeOrder({ addressId, notes })  // creates PLACED order (M04)

  const rzp = new window.Razorpay({
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: razorpayOrder.amount,
    currency: razorpayOrder.currency,
    name: "India's No 1 Remote Gate Motor",
    description: `Order ${order.orderNumber}`,
    order_id: razorpayOrder.id,
    handler: async (r) => {
      await verifyPayment({
        razorpayOrderId: r.razorpay_order_id,
        razorpayPaymentId: r.razorpay_payment_id,
        razorpaySignature: r.razorpay_signature,
      })
      router.push(`/orders/success?orderId=${order.id}`)
    },
    prefill: { name: user.name, email: user.email, contact: user.phone },
    theme: { color: '#3b82f6' },
  })
  rzp.on('payment.failed', () => alert('Payment failed. Please try again.'))
  rzp.open()
}
```

---

## Payment States
| Status | Meaning | Trigger |
|--------|---------|---------|
| PENDING | Order placed, not yet paid | On order creation (M04) |
| PAID | Verified; stock deducted, order CONFIRMED | markPaymentPaid() |
| FAILED | Attempt failed | Razorpay failure / webhook |
| REFUNDED | Manual admin refund | On cancellation of a paid order |

---

## Test Credentials
```
Card: 4111 1111 1111 1111 · any future expiry · any CVV
UPI success: success@razorpay   |   UPI failure: failure@razorpay
```

---

## Rules
- **Always verify on the server** — never trust client-side success.
- Amounts in **paise**; `Math.round(x * 100)`.
- Webhook route uses `express.raw()` and verifies the **raw buffer** (F-07).
- Confirmation logic lives in **one** idempotent `markPaymentPaid()` shared by verify + webhook (F-08).
- Stock is deducted here (at confirmation) with a **guarded conditional update** (F-06), not at placement.
- Refunds in v1 are **manual** via the Razorpay dashboard; then mark Payment `REFUNDED`.
- **No EMI** (D-09).
