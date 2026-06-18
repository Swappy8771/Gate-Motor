# M08 — Admin Dashboard Module

> **Status:** Final v1.0 · Admin-only (RBAC). Order statuses limited to PLACED/CONFIRMED/SHIPPED/DELIVERED/CANCELLED.

## Overview
Single management interface for the platform. Accessible only to `role === ADMIN`, enforced by both Next.js middleware (redirect) and Express middleware (403).

---

## Dashboard Home `/admin/dashboard`

### Summary Cards
| Card | Metric |
|------|--------|
| Total Revenue | Σ PAID orders this month |
| Total Orders | Count this month |
| Pending Dealers | PENDING dealer registrations |
| Low Stock Items | Products ≤ alert threshold |

### Charts
- Revenue trend (last 30 days)
- Orders by status (PLACED/CONFIRMED/SHIPPED/DELIVERED/CANCELLED)

### Quick Widgets
- Recent orders (last 10)
- Pending dealer approvals (action links)
- Low-stock alerts (action links)

---

## Product Management `/admin/products`
List with search/filter (category, status, stock) + sort. Create/edit form sections:
1. **Basic** — name, category, description (rich text), SKU, featured
2. **Pricing** — retail, dealer, GST %
3. **Inventory** — stock qty, low-stock alert
4. **Images** — upload, set primary, reorder, delete
5. **Specs** — dynamic key/value/unit rows
6. **SEO** — slug (editable), meta description

---

## Category Management `/admin/categories`
Flat categories (D-05): list with product counts; create/edit (name, slug, description, image, sort order); deactivate; reorder.

---

## Order Management `/admin/orders`
See **[M06 — Order Management](./06-order-management.md)**.
- Filter by date, status, user role (B2C/B2B); search by order number/customer
- Export CSV
- Bulk action: mark selected as **Shipped**
- Status update (forward-only) + courier/AWB/tracking-URL entry
- View Razorpay payment references

---

## Dealer Management `/admin/dealers`
See **[M03 — Dealer Management](./03-dealer-management.md)**.
- Pending queue with review links; view GST docs via signed URL
- Approve (one click) / Reject (mandatory reason)
- Approved dealers with order history

---

## Inventory Management `/admin/inventory`
See **[M07 — Inventory](./07-inventory.md)**.

---

## Banner Management `/admin/banners`
| Field | Notes |
|-------|-------|
| Title / Subtitle | Banner text |
| Image | Cloudinary upload |
| Link URL | Optional CTA target |
| Active | Show/hide |
| Start/End Date | Optional scheduling (auto-hide after end) |
| Sort Order | Display order |

Homepage shows active banners sorted by `sortOrder` as a carousel (3–5 recommended).

---

## Reports `/admin/reports`
See **[M09 — Reports & Analytics](./09-reports-analytics.md)**. Core (v1): sales, revenue, top products.

---

## UI Guidelines
- Sidebar layout: Dashboard · Products · Categories · Orders · Dealers · Inventory · Banners · Reports
- Color-coded status badges (green=active/approved, yellow=pending, red=inactive/rejected/cancelled)
- Inline form validation; success toasts
- Action buttons: Edit (blue), Delete (red), View (gray)

---

## Admin Accounts
One seeded admin at launch. Multi-admin / `SUPER_ADMIN` with activity logging is a future enhancement.
