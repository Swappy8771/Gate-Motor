# 12 — Cost & Effort Estimate (Internal)

> **Status:** Final **v1.3** (Marketplace) · Quoted as a **flat competitive project price** — estimation **₹95,000**, offer **₹59,999** (36.84% off · save ₹35,001).
> **v1.3 change:** multi-vendor marketplace added — a fourth role (**Seller**) with its own portal, order splitting, Razorpay Route split settlement, payouts, and GST/TCS reporting. **Supersedes v1.2**; the ₹31,999 single-seller quote is withdrawn. Full rationale in [SCOPE-AMENDMENT-v1.3](./SCOPE-AMENDMENT-v1.3.md).
> **Internal note:** the price is a market/flat quote — **not** effort × day-rate. The developer-day breakdown below is the **scope/effort reference only** and stays internal; do not expose day-counts or imply an hourly rate to the client.

---

## Engagement Assumptions
- **Solo developer**, end-to-end through deployment
- **9–10 week** delivery (extended from 4.5–5 weeks for the marketplace module)
- **Pricing model: flat project quote** — ₹95,000 estimation, ₹59,999 offer (36.84% discount)
- Cadence: ~6 working days/week to hit 9–10 weeks (≈ 54–60 calendar days)
- Client provides on Day 1: commission policy, expected seller count, Razorpay account **with Route activated**, seller agreement copy, payout cadence, product data, images, domain, logo, legal copy, SMTP + reCAPTCHA credentials
- Scope frozen to [SCOPE-AMENDMENT-v1.3](./SCOPE-AMENDMENT-v1.3.md); 2 revision rounds per milestone

---

## Effort Breakdown

### Part A — v1.2 baseline (unchanged)

| # | Work area | Dev-days |
|---|---|---:|
| 1 | Project setup & architecture (Next.js + Express + Prisma + CI) | 1.5 |
| 2 | Database schema & migrations (includes Review model) | 1.5 |
| 3 | Authentication, roles (RBAC) & email verification + reCAPTCHA v3 | 3.5 |
| 4 | Dealer onboarding (GST + docs) & admin approval + reCAPTCHA | 2.5 |
| 5 | Product catalog, categories, specs, dual pricing (admin + public) | 5.5 |
| 6 | Inventory management (stock, logs, alerts) | 1.5 |
| 7 | Cart & checkout (server cart, address, totals) | 3.0 |
| 8 | Razorpay payments (verify + webhook, + EMI option) | 3.0 |
| 9 | Order management, tracking & transactional emails + non-buyer reminders | 3.5 |
| 10 | Admin dashboard & banner management + review moderation | 4.5 |
| 11 | Reports & analytics (charts + CSV) | 2.0 |
| 12 | Product Reviews & Ratings (CRUD, moderation, display) | 3.5 |
| 13 | Google My Business integration (link/embed + optional hours) | 1.5 |
| 14 | Website auto-translator (third-party embed setup) | 1.0 |
| 15 | Static / legal pages + GMB link | 1.0 |
| 16 | Responsive UI polish (all portals) + SEO + translator styling | 2.5 |
| 17 | Testing, security pass & UAT fixes | 3.0 |
| 18 | Deployment & go-live (SSL, domain, live keys, reCAPTCHA keys) | 1.5 |
| 19 | PM, demos & buffer | 3.0 |
| | **Subtotal** | **51.0** |

### Part B — v1.3 marketplace module (new)

| # | Work area | Dev-days |
|---|---|---:|
| 20 | Schema redesign & seller-scoped migration | 3.0 |
| 21 | Seller onboarding, KYC/GST documents & admin approval | 2.5 |
| 22 | Seller portal — dashboard, catalogue CRUD, media, moderation hand-off | 5.5 |
| 23 | Seller-owned inventory management | 1.5 |
| 24 | Multi-vendor cart & order splitting (sub-orders, per-seller totals) | 3.5 |
| 25 | Razorpay Route split settlement, commission engine, refund reversal | 4.5 |
| 26 | Payout ledger, seller statements & admin payout runs | 3.0 |
| 27 | Seller fulfilment queue, per-sub-order status & partial cancellation | 3.0 |
| 28 | Row-level authorisation hardening + four-role permission test pass | 2.5 |
| 29 | Admin — seller management, commission config, dispute handling | 2.5 |
| 30 | Seller reports & analytics (seller-scoped) | 1.5 |
| 31 | Marketplace GST/TCS invoicing data & monthly report | 2.0 |
| 32 | Seller transactional emails — approval, new order, payout | 1.0 |
| 33 | Extra QA/UAT across four-role matrix + regression | 2.5 |
| 34 | PM & buffer for expanded scope | 2.0 |
| | **Subtotal** | **40.5** |
| | **PROGRAMME TOTAL** | **91.5** |

> **Sizing correction on record:** an earlier verbal estimate put the full marketplace at 26–32 dev-days. The firm figure is **40.5**. The delta is items 28, 31 and 33 — authorisation hardening, TCS data, and four-role regression QA.

---

## Quoted Investment (v1.3)

| | |
|---|---|
| Effort / scope reference | ~91.5 developer-days *(internal only)* |
| **Estimation (list price)** | **₹95,000** |
| Offer discount | 36.84% (save ₹35,001) |
| **Offer price (payable)** | **₹59,999** |
| Effective rate *(internal)* | **₹656 / dev-day** — essentially v1.2's introductory ₹627, for a materially riskier build |
| GST | extra as applicable |

