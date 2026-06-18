# 01 — Project Overview

> **Status:** Final v1.1 · Aligned to approved proposal (June 2026)
> **Positioning:** B2C-First · B2B-Ready

## Client
**India's No 1 Remote Gate Motor**
Chakan Talegaon Road, Mahalunge Ingale, Chakan MIDC, Pune 410501

## Vendor
**Qodeways Technologies Pvt Ltd** — https://qodeways.com/

---

## Positioning (read this first)

This platform is **B2C-first, B2B-ready**. That ordering matters and governs every scope decision:

- **Primary:** Retail customers (B2C) browse and buy gate automation products online — the core, polished experience.
- **Extension:** Verified business dealers (B2B) operate under the *same* unified system with dealer-specific pricing and a GST-based onboarding/approval gate.
- **Control:** A single admin dashboard manages products, inventory, orders, dealers, banners, and reports.

When a feature decision is ambiguous, **the retail (B2C) experience wins**; B2B is an additive layer, not a parallel product.

---

## Business Context
The client manufactures and sells gate automation hardware. Today, sales happen through physical dealers and direct contact — there is no online sales channel and no online visibility of product availability. This project delivers that channel.

---

## Products Sold

| Product | Description |
|---------|-------------|
| Sliding Gate Automation | Motor kits for sliding gate systems |
| Swing Gate Automation | Single & double leaf swing gate motors |
| Boom Barrier Automation | Barriers for commercial & industrial entry points |
| Wireless Remote | RF remotes compatible with gate motors |
| Mobile Operated Device | GSM/app-based gate control devices |

---

## Platform Components (the 5 deliverables)

### 1. Public Website
Responsive marketing site: product catalog, category browsing, product detail pages with specs and images, SEO-optimized pages.

### 2. Customer Portal (B2C — primary)
Registration/login, browse and buy at retail price, cart, checkout, Razorpay payment, order history, order status + courier tracking, profile and address management.

### 3. Dealer Portal (B2B — extension)
GST-based registration with document upload, admin approval gate, dealer-specific pricing view, ordering at dealer pricing, order history & status, account approval status page.

### 4. Admin Dashboard
Product & category management, inventory management, order management & status updates, dealer approval and dealer pricing, banner & promotion management, reports & analytics.

### 5. Deployment & Go-Live
Production deployment, SSL, domain configuration, post-launch handover and support.

---

## User Roles

### Customer (B2C · Retail) — primary user
- Browse product catalog
- Purchase at retail price
- Track order status & courier shipment (via AWB + courier link)
- Manage profile & addresses
- View purchase history

### Dealer (B2B · Wholesale) — extension user
- Register with GST number & documents
- Account stays **PENDING** until admin approves
- Browse & order at **dealer-specific pricing** (only after approval)
- View order history & status
- Account approval status page

### Admin — operator
- Manage products & categories
- Manage inventory & orders
- Manage banners & promotions
- Approve/reject dealers & set dealer pricing
- View reports & analytics

---

## Canonical Business Rules (v1.0)

1. **Dual Pricing.** Every product has `retailPrice` and `dealerPrice`. `dealerPrice` is returned/shown **only** to authenticated, **APPROVED** dealers. Everyone else sees `retailPrice`.
2. **Dealer Approval Gate.** A dealer account is `PENDING` until an admin approves it. A `PENDING`/`REJECTED` dealer cannot see dealer pricing or place dealer-priced orders.
3. **GST Onboarding (manual).** Dealer submits GST number + document at registration. Admin verifies **manually** (no government GST API in v1).
4. **Login required to buy.** No guest checkout in v1. A user must be registered and logged in to add to cart and check out.
5. **Free shipping (v1).** Order total = item subtotal + GST. `shippingCharge` is always `0` in v1.
6. **Order lifecycle is forward-moving** with one exit: `PLACED → CONFIRMED → SHIPPED → DELIVERED`, plus `CANCELLED` (customer before shipping, or admin). **No in-app returns** in v1 — returns/refunds are handled offline by admin.
7. **Order tracking = AWB + courier link.** Admin enters courier name, AWB/tracking number, and a courier tracking URL. The customer tracks the shipment via that external link. The platform does not poll courier APIs in v1.
8. **Notifications = email only.** v1 sends an **order confirmation email on successful payment** (committed) and **dealer approval/rejection emails** (operational). No SMS in v1. Per-status-change emails are Phase 2.
9. **Stock at payment confirmation.** Stock is deducted (via a guarded conditional update) when payment is **confirmed**, not at placement — so abandoned/unpaid orders never lock stock. Stock is restored if a confirmed order is cancelled.
10. **Immutable order records.** Product name, SKU, and unit price are snapshotted onto each order line, and the delivery address is snapshotted onto the order, so historical orders never change when a product or address is later edited.

---

## Scope Summary

> Authoritative list lives in **[06 — Scope Register](./06-scope-register.md)**. Quick view:

**In scope (v1):** Public website, customer portal, dealer portal (with approval gate), admin dashboard, dual pricing, catalog + categories (flat) + specs, inventory (qty internal, in/out status to customer), cart + checkout (login required, free shipping), Razorpay (UPI/cards/net banking), order lifecycle to delivered + cancel, AWB courier-link tracking, order confirmation email, banners, reports (sales/revenue/top products), responsive web, deployment.

**Phase 2 (not v1):** GST invoice PDF, per-status email/SMS notifications, nested category hierarchy, in-app returns/refunds, courier-API live tracking, dealer self-service re-application.

**Out of scope:** Mobile apps (iOS/Android), automated GST verification API, ERP/accounting integration, multi-vendor marketplace, product reviews/ratings, wishlist, guest checkout, EMI payments.

---

## Timeline

**3.5 weeks · solo developer · end-to-end through go-live.** (Effort basis ~41 developer-days — see [12 — Cost & Effort Estimate](./12-cost-and-effort-estimate.md).)

| Phase | Deliverable |
|-------|-------------|
| **Week 1** — Foundation, Auth & Catalog | Project setup, DB schema, customer + dealer auth (JWT), GST onboarding + admin approval, RBAC, product & category management, dual pricing, public catalog with search/filter |
| **Week 2** — Cart, Payments & Orders | Inventory, cart, checkout with address, Razorpay (UPI/cards/net banking), payment verification + webhook, order lifecycle & cancellation, courier tracking |
| **Week 3** — Admin, Reports & Notifications | Admin dashboard (orders/dealers/inventory/banners), reports & analytics, order confirmation + dealer approval emails, static/legal pages, SEO |
| **Final ½ Week** — QA, Polish & Go-Live | Responsive polish, performance + security pass, UAT & bug fixes, deployment, domain/SSL, go-live |

---

## Deliverables
1. Responsive Public Website
2. Customer Portal
3. Dealer Portal
4. Admin Dashboard
5. Deployment & Go-Live Support (SSL, domain, hosting handover)

---

## Commercials

| Milestone | Trigger | % |
|-----------|---------|---|
| Project Kickoff | On agreement signing | 30% |
| Mid Delivery | After Week 2 | 40% |
| Final Delivery | Post go-live & handover | 30% |

**Terms (from approved proposal):** Source code ownership transfers on final payment · Client provides Razorpay merchant credentials · Hosting/domain borne by client · Scope additions quoted separately · 2 design-revision rounds per milestone · Proposal valid 15 days · 30-day post-launch warranty for in-scope bugs.
