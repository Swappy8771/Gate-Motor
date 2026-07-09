# Mobile App (Phase 2) — Quick Reference
## React Native iOS + Android | Full Feature Parity with Web App

---

## 🎯 **Quick Overview**

| Item | Details |
|---|---|
| **Technology** | React Native (one codebase for iOS + Android) |
| **Apps** | 2 separate apps (Customer App + Dealer App) |
| **Features** | 100% feature parity with web app v1.2 |
| **Phase** | Phase 2 (Post web launch, Sept–Oct 2026) |
| **Kickoff** | September 2, 2026 (4 days after web launch) |
| **Go-Live** | Mid-to-late October 2026 |
| **Timeline** | 9.5–11.5 weeks (solo dev) / 7–8 weeks (team of 2–3) |
| **Dev-Days** | 68–80 days of development |
| **Buffer** | 4–5 days included for testing & bug fixes |

---

## 📋 **Features Included**

### Customer App ✅
- ✅ Product catalog (browse, search, filter, sort)
- ✅ Product reviews & ratings (view, submit)
- ✅ Shopping cart (add, remove, quantity control)
- ✅ Checkout with address management
- ✅ Razorpay payments (UPI, cards, net banking, EMI)
- ✅ Order management (history, detail, tracking, cancel)
- ✅ Order tracking with AWB
- ✅ **Push notifications** (order status, email reminders)
- ✅ Wishlist / save-for-later
- ✅ User profile & address management
- ✅ Offline mode (browse cached products)
- ✅ Notifications history & settings
- ✅ Security: reCAPTCHA on auth, SSL pinning, token encryption

### Dealer App ✅
- ✅ Dealer registration with GST & documents
- ✅ Email verification
- ✅ Admin approval workflow (PENDING → APPROVED → REJECTED)
- ✅ Account approval status page
- ✅ Product catalog (with dealer-specific pricing after approval)
- ✅ Shopping cart & checkout (at dealer pricing)
- ✅ Razorpay payments (same as customer)
- ✅ Order management (dealer view)
- ✅ Same notifications as customer
- ✅ Profile & account management

---

## 🛠️ **Technology Stack**

| Layer | Technology |
|---|---|
| **Frontend Framework** | React Native (cross-platform) |
| **Language** | TypeScript (optional, recommended) |
| **Navigation** | React Navigation (stack, tabs, deep linking) |
| **State Management** | Redux or Context API |
| **HTTP Client** | Axios |
| **Form Validation** | React Hook Form + Zod |
| **Server State** | React Query / TanStack Query |
| **Payment** | Razorpay React Native SDK |
| **Push Notifications** | Firebase Cloud Messaging (FCM) |
| **Local Storage** | AsyncStorage (for offline mode) |
| **Build & Deploy** | EAS Build (Expo Application Services) |
| **Backend** | Same REST APIs as web app (no changes needed) |

---

## ⏱️ **Timeline at a Glance**

```
WEB LAUNCH: Aug 22–29, 2026
   ↓
MOBILE KICKOFF: Sept 2, 2026 (4-day gap for web stability)
   ↓
DEVELOPMENT: Sept 2 – Oct 31, 2026 (10 weeks)
   ├─ Week 1–2: Setup, auth, catalog
   ├─ Week 3–4: Cart, checkout, payments
   ├─ Week 5–6: Orders, reviews, notifications
   ├─ Week 7–8: Dealer features, polish
   ├─ Week 9: Testing, optimization
   └─ Week 10: App store submission & approval
   ↓
EXPECTED GO-LIVE: Mid-to-late October 2026
```

---

## 📊 **Effort Breakdown (by Module)**

| Module | Dev-Days | Weeks |
|---|---|---|
| Project setup & navigation | 3–4 | 0.5 |
| Authentication | 5–6 | 1 |
| Product catalog & search | 8–10 | 1.5 |
| Cart & checkout | 4–5 | 0.75 |
| Payments & orders | 5–6 | 1 |
| Order tracking | 4–5 | 0.75 |
| Reviews & ratings | 5–6 | 1 |
| Push notifications (mobile-only) | 4–5 | 0.75 |
| Wishlist & offline | 3–4 | 0.5 |
| Dealer features | 5–6 | 1 |
| UI/UX polish & animations | 4–5 | 0.75 |
| Testing (unit, device, integration) | 5–6 | 1 |
| App store submission & setup | 2–3 | 0.5 |
| Buffer & bug fixes | 4–5 | 0.75 |
| **TOTAL** | **68–80 days** | **9.5–11.5 weeks** |

---

## 🚀 **What's NOT Included**

