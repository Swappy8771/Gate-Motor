# 06 — Scope Register

> **Status:** Final v1.1 · The single authoritative scope boundary.
> If a feature is not listed under "In Scope (v1)", it is **not** part of v1.

This document exists so that nothing is silently added or dropped. Every entry traces to the approved proposal (June 2026) or to a recorded decision in **[10 — Open Decisions & Assumptions](./10-open-decisions-and-assumptions.md)**.

---

## In Scope — v1.0

### Public Website
- [ ] Responsive homepage with banner carousel
- [ ] Product catalog listing (paginated)
- [ ] Category browsing
- [ ] Product detail page (images gallery, specs, price, stock status)
- [ ] Search, filter (category, price), sort
- [ ] SEO: unique slugs, dynamic metadata per product/category
- [ ] Static / legal pages (About, Contact, Privacy, Terms, Return Policy) — **client provides copy, vendor builds the pages**

### Authentication & Roles
- [ ] Customer registration (email, phone, password)
- [ ] Email verification (link-based)
- [ ] Login/logout (JWT) for all roles
- [ ] Role-based access control: CUSTOMER / DEALER / ADMIN
- [ ] Profile management & change password

### Dealer (B2B)
- [ ] Dealer registration with GST number + document upload
- [ ] Admin approval workflow (PENDING → APPROVED / REJECTED)
- [ ] Account approval status page
- [ ] Dealer-specific pricing visible only after approval
- [ ] Ordering at dealer pricing (larger quantities allowed — standard cart)
- [ ] Dealer order history & status

### Product & Catalog
- [ ] Product CRUD (admin)
- [ ] Category CRUD (admin) — **flat, single level**
- [ ] Multiple product images (Cloudinary), one primary
- [ ] Technical specifications (key/value/unit)
- [ ] Dual pricing: retail + dealer per product
- [ ] Featured products flag

### Inventory
- [ ] Stock quantity tracking (internal/admin)
- [ ] Low-stock alert threshold (admin dashboard)
- [ ] In-stock / out-of-stock status (customer-facing)
- [ ] Inventory change log (audit)

### Cart & Checkout
- [ ] Server-side persistent cart (login required)
- [ ] Quantity controls with stock validation
- [ ] Address management (multiple, default)
- [ ] Price breakdown: subtotal + GST (shipping = 0)

### Payments
- [ ] Razorpay integration: **UPI, cards, net banking**
- [ ] Server-side signature verification
- [ ] Webhook backup (`payment.captured`, `payment.failed`)

### Orders
- [ ] Order placement with stock deduction (transaction)
- [ ] Lifecycle: PLACED → CONFIRMED → SHIPPED → DELIVERED
- [ ] CANCELLED (customer pre-shipping / admin) with stock restore
- [ ] Courier tracking: admin enters courier name + AWB + tracking URL
- [ ] Customer order list & detail with status timeline
- [ ] Order confirmation email on successful payment

### Admin Dashboard
- [ ] Dashboard home with summary cards
- [ ] Product, category, inventory management
- [ ] Order management & status updates + tracking entry
- [ ] Dealer approval/rejection + dealer pricing
- [ ] Banner & promotion management
- [ ] Reports: sales, revenue, top products

### Notifications (email only)
- [ ] Order confirmation email on payment (committed)
- [ ] Order cancellation email (operational)
- [ ] Dealer approval / rejection email (operational)

### Cross-cutting
- [ ] Mobile responsive (mobile / tablet / desktop)
- [ ] Security hardening (see [07 — NFRs](./07-non-functional-requirements.md))
- [ ] Deployment, SSL, domain, go-live support

---

## Phase 2 — Planned, NOT in v1

These are deliberately deferred. Building them in v1 is a **paid scope addition** (per proposal terms).

| Item | Why deferred |
|------|--------------|
| GST tax invoice PDF (with GSTIN, HSN, invoice numbering) | Decision D-03; proposal committed only to confirmation email |
| Per-status-change email notifications (shipped, delivered, etc.) | Proposal committed only to confirmation email |
| SMS notifications | Decision D-02; not in approved scope |
| Nested category hierarchy (sub-categories) | Decision D-05; v1 is flat |
| In-app returns / refund automation | Decision D-01; v1 returns are offline |
| Live courier-API tracking | v1 uses external courier link |
| Dealer self-service re-application after rejection | Manual admin reset in v1 |
| Dealer-activity & inventory-alert reports | Included as optional extras only if time permits; proposal core = sales/revenue/top-products |

---

## Out of Scope — not planned

| Item | Note |
|------|------|
| Mobile apps (iOS / Android) | Web only |
| Automated GST verification (govt API) | Manual admin verification |
| ERP / accounting / Tally integration | — |
| Multi-vendor / marketplace | Single-seller platform |
| Product reviews & ratings | — |
| Wishlist / save-for-later | — |
| Guest checkout | Login required to buy |
| EMI payments | UPI/cards/net banking only |
| Loyalty / coupons / discount codes | Not requested |
| Multi-currency / multi-language | INR / English only |

---

## Change Control
Any addition to "In Scope (v1)" requires:
1. A written request from the client.
2. A quote + timeline impact from Qodeways.
3. Client approval.
4. An entry in **[CHANGELOG](./CHANGELOG.md)** and this register.
