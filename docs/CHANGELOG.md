# Documentation Changelog

All notable changes to this knowledge base are recorded here. This `docs/` set is the single source of truth for development; keep it in sync with any approved scope change.

---

## v1.2 — June 2026 — Pricing finalized (offer pricing)

### Changed
- Pricing switched from rate×effort to a **flat competitive project quote**; removed the **"Fixed Price"** badge.
- Estimation set to **₹45,000** (list); **offer ₹36,999** = **17.78% off** (save ₹8,001) — shown with strikethrough + green offer badge.
- Cost & Time Estimation table rescaled to sum to ₹45,000 (₹16k / ₹11k / ₹8k / ₹10k).
- Payment Schedule now on the **offer price ₹36,999** → ₹11,100 / ₹14,799 / ₹11,100 (30/40/30); GST extra as applicable.
- `12-cost-and-effort-estimate.md` reframed: ~41 dev-days is an internal **scope/effort reference**, not the billing basis; recompute formula updated for estimation/offer.

### Status
Proposal + doc 12 consistent at **₹45,000 estimation / ₹36,999 offer**.

---

## v1.1 — June 2026 — Post-audit corrections (right-sized, no overengineering)

Acted on the external audit's genuinely-important findings; **deliberately skipped its
over-engineering recommendations** (sagas, reservation systems, token-revocation infra,
order-number sequence machinery, 4-week replan) as inappropriate for this SME scale.

### Decisions
- **D-13** Stock deduction moved to **payment confirmation** via a guarded conditional update
  (was: at placement). Razorpay order created first. Fixes abandoned-order stock lock and
  last-unit oversell without a reservation/saga system.

### Changed
- Contract alignment (F-01/F-02): proposal reworded — Week-2 "CRUD + hierarchy" → "create,
  edit, organize"; Dealer Portal "bulk orders" → "ordering at dealer rates".
- Payment (F-07): webhook verifies the **raw request buffer**, not `JSON.stringify(body)`;
  documented `express.raw()` route ordering.
- Payment (F-08): one idempotent `markPaymentPaid()` shared by verify + webhook (fixes the
  undefined `orderId` and double-confirm); deducts stock, confirms order, clears cart, emails — once.
- Inventory (F-06): stock decrement is now a **guarded conditional update** (no read-then-write race).
- API (F-09): product-detail example no longer leaks `dealerPrice` to non-approved users.
- Overview / Orders / Inventory / AC: stock timing reworded to "at confirmation"; cancellation
  restores stock only for CONFIRMED orders.

### Added
- Schema (F-04): **address snapshot** fields on `Order` (shipName/phone/line1/2/city/state/pincode).
- Schema (F-12): indexes `orders.created_at`, `payments.status`.
- Scope (F-03): order **cancellation email** as an approved operational email.
- Scope (F-13): static/legal pages (About, Contact, Privacy, Terms, Return Policy) — client copy, vendor builds.
- Traceability: address-snapshot, idempotent payment service, guarded decrement added to reverse-check.
- **`12-cost-and-effort-estimate.md`** — cost/effort estimate (41 dev-days × ₹5,000/day = **₹2,05,000**, the quoted price; +18% GST = ₹2,41,900; 30/40/30 split).
- Proposal **Investment** section now shows the headline price (₹2,05,000 +GST), a phase-wise **Cost & Time Estimation** table, and milestone **amounts** (₹61,500 / ₹82,000 / ₹61,500).
- Timeline set to **3.5 weeks** (4 phases: Week 1 / Week 2 / Week 3 / Final ½) across the proposal **and** `01-project-overview.md` — knowledge base now fully consistent on 3.5 weeks.

### Deliberately NOT changed (audit over-reach for this scale; rationale recorded)
- F-10 token-revocation infra · F-11 order-number sequence machinery · F-14 timeline replan ·
  saga/reservation-expiry checkout. Revisit only if scale demands.

### Status
Ready for re-audit as **v1.1**.

---

## v1.0 — June 2026 — Finalized for external audit

**Baseline:** Aligned the entire knowledge base to the **approved proposal** (the landing page at `app/page.tsx`, approved June 2026) after a full cross-check audit.

### Decisions locked (see [10 — Open Decisions & Assumptions](./10-open-decisions-and-assumptions.md))
- D-01 Returns/cancellation → **cancel-only, admin-manual**; no in-app returns in v1
- D-02 Notifications → **email only** (order confirmation + dealer approval); no SMS
- D-03 GST invoice PDF → **Phase 2**
- D-04 Database → **PostgreSQL + Prisma** (confirmed)
- D-05 Categories → **flat / single level** in v1
- D-06 Dealer "bulk orders" → **larger quantities at dealer pricing via standard cart**
- D-07 Shipping → **free (₹0)** in v1
- D-08 Guest checkout → **not allowed**; login required to buy
- D-09 Payments → **UPI, cards, net banking** (no EMI)
- D-10 Email verification → **link-based** (no OTP/SMS)
- D-11 Order status `PROCESSING` → **removed** (faithful to proposal lifecycle)
- D-12 Storage → **Cloudinary** (public images) + **private storage** (GST/PAN docs)

### Changed (alignment fixes from audit)
- Reframed positioning to **B2C-first, B2B-ready** across overview + README
- Removed **SMS** references (M03, M06) and the SMS-gateway dependency (02)
- Removed **EMI** from payments (M05, 04)
- Order lifecycle trimmed to PLACED→CONFIRMED→SHIPPED→DELIVERED + CANCELLED (M06, 03, 04)
- Email verification scoped to link-based (M01)
- Inventory clarified: internal quantity vs customer-facing in/out status (M07, M02)
- Reports: marked dealer-activity & inventory-alerts as **optional extras**; core = sales/revenue/top-products (M09)
- Categories documented as flat; "hierarchy" deferred (M02, 03)

### Added (governance layer for single-source-of-truth)
- `06-scope-register.md` — authoritative in/Phase-2/out scope
- `07-non-functional-requirements.md` — performance, security, Technical SEO, a11y, availability
- `08-requirements-traceability.md` — proposal → spec → acceptance mapping
- `09-acceptance-criteria.md` — per-module Definition of Done / UAT
- `10-open-decisions-and-assumptions.md` — decision log + open questions
- `11-glossary-and-validation.md` — terms + validation rules
- `CHANGELOG.md` — this file
- Added `CartItem`, email-verification fields, and refund timestamp to the schema (03)

### Status
Ready for **external audit**. After audit feedback, increment to v1.1 with a new entry below.

---

## Template for future entries
```
## vX.Y — <date> — <summary>
### Decisions
### Changed
### Added
### Removed
```
