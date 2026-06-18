# 04 — API Reference

> **Status:** Final v1.1
> Base URL: `https://api.yourdomain.com/api/v1`
> Protected routes require `Authorization: Bearer <token>` · All responses are JSON.

---

## Auth Routes `/auth`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/auth/register` | Public | Customer registration |
| POST | `/auth/dealer/register` | Public | Dealer registration with GST docs |
| GET | `/auth/verify-email/:token` | Public | Verify email via link |
| POST | `/auth/resend-verification` | Public | Resend verification email |
| POST | `/auth/login` | Public | Login (all roles) |
| POST | `/auth/logout` | Auth | Logout |
| GET | `/auth/me` | Auth | Current user profile |
| PUT | `/auth/me` | Auth | Update profile |
| PUT | `/auth/change-password` | Auth | Change password |

### POST `/auth/register`
```json
// Request
{ "name": "John Doe", "email": "john@email.com", "phone": "9876543210", "password": "SecurePass@123" }

// Response 201
{
  "success": true,
  "message": "Registration successful. Please verify your email.",
  "user": { "id": "uuid", "name": "John Doe", "role": "CUSTOMER", "isEmailVerified": false }
}
```
> Email verification is link-based (no OTP/SMS — D-10).

### POST `/auth/dealer/register` (multipart/form-data)
```
Fields: name, email, phone, password, businessName, gstNumber,
        gstDocument (file, required), panNumber (opt), panDocument (file, opt)

Response 201:
{ "success": true,
  "message": "Registration submitted. Awaiting admin approval.",
  "user": { "id": "uuid", "role": "DEALER", "dealerStatus": "PENDING" } }
```

### POST `/auth/login`
```json
// Response 200
{
  "success": true,
  "token": "eyJhbGci...",
  "user": { "id": "uuid", "name": "John Doe", "role": "DEALER", "dealerStatus": "APPROVED", "isEmailVerified": true }
}
```
> If `role=DEALER` and `dealerStatus != APPROVED`, frontend routes to the approval-status page (dealer pricing & ordering blocked).

---

## Product Routes `/products`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/products` | Public | List active products (paginated) |
| GET | `/products/:slug` | Public | Single product detail |
| GET | `/products/featured` | Public | Featured products |
| POST | `/products` | Admin | Create |
| PUT | `/products/:id` | Admin | Update |
| DELETE | `/products/:id` | Admin | Soft delete |
| POST | `/products/:id/images` | Admin | Upload images |
| DELETE | `/products/:id/images/:imageId` | Admin | Delete image |

### GET `/products`
```
Query: page, limit, category=slug, search, sort(price_asc|price_desc|newest|featured), minPrice, maxPrice

Response 200:
{ "success": true,
  "data": {
    "products": [{
      "id": "uuid", "name": "Sliding Gate Motor 400kg", "slug": "sliding-gate-motor-400kg",
      "retailPrice": "12500.00",
      "dealerPrice": null,                      // populated ONLY for approved dealers
      "primaryImage": "https://res.cloudinary.com/...",
      "category": { "id": "...", "name": "Sliding Gate Automation" },
      "stockStatus": "IN_STOCK",                // IN_STOCK | LOW_STOCK | OUT_OF_STOCK (qty hidden from customers)
      "isFeatured": true
    }],
    "pagination": { "page": 1, "limit": 12, "total": 48, "pages": 4 }
  } }
```

### GET `/products/:slug`
```json
{
  "success": true,
  "data": {
    "id": "uuid", "name": "Sliding Gate Motor 400kg", "description": "...",
    "retailPrice": "12500.00",
    "dealerPrice": null,                       // populated ONLY for approved dealers — same rule as listing
    "gstPercent": "18.00",
    "sku": "SGM-400", "stockStatus": "IN_STOCK",
    "category": { "id": "...", "name": "Sliding Gate Automation" },
    "images": [{ "url": "...", "altText": "...", "isPrimary": true }],
    "specs": [
      { "key": "Motor Type", "value": "DC Brushless", "unit": null },
      { "key": "Max Gate Weight", "value": "400", "unit": "kg" }
    ]
  }
}
```

---

## Category Routes `/categories`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/categories` | Public | List active categories |
| GET | `/categories/:slug` | Public | Category + its products |
| POST | `/categories` | Admin | Create |
| PUT | `/categories/:id` | Admin | Update |
| DELETE | `/categories/:id` | Admin | Soft delete |

---

## Cart Routes `/cart` (login required — Customer/Dealer)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cart` | Get cart with recalculated pricing |
| POST | `/cart/items` | Add item |
| PUT | `/cart/items/:itemId` | Update quantity |
| DELETE | `/cart/items/:itemId` | Remove item |
| DELETE | `/cart` | Clear cart |

