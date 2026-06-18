# 03 — Database Schema

> **Status:** Final v1.1 · ORM: Prisma · Database: PostgreSQL
> Reflects locked decisions: cancel-only lifecycle (D-01), free shipping (D-07), flat categories (D-05), email verification (D-10).

---

## Entity Relationship Overview

```
User ─┬─ Address ─┐
      ├─ CartItem  ├─ Order ─── OrderItem ─── Product ─┬─ ProductImage
      ├─ Order ────┘     │                             ├─ ProductSpec
      └─ DealerProfile    ├─ Payment                    └─ InventoryLog
                          └─ OrderTracking
Category ─── Product
Banner (standalone)
```

---

## Tables

### `users`
```prisma
model User {
  id                       String        @id @default(uuid())
  name                     String
  email                    String        @unique
  phone                    String        @unique
  password                 String
  role                     Role          @default(CUSTOMER)

  isEmailVerified          Boolean       @default(false)
  emailVerificationToken   String?
  emailVerificationExpiry  DateTime?

  isActive                 Boolean       @default(true)
  createdAt                DateTime      @default(now())
  updatedAt                DateTime      @updatedAt

  addresses                Address[]
  orders                   Order[]
  cartItems                CartItem[]
  dealerProfile            DealerProfile?
}

enum Role {
  CUSTOMER
  DEALER
  ADMIN
}
```

---

### `dealer_profiles`
```prisma
model DealerProfile {
  id              String        @id @default(uuid())
  userId          String        @unique
  user            User          @relation(fields: [userId], references: [id])

  businessName    String
  gstNumber       String        @unique
  gstDocumentUrl  String        // PRIVATE storage path (not public)
  panNumber       String?
  panDocumentUrl  String?

  status          DealerStatus  @default(PENDING)
  rejectionReason String?
  approvedAt      DateTime?
  approvedBy      String?       // admin userId

  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
}

enum DealerStatus {
  PENDING
  APPROVED
  REJECTED
}
```

---

### `categories` — flat, single level (D-05)
```prisma
model Category {
  id          String     @id @default(uuid())
  name        String     @unique
  slug        String     @unique
  description String?
  imageUrl    String?
  isActive    Boolean    @default(true)
  sortOrder   Int        @default(0)
  createdAt   DateTime   @default(now())

  products    Product[]
}
// v1 is intentionally flat (no parentId). Nested sub-categories = Phase 2.
```

---

### `products`
```prisma
model Product {
  id            String          @id @default(uuid())
  name          String
  slug          String          @unique
  description   String
  categoryId    String
  category      Category        @relation(fields: [categoryId], references: [id])

  retailPrice   Decimal         @db.Decimal(10, 2)   // shown to everyone
  dealerPrice   Decimal         @db.Decimal(10, 2)   // shown only to APPROVED dealers
  gstPercent    Decimal         @default(18) @db.Decimal(5, 2)

  sku           String          @unique
  stockQty      Int             @default(0)
  lowStockAlert Int             @default(5)

  isFeatured    Boolean         @default(false)
  isActive      Boolean         @default(true)
  sortOrder     Int             @default(0)

  createdAt     DateTime        @default(now())
  updatedAt     DateTime        @updatedAt

  images        ProductImage[]
  specs         ProductSpec[]
  orderItems    OrderItem[]
  inventoryLogs InventoryLog[]
  cartItems     CartItem[]
}
```

---

### `product_images`
```prisma
model ProductImage {
  id         String   @id @default(uuid())
  productId  String
  product    Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
  url        String   // Cloudinary URL
  altText    String?
  isPrimary  Boolean  @default(false)
  sortOrder  Int      @default(0)
}
```

---

### `product_specs`
```prisma
model ProductSpec {
  id        String  @id @default(uuid())
  productId String
  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)
  key       String  // "Motor Type", "Max Gate Weight"
  value     String  // "DC Brushless", "400"
  unit      String? // "kg", "V", "m/min"
  sortOrder Int     @default(0)
}
```

---

### `cart_items` (server-side cart — login required, D-08)
```prisma
model CartItem {
  id        String   @id @default(uuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  quantity  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userId, productId])   // one row per product per user
}
```

---

### `addresses`
```prisma
model Address {
  id         String   @id @default(uuid())
  userId     String
  user       User     @relation(fields: [userId], references: [id])

  name       String
  phone      String
  line1      String
  line2      String?
  city       String
  state      String
  pincode    String
  isDefault  Boolean  @default(false)

  orders     Order[]
}
```

---

