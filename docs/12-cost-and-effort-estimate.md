# 12 — Cost & Effort Estimate (Internal)

> **Status:** Final v1.2 · Quoted as a **flat competitive project price** — estimation **₹45,000**, offer **₹36,999** (17.78% off · save ₹8,001). Reflected in the proposal's Investment section.
> **Internal note:** the price is a market/flat quote — **not** effort × day-rate. The developer-day breakdown below is the **scope/effort reference only** (what's included) and stays internal; do not expose day-counts or imply an hourly rate to the client.

---

## Engagement Assumptions
- **Solo developer**, end-to-end through deployment
- **3.5-week** delivery (matches the proposal timeline)
- **Pricing model: flat project quote** (competitive/introductory) — ₹45,000 estimation, ₹36,999 offer. The day figures below are an internal **effort/scope reference**, not the billing basis.
- Cadence: ~6 working days/week to hit 3.5 weeks (≈ 18–21 calendar days)
- Client provides on Day 1: product data, images, Razorpay account, domain, logo, legal copy
- Scope frozen to the [Scope Register](./06-scope-register.md); 1 revision round total

---

## Effort Breakdown

| # | Work area | Dev-days |
|---|---|---:|
| 1 | Project setup & architecture (Next.js + Express + Prisma + CI) | 1.5 |
| 2 | Database schema & migrations | 1.5 |
| 3 | Authentication, roles (RBAC) & email verification | 3.0 |
| 4 | Dealer onboarding (GST + docs) & admin approval | 2.5 |
| 5 | Product catalog, categories, specs, dual pricing (admin + public) | 5.5 |
| 6 | Inventory management (stock, logs, alerts) | 1.5 |
| 7 | Cart & checkout (server cart, address, totals) | 3.0 |
| 8 | Razorpay payments (verify + webhook, idempotent confirm) | 2.5 |
| 9 | Order management, tracking & transactional emails | 3.0 |
| 10 | Admin dashboard & banner management | 4.5 |
| 11 | Reports & analytics (charts + CSV) | 2.0 |
| 12 | Static / legal pages (About, Contact, Privacy, Terms, Return Policy) | 1.0 |
| 13 | Responsive UI polish (all portals) + SEO | 2.5 |
| 14 | Testing, security pass & UAT fixes | 3.0 |
| 15 | Deployment & go-live (SSL, domain, live keys) | 1.5 |
| 16 | PM, demos & buffer | 2.5 |
| | **Total** | **41.0** |

---

## Quoted Investment

| | |
|---|---|
| Effort / scope reference | ~41 developer-days *(internal only)* |
| **Estimation (list price)** | **₹45,000** |
| Offer discount | 17.78% (save ₹8,001) |
| **Offer price (payable)** | **₹36,999** |
| GST | extra as applicable |

### Estimation by phase (client-facing · sums to ₹45,000)
| Phase | Timeline | Cost |
|---|---|---:|
| Foundation, Auth & Catalog | Week 1 | ₹16,000 |
| Cart, Payments & Orders | Week 2 | ₹11,000 |
| Admin, Reports & Notifications | Week 3 | ₹8,000 |
| QA, Polish & Go-Live | Final ½ | ₹10,000 |
| **Total** | **3.5 weeks** | **₹45,000** |

### Milestone split (30 / 40 / 30) — on the **offer price ₹36,999**
| Milestone | Trigger | % | Amount |
|---|---|---:|---:|
| Kickoff | On agreement signing | 30% | ₹11,100 |
| Mid delivery | After Week 2 — commerce core complete | 40% | ₹14,799 |
| Final delivery | Post go-live & handover | 30% | ₹11,100 |

---

## Timeline (3.5 weeks · matches proposal)
| Phase | Stage |
|---|---|
| Week 1 | Foundation, Authentication & Catalog |
| Week 2 | Cart, Checkout, Payments & Orders |
| Week 3 | Admin, Reports & Notifications |
| Final ½ | QA, Polish & Go-Live |

---

## Honesty Note (internal)
The effort (~41 comfortable-pace days) is compressed into a **3.5-week solo crunch** (~18–21 calendar days at 6-day weeks). This holds **only** if the Day-1 client inputs land on time, scope stays frozen, and boilerplate/UI-kit + AI-assisted coding are used. Buffer is thin and concentrated in the Final ½ week. If any condition slips, the realistic fallbacks are: extend the calendar, add a second developer (~4 weeks, ~+10% effort), or defer B2B/reports to a paid Phase 2.

---

## Recompute Formula (if the price changes)
Let `E` = estimation (list price) and `B` = offer price (payable).
```
discount %    = (E − B) ÷ E × 100        // e.g. (45000 − 36999)/45000 = 17.78%
savings       = E − B                    // ₹8,001
Kickoff (30%) = B × 0.30                  // ₹11,100
Mid     (40%) = B × 0.40                  // ₹14,799
Final   (30%) = B × 0.30                  // ₹11,100
```
Update: this doc, the proposal's struck price (`E`), offer price (`B`), discount %, the phase table, and milestone amounts — then log it in [CHANGELOG](./CHANGELOG.md).
