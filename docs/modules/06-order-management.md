# M06 — Order Management Module

> **Status:** Final v1.1 · Lifecycle ends at DELIVERED with a CANCELLED exit (D-01). **No in-app returns** in v1. Tracking = AWB + courier link. Stock deducts at confirmation (D-13). Email only (D-02).

## Overview
Manages the order lifecycle from placement to delivery, plus cancellation. Tracking is via an admin-entered AWB number and external courier link. The only committed transactional email is the order confirmation on payment.

---

## Order Lifecycle (v1)
```
PLACED ──(payment verified)──► CONFIRMED ──► SHIPPED ──► DELIVERED
   │                              │
   └──────────── CANCELLED ───────┘
         (customer pre-shipping, or admin; restores stock)
```

| Status | Who sets it | Trigger |
|--------|-------------|---------|
| PLACED | System | Order created, payment pending |
| CONFIRMED | System | Payment verified |
| SHIPPED | Admin | Admin enters courier + AWB + tracking URL |
| DELIVERED | Admin | Admin marks delivered |
| CANCELLED | Customer / Admin | Before shipping only |

> **Not in v1:** PROCESSING (D-11), RETURN_REQUESTED, RETURNED. Returns/refunds are handled **offline** by admin (D-01). Status never moves backward.

---

## Order Number
Format `ORD-YYYY-NNNN` (e.g. `ORD-2026-0001`).
```js
async function generateOrderNumber() {
  const year = new Date().getFullYear()
  const count = await prisma.order.count({ where: { orderNumber: { startsWith: `ORD-${year}-` } } })
  return `ORD-${year}-${String(count + 1).padStart(4, '0')}`
}
```

---

## What Each Order Stores
- Snapshot of delivery address (independent of the saved Address row)
- Snapshot per line: product name, SKU, unit price, gstPercent, quantity (immutable)
- Totals: subtotal + GST (+ shipping = 0) = total
- Payment reference (Razorpay IDs)
- Tracking: courierName, trackingNumber (AWB), trackingUrl
- Status history (OrderTracking) for the timeline

---

## Admin Order Management

### `/admin/orders`
- Filters: status, date range, user role (B2C / B2B), search by order number / customer
- Export to CSV
- Bulk action: mark selected as Shipped

### `/admin/orders/:id`
- Full detail, item snapshots, payment info
- Status update form
- Courier tracking form
- Status history timeline

### Update Status — `PUT /orders/:id/status`
```json
{ "status": "SHIPPED", "message": "Dispatched from Pune via DTDC" }
```
Backend: validate forward-only transition → update `Order.status` → append `OrderTracking` row. (Status-change emails are Phase 2.)

### Add Tracking — `PUT /orders/:id/tracking`
```json
{ "courierName": "DTDC", "trackingNumber": "Z12345678", "trackingUrl": "https://dtdc.com/track/Z12345678" }
```
The customer uses `trackingUrl` to track on the courier's site (no courier-API polling in v1).

---

## Customer / Dealer Order Views

### `/orders` — list
Order number, date, total, status badge, "View".

### `/orders/:id` — detail
Item list with images, shipping address, payment summary, and a **status timeline** built from OrderTracking:
```
✅ Order Placed      (Jun 15, 10:30)
✅ Order Confirmed   (Jun 15, 10:35)
✅ Shipped           (Jun 17, 14:00) — DTDC · AWB Z12345678  [Track ↗]
○  Delivered
```
Cancel button shown only when status is PLACED or CONFIRMED.

---

## Cancellation (the only non-forward path)
```
Customer clicks Cancel →  PUT /orders/:id/cancel
Backend:
  1. Assert status ∈ {PLACED, CONFIRMED}
  2. status → CANCELLED, cancelledAt, cancelReason
  3. If status was CONFIRMED (stock was deducted) → restore stock (+qty) + InventoryLog
     ORDER_CANCELLATION_RESTORE. A PLACED (unpaid) order had no deduction, so nothing to restore.
  4. If Payment PAID → surface in admin "refunds pending" queue (PAID payment on a CANCELLED order);
     admin refunds via Razorpay, then marks Payment REFUNDED (refundedAt).
  5. Append OrderTracking (CANCELLED)
  6. Send cancellation email
```
Admin can also cancel from the admin panel with the same effects.

---

## Email Notifications (email only — D-02)
| Event | v1? | Recipient |
|-------|-----|-----------|
| Order confirmation (on successful payment) | **Yes (committed)** | Customer/Dealer |
| Order cancelled | Yes | Customer/Dealer |
| Order shipped / delivered status emails | **Phase 2** | — |
| Any SMS | **Out of scope** | — |

---

## Business Rules
1. Stock deducted at **payment confirmation** via a guarded update (D-13); a PLACED/unpaid order holds no stock. Restored if a CONFIRMED order is cancelled.
2. Cancellation allowed only before shipping (PLACED/CONFIRMED).
3. Order line items **and** the delivery address are immutable snapshots.
4. `userRole` snapshot on the order enables B2C-vs-B2B reporting.
5. Refunds are manual (admin) in v1; Payment marked REFUNDED after processing.
