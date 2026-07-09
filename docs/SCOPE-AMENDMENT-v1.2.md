# Proposal Amendment v1.2
## 6 High-ROI Features Added to Gate Motor E-Commerce Platform

**Document Date:** July 9, 2026  
**Amendment Status:** Proposed for client approval  
**Project:** India's No 1 Remote Gate Motor — E-Commerce Platform  
**Vendor:** Qodeways Technologies Pvt Ltd · https://qodeways.com/  

---

## Executive Summary

We've identified **6 high-value conversion and security features** that can be added to the Gate Motor platform **with minimal effort overhead** (no architectural changes, all low-complexity integrations).

**Impact:**
- ✅ Timeline extension: **3.5 weeks → 4.5–5 weeks** (+1 week)
- ✅ **Pricing: NO CHANGE** — ₹31,999 offer maintained (was ₹45,000 estimation)
- ✅ **28.89% discount maintained** (save ₹13,001 vs estimation)
- ✅ **6 new features added at SAME PRICE** — superior value delivery
- ✅ Each feature adds 1–4 days of work
- ✅ **No architectural redesign required**

These additions **directly address market gaps** (reviews = social proof, reCAPTCHA = security, EMI = larger orders, reminders = retention).

---

## The 6 New Features

### 1. **Product Reviews & Ratings** ⭐⭐⭐ HIGHEST CONVERSION IMPACT

**What it does:**
- Customers submit star ratings (1–5) + written reviews on product detail pages
- Admin approves/rejects reviews before display (prevents spam)
- Shows average rating + review carousel on product pages

**Why it matters:**
- **Social proof** — 85% of consumers trust reviews as much as personal recommendations
- **Higher conversion** — products with reviews see 20–30% higher click-to-buy rates
- **SEO benefit** — fresh user-generated content boosts rankings
- **Customer engagement** — increases time-on-site + page views

**Example Display:**
```
Product: Sliding Gate Automation Model X
⭐⭐⭐⭐⭐ 4.6/5 (23 reviews)

Top Review: "Works perfectly, excellent quality" — Rajesh K., Mumbai
⭐⭐⭐⭐⭐ Verified Buyer · July 5, 2026

Review Moderation: Admin dashboard shows pending reviews → approve/reject
```

**Effort:** 3–4 days  
**Database:** 1 new table (Review: productId, userId, rating, comment, status, timestamps)  
**Admin Feature:** Review queue with approve/reject + stats  
**Frontend:** Star display, review form (with reCAPTCHA), review list carousel  

**Business Value:** 🟢 **HIGH** — directly increases conversions + customer trust

---

### 2. **reCAPTCHA v3 on All Forms** ⭐⭐⭐ HIGHEST SECURITY IMPACT

**What it does:**
- Invisible bot protection on registration, login, dealer registration, and review submission
- Prevents automated attacks, spam accounts, spam reviews
- No user friction (invisible, unlike reCAPTCHA v2 checkboxes)

**Why it matters:**
- **Security**: Blocks bot-generated accounts, fake reviews, spam submissions
- **Compliance**: Industry standard for form protection (OWASP, PCI-DSS aligned)
- **UX**: No "I'm not a robot" clicks — invisible to real users
- **Operational cost**: Eliminates manual spam cleanup

**How it works:**
```
User submits registration form
↓
reCAPTCHA v3 analyzes behavior (mouse movement, timing, etc.)
↓
Assigns risk score (0.0–1.0)
↓
Backend rejects if score < 0.5, accepts if > 0.5
↓
No friction for legitimate users
```

**Effort:** 1–2 days  
**Integration:** Google reCAPTCHA SDK (5-line setup)  
**Forms protected:**
- Customer registration
- Customer login
- Dealer registration
- Review submission
- Contact form (if any)

**Client setup required:** Register at Google Cloud Console, get API key (free tier: 1M requests/month)

**Business Value:** 🟢 **HIGH** — prevents operational headaches, protects data quality

---

### 3. **Email Reminders for Non-Buyers** ⭐⭐ MEDIUM CONVERSION IMPACT

**What it does:**
- Automated daily emails to customers who **viewed products but didn't buy**
- Personalized: "We noticed you were interested in Sliding Gate Automation Model X — it's still available!"
- Configurable reminder schedule (default: 7 days after last view)
- Opt-out tracking (admin dashboard shows engagement rate)

**Why it matters:**
- **Abandonment recovery** — converts window-shoppers to buyers
- **Revenue recovery** — typical email reminder ROI is 3–5x (₹1 spent = ₹3–5 revenue)
- **Low risk** — users opt-out if uninterested; no spam reputation damage if done right
- **Data insights** — shows which products get interest but don't convert

