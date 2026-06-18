# 05 — Deployment Guide

## Architecture

```
Browser
  │
  ├── Frontend (Vercel)          → next.yourdomain.com / yourdomain.com
  │        │
  │        └── API calls ──────► Backend (Railway/Render/VPS)
  │                                       │
  │                               PostgreSQL (Neon/Supabase)
  │                               Cloudinary (images)
  │
  └── Razorpay (payment gateway)
```

---

## Step 1 — Database Setup

### Option A: Neon (Recommended — free tier, serverless Postgres)
1. Create account at neon.tech
2. Create a new project → copy the connection string
3. Paste into `DATABASE_URL` in backend `.env`

### Option B: Supabase
1. Create project at supabase.com
2. Go to Settings → Database → copy URI

### Run Prisma Migrations
```bash
cd server
npx prisma migrate deploy   # production
npx prisma db seed          # seed admin user
```

### Seed Admin User
```js
// server/prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  const hash = await bcrypt.hash('Admin@123', 12)
  await prisma.user.upsert({
    where: { email: 'admin@gateauto.com' },
    update: {},
    create: {
      name: 'Platform Admin',
      email: 'admin@gateauto.com',
      phone: '9000000000',
      password: hash,
      role: 'ADMIN',
    },
  })
}
main()
```

---

## Step 2 — Backend Deployment (Railway)

1. Push backend code to GitHub repo
2. Create new project on railway.app
3. Connect GitHub repo → select `server/` as root
4. Add all environment variables (see [02-tech-stack.md](./02-tech-stack.md))
5. Railway auto-detects Node.js and runs `npm start`
6. Note the generated domain (e.g. `api-production.up.railway.app`)

### `package.json` scripts (server)
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "migrate": "prisma migrate deploy",
    "seed": "node prisma/seed.js"
  }
}
```

---

## Step 3 — Frontend Deployment (Vercel)

1. Push Next.js code to GitHub
2. Import project on vercel.com
3. Set environment variables:
   - `NEXT_PUBLIC_API_URL` = your Railway backend URL
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` = Razorpay live key
4. Vercel auto-builds on every push to `main`

### Custom Domain
1. In Vercel → Settings → Domains → add `yourdomain.com`
2. Add DNS records at your registrar (Vercel provides the values)
3. SSL is auto-provisioned by Vercel

---

## Step 4 — Cloudinary Setup

1. Create account at cloudinary.com
2. Go to Dashboard → copy Cloud Name, API Key, API Secret
3. Create upload presets:
   - `products` — for product images (unsigned or signed)
   - `banners` — for banner images
4. Add credentials to backend `.env`

---

## Step 5 — Razorpay Setup

1. Create Razorpay account → complete KYC
2. Go to Dashboard → Settings → API Keys
3. Generate live keys (use test keys during development)
4. Add webhook in Razorpay Dashboard:
   - URL: `https://api.yourdomain.com/api/v1/payments/webhook`
   - Events: `payment.captured`, `payment.failed`
5. Add webhook secret to `.env` as `RAZORPAY_WEBHOOK_SECRET`

---

## Step 6 — Email (SMTP) Setup

### Option A: Gmail App Password
1. Enable 2FA on Gmail
2. Go to Google Account → Security → App Passwords
3. Generate password for "Mail"
4. Use `smtp.gmail.com:587` with TLS

### Option B: Mailgun / Resend (Recommended for production)
- More reliable deliverability
- Set SMTP credentials from your Mailgun/Resend dashboard

---

## CI/CD Pipeline (GitHub Actions)

### `.github/workflows/deploy.yml`
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: cd server && npm ci
      - name: Run migrations
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
        run: cd server && npx prisma migrate deploy
      # Railway auto-deploys on push; add Railway deploy hook if needed

  # Vercel auto-deploys on push — no extra step needed
```

---

## Post-Deployment Checklist

- [ ] Admin login works at `/admin/login`
- [ ] Customer registration → login → product browse → add to cart → checkout works end-to-end
- [ ] Razorpay test payment succeeds
- [ ] Razorpay webhook receives `payment.captured` and marks order as paid
- [ ] Dealer registration → pending state shown → admin approves → dealer can see dealer prices
- [ ] Product images load from Cloudinary
- [ ] Email notification sent on order placed
- [ ] SSL certificate active (HTTPS enforced)
- [ ] CORS allows only frontend domain
- [ ] All admin routes reject non-admin tokens with 403

---

## Monitoring & Maintenance

| Task | Tool / Approach |
|------|----------------|
| Error tracking | Sentry (add `@sentry/node` to backend) |
| Uptime monitoring | UptimeRobot (free tier, alerts on downtime) |
| DB backups | Neon/Supabase automatic daily backups |
| Log monitoring | Railway built-in logs |
| Performance | Vercel Analytics (built-in) |

---

## Environment-Specific Notes

| Environment | Frontend URL | Backend URL | Razorpay |
|-------------|-------------|-------------|----------|
| Development | localhost:3000 | localhost:5000 | Test keys |
| Staging | staging.yourdomain.com | staging-api.yourdomain.com | Test keys |
| Production | yourdomain.com | api.yourdomain.com | Live keys |
