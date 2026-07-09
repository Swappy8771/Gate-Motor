# Mobile App Estimation v1.0
## React Native iOS + Android | Phase 2 (Post Web Launch)

**Document Date:** July 9, 2026  
**Project:** Gate Motor E-Commerce Platform — Mobile App  
**Technology:** React Native (cross-platform)  
**Platforms:** iOS + Android  
**Phase:** Phase 2 (September–October 2026)  
**Scope:** Full feature parity with web app (v1.2)  

---

## Executive Summary

Building a **React Native mobile app** with the same features as the web application (customer + dealer portals). Single codebase for iOS and Android, Phase 2 launch 4–6 weeks after web app goes live.

**Scope:** Full feature parity with web app v1.2  
**Platforms:** iOS + Android (one codebase)  
**Apps:** 2 separate apps (Customer app + Dealer app)  
**Timeline:** 8–10 weeks from kickoff  
**Start Date:** Early September 2026 (after web launch ~Aug 22–29)  
**Go-Live:** Mid–late October 2026  

---

## Mobile App Scope

### What's Included (Customer App)

#### 1. **Authentication & User Management**
- ✅ Customer registration (email, phone, password)
- ✅ Email verification (link-based)
- ✅ Login/logout (JWT)
- ✅ Profile management (name, phone, email, password change)
- ✅ Address management (multiple addresses, default selection)
- ✅ Account settings & preferences

#### 2. **Product Catalog**
- ✅ Product listing with pagination
- ✅ Category browsing
- ✅ Product search (by name, SKU, specs)
- ✅ Filter (by category, price range, availability)
- ✅ Sort (by name, price, rating, new)
- ✅ Product detail page
  - ✅ Images gallery (swipe, zoom)
  - ✅ Specifications (key/value)
  - ✅ Retail price display
  - ✅ Stock status (in-stock / out-of-stock)
  - ✅ Product reviews & ratings (avg rating, review list)
  - ✅ Add to cart / add to wishlist buttons

#### 3. **Shopping Cart & Checkout**
- ✅ Server-side persistent cart (login required)
- ✅ Add/remove items
- ✅ Quantity controls (with stock validation)
- ✅ Cart total calculation
- ✅ Address selection (pick from saved addresses or add new)
- ✅ Price breakdown (subtotal + GST)
- ✅ Free shipping (₹0)

#### 4. **Payments**
- ✅ Razorpay mobile SDK integration
- ✅ Payment methods: UPI, cards, net banking, EMI (3/6/12 months)
- ✅ Payment status feedback
- ✅ Webhook verification

#### 5. **Order Management**
- ✅ Order placement confirmation
- ✅ Order history (list all orders)
- ✅ Order detail page
  - ✅ Order number, date, total
  - ✅ Items ordered (name, qty, price)
  - ✅ Delivery address
  - ✅ Order status timeline (PLACED → CONFIRMED → SHIPPED → DELIVERED)
  - ✅ Order cancellation (if eligible, pre-shipping)
- ✅ Order tracking with AWB
  - ✅ Courier name, AWB number display
  - ✅ Open external courier tracking link

#### 6. **Product Reviews & Ratings** (v1.2)
- ✅ Submit review (star rating + comment)
- ✅ View reviews on product page
- ✅ Average rating display
- ✅ Review list with user details
- ✅ reCAPTCHA protection on review submission

#### 7. **Notifications** (Mobile-specific)
- ✅ Push notifications for order status updates (CONFIRMED, SHIPPED, DELIVERED)
- ✅ Order confirmation push notification
- ✅ Order cancellation notification
- ✅ Email reminders for non-buyers (also shown as push if opted in)
- ✅ Notification history/log
- ✅ Notification settings (enable/disable by type)

#### 8. **Additional Features**
- ✅ Wishlist / save-for-later
- ✅ Recently viewed products
- ✅ Search history
- ✅ Offline mode (browse cached products, view past orders)
- ✅ Google My Business link (direction to showroom)
- ✅ Contact page (phone, email, location)
- ✅ About us page
- ✅ Legal pages (Privacy, Terms, Return Policy)

#### 9. **Security & Compliance**
- ✅ reCAPTCHA v3 on registration/login
- ✅ Secure payment handling
- ✅ JWT token management
- ✅ SSL/TLS for all API calls
- ✅ Encrypted local storage (sensitive data)

---