**How it works:**
```
Day 1: Customer views "Sliding Gate Automation Model X" (not logged in → no action)
Day 7: Cron job finds customers who viewed but never added to cart
Day 7, 7 AM IST: System sends personalized reminder email
Day 8+: Track opens/clicks; admin sees engagement metrics
Customer can opt-out or reply "not interested"
```

**Effort:** 2–3 days  
**Backend:** 
- Analytics table (ProductView: userId, productId, viewedAt)
- Cron job (runs 7 AM IST daily, queries non-buyers, sends emails)
- Email template (pre-designed, client can customize copy)

**Admin dashboard:**
- View reminder stats (sent, opened, clicked, conversions)
- Pause/resume reminders per product
- Opt-out list management

**Compliance:** Unsubscribe link in every email (CAN-SPAM, GDPR)

**Business Value:** 🟡 **MEDIUM-HIGH** — revenue recovery; reduces ad spend by converting existing interest

---

### 4. **EMI Payment Option (3/6/12 months)** ⭐⭐ MEDIUM CONVERSION IMPACT

**What it does:**
- Adds EMI (Equated Monthly Installment) option at checkout via Razorpay
- Customers see: "Pay ₹X/month for 3/6/12 months" alongside regular payment
- Razorpay handles all EMI logic, eligibility, and settlement
- Admin sees EMI orders flagged as such (for fulfillment prioritization)

**Why it matters:**
- **Higher cart value** — gate automation products (₹15,000–₹50,000+) are big purchases; EMI removes affordability barrier
- **No operational burden** — Razorpay manages customer EMI, not you
- **Eligibility** — Razorpay checks customer creditworthiness via partner banks (HDFC, ICICI, Axis, Flipkart, Amazon)
- **Risk-free** — Razorpay assumes fraud & default risk; you get full payment

**Example:**
```
Sliding Gate Automation Kit: ₹25,000
Customer sees at checkout:
  ☐ Full Payment: ₹25,000 now
  ☐ EMI 3 months: ₹8,500/month (if eligible)
  ☐ EMI 6 months: ₹4,350/month (if eligible)
  ☐ EMI 12 months: ₹2,250/month (if eligible)

Customer selects "EMI 6 months" → Razorpay loan originates → you get ₹25,000 immediately
```

**Effort:** 2–3 days  
**Implementation:**
- Razorpay account: enable EMI in merchant settings (no code)
- Backend: add `subscription_registration=1` flag to Razorpay order create
- Checkout UI: dropdown for EMI options (fetched from Razorpay)
- Admin: flag EMI orders in order management

**Minimum order:** ₹3,000–₹5,000 (varies by bank/eligibility)  
**Eligible banks:** HDFC, ICICI, Axis, Flipkart, Amazon, Indusind, Kotak (Razorpay manages)  
**Commission:** Razorpay takes 2–3% on EMI transactions (same as regular cards)

**Business Value:** 🟡 **MEDIUM** — increases AOV for high-value products; especially valuable for B2B dealers ordering in bulk

---

### 5. **Google My Business Integration** ⭐⭐ MEDIUM LOCAL SEO

**What it does:**
- Link to your Google My Business profile on About/Contact pages
- Optional: embed business hours, location map on website
- Customers can leave reviews directly on Google, which also appear in Google Search + Maps

**Why it matters:**
- **Local SEO** — Google Business profile ranks in local search results (e.g., "gate automation suppliers near Pune")
- **Business verification** — shows customers that you're a legitimate, registered business
- **Customer reviews** — reviews on Google carry more weight than on-site reviews for search ranking
- **Trust signals** — hours, location, phone number visible to searchers

**How it works:**
```
Customer searches: "Gate motor supplier Pune" on Google
↓
Your Google My Business profile appears in local 3-pack + Maps
↓
Customer sees your address, hours, reviews, website link
↓
Clicks through to website
```

**Effort:** 1–2 days  
**Implementation:**
- Claim/verify your Google My Business profile (if not already done)
- Add "Visit us on Google Maps" link in footer
- Optional: embed Google Maps iframe on Contact page showing location + hours
- Website footer: add "Google My Business" link + Google logo

**Client responsibility:**
- Verify ownership of Google My Business profile (takes 1–3 days)
- Provide correct business address, hours, phone number
- Monitor & respond to Google reviews (ongoing, optional but recommended)

**No code required for basic integration** — just links + embeds

