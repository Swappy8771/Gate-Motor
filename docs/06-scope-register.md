# 06 — Scope Register

> **Status:** Final v1.1 · The single authoritative scope boundary.
> If a feature is not listed under "In Scope (v1)", it is **not** part of v1.

This document exists so that nothing is silently added or dropped. Every entry traces to the approved proposal (June 2026) or to a recorded decision in **[10 — Open Decisions & Assumptions](./10-open-decisions-and-assumptions.md)**.

---

## In Scope — v1.2

### Public Website
- [x] Responsive homepage with banner carousel
- [x] Product catalog listing (paginated)
- [x] Category browsing
- [x] Product detail page (images gallery, specs, price, stock status, **customer reviews & ratings**)
- [x] Search, filter (category, price), sort
- [x] SEO: unique slugs, dynamic metadata per product/category
- [x] Static / legal pages (About, Contact, Privacy, Terms, Return Policy) — **client provides copy, vendor builds the pages**
- [x] **Google My Business integration** (link/embed on contact/about pages)
- [x] **Website auto-translator** (multi-language support, up to 50+ languages via third-party embed)

### Authentication & Roles
- [x] Customer registration (email, phone, password) — **with reCAPTCHA protection**
- [x] Email verification (link-based) — **with reCAPTCHA on form**
- [x] Login/logout (JWT) for all roles — **with reCAPTCHA on form**
- [x] Role-based access control: CUSTOMER / DEALER / ADMIN — **with reCAPTCHA on dealer registration**
- [x] Profile management & change password

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
- [x] Razorpay integration: **UPI, cards, net banking, EMI** (3/6/12-month options)
- [x] Server-side signature verification
- [x] Webhook backup (`payment.captured`, `payment.failed`)

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

### Product Reviews & Ratings ⭐ **(NEW in v1.2)**
- [x] Customer review submission (rating 1–5 stars + comment)
- [x] Admin moderation (approve/reject reviews)
- [x] Review display on product detail pages (avg rating + review list)
- [x] Review analytics in admin dashboard

### Notifications (email only)
- [x] Order confirmation email on payment (committed)
- [x] Order cancellation email (operational)
- [x] Dealer approval / rejection email (operational)
- [x] **Email reminders for non-buyers** — auto-email customers who viewed products but did not purchase (configurable schedule)

### Cross-cutting
- [ ] Mobile responsive (mobile / tablet / desktop)
- [ ] Security hardening (see [07 — NFRs](./07-non-functional-requirements.md))
- [ ] Deployment, SSL, domain, go-live support

---

## Phase 2 — Planned, NOT in v1.2

These are deliberately deferred. Building them in v2 is a **paid scope addition** (per proposal terms).

| Item | Why deferred |
|------|--------------|
| GST tax invoice PDF (with GSTIN, HSN, invoice numbering) | Decision D-03; v1.2 committed only to confirmation email |
| Per-status-change email notifications (shipped, delivered, etc.) | Proposal committed only to confirmation email; v1.2 adds non-buyer reminders |
| SMS notifications | Decision D-02; not in approved scope; email-only in v1.2 |
| Nested category hierarchy (sub-categories) | Decision D-05; v1.2 is flat |
| In-app returns / refund automation | Decision D-01; v1.2 returns are offline |
| Live courier-API tracking (Delhivery, Ekart, etc.) | v1.2 uses external courier link; API integration = Phase 2 |
| Dealer self-service re-application after rejection | Manual admin reset in v1.2 |
| Advanced coupon & discount code system | Not in v1.2; planned for Phase 2 |
| Location-wise shipping charges & pin-code routing | Deferred; v1.2 assumes pan-India free shipping |

---

## Out of Scope — not planned

| Item | Note |
|------|------|
| Mobile apps (iOS / Android) | Web + responsive design; PWA not planned |
| Automated GST verification (govt API) | Manual admin verification |
| ERP / accounting / Tally integration | — |
| Multi-vendor / marketplace | Single-seller platform only |
| Wishlist / save-for-later | Not in v1.2 scope |
| Guest checkout | Login required to buy |
| Loyalty / coupons / discount codes | Not in v1.2; Phase 2+ feature |
| Multi-currency with dynamic switching | INR only; static translator via embed covers language |
| Advanced AI recommendations | Not in v1.2; Phase 2+ feature |
| Progressive Web App (PWA) | Responsive web sufficient for v1.2 |

---

## Change Control
Any addition to "In Scope (v1)" requires:
1. A written request from the client.
2. A quote + timeline impact from Qodeways.
3. Client approval.
4. An entry in **[CHANGELOG](./CHANGELOG.md)** and this register.