### What's Included (Dealer App)

#### 1. **Authentication**
- ✅ Dealer registration with GST number + document upload
- ✅ Email verification
- ✅ Admin approval workflow
- ✅ Account approval status page (PENDING / APPROVED / REJECTED)
- ✅ Login/logout (JWT)
- ✅ Profile management

#### 2. **Product Catalog (Dealer View)**
- ✅ Same as customer app
- ✅ **Dealer-specific pricing display** (only for APPROVED dealers)
- ✅ Product search & filter
- ✅ Stock availability

#### 3. **Ordering (Dealer)**
- ✅ Add products to cart at dealer pricing
- ✅ Bulk quantity support (larger order quantities allowed)
- ✅ Checkout with dealer address
- ✅ Payment methods (same as customer)
- ✅ Order confirmation

#### 4. **Order Management (Dealer)**
- ✅ Dealer order history
- ✅ Order details with status timeline
- ✅ Order tracking with AWB
- ✅ Cancel order (if eligible)

#### 5. **Dealer Dashboard**
- ✅ Account approval status
- ✅ Profile management (GST, address, documents)
- ✅ Order history summary
- ✅ Account settings

#### 6. **GST & Compliance**
- ✅ reCAPTCHA on registration
- ✅ GST document upload (initial registration)
- ✅ Admin approval workflow

---

### What's NOT Included (Out of Scope)

❌ **Admin app** — Admin features stay on web only (product management, dealer approval, inventory, reports)  
❌ **Nested categories** — Same flat structure as web  
❌ **In-app returns** — Returns handled offline (Phase 2+)  
❌ **Coupon codes** — Phase 2+ feature  
❌ **Live courier API tracking** — AWB link only (Phase 2+)  
❌ **Loyalty programs** — Phase 2+  
❌ **In-app analytics** — Admin dashboard on web only  
❌ **Multi-currency** — INR only  
❌ **Multi-language translator** — Phase 2+ (can add later via in-app webview or separate feature)  

---

## Technical Architecture

### Frontend (React Native)

**Technology Stack:**
- React Native (latest stable)
- React Navigation (routing & stack management)
- Redux or Context API (state management)
- Axios (HTTP client)
- React Hook Form + Zod (form validation)
- React Query (server state, caching)
- Razorpay React Native SDK
- Firebase Cloud Messaging (push notifications)
- AsyncStorage (offline cache, local storage)
- React Native Image Picker (for profile photos, document upload)

**Folder Structure:**
```
mobile/
├── src/
│   ├── screens/          # Screen components (auth, catalog, cart, etc.)
│   ├── components/       # Reusable components (buttons, cards, etc.)
│   ├── navigation/       # Navigation stack, bottom tabs, deep linking
│   ├── api/              # API client setup, endpoints
│   ├── store/            # Redux store or Context setup
│   ├── utils/            # Helpers, formatters, validators
│   ├── assets/           # Images, icons, fonts
│   └── config/           # Firebase, Razorpay, env config
├── app.json              # App metadata (name, version, icons)
├── package.json          # Dependencies
└── eas.json              # EAS Build config (for iOS/Android builds)
```

### Backend (Shared with Web)

**Same APIs as web app** (no new backend needed)
- REST endpoints already built for web app
- Mobile app makes same API calls
- Push notification service added (Firebase Cloud Messaging integration)

---

## Detailed Feature Breakdown & Effort

### Module-by-Module Estimation

