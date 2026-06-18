# M02 — Product Catalog Module

> **Status:** Final v1.0 · Categories are **flat / single-level** (D-05). Customers see stock **status** (in/out), not exact quantity (see [M07 — Inventory](./07-inventory.md)).

## Overview
Manages gate automation products, their (flat) categories, images, and technical specs. Supports dual pricing (retail/dealer), search, filter, and sort.

---

## Categories (flat, v1)
```
Sliding Gate Automation
Swing Gate Automation
Boom Barrier Automation
Wireless Remote
Mobile Operated Device
```
Single-level categories in v1. Nested sub-categories are Phase 2 (D-05). Admin can create/edit/reorder categories.

---

## Product Data Model (summary)
| Field | Type | Notes |
|-------|------|-------|
| name | String | "Sliding Gate Motor 400kg" |
| slug | String | URL-friendly, auto from name |
| description | Text | Full description |
| retailPrice | Decimal | Shown to everyone |
| dealerPrice | Decimal | Shown only to approved dealers |
| gstPercent | Decimal | Default 18% (confirm via Q-04) |
| sku | String | Unique |
| stockQty | Int | Internal/admin; drives status badge |
| lowStockAlert | Int | Admin alert threshold (default 5) |
| isFeatured | Boolean | Homepage featured |
| isActive | Boolean | Soft delete |

---

## Product Specification Examples
### Sliding Gate Motor
| Key | Value | Unit |
|-----|-------|------|
| Motor Type | DC Brushless | — |
| Max Gate Weight | 400 | kg |
| Max Gate Length | 10 | m |
| Operating Voltage | 24 | V DC |
| Speed | 12 | m/min |

### Boom Barrier
| Key | Value | Unit |
|-----|-------|------|
| Boom Length | 3–6 | m |
| Opening Time | 3 | sec |
| Operating Voltage | 220 | V AC |
| IP Rating | IP44 | — |

Specs are free-form key/value/unit rows (not a fixed per-category schema).

---

## Dual Pricing Logic
```
GET /products → decode JWT if present →
  if role === DEALER && dealerStatus === APPROVED → include retailPrice AND dealerPrice
  else → retailPrice only, dealerPrice = null
```
Frontend: if `dealerPrice` present → show dealer price + savings badge; else retail only.

---

## Stock Display (customer-facing status only)
| Badge | Condition |
|-------|-----------|
| In Stock (green) | stockQty > lowStockAlert |
| Low Stock (orange) | 0 < stockQty ≤ lowStockAlert |
| Out of Stock (red) | stockQty === 0 |

Customers see the **badge**, not the raw quantity. Add-to-Cart disabled when out of stock.

---

## Product Images
- Multiple per product (Cloudinary); one `isPrimary` used in listing cards.
- Upload: frontend multipart → Multer → Cloudinary → store `secure_url`.
- Recommended: 800×800px, ≤2MB each.

---

## Listing Page `/products`
`/products?category=sliding-gate-automation&sort=price_asc&page=2`
- Category filter, price range filter
- Sort: price asc/desc, newest, featured
- Pagination (12/page)
- Search: name + description + SKU
- Card: primary image, name, price (retail/dealer), stock badge

---

## Detail Page `/products/:slug`
Image gallery · name/SKU/price · GST note (price excl. GST) · stock badge · Add to Cart (disabled if out of stock) · specs table · description · category breadcrumb.

---

## Admin Product Management
- `/admin/products` — list with search/sort/filter (category, status, stock)
- `/admin/products/new` and `/admin/products/:id/edit`
- Create/edit/soft-delete · upload images & set primary · add/edit specs · featured flag · set retail + dealer price · low-stock threshold

---

## SEO
- Unique `slug` per product/category as the URL
- `<title>`: `{productName} | India's No 1 Remote Gate Motor`
- Meta description from first ~155 chars of description
- Use Next.js `generateMetadata()` for dynamic metadata