### `orders` — cancel-only lifecycle (D-01), free shipping (D-07)
```prisma
model Order {
  id              String        @id @default(uuid())
  orderNumber     String        @unique  // ORD-2026-0001
  userId          String
  user            User          @relation(fields: [userId], references: [id])
  addressId       String        // reference to the source Address row
  address         Address       @relation(fields: [addressId], references: [id])

  // Address SNAPSHOT — immutable copy of the delivery address at order time.
  // Editing/deleting the source Address must NOT change historical orders.
  shipName        String
  shipPhone       String
  shipLine1       String
  shipLine2       String?
  shipCity        String
  shipState       String
  shipPincode     String

  userRole        Role          // snapshot: CUSTOMER or DEALER at order time
  subtotal        Decimal       @db.Decimal(10, 2)
  gstAmount       Decimal       @db.Decimal(10, 2)
  shippingCharge  Decimal       @default(0) @db.Decimal(10, 2)  // always 0 in v1
  totalAmount     Decimal       @db.Decimal(10, 2)

  status          OrderStatus   @default(PLACED)
  notes           String?

  // Courier tracking = AWB + external link (D-01 / rule 7)
  courierName     String?
  trackingNumber  String?       // AWB number
  trackingUrl     String?       // external courier tracking link

  cancelledAt     DateTime?
  cancelReason    String?

  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  items           OrderItem[]
  payment         Payment?
  trackingHistory OrderTracking[]
}

enum OrderStatus {
  PLACED       // created, payment pending
  CONFIRMED    // payment verified
  SHIPPED      // admin entered courier + AWB
  DELIVERED    // admin marked delivered
  CANCELLED    // customer (pre-shipping) or admin; stock restored
}
// No PROCESSING (D-11). No RETURN/RETURNED — returns are offline in v1 (D-01).
```

---

### `order_items` (immutable snapshots)
```prisma
model OrderItem {
  id            String   @id @default(uuid())
  orderId       String
  order         Order    @relation(fields: [orderId], references: [id])
  productId     String
  product       Product  @relation(fields: [productId], references: [id])

  productName   String   // snapshot at order time
  productSku    String   // snapshot
  unitPrice     Decimal  @db.Decimal(10, 2)  // retail or dealer price used
  gstPercent    Decimal  @db.Decimal(5, 2)
  quantity      Int
  totalPrice    Decimal  @db.Decimal(10, 2)
}
```

---

### `payments`
```prisma
model Payment {
  id                  String        @id @default(uuid())
  orderId             String        @unique
  order               Order         @relation(fields: [orderId], references: [id])

  razorpayOrderId     String        @unique
  razorpayPaymentId   String?
  razorpaySignature   String?

  amount              Decimal       @db.Decimal(10, 2)
  currency            String        @default("INR")
  status              PaymentStatus @default(PENDING)
  method              String?       // upi, card, netbanking
  failureReason       String?

  paidAt              DateTime?
  refundedAt          DateTime?     // set when admin refunds a cancelled paid order
  createdAt           DateTime      @default(now())
  updatedAt           DateTime      @updatedAt
}

enum PaymentStatus {
  PENDING
  PAID
  FAILED
  REFUNDED   // manual admin refund (e.g. on cancellation of a paid order)
}
```

---

### `order_tracking` (internal status-history audit)
```prisma
model OrderTracking {
  id        String      @id @default(uuid())
  orderId   String
  order     Order       @relation(fields: [orderId], references: [id])
  status    OrderStatus
  message   String?     // e.g. "Dispatched from Pune via DTDC"
  updatedBy String      // admin userId or "SYSTEM"
  createdAt DateTime    @default(now())
}
// Powers the customer-facing status timeline. NOT courier API polling.
```

---

### `inventory_logs`
```prisma
model InventoryLog {
  id          String        @id @default(uuid())
  productId   String
  product     Product       @relation(fields: [productId], references: [id])
  type        InventoryType
  quantity    Int           // + added, - deducted
  reason      String?       // "Order ORD-2026-0001", "New shipment"
  performedBy String        // admin userId or "SYSTEM"
  createdAt   DateTime      @default(now())
}

enum InventoryType {
  STOCK_IN
  STOCK_OUT
  ADJUSTMENT
  ORDER_DEDUCTION
  ORDER_CANCELLATION_RESTORE
}
```

---

### `banners`
```prisma
model Banner {
  id          String    @id @default(uuid())
  title       String
  subtitle    String?
  imageUrl    String    // Cloudinary URL
  linkUrl     String?
  isActive    Boolean   @default(true)
  sortOrder   Int       @default(0)
  startDate   DateTime?
  endDate     DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

---

## Key Indexes
```sql
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_slug     ON products(slug);
CREATE INDEX idx_products_active   ON products(is_active);
CREATE INDEX idx_orders_user       ON orders(user_id);
CREATE INDEX idx_orders_status     ON orders(status);
CREATE INDEX idx_orders_number     ON orders(order_number);
CREATE INDEX idx_orders_created_at ON orders(created_at);          -- reports (sales/revenue over time)
CREATE INDEX idx_dealer_status     ON dealer_profiles(status);
CREATE INDEX idx_payments_rzp_order ON payments(razorpay_order_id);
CREATE INDEX idx_payments_status   ON payments(status);            -- reports (PAID-only aggregation)
CREATE UNIQUE INDEX idx_cart_user_product ON cart_items(user_id, product_id);
```

---

## Schema Notes
- All money uses `Decimal(10,2)`; Razorpay amounts converted to paise with `Math.round(x * 100)`.
- `OrderItem` snapshots name/SKU/price so historical orders are immutable (rule 10).
- Soft-delete via `isActive=false` on products/categories — never hard-delete referenced rows.
- `shippingCharge` retained but always `0` in v1 (free shipping, D-07) — keeps future pricing changes non-breaking.
- `OrderTracking` is an internal audit trail for the status timeline; live courier tracking is the external `trackingUrl`.
