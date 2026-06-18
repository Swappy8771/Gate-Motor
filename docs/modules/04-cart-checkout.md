# M04 — Cart & Checkout Module

> **Status:** Final v1.1 · Login required to buy (D-08). Free shipping — `shippingCharge = 0` always (D-07). **Stock is deducted at payment confirmation, not at placement** (D-13) — see flow below.

## Overview
Server-side cart (persisted per user), checkout with address selection, GST price calculation, and order placement that initiates Razorpay payment. Stock is reserved/deducted only when payment is confirmed, so abandoned checkouts never lock inventory.

---

## Why Server-Side Cart
- Dealer pricing must be computed server-side (never trust client prices).
- Cart persists across devices/sessions.
- Login is required to add to cart (no guest checkout — D-08).

Schema: see `CartItem` in **[03 — Database Schema](../03-database-schema.md)**.

---

## Cart Operations

### Add to Cart — `POST /cart/items { productId, quantity }`
Checks: product exists & active · quantity > 0 · quantity ≤ stockQty · if already in cart, update quantity. Returns full cart with recalculated totals.

### Update Quantity — `PUT /cart/items/:itemId { quantity }`
Checks: quantity > 0 (0 ⇒ remove) · quantity ≤ stockQty.

### Get Cart — `GET /cart`
For each item: fetch product, apply role-based price (dealer price only for approved dealers), compute line totals + GST. Returns subtotal, gstAmount, `shippingCharge: 0`, total.

---

## Price Calculation (v1)
```
unitPrice            = dealerPrice (approved dealer) else retailPrice   // GST-exclusive
lineSubtotal         = unitPrice × quantity
lineGst              = unitPrice × (gstPercent / 100) × quantity

cartSubtotal         = Σ lineSubtotal
cartGst              = Σ lineGst
shippingCharge       = 0                                                // free shipping (D-07)
cartTotal            = cartSubtotal + cartGst + shippingCharge

razorpayAmountPaise  = Math.round(cartTotal × 100)
```
> Prices are stored/displayed GST-exclusive; GST is shown as a line at cart/checkout (confirm rate via Q-04).

---

## Checkout Flow (order created BEFORE stock is touched)
```
1. Review cart (items, quantities)
2. Select / add delivery address
3. Order summary (items, GST, total — shipping ₹0)
4. "Proceed to Pay"
5. Backend: create Razorpay order FIRST → then Order (PLACED) + Payment (PENDING).
   NO stock deduction yet.
6. Razorpay checkout modal opens
7. User pays
8. Frontend → POST /payments/verify
9. Backend markPaymentPaid(): deduct stock (guarded) → Order CONFIRMED → clear cart →
   confirmation email  (see M05 — single idempotent service)
10. Success page
```
**Why this order:** the Razorpay order is a side-effect-free intent created first, so a Razorpay failure aborts cleanly with no orphan local order and no stock change. Stock moves only at confirmation, so an abandoned/unpaid PLACED order never locks inventory.

---

## Address Management
| Field | Required |
|-------|----------|
| Full Name | Yes |
| Phone | Yes |
| Address Line 1 | Yes |
| Address Line 2 | No |
| City | Yes |
| State | Yes (dropdown of Indian states) |
| Pincode | Yes (6-digit) |

Rules: multiple saved addresses · one default · the chosen address is **snapshotted** onto the order (`shipName`, `shipPhone`, `shipLine1/2`, `shipCity`, `shipState`, `shipPincode` — see schema) so later edits/deletes to the saved address never change past orders. (Pincode serviceability — see Q-09; default pan-India.)

---

## Order Placement (POST /orders)
```js
async function placeOrder(userId, addressId, notes) {
  const user = await getUser(userId)
  if (!user.isEmailVerified) throw httpError(403, 'Please verify your email before ordering')  // assumption 9

  const cartItems = await getCartWithPricing(userId)          // role-based pricing
  if (!cartItems.length) throw httpError(400, 'Cart is empty')

  for (const i of cartItems)                                  // soft availability check (UX)
    if (i.product.stockQty < i.quantity)
      throw httpError(422, `Insufficient stock for ${i.product.name}`)

  const address = await getOwnedAddress(userId, addressId)    // must belong to user
  const { subtotal, gstAmount } = calcTotals(cartItems)
  const total = subtotal + gstAmount                          // shipping = 0

  // 1) Razorpay order FIRST (side-effect-free intent)
  const orderNumber = await generateOrderNumber()             // ORD-2026-0001
  const rzp = await razorpay.orders.create({
    amount: Math.round(total * 100), currency: 'INR', receipt: orderNumber })

  // 2) Local Order (PLACED) + items + address SNAPSHOT + Payment(PENDING). NO stock change.
  const order = await prisma.$transaction(async (tx) => {
    const o = await tx.order.create({ data: {
      orderNumber, userId, addressId, userRole: user.role,
      shipName: address.name, shipPhone: address.phone,
      shipLine1: address.line1, shipLine2: address.line2,
      shipCity: address.city, shipState: address.state, shipPincode: address.pincode,
      subtotal, gstAmount, shippingCharge: 0, totalAmount: total,
      status: 'PLACED', notes } })
    await tx.orderItem.createMany({ data: cartItems.map(i => ({ orderId: o.id,
      productId: i.productId, productName: i.product.name, productSku: i.product.sku,
      unitPrice: i.unitPrice, gstPercent: i.product.gstPercent,
      quantity: i.quantity, totalPrice: i.unitPrice * i.quantity })) })
    await tx.payment.create({ data: { orderId: o.id,
      razorpayOrderId: rzp.id, amount: total, status: 'PENDING' } })
    await tx.orderTracking.create({ data: { orderId: o.id, status: 'PLACED',
      message: 'Order placed, awaiting payment', updatedBy: 'SYSTEM' } })
    return o
  })

  return { order, razorpayOrder: rzp }   // cart cleared + stock deducted at confirmation (M05)
}
```
> Stock deduction, cart clearing, and the confirmation email all happen in the single idempotent `markPaymentPaid()` service (see **[M05 — Payment Integration](./05-payment-integration.md)**), shared by the verify endpoint and the webhook.

---

## Frontend Pages
- **`/cart`** — items, quantity controls, remove, totals (shipping ₹0), "Proceed to Checkout"
- **`/checkout`** — address step → summary → Razorpay modal
- **`/orders/success?orderId=`** — order number, summary, "Track Order", "Continue Shopping"

---

## Cart Validation Rules
- Cannot add out-of-stock products; cannot exceed available stock.
- Cart recalculates prices on every fetch (no stale prices).
- If a product becomes inactive while in cart → warn and remove on next view.
- Availability is soft-checked at placement and **authoritatively enforced at confirmation** via a guarded stock decrement (M05/M07), which prevents overselling the last unit.