### GET `/cart`
```json
{
  "success": true,
  "cart": {
    "items": [{
      "id": "cartItemId",
      "product": { "id": "...", "name": "...", "primaryImage": "...", "stockStatus": "IN_STOCK" },
      "unitPrice": "12500.00", "quantity": 2, "totalPrice": "25000.00"
    }],
    "subtotal": "25000.00",
    "gstAmount": "4500.00",
    "shippingCharge": "0.00",     // free shipping in v1 (D-07)
    "total": "29500.00"
  }
}
```

---

## Order Routes `/orders`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/orders` | Customer/Dealer | Place order (creates Razorpay order) |
| GET | `/orders` | Customer/Dealer | List own orders |
| GET | `/orders/:id` | Customer/Dealer | Order detail + status timeline |
| PUT | `/orders/:id/cancel` | Customer/Dealer | Cancel (only PLACED/CONFIRMED) |
| GET | `/orders/admin/all` | Admin | List all orders (filters) |
| PUT | `/orders/:id/status` | Admin | Update status |
| PUT | `/orders/:id/tracking` | Admin | Set courier + AWB + tracking URL |

### POST `/orders`
```json
// Request
{ "addressId": "uuid", "notes": "Please pack carefully" }

// Response 201
{
  "success": true,
  "order": { "id": "uuid", "orderNumber": "ORD-2026-0001", "totalAmount": "29500.00", "status": "PLACED" },
  "razorpayOrder": { "id": "order_xxxxx", "amount": 2950000, "currency": "INR" }
}
```

### Valid Status Transitions (Admin)
```
PLACED ──(payment verified, system)──► CONFIRMED ──► SHIPPED ──► DELIVERED
   │                  │
   └────── CANCELLED ──┘   (customer pre-shipping, or admin; restores stock)
```
> No PROCESSING / RETURN states in v1. Status cannot move backward.

### PUT `/orders/:id/status` (Admin)
```json
{ "status": "SHIPPED", "message": "Dispatched from Pune via DTDC" }
```

### PUT `/orders/:id/tracking` (Admin)
```json
{ "courierName": "DTDC", "trackingNumber": "Z12345678", "trackingUrl": "https://dtdc.com/track/Z12345678" }
```

### PUT `/orders/:id/cancel` (Customer/Dealer)
```
Allowed only when status is PLACED or CONFIRMED.
Effects: status → CANCELLED, stock restored (InventoryLog ORDER_CANCELLATION_RESTORE),
         if payment was PAID → admin notified to refund (manual), cancellation email sent.
```

---

## Payment Routes `/payments`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/payments/verify` | Customer/Dealer | Verify Razorpay signature |
| POST | `/payments/webhook` | Public (Razorpay) | Webhook (raw body) |
| GET | `/payments/:orderId` | Customer/Dealer | Payment status |

### POST `/payments/verify`
```json
// Request
{ "razorpayOrderId": "order_xxxxx", "razorpayPaymentId": "pay_xxxxx", "razorpaySignature": "..." }
// Response 200
{ "success": true, "message": "Payment verified. Order confirmed." }
```
> Methods supported: UPI, cards, net banking (no EMI — D-09).

---

## Dealer Routes `/dealers`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/dealers` | Admin | List dealers (filter by status) |
| GET | `/dealers/:id` | Admin | Dealer detail + signed doc URLs |
| PUT | `/dealers/:id/approve` | Admin | Approve |
| PUT | `/dealers/:id/reject` | Admin | Reject (reason required) |
| GET | `/dealers/me/status` | Dealer | Own approval status |

```json
// PUT /dealers/:id/reject
{ "reason": "GST document unreadable. Please re-submit." }
```

---

## Inventory Routes `/inventory` (Admin)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/inventory` | Products with stock levels + status |
| PUT | `/inventory/:productId` | Adjust stock |
| GET | `/inventory/:productId/logs` | Change history |

```json
// PUT /inventory/:productId
{ "type": "STOCK_IN", "quantity": 50, "reason": "New shipment received" }
```

---

## Banner Routes `/banners`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/banners` | Public | Active banners (homepage) |
| POST | `/banners` | Admin | Create |
| PUT | `/banners/:id` | Admin | Update |
| DELETE | `/banners/:id` | Admin | Delete |

---

## Reports Routes `/reports` (Admin)

| Method | Endpoint | Scope |
|--------|----------|-------|
| GET | `/reports/sales` | Core (v1) |
| GET | `/reports/revenue` | Core (v1) |
| GET | `/reports/top-products` | Core (v1) |
| GET | `/reports/dealer-activity` | Optional extra |
| GET | `/reports/inventory-alerts` | Optional extra |

---

## Standard Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [{ "field": "email", "message": "Email is required" }]
  }
}
```

## HTTP Status Codes
| Code | Meaning |
|------|---------|
| 200 / 201 | OK / Created |
| 400 | Validation error |
| 401 | Unauthorized (no/invalid token) |
| 403 | Forbidden (role / dealer-not-approved) |
| 404 | Not found |
| 409 | Conflict (duplicate email/phone/GST) |
| 422 | Unprocessable (e.g. insufficient stock) |
| 500 | Server error |
