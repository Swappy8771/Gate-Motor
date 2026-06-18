# M03 — Dealer Management Module

> **Status:** Final v1.0 · B2B is the *extension* layer (B2C-first). Email only, no SMS (D-02). "Bulk orders" = larger quantities at dealer pricing via the standard cart (D-06).

## Overview
Handles dealer registration with GST documents, the admin approval workflow, dealer-specific pricing access, and the dealer account-status page.

---

## Dealer Registration Flow
```
1. Dealer fills registration form
2. Uploads GST certificate (required) + PAN (optional)
3. Backend validates inputs + files
4. Create User (role=DEALER) + DealerProfile (status=PENDING)
5. Send confirmation email to dealer + notification email to admin
6. Dealer sees "Awaiting Approval" page on login
```

### Form Fields
| Field | Required | Validation |
|-------|----------|-----------|
| Full Name | Yes | Min 2 chars |
| Business Name | Yes | Min 2 chars |
| Email | Yes | Valid, unique |
| Phone | Yes | 10-digit, unique |
| Password | Yes | Complexity rules (see M01) |
| GST Number | Yes | 15-char GST format |
| GST Document | Yes | PDF/JPG/PNG, max 5MB, stored privately |
| PAN Number | No | PAN format if provided |
| PAN Document | No | PDF/JPG/PNG, max 5MB |

---

## What "Dealer Ordering" Means in v1 (D-06)
- Approved dealers see **dealer pricing** on the same catalog/product pages.
- They add items to the **same cart** and can order **larger quantities** at dealer price.
- There is **no** special bulk-order tool in v1 (no CSV upload, no quote/RFQ workflow, no min-order enforcement unless Q-10 says otherwise).
- A dedicated quick-order / bulk-upload tool would be a Phase 2 scope addition.

---

## Admin Approval Workflow

### Dealer Queue `/admin/dealers`
| Column | Description |
|--------|-------------|
| Business Name | Dealer's business |
| Owner Name | Registered name |
| GST Number | Submitted GST |
| Registered | Submission date |
| Status | PENDING / APPROVED / REJECTED |
| Actions | View · Approve · Reject |

Filters: status, date range, search by name/GST.

### Approve
```
PUT /dealers/:id/approve →
status=APPROVED, approvedAt=now, approvedBy=adminId →
Send approval email → dealer can now see dealer pricing & order
```

### Reject
```
PUT /dealers/:id/reject { reason } (reason required) →
status=REJECTED, rejectionReason=reason →
Send rejection email with reason → dealer sees reason on status page
```

---

## Dealer Login States
| Status | Behavior |
|--------|----------|
| PENDING | Login OK → redirect to `/dealer/status` (Awaiting Approval) |
| APPROVED | Full dealer portal + dealer pricing |
| REJECTED | Login OK → `/dealer/status` shows rejection reason + contact info |

---

## Dealer Portal Pages
- **`/dealer/dashboard`** — order count, total spend, account-status banner, recent orders
- **`/dealer/catalog`** — same catalog with dealer prices + savings vs retail
- **`/dealer/orders`** — dealer's orders, filter by status/date, detail + tracking
- **`/dealer/status`** — PENDING/APPROVED/REJECTED state (+ rejection reason if any)

---

## Dealer Pricing Access Control
`dealerPrice` is returned/shown **only** when:
```
req.user.role === 'DEALER' && req.user.dealerStatus === 'APPROVED'
```
Enforced by the `requireApprovedDealer` middleware (see M01) on dealer-pricing and order endpoints.

---

## Email Notifications (email only — no SMS)
| Event | Recipient | Content |
|-------|-----------|---------|
| Registration submitted | Dealer | "Received — review within 2 business days" |
| New dealer registered | Admin | Dealer name, GST, review link |
| Dealer approved | Dealer | Approval + portal link |
| Dealer rejected | Dealer | Reason + contact instructions |

---

## Document Storage (D-12)
- GST/PAN docs are **private** — never in public API responses.
- Stored in a private S3 bucket or private server directory.
- Admin views via a short-lived **signed URL** (≤15 min).

---

## Re-application (Phase 2)
If rejected, in v1 the dealer contacts the admin, who **manually** resets status to PENDING for re-submission. Full self-service re-application is Phase 2.