| # | Module | Features | Dev-Days | Notes |
|---|---|---|---|---|
| 1 | **Project Setup** | React Native init, navigation, state management, Firebase setup | 3–4 | Boilerplate, CI/CD (EAS Build) |
| 2 | **Authentication** | Register, login, email verification, JWT, profile, addresses | 5–6 | reCAPTCHA integration, form validation |
| 3 | **Product Catalog** | List, search, filter, sort, detail page, images gallery | 8–10 | Image optimization, infinite scroll, offline caching |
| 4 | **Shopping Cart** | Add/remove items, quantity control, price calc | 4–5 | Server-side sync, stock validation |
| 5 | **Checkout** | Address selection, payment flow, order placement | 5–6 | Razorpay mobile SDK, payment verification |
| 6 | **Order Management** | Order list, detail, tracking, cancellation | 4–5 | AWB tracking, external link handling |
| 7 | **Reviews & Ratings** | Submit review, display, moderation (read-only on mobile) | 5–6 | Review submission with reCAPTCHA |
| 8 | **Push Notifications** | Order status notifications, reminder notifications, history | 4–5 | **NEW for mobile:** Firebase FCM setup, local notifications |
| 9 | **Wishlist** | Save/unsave products, wishlist view, move to cart | 3–4 | Simple feature, server sync |
| 10 | **Dealer Features** | Dealer registration, approval status, dealer pricing, ordering | 5–6 | Same flows as customer, but with dealer context |
| 11 | **Offline Mode** | Cache products, cache orders, browse offline | 3–4 | AsyncStorage caching, sync on reconnect |
| 12 | **UI/UX Polish** | Animations, transitions, dark mode, accessibility | 4–5 | Mobile-first UX, responsive layouts |
| 13 | **Testing** | Unit tests, integration tests, device testing (iOS + Android) | 5–6 | Jest, testing-library, manual testing on real devices |
| 14 | **App Store Setup** | iOS App Store, Google Play Store submission, app icons, screenshots | 2–3 | Certificate setup, store listings, review process |
| 15 | **Security & Hardening** | SSL pinning, token security, data encryption | 2–3 | OWASP mobile guidelines |
| 16 | **Documentation & Handover** | Code docs, deployment guide, version control | 1–2 | GitHub repo, README, deployment process |
| 17 | **Buffer & Bug Fixes** | Contingency for unexpected issues, polish, optimizations | 4–5 | Real-device testing reveals issues |
| **TOTAL** | | | **68–80 days** | ~9.5–11.5 weeks (6-day weeks) |

---

## Timeline Breakdown

### Phase 2 Schedule (Post Web Launch)

**Web Launch:** August 22–29, 2026  
**Mobile Kickoff:** September 2, 2026 (4 days after web launch, for stability)  

### Week-by-Week Mobile Development Schedule

```
WEEK 1 (Sept 2–8)
├─ Project setup, React Native boilerplate, navigation stack
├─ Firebase configuration (Cloud Messaging, authentication)
├─ Development environment setup (iOS + Android)
└─ Effort: 3–4 days

WEEK 2 (Sept 9–15)
├─ Authentication (register, login, email verification)
├─ JWT token management & refresh logic
├─ User profile & address management
├─ reCAPTCHA integration
└─ Effort: 5–6 days

WEEK 3 (Sept 16–22)
├─ Product catalog (list, detail, search, filter, sort)
├─ Image gallery with zoom/swipe
├─ Offline product caching
├─ Recently viewed products
└─ Effort: 8–10 days

WEEK 4 (Sept 23–29)
├─ Shopping cart (add, remove, quantity, totals)
├─ Cart persistence (server sync)
├─ Stock validation
├─ Wishlist feature
└─ Effort: 4–5 days

WEEK 5 (Sept 30–Oct 6)
├─ Checkout flow (address selection, price breakdown)
├─ Razorpay payment integration (mobile SDK)
├─ Payment verification & webhook handling
├─ Order placement confirmation
└─ Effort: 5–6 days

WEEK 6 (Oct 7–13)
├─ Order management (history, detail, timeline)
├─ Order tracking with AWB
├─ Order cancellation
├─ Reviews & ratings (view, submit)
└─ Effort: 4–5 days

WEEK 7 (Oct 14–20)
├─ Push notifications (Firebase FCM setup)
├─ Order status notifications
├─ Notification history & settings
├─ Email reminder notifications
├─ Offline mode implementation
└─ Effort: 4–5 days

WEEK 8 (Oct 21–27)
├─ Dealer app flows (registration, approval, dealer pricing)
├─ Dealer ordering (same as customer, but with dealer context)
├─ Dealer profile & order history
├─ UI/UX polish, animations, dark mode
└─ Effort: 5–6 days

WEEK 9 (Oct 28–Nov 3)
├─ Testing (unit, integration, device testing)
├─ Bug fixes and optimizations
├─ Performance tuning
├─ Security hardening (SSL pinning, token encryption)
└─ Effort: 5–6 days

WEEK 10 (Nov 4–10)
├─ App Store submission prep (iOS App Store, Google Play)
├─ App icons, screenshots, store listings
├─ App review process (Apple & Google)
├─ Final polish & edge case testing
└─ Effort: 2–3 days (plus review queue time)

FINAL (Nov 10+)
├─ App Store review results
├─ App store approvals & live launch
├─ Post-launch monitoring & hot-fixes
└─ Effort: 1–2 days monitoring

TOTAL TIMELINE: 9.5–11.5 weeks
TARGET GO-LIVE: Mid-late October 2026 (assuming smooth app store reviews)
```

