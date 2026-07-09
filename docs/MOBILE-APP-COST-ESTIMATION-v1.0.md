# Mobile App — Cost & Effort Estimation (v1.0)
## React Native iOS + Android | Phase 2 Development

> **Status:** Final v1.0 · Complete feature parity with web app v1.2 (68–80 developer-days)
> **Project:** Gate Motor E-Commerce Platform — Mobile App (Phase 2)
> **Technology:** React Native (one codebase for iOS + Android)
> **Platforms:** Apple iOS + Google Android
> **Apps:** Customer App + Dealer App (2 separate apps)
> **Kickoff:** September 2, 2026 (post-web launch)
> **Timeline:** 9.5–11.5 weeks (solo developer)
> **Pricing:** To be finalized (effort basis below)

---

## Engagement Assumptions

- **Solo React Native developer**, end-to-end through app store launch
- **9.5–11.5 week** delivery (68–80 developer-days)
- **Pricing model: flat project quote** (to be determined). The developer-day breakdown below is the **scope/effort reference** (what's included) and stays internal; do not expose day-counts or imply an hourly rate to the client.
- Cadence: ~6 working days/week to hit 9.5–11.5 weeks (≈ 57–69 calendar days)
- Client provides on Day 1: Stable web app APIs, Firebase project, app store accounts, brand assets
- Scope frozen to the [Mobile App Estimation v1.0](./MOBILE-APP-ESTIMATION-v1.0.md); 1 revision round total
- Phase 2 starts immediately after web app launch confirmation (early September 2026)

---

## Detailed Effort Breakdown (by Module)

| # | Work Area | Customer App | Dealer App | Shared | Total Dev-Days | Notes |
|---|---|---|---|---|---|---|
| 1 | Project setup & architecture (React Native, navigation, state mgmt) | 1.5 | — | 2 | 3–4 | Firebase, EAS Build config, CI/CD |
| 2 | Authentication, JWT, email verification, profiles, addresses | 3 | 3 | 2 | 5–6 | reCAPTCHA integration, form validation |
| 3 | Product catalog, search, filter, sort, detail pages, images | 5 | 1 | 2 | 8–10 | Image optimization, lazy-load, infinite scroll |
| 4 | Shopping cart, quantity control, stock validation, price calc | 2 | 1 | 1 | 4–5 | Server-side sync, offline support |
| 5 | Checkout, address selection, payment flow integration | 2 | 1 | 2 | 5–6 | Razorpay mobile SDK, payment verification |
| 6 | Order management, history, detail, tracking, cancellation | 2 | 2 | 1 | 4–5 | AWB tracking, external link handling |
| 7 | Product reviews & ratings (submit, display, moderation read-only) | 3 | 1 | 1 | 5–6 | Review submission, reCAPTCHA, display |
| 8 | Push notifications (Firebase FCM, order status, history) | 2 | 1 | 2 | 4–5 | **NEW for mobile:** Notification service, local notifications |
| 9 | Wishlist, recently viewed, search history, offline caching | 2 | — | 1 | 3–4 | AsyncStorage, sync logic |
| 10 | Dealer-specific features (registration, approval status, pricing) | — | 3 | 1 | 5–6 | GST docs upload, approval workflow |
| 11 | UI/UX polish, animations, transitions, dark mode, accessibility | 2 | 1 | 2 | 4–5 | Mobile-first design, responsive layouts |
| 12 | Testing (unit tests, integration tests, device testing) | 2 | 1 | 2 | 5–6 | Jest, testing-library, manual testing iOS + Android |
| 13 | App store setup (iOS App Store, Google Play Store submission) | 1 | 1 | 1 | 2–3 | Certificates, store listings, screenshots, review process |
| 14 | Security hardening (SSL pinning, token encryption, OWASP) | 1 | — | 2 | 2–3 | Mobile security best practices |
| 15 | Documentation & handover (code docs, deployment guide) | 1 | — | 1 | 1–2 | README, GitHub, deployment process |
| 16 | PM, demos, contingency buffer, bug fixes | 2 | 1 | 1 | 4–5 | Real-device testing, edge case fixes |
| | **TOTAL** | **35–40** | **16–20** | **25–30** | **68–80** | **~9.5–11.5 weeks** |

---

## Effort by Phase (Aligned with Timeline)

### Phase Breakdown (Weeks 1–10)

| Phase | Duration | Dev-Days | Focus | Key Deliverables |
|---|---|---|---|---|
| **Phase 1: Setup & Auth** | Week 1–2 | 8–10 | Project initialization, authentication, navigation | React Native boilerplate, login/register working, JWT setup |
| **Phase 2: Core Catalog & Cart** | Week 3–4 | 12–15 | Product listing, search, cart functionality | Catalog screens, search/filter, add to cart, cart management |
| **Phase 3: Payments & Orders** | Week 5–6 | 10–12 | Razorpay integration, order management, tracking | Checkout flow, Razorpay SDK, order lifecycle, AWB tracking |
| **Phase 4: Enhanced Features** | Week 7–8 | 12–15 | Reviews, notifications, dealer features, wishlist | Reviews system, push notifications, dealer app, wishlist, offline mode |
| **Phase 5: Polish & Testing** | Week 9 | 12–14 | UI/UX refinement, comprehensive testing, security | Testing, bug fixes, optimizations, security hardening |
| **Phase 6: App Store & Launch** | Week 10 | 6–8 | App store submission, final polish, deployment | iOS/Android builds, app store submission, store listings, launch |
| **TOTAL** | 10 weeks | 68–80 | Two production-ready native apps | Both apps live on app stores |

---

## Timeline & Milestones (Web App + Mobile App)

```
CURRENT: June 2026
├─ Web App Development: July–August (3.5–5 weeks)
├─ WEB LAUNCH: Aug 22–29, 2026
├─ ✅ Web app in production for 4 days (stability check)
│
└─ MOBILE PHASE 2 BEGINS: Sept 2, 2026
   ├─ WEEK 1–2 (Sept 2–15):  Setup, Auth, Navigation
   ├─ WEEK 3–4 (Sept 16–29): Catalog, Search, Cart
   ├─ WEEK 5–6 (Sept 30–Oct 13): Payments, Orders, Tracking
   ├─ WEEK 7–8 (Oct 14–27): Reviews, Notifications, Dealer App
   ├─ WEEK 9 (Oct 28–Nov 3): Testing, Security, Optimization
   ├─ WEEK 10 (Nov 4–10): App Store Submission
   │
   └─ EXPECTED MOBILE GO-LIVE: Mid-to-late October 2026
      (pending app store review queues)
```

---

## Effort Breakdown by Component

### Core Commerce Features (40–45 dev-days)
- Authentication & profiles: 5–6 days
- Product catalog & search: 8–10 days
- Shopping cart: 4–5 days
- Checkout & payments: 5–6 days
- Order management: 4–5 days
- **Subtotal: 26–32 days**

### Enhanced Features (18–22 dev-days)
- Reviews & ratings: 5–6 days
- Push notifications: 4–5 days
- Wishlist & offline: 3–4 days
- Dealer features: 5–6 days
- **Subtotal: 17–21 days**

### Quality & Operations (10–13 dev-days)
- UI/UX polish: 4–5 days
- Testing & QA: 5–6 days
- App store setup: 2–3 days
- Security: 2–3 days
- Documentation: 1–2 days
- **Subtotal: 14–19 days**

### Overhead & Buffer (5–8 dev-days)
- Project setup & architecture: 3–4 days
- PM, demos, contingency: 4–5 days
- **Subtotal: 7–9 days**

---

## Cost & Time Estimation Table

| Phase | Timeline | Focus | Dev-Days | Status |
|---|---|---|---|---|
| **Phase 1** | Week 1–2 (Sept 2–15) | Setup, Auth, Navigation | 8–10 | Planning |
| **Phase 2** | Week 3–4 (Sept 16–29) | Catalog, Cart | 12–15 | Planning |
| **Phase 3** | Week 5–6 (Sept 30–Oct 13) | Payments, Orders | 10–12 | Planning |
| **Phase 4** | Week 7–8 (Oct 14–27) | Features, Dealer | 12–15 | Planning |
| **Phase 5** | Week 9 (Oct 28–Nov 3) | Testing, Polish | 12–14 | Planning |
| **Phase 6** | Week 10 (Nov 4–10) | App Store, Launch | 6–8 | Planning |
| **TOTAL** | **10 weeks** | **Both apps live** | **68–80 days** | **To be priced** |

---

## Cost Estimation Framework (Placeholder for Pricing)

### Developer Day Rate Formula

```
Total Project Cost = (Dev-Days × Day Rate) + Infrastructure Costs + Buffer
```

**Key Variables (to be filled in):**

| Component | Unit | Rate | Basis |
|---|---|---|---|
| **Developer Day Rate** | ₹/day | **[TBD]** | React Native expertise, experience |
| **Infrastructure Costs** | Monthly | **[TBD]** | Firebase, app servers, CDN (shared with web) |
| **App Store Fees** | One-time | ₹3,124 | Apple $99/yr + Google $25 one-time |
| **Testing Device Costs** | (Optional) | **[TBD]** | If buying physical iOS + Android devices |

### Cost Estimation by Phase (Placeholder)

| Phase | Dev-Days | Day Rate | Phase Cost | Cumulative |
|---|---|---|---|---|
| **Phase 1: Setup & Auth** | 8–10 | **[Day Rate TBD]** | **[Cost TBD]** | **[Cost TBD]** |
| **Phase 2: Catalog & Cart** | 12–15 | **[Day Rate TBD]** | **[Cost TBD]** | **[Cost TBD]** |
| **Phase 3: Payments & Orders** | 10–12 | **[Day Rate TBD]** | **[Cost TBD]** | **[Cost TBD]** |
| **Phase 4: Features & Dealer** | 12–15 | **[Day Rate TBD]** | **[Cost TBD]** | **[Cost TBD]** |
| **Phase 5: Testing & Polish** | 12–14 | **[Day Rate TBD]** | **[Cost TBD]** | **[Cost TBD]** |
| **Phase 6: App Store & Launch** | 6–8 | **[Day Rate TBD]** | **[Cost TBD]** | **[Cost TBD]** |
| **Infrastructure & Fees** | — | — | **₹3,124** | — |
| **TOTAL** | **68–80** | — | **[Cost TBD]** | **[Cost TBD]** |

---

## Milestone Payment Structure (Placeholder)

**Recommended Split:** 30/40/30 (Aligned with web app for consistency)

| Milestone | Trigger | % | Amount |
|---|---|---|---|
| **Kickoff** | On agreement signing | 30% | **[Cost TBD] × 0.30** |
| **Mid Delivery** | After Phase 3 (Payments & Orders complete, end of Week 6) | 40% | **[Cost TBD] × 0.40** |
| **Final Delivery** | Post app store launch & handover | 30% | **[Cost TBD] × 0.30** |
| **TOTAL** | — | 100% | **[Final Cost TBD]** |

---

## Pricing Factors

### Variables Affecting Cost

1. **Developer Experience Level**
   - Senior React Native dev: Higher rate, faster delivery
   - Mid-level dev: Moderate rate, standard timeline
   - Junior dev: Lower rate, longer timeline, more QA needed

2. **Team Structure**
   - Solo dev: Lower cost, longer timeline (9.5–11.5 weeks)
   - Small team (2–3 devs): 20% higher cost, shorter timeline (7–8 weeks)
   - Large team (4+ devs): 40% higher cost, shortest timeline (5–6 weeks)

3. **Infrastructure Assumptions**
   - Firebase: Free tier + usage-based costs
   - App servers: Shared with web app (no additional cost)
   - Testing devices: May need to purchase for iOS + Android testing (optional)

4. **Post-Launch Support**
   - 7-day monitoring: Included in project
   - First update (bug fixes): Included
   - Monthly maintenance: Optional add-on

---

## Effort Ratios: Web App vs Mobile App

| Metric | Web App (v1.2) | Mobile App (v1.0) | Ratio |
|---|---|---|---|
| **Dev-Days** | 51 days | 68–80 days | Mobile = 1.33–1.57× web |
| **Timeline** | 5 weeks | 10 weeks | Mobile = 2× web (but starts after web) |
| **Complexity** | Moderate | Moderate-High | Mobile: push notifications, device testing |
| **Testing Effort** | 3 days (web only) | 5–6 days (iOS + Android) | Mobile: 2× testing effort |

**Why is mobile longer?**
1. Two platforms to test (iOS + Android)
2. Device-specific issues (screen sizes, OS versions)
3. Push notifications (new infrastructure)
4. App store submission process (review queues)
5. No shared UI framework (React Native is different from React)

---

## Recompute Formula (For Final Pricing)

Let:
- `R` = Developer day rate (₹/day) — **to be determined**
- `D` = Total dev-days (68–80) — **confirmed**
- `I` = Infrastructure costs (₹) — **minimal, shared with web**
- `F` = App store fees (₹3,124) — **fixed**
- `B` = Buffer/contingency (10%) — **optional**

```
Estimation (before discount) = (D × R) + I + F + B
  Example: (74 days × ₹5,000/day) + ₹0 + ₹3,124 + (10% buffer)
         = ₹370,000 + ₹0 + ₹3,124 + ₹37,312
         = ₹410,436 (estimation before discount)

Offer (with discount if applicable) = Estimation × (1 – Discount %)
  Example: ₹410,436 × 0.85 (15% discount)
         = ₹348,870 (final offer)

Milestone Split (30/40/30):
  Kickoff (30%)      = Offer × 0.30
  Mid Delivery (40%) = Offer × 0.40
  Final Delivery (30%) = Offer × 0.30
```

**To finalize pricing, determine:**
1. Developer day rate (₹/day): **[To be decided]**
2. Discount percentage (if any): **[To be decided]**
3. Team structure (solo/small/large): **[To be decided]**
4. Timeline preference (9.5 weeks / 7 weeks / 5 weeks): **[To be decided]**

---

## Comparison: Mobile App vs Web App Effort

### Web App (v1.2) — Completed/Planned
| Phase | Dev-Days | Timeline | Cost |
|---|---|---|---|
| **Web App** | 51 days | 5 weeks | ₹31,999 offer |
| **Overhead** | ~10 days | — | Buffer |
| **Total** | **~51 days** | **5 weeks** | **₹31,999** |

### Mobile App (v1.0) — Phase 2
| Phase | Dev-Days | Timeline | Cost |
|---|---|---|---|
| **Mobile App** | 68–80 days | 10 weeks | **[TBD]** |
| **Buffer** | ~5 days | — | Included |
| **Total** | **68–80 days** | **10 weeks** | **[TBD]** |

### Relationship
- Mobile app requires **1.33–1.57× the effort** of web app
- Mobile timeline is **2× web timeline** (but non-overlapping)
- Mobile cost should scale proportionally to effort (1.33–1.57× or adjusted for team size)

---

## Risk Assessment & Contingency

### Risks That Could Increase Effort

| Risk | Impact | Mitigation | Extra Days |
|---|---|---|---|
| **Razorpay mobile SDK issues** | Payment flow breaks | Test early (Week 4), have fallback | 2–3 days |
| **App store rejection** | Delayed launch | Review guidelines early, resubmit quickly | 3–5 days |
| **Device fragmentation bugs** | Works on some phones, not others | Test on 3+ devices per platform | 2–4 days |
| **iOS certificate/signing issues** | Can't build iOS app | Setup certs by Week 1 | 1–2 days |
| **Firebase FCM config issues** | Push notifications fail | Test early (Week 7) | 1–2 days |
| **API contract changes** | Mobile breaks if web APIs change | Freeze APIs post-web launch | 2–3 days |

**Contingency Buffer:** 4–5 days already built into Phase 5 (testing week)

---

## Infrastructure & Ongoing Costs

### One-Time Costs
| Item | Cost | Notes |
|---|---|---|
| Apple Developer Account | $99/year | ~₹8,250 |
| Google Play Developer Account | $25 one-time | ~₹2,100 |
| App Store Submission (both) | ₹0 | Included in developer accounts |
| **Total One-Time** | **~₹10,350** | Covered by client |

### Monthly Ongoing Costs (Shared with Web App)
| Item | Cost | Notes |
|---|---|---|
| Firebase (free tier) | $0 | Cloud Messaging included in free tier |
| Backend server (shared) | Already paid (web) | No additional cost for mobile |
| Database (shared) | Already paid (web) | No additional cost for mobile |
| CDN for images | Already paid (web) | Shared with web app |
| **Total Monthly** | **₹0–5,000** | Minimal, mostly free tier |

### App Store Revenue (N/A for This Platform)
- This is a **business app** (B2B/B2C), not consumer app
- No app store revenue sharing (customer pays via Razorpay, not app store)
- 100% of transaction revenue stays with client

---

## Team Scaling Options & Cost Impact

### Option 1: Solo React Native Developer ✅ (Recommended for Budget)
| Metric | Value |
|---|---|
| **Timeline** | 9.5–11.5 weeks |
| **Dev-Days** | 68–80 days |
| **Cost Impact** | Base cost (no team overhead) |
| **Risk** | Single point of failure, slower |
| **Benefit** | Lowest cost, simple communication |

### Option 2: Small Team (2–3 Developers) (Recommended for Speed)
| Metric | Value |
|---|---|
| **Timeline** | 7–8 weeks (20% faster) |
| **Dev-Days** | 68–80 days (same effort, parallel work) |
| **Cost Impact** | +20% (team coordination overhead) |
| **Risk** | Medium (distributed work) |
| **Benefit** | Faster delivery, knowledge sharing |

### Option 3: Distributed Team (4+ Developers) (Recommended for Quality)
| Metric | Value |
|---|---|
| **Timeline** | 5–6 weeks (40% faster) |
| **Dev-Days** | 68–80 days (same effort, 4 people in parallel) |
| **Cost Impact** | +40% (significant team overhead) |
| **Risk** | High (complex coordination) |
| **Benefit** | Fastest delivery, thorough testing, high quality |

---

## Success Metrics & Definition of Done

### Launch Success Criteria
- [x] Both apps (Customer + Dealer) live on app stores
- [x] All v1.2 features functional on iOS 13+ & Android 8+
- [x] Zero critical bugs (crashes, payment failures)
- [x] Performance: <3 second launch, <2 second list loads
- [x] Security: SSL pinning, token encryption, OWASP compliance
- [x] Tested on 3+ real devices per platform (not just simulators)
- [x] App store approval obtained for both platforms
- [x] Documentation & deployment guide delivered

### Quality Gates
- [x] Unit test coverage: >70%
- [x] Zero console warnings in production build
- [x] App bundle size: <100 MB (iOS), <100 MB (Android)
- [x] Battery usage: Normal (not excessive background activity)
- [x] Memory leaks: Zero (checked with profilers)

---

## Next Steps for Pricing Finalization

1. **Decide developer day rate** (₹/day)
   - Based on: React Native expertise, experience level, market rates
   - Examples:
     - Junior: ₹2,500–3,500/day
     - Mid-level: ₹4,000–6,000/day
     - Senior: ₹6,500–9,000/day

2. **Choose team structure** (solo / small team / distributed)
   - Solo: Lowest cost, longest timeline
   - Small team: Balanced cost & timeline
   - Distributed: Highest cost, shortest timeline

3. **Decide discount strategy** (if any)
   - Based on total project value (web + mobile)
   - Or based on payment commitment upfront

4. **Finalize payment split** (20/40/40, 30/40/30, other)
   - Recommend: 30/40/30 (aligned with web app for consistency)

5. **Lock kickoff date** (early September 2026)

6. **Get app store accounts ready** (Apple + Google)

---

## Summary (Effort-Based Estimation)

| Item | Value |
|---|---|
| **Technology** | React Native (iOS + Android, one codebase) |
| **Scope** | 100% feature parity with web app v1.2 |
| **Dev-Days** | 68–80 days |
| **Timeline** | 9.5–11.5 weeks (solo dev) |
| **Cost Basis** | **[To be determined by day rate]** |
| **Payment Split** | **30/40/30 (recommended)** |
| **Deliverables** | 2 production apps (iOS + Android), live on app stores |
| **Post-Launch** | 7-day monitoring, first update within 2 weeks |
| **Status** | Effort scope finalized, pricing awaiting day rate decision |

---

## Sign-Off

**Scope Confirmed:**
- ☑ React Native technology stack
- ☑ iOS + Android (both platforms)
- ☑ Customer app + Dealer app (2 apps)
- ☑ Full feature parity with web app v1.2
- ☑ Phase 2 (Sept–Oct 2026)
- ☑ 68–80 developer-days effort
- ☑ 9.5–11.5 week timeline

**Next:** Pricing determination based on day rate + team structure

---

**Document Version:** v1.0  
**Created:** July 9, 2026  
**Status:** Effort Estimation Complete, Awaiting Pricing Decision  
**Prepared by:** Qodeways Technologies Pvt Ltd  

