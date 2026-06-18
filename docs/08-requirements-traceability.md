# 08 — Requirements Traceability Matrix

> **Status:** Final v1.1
> Proves every approved-proposal commitment is specified somewhere, and nothing un-approved was added. Read alongside **[06 — Scope Register](./06-scope-register.md)** and **[09 — Acceptance Criteria](./09-acceptance-criteria.md)**.

Columns: **Proposal commitment** → **Specified in** → **Acceptance criteria** → **Status**.

---

## Key Features (from approved proposal)

| # | Proposal commitment | Specified in | AC | Status |
|---|---------------------|--------------|----|--------|
| 1 | Product Catalog (categories, pages, images, specs, stock) | M02 | AC-CAT | ✅ v1 |
| 2 | Customer Auth (register, login, **email verification**, profile) | M01 | AC-AUTH | ✅ v1 |
| 3 | Category Management (admin) | M02, M08 | AC-CAT | ✅ v1 (flat — D-05) |
| 4 | Inventory Management (in/out status) | M07 | AC-INV | ✅ v1 |
| 5 | Shopping Cart & Checkout (address mgmt) | M04 | AC-CART | ✅ v1 |
| 6 | Razorpay Payments (UPI, cards, net banking) | M05 | AC-PAY | ✅ v1 (no EMI — D-09) |
| 7 | Order Management (placed→confirmed→shipped→delivered + confirmation email) | M06 | AC-ORD, AC-MAIL | ✅ v1 |
| 8 | Order Status & Tracking (AWB + courier link) | M06 | AC-TRACK | ✅ v1 |
| 9 | Reports & Analytics (sales, revenue, top products) | M09 | AC-RPT | ✅ v1 (extras optional) |
| 10 | Dealer Registration (GST + admin approval) | M03 | AC-DEAL | ✅ v1 |
| 11 | Dual Pricing (retail + dealer per product) | M02, M03 | AC-PRICE | ✅ v1 |
| 12 | Role-based Access (JWT) | M01 | AC-RBAC | ✅ v1 |

---

## Roles, Timeline & Deliverables commitments

| Proposal commitment | Specified in | AC | Status |
|---------------------|--------------|----|--------|
| Customer role (browse, buy retail, track, profile, history) | M01, M02, M04, M06 | AC-AUTH, AC-ORD | ✅ v1 |
| Dealer role (GST reg, approval, dealer pricing, history, status page) | M03 | AC-DEAL | ✅ v1 |
| Admin role (products, categories, inventory, orders, dealers, banners, reports) | M08 | AC-ADMIN | ✅ v1 |
| Banner & promotions management | M08 | AC-BAN | ✅ v1 |
| Order confirmation email on payment | M05, M06 | AC-MAIL | ✅ v1 |
| Public website + SEO | M02 | AC-SEO | ✅ v1 |
| Mobile responsive (all devices) | 07-NFR | AC-RESP | ✅ v1 |
| Deployment & go-live (SSL, domain) | 05 | AC-DEPLOY | ✅ v1 |
| Search, filter, sort (Week 2) | M02 | AC-CAT | ✅ v1 |
| Customer can cancel order | M06 | AC-ORD | ✅ v1 (D-01) |

---

## Commitments deliberately scoped to Phase 2 / Out

| Item | Decision | Where recorded |
|------|----------|----------------|
| GST invoice PDF | Phase 2 (D-03) | 06, 10 |
| SMS notifications | Out (D-02) | 06, 10 |
| Per-status emails (beyond confirmation) | Phase 2 (D-02) | 06 |
| Nested category hierarchy | Phase 2 (D-05) | 06, 10 |
| In-app returns/refunds | Phase 2 (D-01) | 06, 10 |
| Live courier-API tracking | Phase 2 | 06 |
| EMI payments | Out (D-09) | 06, 10 |
| Guest checkout | Out (D-08) | 06, 10 |

---

## Reverse check — features in docs that must trace back

Every model/endpoint/module must map to a row above. Items that are **engineering necessities** (not standalone proposal features) but required to deliver the above:

| Internal item | Justified by |
|---------------|--------------|
| `CartItem` server-side cart | Cart & Checkout (#5); dealer pricing integrity |
| `OrderTracking` history table | Order Status & Tracking (#8) timeline UI |
| `InventoryLog` audit | Inventory (#4) accuracy + cancellation restore |
| `Payment` webhook handler | Razorpay (#6) reliability (NFR §6) |
| Email verification fields | Customer Auth (#2) |
| `requireApprovedDealer` middleware | Dual pricing gate (#11) + Dealer (#10) |
| Order address snapshot fields | Immutable order records (rule 10) — preserves delivery address |
| `markPaymentPaid()` idempotent service | Razorpay (#6) — exactly-once confirmation across verify + webhook |
| Guarded stock decrement at confirmation | Inventory (#4) — prevents oversell + abandoned-order lock (D-13) |

> If an auditor finds a feature in the docs with **no** row here, it is either (a) an un-approved addition to remove, or (b) a missing traceability entry to add. Neither should exist at v1.0.
