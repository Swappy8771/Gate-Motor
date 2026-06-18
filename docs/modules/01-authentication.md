# M01 — Authentication Module

> **Status:** Final v1.0 · Email verification is link-based (D-10). No OTP / SMS (D-02).

## Overview
JWT-based stateless authentication with three roles: CUSTOMER, DEALER, ADMIN.

---

## Registration Flows

### Customer Registration
```
Fill form → Validate → Hash password (bcrypt 12) → Create User (isEmailVerified=false) →
Generate email verification token (expires 24h) → Send verification email →
Generate JWT → Return token + user
```
The customer can browse immediately; **email must be verified before placing an order** (standing assumption 9 in [10 — Open Decisions](../10-open-decisions-and-assumptions.md); admin-configurable).

**Validations:**
- Name: required, min 2 chars
- Email: valid format, unique
- Phone: 10-digit Indian mobile, unique
- Password: min 8 chars, ≥1 uppercase, ≥1 number, ≥1 special char

### Email Verification (link-based)
```
User clicks link: {CLIENT_URL}/verify-email/{token} →
Frontend calls GET /auth/verify-email/:token →
Backend: find user by token, check expiry →
Set isEmailVerified=true, clear token → success
```
- `POST /auth/resend-verification` re-issues a fresh token if expired.
- **No SMS OTP** in v1.

### Dealer Registration
```
Fill form + upload GST doc (PAN optional) → Validate inputs + files →
Hash password → Create User (role=DEALER) + DealerProfile (status=PENDING) →
Send dealer confirmation email + admin notification email →
Return PENDING status (dealer can log in but pricing/ordering blocked until approved)
```

**Additional validations:**
- businessName: required
- gstNumber: 15-char GST format `^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$`
- gstDocument: required, PDF/JPG/PNG, max 5MB (stored privately)

### Admin
Created only via seed script or directly in DB. No public admin registration.

---

## Login Flow
```
POST /auth/login → find user by email → bcrypt compare →
if DEALER: read dealerStatus → return it in payload (frontend gates access) →
Generate JWT → Return token + user
```

**JWT Payload:**
```json
{ "userId": "uuid", "role": "CUSTOMER", "dealerStatus": "APPROVED", "iat": ..., "exp": ... }
```
**Expiry:** 7 days.

---

## Middleware

### `auth.js` — Verify JWT
```js
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'No token provided' })
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}
```

### `role.js` — RBAC
```js
const requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    return res.status(403).json({ error: 'Insufficient permissions' })
  next()
}

const requireApprovedDealer = (req, res, next) => {
  if (req.user.role === 'DEALER' && req.user.dealerStatus !== 'APPROVED')
    return res.status(403).json({ error: 'Dealer account not yet approved' })
  next()
}

// Usage:
router.get('/admin/all', auth, requireRole('ADMIN'), ctrl.getAllOrders)
router.get('/cart', auth, requireRole('CUSTOMER', 'DEALER'), ctrl.getCart)
```

---

## Frontend Auth (Next.js)
- Store JWT in `httpOnly` cookie (preferred over localStorage to mitigate XSS).
- `middleware.ts` redirects unauthenticated users away from `/customer`, `/dealer`, `/admin`.
- Role mismatch → redirect to that role's home or `/login`.
- Dealer with `dealerStatus != APPROVED` → redirect to `/dealer/status`.

```ts
interface AuthUser {
  id: string; name: string; email: string;
  role: 'CUSTOMER' | 'DEALER' | 'ADMIN';
  dealerStatus?: 'PENDING' | 'APPROVED' | 'REJECTED';
  isEmailVerified: boolean;
}
```

---

## Password Reset (Phase 2)
Standard email-link reset (request → time-limited token → set new password). Not in v1 unless requested.

---

## Security Measures
- bcrypt cost 12
- Rate limit: login ≤ 10/15 min/IP; register ≤ 5/hr/IP (express-rate-limit)
- JWT secret ≥ 32 chars, env only
- No sensitive data in JWT payload
- Email verification tokens are single-use and expire in 24h
- See **[07 — NFRs](../07-non-functional-requirements.md)** for the full security checklist