### Estimation by phase (client-facing · sums to ₹95,000)
| Phase | Timeline | Cost |
|---|---|---:|
| 1 · Foundation, four-role auth & catalogue | Week 1–2 | ₹18,000 |
| 2 · Cart, payments & orders | Week 3 | ₹14,000 |
| 3 · Seller onboarding & seller portal | Week 4–5 | ₹22,000 |
| 4 · Marketplace commerce — splitting, Route settlement, payouts | Week 6–7 | ₹24,000 |
| 5 · Admin, reports, compliance & notifications | Week 8 | ₹10,000 |
| 6 · Enhanced features, polish, security & go-live | Week 9–10 | ₹7,000 |
| **Total** | **9–10 weeks** | **₹95,000** |

### Milestone split (20 / 20 / 25 / 20 / 15) — on offer price ₹59,999
| Milestone | Trigger | % | Amount |
|---|---|---:|---:|
| M1 · Kickoff | On agreement signing | 20% | ₹12,000 |
| M2 · Commerce core | End week 3 | 20% | ₹12,000 |
| M3 · Seller portal | End week 5 | 25% | ₹15,000 |
| M4 · Split settlement | End week 7 | 20% | ₹12,000 |
| M5 · Final delivery | Post go-live & handover | 15% | ₹8,999 |
| **Total** | | **100%** | **₹59,999** |

---

## Mobile App (separate quote, unchanged)

| Package | Effort | List | Offer |
|---|---:|---:|---:|
| Customer + dealer apps (React Native) | 68–80 days | ₹75,000 | ₹49,999 |
| Seller app *(optional add-on)* | ~12 days | ₹20,000 | ₹14,999 |

**Full programme:** web marketplace + customer/dealer apps = **₹1,09,998** (list ₹1,70,000 — blended 35.29% off). With seller app = **₹1,24,997**.

---

## Client-Borne Expenses

Full table in [SCOPE-AMENDMENT-v1.3](./SCOPE-AMENDMENT-v1.3.md#other-applicable-expenses-client-borne). Summary: **₹1,700–3,400/month** realistic running cost at launch, plus Razorpay 2% + 18% GST per transaction (EMI up to 3%), domain ₹900–1,500/yr, and the client's CA cost for monthly GSTR-8 filing.

---

## Timeline (9–10 weeks · v1.3)
| Week | Stage |
|---|---|
| 1 | Foundation, four-role schema & authentication, RBAC, reCAPTCHA |
| 2 | Catalogue, dual pricing, dealer onboarding, inventory foundation |
| 3 | Cart, checkout, Razorpay + EMI, orders, AWB tracking — **M2** |
| 4 | Seller onboarding, KYC, admin approval, seller dashboard shell |
| 5 | Seller catalogue & inventory, moderation queue — **M3** |
| 6 | Multi-vendor order splitting, seller fulfilment queue |
| 7 | Razorpay Route settlement, commission engine, payout ledger — **M4** |
| 8 | Admin, reports, GST/TCS data, reviews, notifications |
| 9 | Translator, GMB, responsive polish, authorisation test pass, security |
| 10 | Four-role UAT, deployment, domain/SSL, go-live — **M5** |

---

## Honesty Note (internal)
91.5 comfortable-pace days compressed into 9–10 weeks (~54–60 calendar days at 6-day weeks) — the same ~1.55× compression already accepted for v1.2, so the plan is no more aggressive than the one signed off before. Holds only if: (1) Day-1 client inputs land on time, (2) scope stays frozen to v1.3, (3) **Razorpay Route activates without delay** — the single largest schedule risk, and outside our control, (4) boilerplate/AI-assisted coding continue. Buffer is 2.0 days plus the week-9 polish week.

**Route contingency:** if activation slips, ship with admin-mediated manual payouts against the same ledger and switch to automatic split settlement in a post-launch patch. The ledger is built either way, so this costs ~1 day, not a redesign.

---

## Recompute Formula (if the price changes)
Let `E` = estimation (list price) and `B` = offer price (payable). Current baseline (v1.3 final): **E = ₹95,000, B = ₹59,999.**
```
discount %   = (E − B) ÷ E × 100      // (95000 − 59999)/95000 = 36.84%
savings      = E − B                  // ₹35,001
M1 (20%)     = B × 0.20               // ₹12,000
M2 (20%)     = B × 0.20               // ₹12,000
M3 (25%)     = B × 0.25               // ₹15,000
M4 (20%)     = B × 0.20               // ₹12,000
M5 (15%)     = B × 0.15               // ₹8,999   (absorbs rounding)
```
**Floor reached — do not discount below ₹59,999.** At ₹656/dev-day this is already the v1.2 introductory rate applied to a build carrying live-gateway split settlement, per-seller money movement, and a four-role permission surface. Scope was held intact through the reduction from ₹69,999 → ₹63,999 → ₹59,999; margin absorbed all of it. Any further ask must be answered with **scope reduction, not price** — and the two items that must never be the ones cut are 28 (authorisation hardening) and 33 (four-role regression QA). Candidates to drop instead, in order: GMB integration (1.5d), translator (1.0d), seller-scoped reports (1.5d), non-buyer email reminders (part of item 9).
To update for future versions: modify `E` and `B`, recalculate discount % and milestone amounts, keep the phase-cost table proportional and summing to `E`, then sync [01-project-overview.md](./01-project-overview.md), [README.md](./README.md), [CHANGELOG.md](./CHANGELOG.md) and the Investment section of `app/page.tsx`.
