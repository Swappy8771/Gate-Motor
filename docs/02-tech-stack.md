# 02 — Tech Stack

> **Status:** Final v1.0
> Database confirmed: **PostgreSQL + Prisma** (Decision [D-04](./10-open-decisions-and-assumptions.md)).
> **No SMS** in v1 (Decision D-02) — transactional email only.

## Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14+ (App Router) | Full-stack React framework, SSR/SSG |
| TypeScript | 5+ | Type safety across the codebase |
| Tailwind CSS | 3+ | Utility-first CSS, responsive design |
| TanStack React Query | 5+ | Server state, API data fetching, caching |
| React Hook Form | 7+ | Form state & validation |
| Zod | 3+ | Schema validation (forms + API payloads) |
| Axios | 1+ | HTTP client |
| Recharts | 2+ | Admin report charts |

### Next.js App Router Structure
```
app/
├── (public)/           # No auth required
│   ├── page.tsx        # Homepage (banners + featured)
│   ├── products/       # Catalog + [slug] detail
│   ├── categories/
│   └── about/
├── (auth)/
│   ├── login/
│   ├── register/
│   ├── dealer-register/
│   └── verify-email/
├── (customer)/         # role: CUSTOMER
│   ├── dashboard/  orders/  cart/  checkout/  profile/
├── (dealer)/           # role: DEALER (approved)
│   ├── dashboard/  catalog/  orders/  status/
├── (admin)/            # role: ADMIN
│   ├── dashboard/  products/  categories/  orders/
│   ├── dealers/  inventory/  banners/  reports/
└── api/                # Optional BFF/proxy layer
```

---

## Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20 LTS | Runtime |
| Express.js | 4+ | HTTP server & routing |
| Prisma | 5+ | ORM, migrations, type-safe queries |
| jsonwebtoken | 9+ | JWT auth |
| bcryptjs | 2+ | Password hashing (cost 12) |
| Multer | 1+ | File uploads (product images, GST docs) |
| Nodemailer | 6+ | Transactional email (order confirmation, dealer approval) |
| Razorpay Node SDK | 2+ | Payments |
| express-validator | 7+ | Request validation |
| express-rate-limit | 7+ | Auth endpoint rate limiting |
| cors | 2+ | CORS (restricted to frontend origin) |
| helmet | 7+ | Security headers |
| morgan | 1+ | Request logging |
| dotenv | 16+ | Env vars |

> **Note:** No SMS gateway dependency in v1. SMS is Phase 2.

### Backend Folder Structure
```
server/
├── src/
│   ├── config/        db.js · razorpay.js · mailer.js · cloudinary.js
│   ├── middleware/    auth.js · role.js · upload.js · errorHandler.js · rateLimit.js
│   ├── modules/
│   │   ├── auth/  products/  categories/  cart/  orders/
│   │   ├── dealers/  inventory/  payments/  banners/  reports/
│   ├── utils/         generateToken.js · sendEmail.js · pagination.js · orderNumber.js
│   └── app.js
├── prisma/            schema.prisma · seed.js · migrations/
├── .env
└── server.js
```

Each module folder: `*.routes.js · *.controller.js · *.service.js · *.validation.js`

---

## Database — PostgreSQL + Prisma

**Why PostgreSQL (D-04):** relational data (users, products, orders, dealers, payments) with foreign keys; ACID guarantees for payment/order/stock transactions; JSON-capable for flexible specs; clean aggregate queries for reports.

See full schema in **[03 — Database Schema](./03-database-schema.md)**.

---

## Storage (Decision D-12)

| Asset | Store | Access |
|-------|-------|--------|
| Product images, banner images | Cloudinary | Public (CDN) |
| GST / PAN documents | Private bucket (S3) or private server dir | Admin-only via short-lived signed URL |

---

## Payments — Razorpay
UPI, cards, net banking (no EMI — D-09). See **[modules/05 — Payment Integration](./modules/05-payment-integration.md)**.

---

## Deployment

| Concern | Choice |
|---------|--------|
| Frontend host | Vercel |
| Backend host | Railway / Render / VPS |
| Database | Neon / Supabase / managed RDS |
| Images | Cloudinary |
| CI/CD | GitHub Actions (auto-deploy on `main`) |
| SSL | Auto via hosting platform |

See **[05 — Deployment Guide](./05-deployment.md)**.

---

## Environment Variables

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxx
```

### Backend (`.env`)
```env
PORT=5000
DATABASE_URL=postgresql://user:password@host:5432/dbname
JWT_SECRET=your_super_secret_jwt_key_min_32_chars
JWT_EXPIRES_IN=7d
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SMTP_HOST=smtp.provider.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your_app_password
CLIENT_URL=https://yourdomain.com
```

---

## Security Baseline
See **[07 — Non-Functional Requirements](./07-non-functional-requirements.md)** for the full security + performance checklist that the build is held to.