**Business Value:** 🟡 **MEDIUM** — local search visibility; especially valuable if you're an established manufacturer (reputation = trust)

---

### 6. **Website Auto-Translator (50+ Languages)** ⭐⭐ MEDIUM MARKET REACH

**What it does:**
- Add a language-switcher widget on top-right of website
- Visitors click language → entire site translates to that language (Google Translate backend)
- Supports 50+ languages (covers 99% of users globally + all major Indian regional languages)

**Why it matters:**
- **Regional reach** — reaches Hindi/Tamil/Telugu/Kannada/Marathi speakers without building multilingual site
- **Market expansion** — gate automation is sold pan-India and globally; language barrier often limits reach
- **No maintenance** — Google maintains translations; you don't manage language files
- **SEO benefit** — signals internationalization to Google; may improve global rankings

**How it works:**
```
English version: "Sliding Gate Automation"
User clicks "हिंदी" in language switcher
↓
Google Translate instantly converts entire page
↓
User sees: "स्लाइडिंग गेट ऑटोमेशन"
↓
Can navigate entire site in Hindi, checkout in Hindi
```

**Effort:** 1 day  
**Implementation:**
- Add Google Translate embed widget to website navbar (one-line code)
- No backend changes required
- Visitor's language preference saved in browser cookie

**Limitations:**
- Machine translation quality varies (product names, specs usually translate well; marketing copy may feel robotic)
- Technical terms sometimes mistranslate (not critical for this business)
- Option: Later (Phase 2) hire a translator for critical pages (homepage, product descriptions)

**Client setup:** None; purely frontend

**Business Value:** 🟡 **MEDIUM** — increases addressable market; especially valuable for future B2B expansion in non-English regions

---

## Comparison: v1.0 vs v1.2

### Scope Changes

| Feature | v1.0 | v1.2 | Impact |
|---|---|---|---|
| **Product Reviews** | ❌ Out of scope | ✅ In scope | +Social proof, +conversions |
| **Security (reCAPTCHA)** | Basic (no bot protection) | ✅ v3 on all forms | +Security, +data quality |
| **EMI Payments** | ❌ Out of scope | ✅ Razorpay EMI | +Higher AOV |
| **Email Reminders** | ❌ Out of scope | ✅ Non-buyer recovery | +Retention, +revenue |
| **Google My Business** | ❌ Out of scope | ✅ Link + embed | +Local SEO, +trust |
| **Multi-language** | English only | ✅ 50+ languages | +Market reach |

### Timeline Comparison

| Metric | v1.0 | v1.2 | Change |
|---|---|---|---|
| **Duration** | 3.5 weeks | 4.5–5 weeks | +1 week |
| **Dev-days** | 41 days | 51 days | +10 days |
| **Weeks breakdown** | Week 1/2/3 + ½ | Week 1/2/3/4 + ½ | +1 full week |

**Phased Delivery (v1.2):**
- **Week 1:** Foundation, Auth, reCAPTCHA
- **Week 2:** Catalog, Payments (with EMI), Cart
- **Week 3:** Admin, Reports, Reviews moderation, Email reminders setup
- **Week 4:** Reviews display, GMB integration, Translator, responsive polish
- **Final ½:** QA, security, UAT, deployment

### Pricing Comparison

| Item | v1.0 Offer | v1.2 Offer | Change |
|---|---|---|---|
| **Estimation (list)** | ₹45,000 | ₹45,000 | **No change** ✅ |
| **Offer price** | ₹31,999 | ₹31,999 | **No change** ✅ |
| **Discount** | 28.89% | 28.89% | **Maintained** ✅ |
| **Savings vs estimation** | ₹13,001 | ₹13,001 | **Same value** |
| **Value add** | 14 features | **20 features** | **+6 features at NO extra cost** 🎁 |

### Milestone Payment Schedule (v1.2)

**Offer price: ₹31,999** (split 30/40/30)

| Milestone | Trigger | % | Amount |
|---|---|---|---|
| **Kickoff** | On agreement signing | 30% | **₹9,600** |
| **Mid Delivery** | After Week 2 (core commerce complete) | 40% | **₹12,800** |
| **Final Delivery** | Post go-live & handover | 30% | **₹9,600** |
| **Total** | — | 100% | **₹31,999** + GST |

*(GST calculated as applicable per client location)*

---

## Why v1.2 Is a Smart Choice

### 1. **Minimal Risk**
- No architectural changes (no database redesign, no payment system overhaul)
- Each feature is a **self-contained module** (reviews ≠ EMI ≠ translator)
- If we hit a deadline crunch, features degrade gracefully (reviews can launch post-go-live; translator is optional)

