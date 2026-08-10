# Scope Amendment v1.3
## Multi-Vendor Marketplace — Four-Role Platform

**Document date:** 10 August 2026
**Status:** Proposed for client approval · **supersedes v1.2 in full**
**Client:** India's No 1 Remote Gate Motor · Chakan MIDC, Pune 410501
**Vendor:** Qodeways Technologies Pvt Ltd · https://qodeways.com/
**Client-facing version:** https://claude.ai/code/artifact/5647ce54-28ba-48d0-aedc-afb677449455

---

## Executive Summary

The client requires a **multi-vendor marketplace** — third-party sellers listing their own products, holding their own stock, fulfilling their own orders — with **four separate logins: Customer, Dealer, Seller, Admin**.

v1.2 was specified on a single-seller assumption: one catalogue, one stock ledger, one payee. Sellers change the data model, the checkout, and the money flow. This is therefore priced and scheduled as a larger platform, not as a feature added to the v1.2 quote.

| Metric | v1.2 | v1.3 | Change |
|---|---|---|---|
| Effort | 51.0 dev-days | **91.5 dev-days** | +40.5 (+79%) |
| Timeline | 4.5–5 weeks | **9–10 weeks** | +5 weeks |
| Logins | 3 | **4** | +Seller |
| List price | ₹45,000 | **₹95,000** | +₹50,000 |
| Offer price | ₹31,999 | **₹59,999** | +₹28,000 |
| Discount | 28.89% | **36.84%** | +7.95 pts |
| Effective rate | ₹627/day | **₹656/day** | +5% |

**Correction on record:** an earlier verbal sizing put the full marketplace at 26–32 dev-days. A firm build-out lands at **40.5 days**. The delta is three items a sketch omits and a quote cannot: marketplace GST/TCS invoicing data, row-level authorisation hardening across four roles, and regression QA on the four-role permission matrix.

---

## The Four Roles

The commercial distinction: a **dealer buys** at wholesale; a **seller sells** and receives payouts. Separate roles, separate portals. One company may hold both accounts.

| Capability | Customer | Dealer | Seller | Admin |
|---|:-:|:-:|:-:|:-:|
| Browse & buy at retail price | ● | — | — | — |
| Buy at dealer price (post GST approval) | — | ● | — | — |
| List & edit own products | — | — | ● | ● |
| Manage own stock | — | — | ● | ● |
| Fulfil own orders, enter AWB | — | — | ● | ● |
| Receive settlement net of commission | — | — | ● | — |
| See own sales reports only | — | — | ● | — |
| Approve sellers & dealers, set commission | — | — | — | ● |
| Run payouts, resolve disputes | — | — | — | ● |
| Platform-wide reports & TCS data | — | — | — | ● |

