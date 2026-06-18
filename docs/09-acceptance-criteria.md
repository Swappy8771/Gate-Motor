# 09 — Acceptance Criteria (Definition of Done)

> **Status:** Final v1.1
> Each module is "done" only when every box below passes in UAT. These are the testable statements the external audit and client sign-off check against.

---

## AC-AUTH — Authentication
- [ ] Customer can register with valid name/email/phone/password; duplicates rejected (409)
- [ ] Verification email is sent; clicking the link sets `isEmailVerified=true`
- [ ] Unverified user is blocked from placing an order (standing assumption 9)
- [ ] Login returns JWT; wrong password rejected (401)
- [ ] Expired/invalid token rejected (401)
- [ ] Password complexity enforced; passwords never returned in any response

## AC-RBAC — Role-based Access
- [ ] Customer cannot reach dealer or admin routes (403 + UI redirect)
- [ ] Dealer cannot reach admin routes
- [ ] Admin-only API rejects non-admin tokens server-side (not just hidden in UI)

## AC-DEAL — Dealer Management
- [ ] Dealer registers with GST number + document; invalid GST format rejected
- [ ] New dealer is `PENDING`; cannot see dealer pricing or order at dealer price
- [ ] Admin sees pending queue; can open GST doc via signed URL
- [ ] Approve → dealer sees dealer pricing; approval email sent
- [ ] Reject with reason → dealer sees reason on status page; rejection email sent
- [ ] GST/PAN documents are NOT publicly accessible

## AC-PRICE — Dual Pricing
- [ ] Anonymous & customer see `retailPrice` only; `dealerPrice` is null in API
- [ ] Approved dealer sees both prices; savings shown
- [ ] Pending/rejected dealer never receives `dealerPrice`

## AC-CAT — Catalog, Categories, Search
- [ ] Public catalog lists active products, paginated (12/page)
- [ ] Product detail shows gallery, specs, price, stock badge
- [ ] Search matches name/description/SKU; filters (category, price) and sort work
- [ ] Admin can CRUD products & categories; soft-delete hides from catalog
- [ ] Categories are flat; slugs unique

## AC-INV — Inventory
- [ ] Customer sees only In/Low/Out status (never raw quantity)
- [ ] Admin sees exact quantity + low-stock threshold
- [ ] Stock deducts on **payment confirmation** via a guarded update (no oversell on the last unit); restores when a CONFIRMED order is cancelled
- [ ] Every change creates an InventoryLog with reason + actor
- [ ] Out-of-stock product cannot be added to cart

## AC-CART — Cart & Checkout
- [ ] Login required to add to cart (no guest)
- [ ] Cart persists across sessions/devices
- [ ] Cannot exceed available stock
- [ ] Totals = subtotal + GST + ₹0 shipping; recomputed server-side on each fetch
- [ ] Address can be added/selected/defaulted; snapshotted onto order (later edits don't change past orders)
- [ ] Abandoned/unpaid order never deducts stock (deduction happens only at payment confirmation)

## AC-PAY — Payments
- [ ] Razorpay modal offers UPI, cards, net banking (no EMI)
- [ ] Payment success verified by server signature → order CONFIRMED
- [ ] Tampered/invalid signature rejected (400); order stays PLACED
- [ ] Webhook confirms order if browser closed mid-flow (idempotent — no double confirm)
- [ ] Confirmation work (stock deduct, order CONFIRMED, cart clear, email) runs **exactly once** across verify + webhook
- [ ] Failed payment recorded with reason

## AC-ORD — Orders & Cancellation
- [ ] Placing an order creates immutable line snapshots + address snapshot + Razorpay order
- [ ] Lifecycle limited to PLACED→CONFIRMED→SHIPPED→DELIVERED (+CANCELLED)
- [ ] Status cannot move backward; PROCESSING/RETURN states do not exist
- [ ] Customer can cancel only while PLACED/CONFIRMED; stock restored only if it was CONFIRMED
- [ ] Paid + cancelled → flagged for manual refund; Payment→REFUNDED after processing

## AC-TRACK — Order Tracking
- [ ] Admin can set courier name + AWB + tracking URL
- [ ] Customer detail page shows status timeline + external Track link
- [ ] No courier-API polling (external link only)

## AC-MAIL — Notifications
- [ ] Order confirmation email sent on successful payment
- [ ] Order cancellation email sent on cancellation
- [ ] Dealer approval/rejection emails sent
- [ ] No SMS is sent; no shipped/delivered status emails in v1

## AC-BAN — Banners
- [ ] Admin can create/edit/delete banners with image + optional link
- [ ] Only active banners (within date range) show on homepage, ordered by sortOrder

## AC-RPT — Reports
- [ ] Sales, revenue, and top-products reports compute over PAID orders
- [ ] B2C vs B2B split is correct
- [ ] CSV export matches on-screen data
- [ ] Date-range filter applies across the page

## AC-ADMIN — Admin Dashboard
- [ ] Summary cards (revenue, orders, pending dealers, low stock) accurate
- [ ] All management sections reachable and functional
- [ ] Status badges color-coded consistently

## AC-SEO — Public Website & SEO
- [ ] Unique title + meta description per product/category
- [ ] sitemap.xml and robots.txt present
- [ ] Slug URLs resolve; 404 page for unknown slugs

## AC-RESP — Responsiveness
- [ ] No horizontal scroll/overlap at 320px, 375px, 768px, 1024px, 1440px
- [ ] Tap targets ≥ 44px; nav usable on mobile
- [ ] Lighthouse mobile Performance ≥ 85, Accessibility ≥ 90

## AC-DEPLOY — Deployment & Go-Live
- [ ] Frontend on HTTPS custom domain; backend on HTTPS
- [ ] Migrations run; admin seeded; Razorpay live keys + webhook configured
- [ ] CORS restricted to frontend origin
- [ ] End-to-end smoke test passes: register → verify → browse → cart → pay → order → track
- [ ] Error tracking + uptime monitoring active

---

## Sign-off
UAT is complete when all boxes pass on **staging**, the client signs off, and a production smoke test passes. Final payment milestone triggers on this sign-off (see [01 — Overview](./01-project-overview.md) commercials).