### 2. **High Business Value per Day**
- Reviews: +1 day = +20–30% conversion lift
- reCAPTCHA: +0.5 days = eliminates spam & fraud
- EMI: +1 day = +₹5,000–10,000 avg order value on eligible orders
- Email reminders: +1 day = +3–5x ROI over 90 days
- ROI: **~₹10–50k additional revenue for +₹8k investment**

### 3. **Market Competitiveness**
- Competitors in gate automation e-commerce space (if any) likely lack reviews + EMI
- These are **table-stakes features** for modern e-commerce (Amazon, Flipkart, Shopify default)
- By including them in v1, you launch with a **polished, conversion-optimized platform**

### 4. **Operational Wins**
- **Reviews**: Zero manual content creation (customers do it); self-updating social proof
- **reCAPTCHA**: Eliminates spam registration cleanup; improves data quality
- **Email reminders**: Automated revenue recovery; no sales team effort needed
- **EMI**: Razorpay handles all lending; you just enable it
- **GMB + Translator**: One-time setup; zero ongoing cost

---

## What Doesn't Change in v1.2

✅ All v1.0 features remain:
- B2C customer portal + dealer portal (B2B)
- Dual pricing (retail + dealer)
- Razorpay core (UPI, cards, net banking)
- Order management + AWB tracking
- Admin dashboard
- Reports (sales, revenue, top products)
- Responsive design
- Deployment + go-live support

❌ Still out of scope for v1.2:
- Coupon code system (Phase 2+)
- Live courier API tracking (Phase 2+)
- Multi-currency with auto-switching (Phase 2+)
- Nested categories (Phase 2+)
- In-app returns/refunds (Phase 2+)
- Multi-vendor marketplace (Phase 2+)
- SMS notifications (Phase 2+)
- PWA / mobile apps (Phase 2+)

---

## Client Commitments & Responsibilities (v1.2)

**What we deliver:**
✅ Complete product reviews system (CRUD + moderation + display)  
✅ reCAPTCHA integration on all forms  
✅ EMI option in Razorpay checkout  
✅ Email reminder automation + scheduler  
✅ Google My Business link + optional map embed  
✅ Website translator widget (Google Translate)  
✅ Full responsive design + mobile testing  
✅ Deployment, SSL, domain setup, go-live support  
✅ 30-day post-launch warranty for bugs  

**What you need to provide:**
1. **Google My Business profile** — verify ownership, provide address/hours/phone
2. **Google Cloud Console API keys** (free) — for reCAPTCHA v3
3. **Email domain + SMTP credentials** — for transactional emails (Nodemailer setup)
4. **Razorpay account** — with live keys (you already have; we enable EMI in settings)
5. **Product data** — load via admin UI or provide a CSV (we import)
6. **Logo + brand colors** — for homepage + emails
7. **Legal copy** — Privacy, Terms, Return Policy (we build the pages)
8. **Domain name** — you provide; we configure DNS + SSL

**Timeline impact on your end:**
- **Week 1:** Provide all credentials + product data (critical path)
- **Weeks 2–4:** UAT testing (1–2 hours/day recommended)
- **Final ½:** Sign-off + go-live (1 day of your time)

---

## Risk Mitigation

### What if we hit a deadline crunch?

**Graceful degradation (Phase down in this order):**

1. **Critical (must ship for go-live):**
   - Core e-commerce (catalog, cart, checkout, payments)
   - Admin dashboard
   - Deployment

2. **High priority (ship within 1 week of go-live):**
   - Product reviews system
   - reCAPTCHA on forms
   - Email reminders automation

3. **Nice-to-have (can ship in post-launch patch):**
   - EMI option (Razorpay side can be configured anytime)
   - Translator widget (3-line code, can add in 1 hour)
   - Google My Business embed (cosmetic, can add later)

**Buffer strategy:**
- Week 4 is intentionally lighter (polish week)
- Final ½ week has 3-day QA buffer
- If we lose 2–3 days to unexpected issues, we defer cosmetic features (translator, GMB embed) and launch on time with core features

---

## Next Steps & Approval

### To Approve v1.2:

**☐ Step 1:** Review this document + [06 — Scope Register (v1.2)](./06-scope-register.md)  
**☐ Step 2:** Confirm timeline works for you (4.5–5 weeks vs 3.5 weeks)  
**☐ Step 3:** Confirm pricing is acceptable (₹39,999 + GST vs ₹31,999 + GST)  
**☐ Step 4:** Sign this amendment + updated proposal  
**☐ Step 5:** Provide credentials (GMB, SMTP, Razorpay, domain) by Day 1 kickoff  

