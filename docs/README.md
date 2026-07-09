# Project Knowledge Base — India's No 1 Remote Gate Motor
## E-Commerce Platform for Gate Automation — **B2C-First · B2B-Ready**

> **Status:** Final **v1.2** — 6 high-ROI features added; pricing: ~~₹45,000~~ **₹55,000** → offer **₹39,999** (27.27% off); timeline extended to 4.5–5 weeks
> **Vendor:** Qodeways Technologies Pvt Ltd · https://qodeways.com/
> **Client:** India's No 1 Remote Gate Motor · Chakan MIDC, Pune 410501
> **Stack:** Next.js 14 + Node.js/Express + PostgreSQL/Prisma + Razorpay + reCAPTCHA
> **Source of truth:** This `docs/` set governs all development. The amended proposal lives at `app/page.tsx`.

---

## How this knowledge base is organized

**Foundations** — what we're building and on what
**Governance** — scope boundaries, decisions, quality bars, and how we verify "done"
**Modules** — how each part works, with schema/API/business logic

Read in order if new. Jump to a module if implementing a feature. **Before building anything, check [06 — Scope Register](./06-scope-register.md) and [10 — Open Decisions](./10-open-decisions-and-assumptions.md).**

---

## Foundations

| # | Document | Purpose |
|---|----------|---------|
| 01 | [Project Overview](./01-project-overview.md) | Positioning, roles, canonical business rules, timeline |
| 02 | [Tech Stack](./02-tech-stack.md) | Technologies, folder structure, env vars |
| 03 | [Database Schema](./03-database-schema.md) | Prisma models, enums, indexes |
| 04 | [API Reference](./04-api-reference.md) | All REST endpoints with request/response |
| 05 | [Deployment Guide](./05-deployment.md) | Hosting, CI/CD, go-live checklist |

## Governance (the single-source-of-truth layer)

| # | Document | Purpose |
|---|----------|---------|
| 06 | [Scope Register](./06-scope-register.md) | Authoritative in-scope / Phase 2 / out-of-scope |
| 07 | [Non-Functional Requirements](./07-non-functional-requirements.md) | Performance, security,Technical SEO, a11y, availability |
| 08 | [Requirements Traceability](./08-requirements-traceability.md) | Proposal commitment → spec → acceptance |
| 09 | [Acceptance Criteria](./09-acceptance-criteria.md) | Per-module Definition of Done / UAT |
| 10 | [Open Decisions & Assumptions](./10-open-decisions-and-assumptions.md) | Decision log + open questions |
| 11 | [Glossary & Validation](./11-glossary-and-validation.md) | Terms + field validation rules |
| 12 | [Cost & Effort Estimate](./12-cost-and-effort-estimate.md) | **Internal** costing — effort breakdown, milestone math, recompute formula |
| — | [CHANGELOG](./CHANGELOG.md) | Doc version history |

## Modules

| # | Module | Covers |
|---|--------|--------|
| M01 | [Authentication](./modules/01-authentication.md) | JWT, roles, email verification |
| M02 | [Product Catalog](./modules/02-product-catalog.md) | Products, flat categories, specs, dual pricing |
| M03 | [Dealer Management](./modules/03-dealer-management.md) | GST onboarding, approval gate |
| M04 | [Cart & Checkout](./modules/04-cart-checkout.md) | Server cart, address, price math |
| M05 | [Payment Integration](./modules/05-payment-integration.md) | Razorpay flow + webhook |
| M06 | [Order Management](./modules/06-order-management.md) | Lifecycle, cancel, AWB tracking |
| M07 | [Inventory](./modules/07-inventory.md) | Stock tracking, alerts, logs |
| M08 | [Admin Dashboard](./modules/08-admin-dashboard.md) | All admin modules |
| M09 | [Reports & Analytics](./modules/09-reports-analytics.md) | Sales, revenue, top products |

---

## Quick Reference (v1.0 canonical)

### Products
Sliding Gate Automation · Swing Gate Automation · Boom Barrier Automation · Wireless Remote · Mobile Operated Device

### Roles & Pricing
| Role | Access | Pricing |
|------|--------|---------|
| Customer (B2C, primary) | Browse, buy, track, profile | Retail |
| Dealer (B2B, extension) | After GST approval: dealer pricing & orders | Dealer (admin-set) |
| Admin | Full platform management | Sets all pricing |

### The 10 canonical business rules
Dual pricing · dealer approval gate · manual GST check · login required to buy · free shipping (₹0) · forward-only lifecycle + cancel · AWB courier-link tracking · email-only (confirmation + dealer approval) · stock deducts at payment confirmation (guarded) · immutable order + address snapshots. (Full text in [01 — Overview](./01-project-overview.md).)

### What's NOT in v1.2
GST invoice PDF · SMS · per-status emails · nested categories · in-app returns · live courier tracking · coupon codes · guest checkout · wishlist · mobile apps · multi-vendor marketplace. (See [06 — Scope Register](./06-scope-register.md).) **Note:** Reviews, EMI, reCAPTCHA, email reminders, translator, Google My Business ARE now in v1.2.

### Timeline (v1.2)
| Week | Focus |
|------|-------|
| 1 | Auth, roles, dealer onboarding + approval, **reCAPTCHA** |
| 2 | Catalog, categories, dual pricing, inventory, **EMI option** |
| 3 | Cart, checkout, Razorpay, orders, **reviews moderation**, **email reminders** |
| 4 | **Google My Business**, **auto-translator**, banners, reports, responsive, security, UAT |
| Final ½ | Deploy, domain/SSL, go-live |

---

## For the external auditor
Start at **[08 — Requirements Traceability](./08-requirements-traceability.md)** to confirm every proposal commitment is specified and nothing un-approved was added. Then test against **[09 — Acceptance Criteria](./09-acceptance-criteria.md)** and challenge any decision marked "Vendor (rationale recorded)" in **[10](./10-open-decisions-and-assumptions.md)**.
