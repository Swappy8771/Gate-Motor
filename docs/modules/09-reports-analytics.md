# M09 — Reports & Analytics Module

> **Status:** Final v1.0 · **Core (v1):** sales, revenue, top products. Dealer-activity & inventory-alerts are **optional extras** (build only if time permits).

## Overview
Read-only aggregate reporting for the admin over order and payment data. No data is modified by this module.

---

## Report Types

### 1. Sales Summary — `GET /reports/sales` *(core)*
Query: `period=daily|weekly|monthly`, `year`, `month`/`week`, `role=ALL|CUSTOMER|DEALER`.
```json
{
  "period": "monthly",
  "dateRange": { "from": "2026-06-01", "to": "2026-06-30" },
  "totalOrders": 124,
  "totalRevenue": "1548250.00",
  "totalGst": "278685.00",
  "avgOrderValue": "12486.69",
  "byStatus": { "CONFIRMED": 45, "SHIPPED": 30, "DELIVERED": 45, "CANCELLED": 4 }
}
```
> `byStatus` uses only v1 statuses (no PROCESSING/RETURN).

### 2. Revenue Breakdown — `GET /reports/revenue` *(core)*
```json
{
  "totalRevenue": "8542000.00",
  "totalGst": "1537560.00",
  "revenueExclGst": "7004440.00",
  "byMonth": [ { "month": "Jan 2026", "revenue": "1200000.00", "gst": "216000.00", "orders": 18 } ],
  "byChannel": { "B2C": { "revenue": "3200000.00", "orders": 68 },
                 "B2B": { "revenue": "5342000.00", "orders": 32 } }
}
```

### 3. Top Products — `GET /reports/top-products` *(core)*
```json
{ "products": [ { "productId": "uuid", "name": "Sliding Gate Motor 400kg",
  "sku": "SGM-400", "totalQuantitySold": 45, "totalRevenue": "562500.00" } ] }
```

### 4. Dealer Performance — `GET /reports/dealer-activity` *(optional extra)*
Per-dealer order count, revenue, last order date.

### 5. Inventory Alerts — `GET /reports/inventory-alerts` *(optional extra)*
Out-of-stock + low-stock product lists (also surfaced on the dashboard widget).

---

## Reference Queries

### Revenue (month)
```sql
SELECT SUM(total_amount) revenue, SUM(gst_amount) gst, COUNT(*) orders
FROM orders o JOIN payments p ON p.order_id = o.id
WHERE p.status = 'PAID' AND o.created_at >= '2026-06-01' AND o.created_at < '2026-07-01';
```

### Top products
```sql
SELECT oi.product_id, oi.product_name, oi.product_sku,
       SUM(oi.quantity) qty, SUM(oi.total_price) revenue
FROM order_items oi JOIN orders o ON o.id = oi.order_id
JOIN payments p ON p.order_id = o.id
WHERE p.status = 'PAID' AND o.created_at >= '2026-06-01'
GROUP BY oi.product_id, oi.product_name, oi.product_sku
ORDER BY revenue DESC LIMIT 10;
```

### B2C vs B2B
```sql
SELECT user_role, COUNT(*) orders, SUM(total_amount) revenue
FROM orders o JOIN payments p ON p.order_id = o.id
WHERE p.status = 'PAID' GROUP BY user_role;
```

---

## Reports Page `/admin/reports`
1. Date-range picker (applies to all sections)
2. Revenue card (total, GST, net, order count)
3. Revenue trend chart (Recharts)
4. Top products table
5. B2C vs B2B split (donut)
6. *(optional)* Dealer performance table
7. *(optional)* Inventory alerts link

Each table has a "Download CSV" button (exports all rows).

---

## Notes
- All reports compute over **PAID** orders only.
- Rely on indexes `orders.created_at`, `payments.status`.
- Charts: **Recharts** (`npm install recharts`).
- Read-only — never mutate data from this module.