### D-20 — Dual pricing under a marketplace (new decision)
Client-owned products keep `retailPrice` + `dealerPrice` per [rule 1](./01-project-overview.md#L90). **Seller-listed products carry retail pricing only in v1.3.** Extending dealer pricing to third-party sellers requires every seller to set and honour a wholesale tier — a client policy decision before it is a build task. Deliberately excluded rather than assumed.

---

## Architecture Deltas

| Area | v1.2 assumption | v1.3 requirement |
|---|---|---|
| Data model | Products/orders have no owner | New `Seller`, `Commission`, `SubOrder`, `Payout` models; seller scoping on `Product`, `InventoryLog`, `OrderItem` |
| Checkout | One cart → one order | One cart → one payment → N sub-orders split by seller, each with own totals, status, cancellation path |
| Money | Single payee | Razorpay **Route** linked accounts, commission deducted at capture, per-seller refund reversal, payout ledger |
| Inventory | Admin owns all stock | Seller-owned stock, seller-editable, admin read-only with override + audit log |
| Authorisation | Role gates endpoints | **Row-level ownership** enforced on every read and write |
| Compliance | Client invoices every sale | Each seller invoices under own GSTIN; platform collects TCS, files GSTR-8 monthly |
| New portal | — | Seller onboarding + KYC, dashboard, catalogue, inventory, order queue, payout ledger, reports |

**Do not trim line item 09 (row-level authorisation).** In v1.2 a permission bug shows the wrong page. In a marketplace it leaks one seller's margins to a competitor.

---

## Effort Breakdown — Marketplace Module

| # | Work area | Dev-days |
|---|---|---:|
| 01 | Schema redesign & seller-scoped migration | 3.0 |
| 02 | Seller onboarding, KYC/GST documents & admin approval | 2.5 |
| 03 | Seller portal — dashboard, catalogue CRUD, media, moderation hand-off | 5.5 |
| 04 | Seller-owned inventory management | 1.5 |
| 05 | Multi-vendor cart & order splitting (sub-orders, per-seller totals) | 3.5 |
| 06 | Razorpay Route split settlement, commission engine, refund reversal | 4.5 |
| 07 | Payout ledger, seller statements & admin payout runs | 3.0 |
| 08 | Seller fulfilment queue, per-sub-order status & partial cancellation | 3.0 |
| 09 | Row-level authorisation hardening + four-role permission test pass | 2.5 |
| 10 | Admin — seller management, commission config, dispute handling | 2.5 |
| 11 | Seller reports & analytics (seller-scoped) | 1.5 |
| 12 | Marketplace GST/TCS invoicing data & monthly report | 2.0 |
| 13 | Seller transactional emails — approval, new order, payout | 1.0 |
| 14 | Extra QA/UAT across four-role matrix + regression | 2.5 |
| 15 | PM & buffer for expanded scope | 2.0 |
| | **Marketplace module subtotal** | **40.5** |
| | v1.2 baseline (see [12](./12-cost-and-effort-estimate.md)) | 51.0 |
| | **Programme total** | **91.5** |

---

## Investment

**List ₹95,000 → offer ₹59,999** (36.84% off, save ₹35,001). GST extra.

### Cost by phase (sums to ₹95,000)
| Phase | Key deliverables | Timeline | Cost |
|---|---|:-:|---:|
| 1 · Foundation & catalogue | Setup, four-role schema, auth, RBAC, reCAPTCHA, dealer onboarding, catalogue, dual pricing | Wk 1–2 | ₹18,000 |
| 2 · Cart, payments & orders | Inventory, cart, checkout, Razorpay + EMI, order lifecycle, AWB tracking | Wk 3 | ₹14,000 |
| 3 · Seller onboarding & portal | KYC & approval, seller dashboard, catalogue, inventory, moderation | Wk 4–5 | ₹22,000 |
| 4 · Marketplace commerce | Order splitting, seller fulfilment, Route settlement, commission engine, payout ledger | Wk 6–7 | ₹24,000 |
| 5 · Admin, reports & compliance | Seller management, commission config, disputes, reviews, reports, GST/TCS, emails | Wk 8 | ₹10,000 |
| 6 · Polish, security & go-live | Translator, GMB, responsive polish, authz test pass, UAT, deployment, SSL | Wk 9–10 | ₹7,000 |
| **Total** | | **9–10 wks** | **₹95,000** |

### Milestone split (20/20/25/20/15) — on offer price ₹59,999
| Milestone | Trigger | % | Amount |
|---|---|---:|---:|
| M1 · Kickoff | On agreement signing | 20% | ₹12,000 |
| M2 · Commerce core | End wk 3 — catalogue, cart, payments, orders on staging | 20% | ₹12,000 |
| M3 · Seller portal | End wk 5 — sellers onboard, list, manage stock | 25% | ₹15,000 |
| M4 · Split settlement | End wk 7 — multi-seller splits and payouts end to end | 20% | ₹12,000 |
| M5 · Final delivery | Post go-live & handover | 15% | ₹8,999 |
| **Total** | | **100%** | **₹59,999** |

### Pricing rationale (internal)
Effort rises 1.79× while price rises 1.88× — so the marketplace is delivered at essentially the v1.2 introductory rate: **₹656/dev-day** against ₹627, at 36.84% off list. That is despite materially more risk: split settlement against a live gateway, per-seller money movement, and a permission surface where a defect is a data breach. Comparable Indian studios quote ₹2,500–4,000/day for marketplace builds, so this is priced as a relationship investment, not at market.

**Scope was held intact through every reduction** (₹69,999 → ₹63,999 → ₹59,999); margin absorbed all of it. Nothing was removed to fund the discount, and items 28 (authorisation hardening) and 33 (four-role regression QA) remain fully in.

**Floor reached.** Any further ask must be answered with scope reduction, not price. Candidates to drop, in order: GMB integration (1.5d), translator (1.0d), seller-scoped reports (1.5d), non-buyer email reminders. Never 28 or 33.

---

## Mobile App

REV 1.2 quote stands as scoped — **customer and dealer apps**, ₹75,000 → ₹49,999, 3–4 weeks, delivered post web go-live.

| Package | Contents | List | Offer |
|---|---|---:|---:|
| Customer + dealer apps | Web parity, push notifications, app store launch | ₹75,000 | ₹49,999 |
| Seller app *(optional)* | Order queue, stock updates, payout view (~12 dev-days). Responsive seller web portal covers this otherwise. | ₹20,000 | ₹14,999 |

**Full programme:** web marketplace + customer/dealer apps = **₹1,09,998** (list ₹1,70,000 — blended 35.29% off). With seller app = **₹1,24,997**.

---

## Other Applicable Expenses (client-borne)

| Item | Basis | Indicative cost |
|---|---|---:|
| Domain | .com / .in annual | ₹900–1,500/yr |
| Frontend hosting | Vercel — free tier viable at launch | ₹0–1,700/mo |
| Backend hosting | Railway or Render | ₹850–1,700/mo |
| PostgreSQL | Neon or Supabase — paid tier advisable once sellers live | ₹0–2,100/mo |
| Image CDN | Cloudinary | ₹0–1,800/mo |
| Transactional email | Resend or Mailgun | ₹0–1,700/mo |
| Razorpay standard | 2% + 18% GST on fee | per transaction |
| Razorpay EMI | Up to 3% by tenure/bank | per transaction |
| Razorpay Route | No additional platform fee on standard plan — **confirm with account manager at activation** | confirm |
| reCAPTCHA, translator, SSL | Google free tiers, platform certs | ₹0 |
| App store accounts *(if mobile)* | Apple $99/yr, Google $25 one-time | ₹8,300/yr + ₹2,100 |
| CA — TCS filing | Monthly GSTR-8 | client's accountant |
| **Realistic running cost at launch** | | **₹1,700–3,400/mo** |

### D-21 — Marketplace tax compliance (new decision)
Operating a marketplace makes the client an e-commerce operator under **Section 52, CGST Act**: collect TCS on seller sales, deposit it, file **GSTR-8** monthly; each seller invoices under their own GSTIN. **We build the data and reports** (per-seller sales, commission, TCS) — registration, deposits and filings are the client's obligation. Client should confirm with their CA before signing.

---

## Scope Boundary

### In scope (v1.3)
Everything in v1.2 · seller role with own login, onboarding, KYC, approval gate · seller portal (dashboard, catalogue, inventory, fulfilment, payout ledger, seller-scoped reports) · multi-seller cart & order splitting · Razorpay Route split settlement with configurable commission · payout ledger, statements, admin payout runs · GST/TCS data & monthly report · row-level authorisation across four roles with dedicated test pass · 30-day warranty.

### Not in scope
Dealer pricing on seller products (D-20) · seller-set shipping or courier API · automated GST/PAN verification API · seller subscription/listing-fee billing (commission only) · in-app returns/refunds · seller mobile app (quoted separately) · SMS · coupon codes · nested categories · multi-currency.

### Client inputs required by day one
1. Commission policy — flat, per-category, or per-seller
2. Expected seller count at launch; whether existing dealers will also sell
3. Razorpay account with **Route activated** + live keys
4. Seller agreement and onboarding terms (client legal copy)
5. Payout cadence — weekly, fortnightly, monthly
6. Domain, logo, brand colours, SMTP credentials, reCAPTCHA keys
7. Client's own product data (admin upload or CSV import)

---

## Terms

- **Supersedes v1.2 in full**; the ₹31,999 single-seller quote is withdrawn
- Source code ownership transfers on final payment
- Hosting, domain, gateway fees, third-party services borne by client
- Two design-revision rounds per milestone
- Scope additions post-signing quoted separately
- Timeline assumes day-one inputs on time and scope frozen to this document
- TCS registration, deposits and GSTR-8 filings are the client's obligation (D-21)
- 30-day post-launch warranty for in-scope defects
- Valid 15 days from document date

---

## Honesty Note (internal)

91.5 comfortable-pace days compressed into 9–10 weeks (~54–60 calendar days at 6-day weeks) — the same ~1.55× compression as v1.2, so the plan is no more aggressive than what was already accepted. It holds only if: day-one inputs land, scope stays frozen, Razorpay Route activates without delay (this is the single largest schedule risk — activation is outside our control), and boilerplate/AI-assisted coding continue. Buffer is 2.0 days plus the week-9 polish week. If Route activation slips, the fallback is to ship with admin-mediated manual payouts against the same ledger and switch to automatic split settlement in a post-launch patch — the ledger is built either way, so this is a low-cost contingency.

---

## Sign-Off

Signing confirms: four-role scope · 9–10 week schedule · ₹59,999 investment · five-milestone payment schedule · acknowledgement of the TCS obligation (D-21).

**Client name:** ___________________________
**Authorised signatory:** ___________________________
**Date:** ___________________________

**Vendor:** Qodeways Technologies Pvt Ltd · Swappy (CEO / Lead Developer)
