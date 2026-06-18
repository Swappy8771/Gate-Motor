# M07 — Inventory Module

> **Status:** Final v1.1 · Quantity tracked internally (admin); customer sees in/out **status** only. Stock deducts at confirmation via guarded update (D-13).

## Overview
Stock is tracked per product as an exact quantity for the admin, with a low-stock alert threshold. Customers only ever see a status badge (In Stock / Low Stock / Out of Stock). Every stock change is logged for audit.

---

## Stock Flow
```
Supplier delivery → Admin STOCK_IN
Payment confirmed → System ORDER_DEDUCTION (at confirmation, not placement — D-13)
Confirmed order cancelled → System ORDER_CANCELLATION_RESTORE
Manual correction → Admin ADJUSTMENT (reason required)
Damaged/removed → Admin STOCK_OUT
```

---

## Inventory Log Types
| Type | Who | When |
|------|-----|------|
| STOCK_IN | Admin | New stock received |
| STOCK_OUT | Admin | Damaged/removed |
| ADJUSTMENT | Admin | Manual correction |
| ORDER_DEDUCTION | System | Order placed |
| ORDER_CANCELLATION_RESTORE | System | Order cancelled |

---

## Stock Deduction (at payment confirmation — guarded, concurrency-safe)
Use a **single conditional update** so two simultaneous confirmations can't oversell the last unit. No read-then-write race: the `gte` guard makes the decrement atomic.
```js
const upd = await tx.product.updateMany({
  where: { id: item.productId, stockQty: { gte: item.quantity } },  // guard
  data:  { stockQty: { decrement: item.quantity } },
})
if (upd.count === 0) {
  // Last unit already sold between placement and payment → flag order for manual refund/restock
  // (handled in markPaymentPaid — see M05). Do NOT force stock negative.
} else {
  await tx.inventoryLog.create({ data: { productId: item.productId,
    type: 'ORDER_DEDUCTION', quantity: -item.quantity,
    reason: `Order ${orderNumber}`, performedBy: 'SYSTEM' } })
}
```

---

## Admin Inventory Page `/admin/inventory`
| Column | Description |
|--------|-------------|
| Product | Name + SKU |
| Category | Category |
| Current Stock | Exact qty (admin-only) |
| Low Stock Alert | Threshold |
| Status | In Stock / Low Stock / Out of Stock |
| Actions | Update Stock · View Logs |

### Status Logic
```js
const getStockStatus = (qty, threshold) =>
  qty === 0 ? 'OUT_OF_STOCK' : qty <= threshold ? 'LOW_STOCK' : 'IN_STOCK'
```

### Update Stock — `PUT /inventory/:productId`
```json
{ "type": "STOCK_IN", "quantity": 50, "reason": "New shipment received" }
```

### Log View
Per-product history: date/time, type, ± quantity, running balance, reason, performed by.

---

## Low-Stock Dashboard Widget
Admin dashboard card listing products where `stockQty ≤ lowStockAlert`, linking to update stock.

---

## Customer-Facing Rule
Customers/dealers **never** see exact quantity — only the status badge (see M02). Add-to-Cart disabled when out of stock; the authoritative guarded decrement at **payment confirmation** (see M05) prevents oversell/races on the last unit.