❌ Admin app (admin dashboard stays on web)  
❌ In-app returns (Phase 2+)  
❌ Coupon codes (Phase 2+)  
❌ Live courier API tracking (Phase 2+)  
❌ Multi-language translator in app (Phase 2+)  
❌ In-app analytics (Phase 2+)  
❌ Loyalty programs (Phase 2+)  

---

## 💼 **Prerequisites & Setup**

### Client Needs to Provide
✅ Apple Developer account ($99/year)  
✅ Google Play Developer account ($25 one-time)  
✅ App store certificates & signing keys  
✅ Firebase project (for push notifications)  
✅ Brand assets (icons, colors, splash screen)  

### Team Needed
✅ React Native developer (1 person or team)  
✅ QA tester (device testing, iOS + Android)  
✅ (Optional) Mobile UX designer  

---

## 📱 **Why React Native?**

✅ **One codebase** — Write once, run on iOS + Android  
✅ **Code reuse** — Share logic with web app (API client, validation, business logic)  
✅ **Faster development** — ~40% faster than native (iOS + Android separate)  
✅ **Cost-effective** — One developer can handle both platforms  
✅ **Large community** — Meta (Facebook) backed, many libraries available  
✅ **Performance** — Good enough for e-commerce (not game-grade, but smooth)  
✅ **Familiar for web devs** — JavaScript/TypeScript, React patterns  

**Why NOT native (iOS Swift + Android Kotlin)?**
❌ Double the development time (separate codebases)  
❌ Need 2 specialized developers (expensive)  
❌ Longer timeline (14+ weeks instead of 10)  
❌ Higher maintenance cost  

**Why NOT Flutter?**
⚠️ Different language ecosystem (Dart)  
⚠️ Less code sharing with web team  
⚠️ Similar effort to React Native, but different tech stack  

---

## 🎯 **Success Criteria**

### Launch Checklist
- [ ] Both apps (Customer + Dealer) live on app stores
- [ ] All v1.2 features working on iOS 13+ & Android 8+
- [ ] Zero critical bugs (crashes, payment issues)
- [ ] App launches in <3 seconds
- [ ] Tested on real devices (not just simulators)
- [ ] Apple App Store & Google Play approval obtained
- [ ] Push notifications working
- [ ] Offline mode functional
- [ ] Security: SSL pinning, token encryption active

### Post-Launch
- [ ] 7-day monitoring for hot-fixes
- [ ] First update within 2 weeks (if needed)
- [ ] App store optimization (ratings, reviews, screenshots)

---

## 📈 **Scaling Options**

### Option 1: Solo Developer (Most Cost-Effective)
- **Timeline:** 9.5–11.5 weeks
- **Cost:** Single developer salary
- **Risk:** Single point of failure

### Option 2: Small Team (Balanced)
- **Timeline:** 7–8 weeks (20% faster)
- **Team:** 2–3 developers + QA
- **Cost:** Higher, but faster delivery

### Option 3: Distributed Team (Fastest)
- **Timeline:** 6–7 weeks (fastest)
- **Team:** Lead dev + feature dev + QA + designer
- **Cost:** Highest, but production-grade quality

---

## ⚠️ **Risks & Mitigation**

| Risk | Mitigation |
|---|---|
| **App store rejection** | Review guidelines early, submit by Oct 15 |
| **Razorpay mobile SDK issues** | Test early (Week 4), have web payment fallback |
| **Performance issues** | Optimize images, test on low-end devices |
| **iOS/Android signing issues** | Setup developer accounts & certs by Week 1 |
| **Firebase FCM problems** | Test push notifications early (Week 7) |
| **Device fragmentation** | Test on 3+ real devices per platform |

---

## 📞 **Next Steps**

1. **Confirm this scope** ✅ (Full feature parity)
2. **Set Phase 2 kickoff date** (early Sept 2026)
3. **Setup app store accounts** (Apple + Google)
4. **Prepare Firebase project** (Cloud Messaging)
5. **Allocate React Native developer(s)**
6. **Create project repository** (GitHub)
7. **Begin development** (Sept 2, 2026)

---

## 💰 **Cost & Budget** (To Be Defined)

**Coming Soon:**
- Developer day rate estimate
- Total project cost (solo vs team)
- Milestone-based pricing
- App store submission costs (Apple $99/yr, Google $25 one-time)
- Firebase & server costs (minimal, reuse web infrastructure)

---

**Status:** ✅ Scope Finalized  
**Next:** Cost estimation  
**Timeline:** Ready to develop Sept 2, 2026  

---

**Document Version:** v1.0  
**Created:** July 9, 2026  
**Prepared by:** Qodeways Technologies Pvt Ltd

