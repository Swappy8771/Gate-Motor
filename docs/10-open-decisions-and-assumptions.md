# 10 — Open Decisions & Assumptions Log

> **Status:** Final v1.1
> This log records every non-trivial decision, who made it, and the rationale — so the external audit can trace *why* the system is shaped the way it is, and so no assumption is silent.

---

## Resolved Decisions

| ID | Decision | Chosen | Rationale | Decided by |
|----|----------|--------|-----------|------------|
| D-01 | Returns & cancellation scope | **Cancel-only, admin-manual**; no in-app returns | Approved proposal lifecycle ends at "delivered"; returns kept offline to match scope | Client |
| D-02 | Notification channels | **Email only** (confirmation on payment + dealer approval); no SMS | Proposal committed only to "order confirmation email on successful payment" | Client + proposal |
| D-03 | GST tax invoice PDF | **Phase 2** | Not in approved scope; v1 sends confirmation email only | Client |
| D-04 | Database | **PostgreSQL + Prisma** | Relational integrity for orders/payments/inventory + clean reporting | Client (confirmed) |
| D-05 | Category structure | **Flat, single level** in v1; nested = Phase 2 | 5 product types map cleanly to flat categories. **Proposal wording updated** (v1.1) from "CRUD + hierarchy" to "create, edit, organize" to remove the mismatch (audit F-01). | Vendor (rationale recorded) |
| D-06 | Dealer "bulk orders" meaning | **Larger quantities at dealer pricing via standard cart**; no special bulk tool | Proposal mentioned "bulk orders" only in a deliverables card without defining a tool. **Proposal deliverable reworded** (v1.1) to "ordering at dealer rates" to remove the mismatch (audit F-02). | Vendor (rationale recorded) |
| D-07 | Shipping charges | **Free shipping (₹0)** in v1 | Proposal silent; simplest correct behavior; field reserved for future | Client |
| D-08 | Guest checkout | **Not allowed**; login required to buy | Proposal describes register-then-purchase; server-side cart needs a user | Vendor (rationale recorded) |
| D-09 | Payment methods | **UPI, cards, net banking** (no EMI) | Proposal Razorpay feature lists exactly these three | Proposal |
| D-10 | Email verification method | **Link-based email verification** (no OTP/SMS) | Proposal says "email verification"; consistent with D-02 | Proposal |
| D-11 | Order status `PROCESSING` | **Removed** from canonical enum | Proposal lifecycle = placed/confirmed/shipped/delivered; keep enum faithful | Vendor (rationale recorded) |
| D-12 | Image storage | **Cloudinary** (products/banners); **private storage** for GST docs | CDN delivery for public images; GST docs must stay private | Vendor |
| D-13 | Stock deduction timing | **At payment confirmation** via a guarded conditional update — not at placement | Prevents abandoned-order stock lock and last-unit oversell with minimal complexity (no reservation/saga system). Razorpay order created first so failures abort cleanly (audit F-05/F-06). | Vendor (audit-driven) |

---

## Open Questions — need client input before/at kickoff

These do **not** block documentation finalization, but should be answered before the relevant build week.

| ID | Question | Needed by | Default if unanswered |
|----|----------|-----------|----------------------|
| Q-01 | Final project price (₹) and confirmation of 30/40/30 split | Agreement signing | TBD placeholder in proposal |
| Q-02 | Production domain name + who owns DNS | Week 4 | Client provides |
| Q-03 | Razorpay account ready? (KYC complete, live keys) | Week 3 | Client provides per terms |
| Q-04 | Default GST rate per product — is 18% correct for all, or does it vary by product? | Week 2 | Assume 18%, admin-editable per product |
| Q-05 | Email sender domain + SMTP/Resend/Mailgun provider preference | Week 3 | Vendor sets up transactional provider |
| Q-06 | Logo/brand colors & any existing brand guide for the storefront | Week 1 | Use logo at `public/asset/logo.png` + proposal palette |
| Q-07 | Initial product data — who loads it (client via admin, or vendor seeds)? | Week 2 | Admin UI supports client self-load |
| Q-08 | Return/cancellation policy text (for display) and refund SLA | Week 3 | Client provides policy copy |
| Q-09 | Pincode serviceability — deliver pan-India or restricted regions? | Week 3 | Assume pan-India, no restriction |
| Q-10 | Minimum order quantity/value for dealers? | Week 2 | Assume none |

---

## Standing Assumptions (v1)

1. **Currency & language:** INR and English only.
2. **GST display:** Prices are stored/displayed exclusive of GST; GST is computed and shown at cart/checkout. (Confirm with Q-04.)
3. **One admin account** at launch (seeded). Multi-admin is a future enhancement.
4. **Catalog size:** Tens to low-hundreds of products — no special search infra (DB queries suffice).
5. **Traffic:** Typical SME e-commerce volume; single backend instance + managed Postgres is sufficient at launch.
6. **Hosting:** Vercel (frontend) + Railway/Render (backend) + Neon/Supabase (Postgres) unless client mandates otherwise.
7. **Legal pages** (privacy, terms, return policy) — copy provided by client; vendor builds the pages.
8. **Product specs** are free-form key/value pairs, not a fixed schema per category.
9. **Email verification before ordering:** a customer must verify their email before placing their first order (browsing is allowed unverified). Admin-configurable; can be relaxed if the client prefers. *(Referenced as "assumption 9" in M01 and AC.)*

---

## How to use this log
- Before building a module, check for relevant open questions (Q-IDs) and resolve them.
- When a decision changes, update the row, bump the doc version, and log it in **[CHANGELOG](./CHANGELOG.md)**.
- The external auditor should challenge any decision marked "Vendor (rationale recorded)" — those are our calls, not the client's explicit instruction.
