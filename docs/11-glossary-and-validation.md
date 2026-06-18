# 11 — Glossary & Validation Rules

> **Status:** Final v1.0

---

## Glossary

| Term | Meaning |
|------|---------|
| **B2C** | Business-to-Consumer — retail customers buying at retail price. The platform's primary audience. |
| **B2B** | Business-to-Business — verified dealers buying at dealer pricing. The extension layer. |
| **Customer** | A retail (B2C) user. Role `CUSTOMER`. |
| **Dealer** | A wholesale (B2B) user. Role `DEALER`. Requires GST onboarding + admin approval. |
| **Admin** | Platform operator. Role `ADMIN`. |
| **Dual pricing** | Each product has a retail price and a dealer price; dealer price is shown only to approved dealers. |
| **Approval gate** | A dealer cannot access dealer pricing/ordering until an admin approves their account. |
| **GST** | Goods and Services Tax (India). Applied per product (default 18%, confirm Q-04). |
| **GSTIN / GST number** | 15-character GST identification number submitted by dealers. |
| **AWB** | Air Waybill — the courier tracking number entered by admin on shipped orders. |
| **RBAC** | Role-Based Access Control — permissions enforced by user role. |
| **JWT** | JSON Web Token — the stateless auth token. |
| **SKU** | Stock Keeping Unit — unique product code. |
| **Soft delete** | Hiding a record via `isActive=false` instead of deleting it. |
| **Snapshot** | Copying values (price, address, product name) onto an order so later edits don't change history. |
| **v1 / Phase 2** | v1 = current approved build; Phase 2 = explicitly deferred work (paid addition). |
| **Razorpay order** | A payment intent created server-side before the checkout modal opens. |
| **Webhook** | Server-to-server callback from Razorpay confirming payment status. |

---

## Validation Rules Reference

Use these consistently on **both** frontend (UX) and backend (authority).

### User
| Field | Rule |
|-------|------|
| name | required, 2–100 chars |
| email | RFC email, unique, lowercased |
| phone | `^[6-9]\d{9}$` (10-digit Indian mobile), unique |
| password | ≥8 chars, ≥1 uppercase, ≥1 lowercase, ≥1 digit, ≥1 special |

### Dealer
| Field | Rule |
|-------|------|
| businessName | required, 2–150 chars |
| gstNumber | `^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$`, unique |
| gstDocument | required; PDF/JPG/PNG; ≤5MB |
| panNumber | `^[A-Z]{5}\d{4}[A-Z]$` (if provided) |

### Product
| Field | Rule |
|-------|------|
| name | required, 2–200 chars |
| sku | required, unique, alphanumeric + dashes |
| retailPrice | > 0, 2 decimals |
| dealerPrice | > 0, ≤ retailPrice (recommended), 2 decimals |
| gstPercent | 0–28 (GST slab range) |
| stockQty | integer ≥ 0 |
| images | ≥1 recommended; each ≤2MB; JPG/PNG/WebP |

### Address
| Field | Rule |
|-------|------|
| name | required |
| phone | 10-digit Indian mobile |
| line1 | required |
| city, state | required (state from fixed list) |
| pincode | `^\d{6}$` |

### Cart / Order
| Field | Rule |
|-------|------|
| quantity | integer ≥ 1, ≤ available stock |
| addressId | must belong to the requesting user |
| order status transition | forward-only within {PLACED,CONFIRMED,SHIPPED,DELIVERED}; CANCELLED only from PLACED/CONFIRMED |

### Banner
| Field | Rule |
|-------|------|
| title | required |
| imageUrl | required (uploaded) |
| linkUrl | valid URL (if provided) |
| endDate | ≥ startDate (if both provided) |

---

## Conventions
- **Money:** stored `Decimal(10,2)`, displayed `₹12,500.00`, sent to Razorpay in paise (`×100`, rounded).
- **Dates:** stored UTC; displayed in IST.
- **Slugs:** lowercase, hyphenated, unique.
- **IDs:** UUID v4.
- **Order numbers:** `ORD-YYYY-NNNN`.