---

## Dependencies & Prerequisites

### From Web App

✅ **Stable REST APIs** — Mobile app calls same web APIs  
✅ **Firebase setup** — Cloud Messaging for push notifications  
✅ **Razorpay account** — Mobile SDK configuration  
✅ **Design system/assets** — Logo, colors, brand guidelines  
✅ **SSL certificate** — For API calls over HTTPS  

### From Client

✅ **App store accounts** — Apple Developer ($99/year) + Google Play Developer ($25 one-time)  
✅ **Apple Developer certificate** — For iOS app signing  
✅ **Android keystore** — For APK signing  
✅ **Firebase project** — For Cloud Messaging  
✅ **Brand assets** — App icons (iOS + Android), splash screen, screenshots  

### Team & Resources

✅ **React Native Developer** — Lead development (solo or with team)  
✅ **Mobile QA Tester** — Device testing (iOS + Android real devices)  
✅ **Designer (optional)** — Mobile UX/UI if different from web  

---

## Development Assumptions

1. **Code Reusability:** Share business logic (API client, validation, state management) with web app where possible
2. **API Readiness:** Web app REST APIs are stable and documented
3. **Web Launch Success:** Web app launched successfully by Aug 22–29, APIs proven in production
4. **Solo or Small Team:** Estimation assumes 1 React Native dev (or team can scale down timeline)
5. **Offline Mode:** Simple caching (not complex sync/conflict resolution)
6. **Push Notifications:** Basic implementation (order status, not complex scheduling)
7. **App Store Reviews:** ~1–2 weeks for each app store (Apple + Google) to approve
8. **No Backend Changes:** Use same APIs as web; no new backend endpoints

---

## Risk Mitigation

### Risks & Mitigation Strategies

| Risk | Impact | Mitigation |
|---|---|---|
| **Razorpay mobile SDK issues** | Payment flow broken | Test early in Week 4, have fallback web payment | 
| **App Store rejection** | Delayed launch | Review guidelines early, submit for review by Oct 15 |
| **Performance issues** | App slow/crashes | Optimize images, lazy-load lists, test on low-end devices |
| **iOS certificate/signing issues** | Can't build iOS app | Set up Apple Developer account & certificates by Week 1 |
| **Firebase FCM setup problems** | Push notifications fail | Test push early (Week 7), have email fallback |
| **API changes in web app** | Mobile breaks | Freeze API changes after web launch, version APIs |
| **Device fragmentation** | Works on some phones, not others | Test on 3+ real devices per platform |

### Contingency Buffers

- **4–5 days buffer** built into timeline (Weeks 9–10)
- **Graceful degradation:** If time runs short, defer features (see Phase 2+ below)

---

## Phased Launch Strategy (If Needed)

**If timeline gets tight, Phase launch as follows:**

### MVP (Minimum) — Week 7 Launch
✅ Product catalog  
✅ Cart & checkout  
✅ Razorpay payments  
✅ Order management  
✅ Basic notifications  

### Phase 1 — Week 8–9
✅ Reviews & ratings  
✅ Wishlist  
✅ Dealer app  
✅ Offline mode  

### Phase 2+ (Post-Launch Updates)
✅ In-app returns  
✅ Coupon codes  
✅ Live courier tracking  
✅ Multi-language translator  
✅ In-app analytics  

---

## Success Criteria & Definition of Done

### Launch Criteria

✅ Both apps (Customer + Dealer) available on app stores  
✅ All v1.2 features functional on iOS and Android  
✅ Zero critical bugs (crashes, payment failures, login issues)  
✅ Performance: App launches in <3 seconds, lists load in <2 seconds  
✅ Security: OWASP mobile top 10 compliance, SSL pinning active  
✅ Tested on: iOS 13+, Android 8+, real devices (not just simulators)  
✅ App store compliance: Both Apple App Store & Google Play store approval  
✅ Documentation: Deployment guide, API integration docs, release notes  

### Post-Launch Support