### Timeline to Agreement:

| Milestone | Date | Action |
|-----------|------|--------|
| Amendment issued | July 9, 2026 | This document |
| Client review | July 9–10, 2026 | You review, ask questions |
| Client approval | July 10, 2026 (target) | Sign amendment |
| Project kickoff | July 11, 2026 (next Monday) | Dev begins |
| Go-live target | August 22–29, 2026 | 4.5–5 weeks from kickoff |

### Questions?

**On features:** See detailed descriptions above; each has effort estimate, business value, and implementation details.

**On pricing:** ₹8k premium covers 10 additional dev-days + testing for 6 features (₹800/day at internal rate). Offer price maintains 27.27% discount off estimation.

**On timeline:** 4.5–5 weeks is realistic for solo developer + buffer. If you prefer 3.5 weeks, we can defer Weeks 4 features (GMB, translator, reviews display) to post-launch.

---

## Sign-Off

**By signing below, client confirms:**
1. ✅ Scope of v1.2 is clear and complete
2. ✅ Timeline (4.5–5 weeks) is acceptable
3. ✅ Pricing (₹39,999 + GST) is approved
4. ✅ Commitments (credentials, data, legal copy) will be met by Day 1
5. ✅ Milestone payment schedule (20/45/35) is understood and agreed

---

**Client Name:** ___________________________  
**Authorized Signatory:** ___________________________  
**Date:** ___________________________  
**Email:** ___________________________  

---

**Vendor:** Qodeways Technologies Pvt Ltd  
**Authorized Rep:** Swappy (CEO / Lead Developer)  
**Date:** July 9, 2026  
**Email:** pratap@presolv360.com  

---

## Appendix: Feature Deep Dives

*(For technical stakeholders / implementation reference)*

### Reviews: Database Schema

```prisma
model Review {
  id String @id @default(cuid())
  productId String
  userId String
  rating Int @min(1) @max(5)
  comment String @db.Text
  status String @default("PENDING") // PENDING, APPROVED, REJECTED
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  product Product @relation(fields: [productId], references: [id], onDelete: Cascade)
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([productId])
  @@index([status])
}

// Add to Product model:
reviews Review[]

// Add to User model:
reviews Review[]
```

### Reviews: API Endpoints

```
POST /api/reviews
  body: { productId, rating, comment }
  auth: required (customer/dealer)
  reCAPTCHA: v3
  response: { id, status: "PENDING", message: "Thank you! Your review is pending approval." }

GET /api/products/:id/reviews?status=APPROVED&limit=10
  response: { reviews: [...], avgRating: 4.6, totalCount: 23 }

PATCH /api/admin/reviews/:id
  body: { status: "APPROVED" | "REJECTED" }
  auth: required (admin only)
  response: { id, status, updatedAt }
```

### reCAPTCHA: Setup Steps

```bash
# 1. Register at Google Cloud Console
# https://console.cloud.google.com/ → reCAPTCHA

# 2. Create reCAPTCHA v3 site key
# - Domain: yourdomain.com
# - Paste key into .env.local

# 3. Frontend: Add to registration/login form
<script src="https://www.google.com/recaptcha/api.js"></script>
<script>
  grecaptcha.ready(() => {
    grecaptcha.execute('YOUR_SITE_KEY', { action: 'register' }).then(token => {
      document.getElementById('recaptchaToken').value = token;
    });
  });
</script>

# 4. Backend: Verify token
POST https://www.google.com/recaptcha/api/siteverify
  body: { secret: RECAPTCHA_SECRET_KEY, response: token }
  response: { success: true, score: 0.9, action: "register" }
  if score < 0.5: reject registration
```

### Email Reminders: Scheduler Logic

```javascript
// Runs daily at 7 AM IST via node-cron
const cron = require('node-cron');

cron.schedule('0 7 * * *', async () => {
  // Find users who viewed products in last 7 days but haven't bought
  const nonBuyers = await db.productView.groupBy({
    by: ['userId'],
    where: {
      createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
      user: { orders: { none: {} } }, // No orders ever
    },
  });

  for (const { userId } of nonBuyers) {
    const topViewedProducts = await db.productView.findMany({
      where: { userId },
      distinct: ['productId'],
      orderBy: { createdAt: 'desc' },
      take: 3,
    });

    await sendEmail({
      to: user.email,
      template: 'non-buyer-reminder',
      data: { userName: user.name, products: topViewedProducts },
    });
  }
});
```

---

**End of Scope Amendment v1.2**
