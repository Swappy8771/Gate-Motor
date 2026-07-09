# 12 — Cost & Effort Estimate (Internal)

> **Status:** Final v1.2 (Amended) · Quoted as a **flat competitive project price** — estimation **₹45,000**, offer **₹31,999** (28.89% off · save ₹13,001). Reflected in the proposal's Investment section.
> **v1.2 Addition:** 6 high-ROI conversion & security features added at minimal effort overhead (reviews, reCAPTCHA, translator, GMB, EMI, email reminders) — **included in same price** to deliver superior value.
> **Internal note:** the price is a market/flat quote — **not** effort × day-rate. The developer-day breakdown below is the **scope/effort reference only** (what's included) and stays internal; do not expose day-counts or imply an hourly rate to the client.

---

## Engagement Assumptions
- **Solo developer**, end-to-end through deployment
- **4.5–5 week** delivery (extended from 3.5 weeks to accommodate 6 v1.2 features)
- **Pricing model: flat project quote** (competitive/introductory) — ₹55,000 estimation, ₹39,999 offer (27.27% discount). The day figures below are an internal **effort/scope reference**, not the billing basis.
- Cadence: ~6 working days/week to hit 4.5–5 weeks (≈ 27–30 calendar days)
- Client provides on Day 1: product data, images, Razorpay account, domain, logo, legal copy, Google My Business profile link (if available)
- Scope frozen to the [Scope Register v1.2](./06-scope-register.md); 1 revision round total; v1.2 additions (reviews, reCAPTCHA, translator, GMB, EMI, reminders) are included baseline, not extras

---

## Effort Breakdown (v1.2)

| # | Work area | Dev-days |
|---|---|---:|
| 1 | Project setup & architecture (Next.js + Express + Prisma + CI) | 1.5 |
| 2 | Database schema & migrations (includes Review model) | 1.5 |
| 3 | Authentication, roles (RBAC) & email verification **+ reCAPTCHA v3** | 3.5 |
| 4 | Dealer onboarding (GST + docs) & admin approval **+ reCAPTCHA** | 2.5 |
| 5 | Product catalog, categories, specs, dual pricing (admin + public) | 5.5 |
| 6 | Inventory management (stock, logs, alerts) | 1.5 |
| 7 | Cart & checkout (server cart, address, totals) | 3.0 |
| 8 | Razorpay payments (verify + webhook, **+ EMI option**) | 3.0 |
| 9 | Order management, tracking & transactional emails **+ non-buyer reminders** | 3.5 |
| 10 | Admin dashboard & banner management **+ review moderation** | 4.5 |
| 11 | Reports & analytics (charts + CSV) | 2.0 |
| 12 | **Product Reviews & Ratings** (CRUD, moderation, display) | 3.5 |
| 13 | **Google My Business integration** (link/embed + optional hours) | 1.5 |
| 14 | **Website auto-translator** (third-party embed setup) | 1.0 |
| 15 | Static / legal pages (About, Contact, Privacy, Terms, Return Policy) **+ GMB link** | 1.0 |
| 16 | Responsive UI polish (all portals) + SEO **+ translator styling** | 2.5 |
| 17 | Testing, security pass & UAT fixes | 3.0 |
| 18 | Deployment & go-live (SSL, domain, live keys, reCAPTCHA keys) | 1.5 |
| 19 | PM, demos & buffer | 3.0 |
| | **Total** | **51.0** |

---

## Quoted Investment (v1.2 Amended — Original Pricing)

| | |
|---|---|
| Effort / scope reference | ~51 developer-days *(internal only)* |
| **Estimation (list price)** | **₹45,000** |
| Offer discount | 28.89% (save ₹13,001) |
| **Offer price (payable)** | **₹31,999** |
| GST | extra as applicable |

### Estimation by phase (client-facing · sums to ₹45,000)
| Phase | Timeline | Cost | Features Added |
|---|---|---:|---|
| Foundation, Auth & Catalog | Week 1 | ₹12,000 | reCAPTCHA integration |
| Cart, Payments & Orders | Week 2 | ₹11,000 | EMI option via Razorpay |
| Admin, Reports & Notifications | Week 3 | ₹10,000 | Reviews moderation, email reminders |
| Enhanced Features & Polish | Week 4 | ₹12,000 | Translator, GMB, reviews display, final polish |
| **Total** | **4.5–5 weeks** | **₹45,000** | **6 v1.2 features included in same price** |

### Milestone split (30 / 40 / 30) — on the **offer price ₹31,999**
| Milestone | Trigger | % | Amount |
|---|---|---:|---:|
| Kickoff | On agreement signing | 30% | ₹9,600 |
| Mid delivery | After Week 2 — commerce core complete | 40% | ₹12,800 |
| Final delivery | Post go-live & handover | 30% | ₹9,600 |

---

## Timeline (4.5–5 weeks · v1.2 amended)
| Phase | Stage | Highlights |
|---|---|---|
| Week 1 | Foundation, Authentication & Catalog | reCAPTCHA on all forms; product schema ready for reviews |
| Week 2 | Cart, Checkout, Payments & Orders | EMI option integrated in Razorpay; email reminders job setup |
| Week 3 | Admin, Reports & Notifications | Review moderation dashboard; email reminder scheduling |
| Week 4 | Enhanced Features & Polish | Google My Business integration; translator embed; responsive polish; final UAT |
| Final ½ | QA & Go-Live | Security pass, deployment, domain/SSL, go-live support |

---

## Honesty Note (internal)
The effort (~51 comfortable-pace days) is compressed into a **4.5–5 week solo sprint** (~27–30 calendar days at 6-day weeks). The 10-day buffer from v1.0 was reallocated to accommodate 6 high-ROI v1.2 features (reviews, reCAPTCHA, translator, GMB, EMI, reminders). This holds **only** if: (1) Day-1 client inputs land on time, (2) scope stays frozen to v1.2, (3) boilerplate/UI-kit + AI-assisted coding are used, (4) reCAPTCHA + email scheduling libraries handle the heavy lifting. Buffer is modest (~3% slack). If any condition slips, realistic fallbacks are: extend to 5.5+ weeks, add a part-time second developer (frontend polish only), or defer Week-4 enhancements (translator, GMB) to post-launch patch.

---

## Recompute Formula (if the price changes)
Let `E` = estimation (list price) and `B` = offer price (payable). Current baseline (v1.2): E = ₹55,000, B = ₹39,999.
```
discount %    = (E − B) ÷ E × 100        // e.g. (55000 − 39999)/55000 = 27.27%
savings       = E − B                    // ₹15,001
Kickoff (20%) = B × 0.20                  // ₹8,000
Mid     (45%) = B × 0.45                  // ₹18,000
Final   (35%) = B × 0.35                  // ₹13,999
```
To update for future v1.x versions: modify `E` and `B` values above, recalculate discount % and milestone amounts, update the phase-cost table (keep phase split proportional), sync with [01-project-overview.md](./01-project-overview.md) and [CHANGELOG.md](./CHANGELOG.md).
