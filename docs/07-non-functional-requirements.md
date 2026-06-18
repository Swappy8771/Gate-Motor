# 07 — Non-Functional Requirements (NFRs)

> **Status:** Final v1.0
> These are the quality bars the build is held to, regardless of feature. The external audit should test against these.

---

## 1. Performance

| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP), public pages | ≤ 2.5s on 4G mobile |
| Time to Interactive, product listing | ≤ 3.5s |
| API p95 response time (reads) | ≤ 400ms |
| API p95 response time (writes) | ≤ 800ms |
| Product images | Cloudinary, lazy-loaded, responsive `srcset`, WebP where supported |
| Listing pagination | 12 items/page (no unbounded queries) |
| Lighthouse Performance (mobile) | ≥ 85 |

Techniques: Next.js SSR/SSG for public pages, React Query caching, DB indexes (see schema), image CDN, code-splitting per route group.

---

## 2. Security

| Area | Requirement |
|------|-------------|
| Transport | HTTPS enforced everywhere; HSTS header |
| Passwords | bcrypt cost 12; never logged or returned |
| Auth | JWT (7-day expiry); secret ≥ 32 chars in env only |
| RBAC | Every protected route checks role server-side (not just UI) |
| Dealer pricing | `dealerPrice` never sent to non-approved users |
| Input validation | express-validator + Zod on every endpoint |
| SQL injection | Prevented via Prisma parameterized queries |
| XSS | React escaping; sanitize rich-text product descriptions |
| CSRF | httpOnly cookie + SameSite; or token in Authorization header |
| Rate limiting | Auth endpoints (login 10/15min, register 5/hr) |
| File uploads | MIME whitelist (PDF/JPG/PNG), ≤5MB, size + type checked server-side |
| GST/PAN docs | Private storage; admin access via signed URL (≤15 min) |
| Payment | Server-side signature verification; webhook signature check |
| Headers | helmet.js (CSP, X-Frame-Options, etc.) |
| Secrets | Never committed; `.env` only; rotated on staff change |
| Dependencies | `npm audit` clean of high/critical before go-live |

---

## 3. Responsiveness & Browser Support

| Item | Target |
|------|--------|
| Breakpoints | Mobile (≤600px), tablet (≤768/1024px), desktop |
| Browsers | Latest 2 versions of Chrome, Edge, Firefox, Safari |
| Mobile | iOS Safari + Android Chrome (current) |
| Touch | All interactive elements ≥ 44×44px tap target |

---

## 4. SEO

- Server-rendered public pages with unique `<title>` + meta description
- Clean slug URLs for products and categories
- `sitemap.xml` + `robots.txt`
- Open Graph tags on product pages
- Semantic HTML, single `<h1>` per page

---

## 5. Accessibility (baseline)

- WCAG 2.1 AA color contrast on text
- All images have `alt` text
- Forms have associated labels + visible error messages
- Keyboard navigable; visible focus states
- Carousel/banners pausable, not the only way to reach content

---

## 6. Availability & Reliability

| Item | Target |
|------|--------|
| Uptime target | 99.5% (SME-grade) |
| DB backups | Daily automated (managed Postgres) |
| Order/payment writes | Atomic DB transactions (no partial orders) |
| Idempotency | Payment webhook idempotent (no double-confirm) |
| Graceful errors | No stack traces to client; friendly error pages |

---

## 7. Observability

- Centralized error tracking (Sentry recommended) on frontend + backend
- Request logging (morgan) on backend
- Uptime monitoring (UptimeRobot or similar) with alerting
- Payment + order events logged for reconciliation

---

## 8. Maintainability

- TypeScript on the frontend; consistent module structure on the backend
- ESLint + Prettier enforced
- Meaningful commit messages; feature-branch + PR workflow
- This `docs/` set kept in sync with code (update on scope change)
- Environment parity: dev / staging / production

---

## 9. Data & Compliance

- INR currency; GST shown per applicable rate (confirm Q-04)
- Customer PII (name, email, phone, address) stored only as needed
- GST/PAN documents access-restricted to admin
- Razorpay handles card data (platform is **not** PCI cardholder-data scope)
- Privacy policy + terms pages published before go-live (client copy)