✅ 7-day post-launch monitoring (bug fixes, crash fixes)  
✅ First update within 2 weeks (minor fixes, performance improvements)  
✅ Ongoing app store optimization (ratings, reviews, screenshots)  

---

## Team Structure Recommendation

### Option 1: Solo Developer (Most Efficient)
- **1 React Native developer** (can build both iOS & Android from one codebase)
- **Timeline:** 9.5–11.5 weeks (as estimated above)
- **Works best:** If developer experienced with React Native + Razorpay + Firebase

### Option 2: Small Team (Faster Parallel Work)
- **1 React Native dev** (frontend)
- **1 React Native dev** (features, polish)
- **1 QA tester** (device testing)
- **Timeline:** 7–8 weeks (20% faster, can run parallel)

### Option 3: Distributed Team
- **1 Lead React Native dev** (architecture, core)
- **1 Mobile developer** (features, UI components)
- **1 QA engineer** (testing, app store submission)
- **Timeline:** 6–7 weeks (fastest, but higher coordination overhead)

---

## Technology Comparison: Why React Native?

| Aspect | React Native | Native | Flutter |
|---|---|---|---|
| **Development time** | ⭐⭐⭐⭐ Fastest (one codebase) | ⭐⭐ Slowest (separate iOS/Android) | ⭐⭐⭐⭐ Fast |
| **Code reuse** | ⭐⭐⭐⭐ High (shared logic with web) | ⭐ None | ⭐⭐ Low |
| **Performance** | ⭐⭐⭐ Good | ⭐⭐⭐⭐ Best | ⭐⭐⭐⭐ Great |
| **Community** | ⭐⭐⭐⭐ Large (Meta, many libs) | ⭐⭐⭐⭐ Largest | ⭐⭐⭐ Growing |
| **Hiring** | ⭐⭐⭐⭐ Easy (JS devs) | ⭐⭐ Hard (Swift/Kotlin) | ⭐⭐⭐ Growing |
| **Maintenance cost** | Low (one team) | High (two teams) | Low (one team) |

**Conclusion:** React Native is the best choice for this project (budget-friendly, code reuse, timeline efficiency).

---

## File Structure Delivered

```
Gate-Motor/
├── mobile/                          # React Native project
│   ├── src/
│   │   ├── screens/                # Screens (Auth, Catalog, Cart, etc.)
│   │   ├── components/             # Reusable components
│   │   ├── navigation/             # React Navigation stacks & tabs
│   │   ├── api/                    # API client, endpoints
│   │   ├── store/                  # Redux/Context state management
│   │   ├── utils/                  # Helpers, validators, formatters
│   │   ├── assets/                 # Images, icons, fonts
│   │   ├── config/                 # Firebase, Razorpay, env
│   │   └── App.tsx                 # Root component
│   ├── ios/                        # iOS native code (Xcode project)
│   ├── android/                    # Android native code (Gradle project)
│   ├── app.json                    # App metadata
│   ├── eas.json                    # EAS Build config
│   ├── package.json                # Dependencies
│   ├── README.md                   # Setup & deployment guide
│   └── .env.example                # Environment template
│
├── docs/
│   ├── MOBILE-APP-ESTIMATION-v1.0.md  # This file
│   ├── MOBILE-APP-API-GUIDE.md         # API integration reference
│   └── MOBILE-APP-DEPLOYMENT.md        # iOS/Android app store guide
│
└── [web app files...]
```

---

## Next Steps

1. **Confirm scope** ✅ (This document)
2. **Finalize timeline** (when to start Phase 2)
3. **Get app store accounts ready** (Apple + Google developer accounts)
4. **Prepare Firebase project** (Cloud Messaging setup)
5. **Allocate React Native developer** (solo or team)
6. **Setup mobile dev environment** (Xcode, Android Studio, Node.js)
7. **Create project repository** (GitHub, with CI/CD setup)
8. **Begin Phase 2 development** (early September 2026)

---

## Sign-Off

**Scope Confirmed:**
- ☐ Full feature parity with web app v1.2
- ☐ React Native (iOS + Android)
- ☐ Customer app + Dealer app
- ☐ Phase 2 (Sept–Oct 2026)
- ☐ Timeline: 9.5–11.5 weeks

**Next:** Cost & budget estimation (to be created separately)

---

**Document Version:** v1.0  
**Created:** July 9, 2026  
**Status:** Ready for Development  
**Prepared by:** Qodeways Technologies Pvt Ltd  

