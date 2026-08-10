import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Project Proposal — E-Commerce Platform | India's No 1 Remote Gate Motor",
  description: "B2C & B2B E-Commerce Platform Proposal for Gate Automation Products",
};

export default function Home() {
  return (
    <main className="proposal-root">
      {/* ── HEADER ── */}
      <header className="proposal-header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="brand-logo">
              <Image src="/asset/logo.png" alt="India's No 1 Remote Gate Motor Logo" width={46} height={46} style={{ objectFit: "contain", borderRadius: 10 }} />
            </div>
            <div>
              <h1 className="brand-name">India&apos;s No 1 Remote Gate Motor</h1>
            </div>
          </div>
          <div className="header-meta">
            <p className="meta-label">Prepared For</p>
            <p className="meta-client">India&apos;s No 1 Remote Gate Motor</p>
            <p className="meta-date">Date: August 2026 · v1.3 (Marketplace)</p>
            <span className="meta-badge">Confidential</span>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-inner">
          <span className="hero-tag">Official Project Proposal</span>
          <h2 className="hero-title">
            Multi-Vendor Marketplace for Gate Automation
            <span className="hero-subtitle"> Customer · Dealer · Seller · Admin</span>
          </h2>
          <p className="hero-desc">
            A full marketplace platform where retail customers buy, verified dealers order at wholesale,
            and third-party sellers list their own products, manage their own stock, and receive automatic
            settlement net of commission — under one admin with complete platform control.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Logins</span>
            </div>
            <div className="stat">
              <span className="stat-num">26+</span>
              <span className="stat-label">Features (v1.3)</span>
            </div>
            <div className="stat">
              <span className="stat-num">9–10</span>
              <span className="stat-label">Week Delivery</span>
            </div>
            <div className="stat">
              <span className="stat-num">7</span>
              <span className="stat-label">Deliverables</span>
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrapper">

        {/* ── EXECUTIVE SUMMARY ── */}
        <section className="section">
          <div className="section-label">01</div>
          <h3 className="section-title">Executive Summary</h3>
          <div className="card summary-card">
            <p>
              We propose to design, develop, and deploy a fully responsive e-commerce platform for
              <strong> India&apos;s No 1 Remote Gate Motor</strong>, tailored for gate automation product sales.
              The platform will primarily serve <strong>retail customers (B2C)</strong> — enabling them to
              browse and purchase products online with ease — while also supporting{" "}
              <strong>verified business dealers (B2B)</strong> under the same unified system, with a powerful
              admin dashboard for complete business management.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Products covered: <strong>Sliding Gate Automation, Swing Gate Automation, Boom Barrier
              Automation, Wireless Remote,</strong> and <strong>Mobile Operated Device</strong>. The platform
              will feature a seamless shopping experience with Razorpay payment integration, order status tracking
              with courier tracking link, and mobile-first design — along with dual pricing and GST-based dealer onboarding for B2B support.
            </p>
          </div>
        </section>

        {/* ── PROBLEM & SOLUTION ── */}
        <section className="section">
          <div className="section-label">02</div>
          <h3 className="section-title">Problem &amp; Solution</h3>
          <div className="two-col">
            <div className="card problem-card">
              <div className="card-icon problem-icon">⚠️</div>
              <h4>Current Challenges</h4>
              <ul className="bullet-list">
                <li>No online storefront for retail customers to browse &amp; buy</li>
                <li>No online visibility of product availability for customers</li>
                <li>Fragmented order management across channels</li>
                <li>Limited reach beyond physical distribution network</li>
                <li>Manual dealer verification and pricing negotiation</li>
              </ul>
            </div>
            <div className="card solution-card">
              <div className="card-icon solution-icon">✅</div>
              <h4>Our Solution</h4>
              <ul className="bullet-list">
                <li>24/7 online storefront with mobile-first design</li>
                <li>Up-to-date product catalog with live stock availability</li>
                <li>Centralized order management dashboard</li>
                <li>Single platform serving B2C &amp; B2B with role-based access</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── USER ROLES ── */}
        <section className="section">
          <div className="section-label">03</div>
          <h3 className="section-title">User Roles &amp; Access</h3>
          <p className="section-intro">
            Four separate logins. The distinction that matters: a <strong>dealer buys</strong> at wholesale,
            a <strong>seller sells</strong> and receives payouts. One company may hold both accounts.
          </p>
          <div className="four-col">
            <div className="role-card customer-role">
              <div className="role-icon">👤</div>
              <h4>Customer</h4>
              <p className="role-tag">B2C · Retail</p>
              <ul className="role-list">
                <li>Browse product catalog</li>
                <li>Purchase at retail price</li>
                <li>Track order status &amp; courier shipment</li>
                <li>Manage profile &amp; addresses</li>
                <li>View purchase history</li>
              </ul>
            </div>
            <div className="role-card dealer-role">
              <div className="role-icon">🏭</div>
              <h4>Dealer</h4>
              <p className="role-tag">B2B · Wholesale</p>
              <ul className="role-list">
                <li>Register with GST number &amp; documents</li>
                <li>Admin approval required</li>
                <li>Browse &amp; order at dealer-specific pricing</li>
                <li>View order history &amp; status</li>
                <li>Account approval status page</li>
              </ul>
            </div>
            <div className="role-card seller-role">
              <div className="role-icon">📦</div>
              <h4>Seller</h4>
              <p className="role-tag">Marketplace · Vendor</p>
              <ul className="role-list">
                <li>Onboard with KYC &amp; GST documents</li>
                <li>List &amp; manage own products</li>
                <li>Manage own stock levels</li>
                <li>Fulfil own orders, enter AWB</li>
                <li>Automatic payout net of commission</li>
                <li>Own sales reports &amp; statements</li>
              </ul>
            </div>
            <div className="role-card admin-role">
              <div className="role-icon">🛡️</div>
              <h4>Admin</h4>
              <p className="role-tag">Platform · Management</p>
              <ul className="role-list">
                <li>Approve sellers &amp; dealers</li>
                <li>Set commission rates &amp; run payouts</li>
                <li>Manage products, inventory &amp; orders</li>
                <li>Resolve disputes, moderate listings</li>
                <li>Platform reports &amp; GST/TCS data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── KEY FEATURES ── */}
        <section className="section">
          <div className="section-label">04</div>
          <h3 className="section-title">Key Features</h3>
          <div className="features-grid">
            {[
              { icon: "🗂️", title: "Product Catalog", desc: "Structured catalog with categories, product pages, images, specifications, and stock availability" },
              { icon: "🔐", title: "Customer Auth", desc: "Secure registration, login, email verification, and profile management with reCAPTCHA v3" },
              { icon: "📦", title: "Category Management", desc: "Admin-managed category structure for Gate Automation, Barriers, Remotes, and Accessories" },
              { icon: "📊", title: "Inventory Management", desc: "Stock tracking with in-stock / out-of-stock availability status per product" },
              { icon: "🛒", title: "Shopping Cart & Checkout", desc: "Persistent cart with quantity controls, price breakdown, and address management" },
              { icon: "💳", title: "Razorpay Payments", desc: "Secure checkout supporting UPI, cards, net banking, and EMI (3/6/12 months)" },
              { icon: "📋", title: "Order Management", desc: "Order lifecycle management — placed, confirmed, shipped, and delivered — with confirmation email sent to customer on successful payment" },
              { icon: "🚚", title: "Order Status Updates", desc: "Admin updates order status with AWB number; customers receive status notifications" },
              { icon: "📈", title: "Reports & Analytics", desc: "Sales reports, revenue trends, and top-performing products for admin" },
              { icon: "🏢", title: "Dealer Registration", desc: "GST-based onboarding with document upload and admin approval workflow" },
              { icon: "🏷️", title: "Dual Pricing System", desc: "Separate retail and dealer-specific pricing per product, managed by admin" },
              { icon: "🛡️", title: "Role-based Access & Security", desc: "Separate access levels with JWT auth, reCAPTCHA protection on all forms, secure payment handling" },
              { icon: "⭐", title: "Product Reviews & Ratings", desc: "Customer reviews with 1–5 star ratings, admin moderation, and display on product pages" },
              { icon: "🌍", title: "Multi-Language Support", desc: "Website auto-translator for 50+ languages (Google Translate) to reach regional customers" },
              { icon: "🏬", title: "Seller Onboarding", desc: "Third-party sellers register with KYC and GST documents, gated behind admin approval" },
              { icon: "📦", title: "Seller Portal", desc: "Sellers manage their own catalogue, stock, orders, and payout ledger from a dedicated dashboard" },
              { icon: "✂️", title: "Multi-Seller Order Splitting", desc: "One cart across several sellers becomes one payment and separate sub-orders, each fulfilled independently" },
              { icon: "💸", title: "Split Settlement & Payouts", desc: "Razorpay Route pays each seller automatically, net of your commission, with a full payout ledger and statements" },
              { icon: "📐", title: "Commission Management", desc: "Configurable commission by seller or category, with per-seller refund reversal handled correctly" },
              { icon: "🧾", title: "Marketplace GST & TCS", desc: "Per-seller sales, commission and TCS data with monthly reporting output for your accountant" },
            ].map((f) => (
              <div className="feature-card" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <h5>{f.title}</h5>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="section">
          <div className="section-label">05</div>
          <h3 className="section-title">Technology Stack</h3>
          <div className="tech-grid">
            <div className="tech-group">
              <h4 className="tech-group-title">Frontend</h4>
              <div className="tech-pills">
                <span className="tech-pill frontend">Next.js 14</span>
                <span className="tech-pill frontend">TypeScript</span>
                <span className="tech-pill frontend">Tailwind CSS</span>
                <span className="tech-pill frontend">React Query</span>
                <span className="tech-pill frontend">reCAPTCHA v3</span>
                <span className="tech-pill frontend">Google Translate</span>
              </div>
            </div>
            <div className="tech-group">
              <h4 className="tech-group-title">Backend</h4>
              <div className="tech-pills">
                <span className="tech-pill backend">Node.js</span>
                <span className="tech-pill backend">Express.js</span>
                <span className="tech-pill backend">REST APIs</span>
                <span className="tech-pill backend">JWT Auth</span>
                <span className="tech-pill backend">PostgreSQL</span>
                <span className="tech-pill backend">Razorpay EMI</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="section">
          <div className="section-label">06</div>
          <h3 className="section-title">Project Timeline</h3>
          <div className="timeline">
            {[
              {
                week: "Week 1–2",
                title: "Foundation, Four-Role Auth & Catalog",
                color: "week1",
                tasks: [
                  "Project setup — Next.js frontend + Node.js backend + PostgreSQL",
                  "🆕 Marketplace schema — seller-scoped products, stock & order lines",
                  "Customer, dealer, seller & admin authentication (JWT) + RBAC",
                  "reCAPTCHA v3 on registration, login & signup forms",
                  "Dealer GST onboarding with admin approval workflow",
                  "Product & category management with images & specifications",
                  "Dual pricing (retail + dealer) & public catalog with search/filter",
                ],
              },
              {
                week: "Week 3",
                title: "Cart, Checkout, Payments & Orders",
                color: "week2",
                tasks: [
                  "Inventory management with live stock availability",
                  "Shopping cart & checkout with address management",
                  "Razorpay integration (UPI, cards, net banking)",
                  "EMI payment option (3/6/12 months)",
                  "Secure server-side payment verification & webhook",
                  "Order lifecycle, cancellation & AWB courier tracking",
                  "▲ Milestone M2 — commerce core live on staging",
                ],
              },
              {
                week: "Week 4–5",
                title: "Seller Onboarding & Seller Portal",
                color: "week3",
                tasks: [
                  "🆕 Seller registration with KYC & GST document upload",
                  "🆕 Admin seller approval queue & account states",
                  "🆕 Seller dashboard — sales, orders & stock at a glance",
                  "🆕 Seller catalogue CRUD with image upload",
                  "🆕 Admin listing moderation queue",
                  "🆕 Seller-owned stock management with audit log",
                  "▲ Milestone M3 — sellers onboard, list & manage stock",
                ],
              },
              {
                week: "Week 6–7",
                title: "Marketplace Commerce & Settlement",
                color: "week4",
                tasks: [
                  "🆕 Multi-seller cart & order splitting into sub-orders",
                  "🆕 Per-seller totals, status & partial cancellation",
                  "🆕 Seller fulfilment queue with AWB entry",
                  "🆕 Razorpay Route linked accounts & split settlement",
                  "🆕 Commission engine + per-seller refund reversal",
                  "🆕 Payout ledger, seller statements & admin payout runs",
                  "▲ Milestone M4 — splits & payouts working end to end",
                ],
              },
              {
                week: "Week 8",
                title: "Admin, Reports, Compliance & Notifications",
                color: "week5",
                tasks: [
                  "🆕 Seller management, commission config & dispute handling",
                  "🆕 Marketplace GST/TCS data & monthly report output",
                  "Product reviews & ratings with admin moderation",
                  "Platform + seller-scoped reports & analytics",
                  "Transactional emails — orders, approvals, payouts",
                  "Static / legal pages & Technical SEO setup",
                ],
              },
              {
                week: "Week 9–10",
                title: "Enhanced Features, Security & Go-Live",
                color: "week6",
                tasks: [
                  "Website auto-translator & Google My Business integration",
                  "Responsive polish across all four portals",
                  "🆕 Row-level authorisation test pass — no cross-seller data access",
                  "Performance optimization & security hardening",
                  "Four-role UAT, bug fixes & seller onboarding walkthrough",
                  "Production deployment, domain/SSL & handover",
                  "▲ Milestone M5 — go-live",
                ],
              },
            ].map((phase) => (
              <div className={`timeline-item ${phase.color}`} key={phase.week}>
                <div className="timeline-marker">
                  <span className="timeline-week">{phase.week}</span>
                </div>
                <div className="timeline-content" data-week={phase.week}>
                  <h4>{phase.title}</h4>
                  <ul>
                    {phase.tasks.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DELIVERABLES ── */}
        <section className="section">
          <div className="section-label">07</div>
          <h3 className="section-title">Deliverables</h3>
          <div className="deliverables-grid">
            {[
              { icon: "🌐", title: "Public Website", desc: "Responsive marketplace storefront with combined catalogue, reviews, translator, and Technical SEO" },
              { icon: "👥", title: "Customer Portal", desc: "Full-featured portal with registration, browsing, reviews, cart, checkout (with EMI), orders, and profile management" },
              { icon: "🏭", title: "Dealer Portal", desc: "Dedicated portal with GST onboarding, dealer pricing, ordering at dealer rates, and dealer dashboard" },
              { icon: "📦", title: "Seller Portal", desc: "Seller onboarding with KYC, own catalogue and stock management, order fulfilment queue, payout ledger, and seller-scoped reports" },
              { icon: "⚙️", title: "Admin Dashboard", desc: "Seller and dealer approval, commission configuration, payout runs, dispute handling, products, inventory, orders, and review moderation" },
              { icon: "🔐", title: "Security & Compliance", desc: "reCAPTCHA v3 on all forms, row-level authorisation across four roles, and marketplace GST/TCS reporting data" },
              { icon: "🚀", title: "Deployment & Go-Live", desc: "Production deployment, SSL setup, domain configuration, and comprehensive post-launch support" },
            ].map((d) => (
              <div className="deliverable-card" key={d.title}>
                <span className="deliverable-icon">{d.icon}</span>
                <div>
                  <h5>{d.title}</h5>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── INVESTMENT ── */}
        <section className="section" id="cost-estimation">
          <div className="section-label">08</div>
          <h3 className="section-title">Investment</h3>
          <div className="card investment-card">
            <div className="investment-header">
              <div>
                <p className="investment-label">Total Project Estimation (v1.3 — Multi-Vendor Marketplace)</p>
                <p className="price-original">₹95,000</p>
                <p className="investment-amount">₹59,999</p>
                <p className="investment-note">You save ₹35,001 (36.84% off) · solo developer · 9–10 week end-to-end delivery · <em>GST extra as applicable</em></p>
              </div>
              <div className="investment-badge">36.84%<span className="off-label">OFF</span></div>
            </div>

            <p className="estimate-caption">Cost &amp; Time Estimation</p>
            <div className="estimate-table">
              <div className="estimate-header">
                <span>Phase</span>
                <span>Key deliverables</span>
                <span>Timeline</span>
                <span>Cost</span>
              </div>
              {[
                { phase: "1 · Foundation & Catalog", deliv: "Setup, four-role schema, auth, RBAC, reCAPTCHA, dealer onboarding, catalog & dual pricing", time: "Week 1–2", cost: "₹18,000" },
                { phase: "2 · Cart, Payments & Orders", deliv: "Inventory, cart, checkout, Razorpay + EMI, order lifecycle & AWB tracking", time: "Week 3", cost: "₹14,000" },
                { phase: "3 · Seller Onboarding & Portal", deliv: "KYC & approval, seller dashboard, catalogue, inventory, moderation queue", time: "Week 4–5", cost: "₹22,000" },
                { phase: "4 · Marketplace Commerce", deliv: "Order splitting, seller fulfilment, Route split settlement, commission engine, payout ledger", time: "Week 6–7", cost: "₹24,000" },
                { phase: "5 · Admin, Reports & Compliance", deliv: "Seller management, commission config, disputes, reviews, reports, GST/TCS data, emails", time: "Week 8", cost: "₹10,000" },
                { phase: "6 · Polish, Security & Go-Live", deliv: "Translator, GMB, responsive polish, authorisation test pass, UAT, deployment & SSL", time: "Week 9–10", cost: "₹7,000" },
              ].map((r) => (
                <div className="estimate-row" key={r.phase}>
                  <span className="e-phase">{r.phase}</span>
                  <span className="e-deliv">{r.deliv}</span>
                  <span className="e-time">{r.time}</span>
                  <span className="e-cost">{r.cost}</span>
                </div>
              ))}
              <div className="estimate-total">
                <span className="e-phase">Total Estimation (v1.3)</span>
                <span className="e-deliv" />
                <span className="e-time">9–10 weeks</span>
                <span className="e-cost"><span className="e-strike">₹95,000</span>₹59,999</span>
              </div>
            </div>

            <p className="estimate-caption">Payment Schedule · on offer price ₹59,999</p>
            <div className="milestone-table">
              <div className="milestone-header">
                <span>Milestone</span>
                <span>Trigger</span>
                <span>%</span>
                <span>Amount</span>
              </div>
              {[
                { milestone: "M1 · Kickoff", trigger: "On agreement signing", pct: "20%", amt: "₹12,000" },
                { milestone: "M2 · Commerce Core", trigger: "End Week 3 — catalog, cart, payments & orders on staging", pct: "20%", amt: "₹12,000" },
                { milestone: "M3 · Seller Portal", trigger: "End Week 5 — sellers onboard, list & manage stock", pct: "25%", amt: "₹15,000" },
                { milestone: "M4 · Split Settlement", trigger: "End Week 7 — order splits & payouts end to end", pct: "20%", amt: "₹12,000" },
                { milestone: "M5 · Final Delivery", trigger: "Post go-live & handover", pct: "15%", amt: "₹8,999" },
              ].map((m) => (
                <div className="milestone-row" key={m.milestone}>
                  <span className="m-name">{m.milestone}</span>
                  <span className="m-trigger">{m.trigger}</span>
                  <span className="m-pct">{m.pct}</span>
                  <span className="m-amt">{m.amt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MOBILE APP ── */}
        <section className="section" id="mobile-estimation">
          <div className="section-label">09</div>
          <h3 className="section-title">Mobile App (iOS + Android)</h3>
          <div className="card investment-card">
            <div className="investment-header">
              <div>
                <p className="investment-label">Total Project Estimation — Customer + Dealer Apps</p>
                <p className="price-original">₹75,000</p>
                <p className="investment-amount">₹49,999</p>
                <p className="investment-note">You save ₹25,001 · solo developer · 3–4 week end-to-end delivery, after web go-live · <em>GST extra as applicable</em></p>
              </div>
              <div className="investment-badge">33.33%<span className="off-label">OFF</span></div>
            </div>

            <p className="estimate-caption">Cost &amp; Time Estimation</p>
            <div className="estimate-table">
              <div className="estimate-header">
                <span>Phase</span>
                <span>Key deliverables</span>
                <span>Timeline</span>
                <span>Cost</span>
              </div>
              {[
                { phase: "1 · Setup, Auth & Catalog", deliv: "React Native setup, authentication, product screens", time: "Week 1", cost: "₹18,000" },
                { phase: "2 · Cart, Checkout & Payments", deliv: "Shopping cart, checkout, Razorpay integration", time: "Week 1.5", cost: "₹15,000" },
                { phase: "3 · Orders, Reviews & Notifications", deliv: "Order management, reviews, push notifications", time: "Week 1.5", cost: "₹13,000" },
                { phase: "4 · Dealer App & App Store Launch", deliv: "Dealer portal, app store submission, deployment", time: "Week 1", cost: "₹12,000" },
              ].map((r) => (
                <div className="estimate-row" key={r.phase}>
                  <span className="e-phase">{r.phase}</span>
                  <span className="e-deliv">{r.deliv}</span>
                  <span className="e-time">{r.time}</span>
                  <span className="e-cost">{r.cost}</span>
                </div>
              ))}
              <div className="estimate-total">
                <span className="e-phase">Total Estimation</span>
                <span className="e-deliv" />
                <span className="e-time">3–4 weeks</span>
                <span className="e-cost"><span className="e-strike">₹75,000</span>₹49,999</span>
              </div>
            </div>

            <p className="estimate-caption">Payment Schedule · on offer price ₹49,999</p>
            <div className="milestone-table">
              <div className="milestone-header">
                <span>Milestone</span>
                <span>Trigger</span>
                <span>%</span>
                <span>Amount</span>
              </div>
              {[
                { milestone: "Project Kickoff", trigger: "On agreement signing", pct: "30%", amt: "₹15,000" },
                { milestone: "Mid Delivery", trigger: "After Week 2 — core features complete", pct: "40%", amt: "₹20,000" },
                { milestone: "Final Delivery", trigger: "Post app store launch & handover", pct: "30%", amt: "₹14,999" },
              ].map((m) => (
                <div className="milestone-row" key={m.milestone}>
                  <span className="m-name">{m.milestone}</span>
                  <span className="m-trigger">{m.trigger}</span>
                  <span className="m-pct">{m.pct}</span>
                  <span className="m-amt">{m.amt}</span>
                </div>
              ))}
            </div>

            <div className="notice">
              <p className="notice-tag">Optional add-on — Seller App</p>
              <p>
                A native seller app (order queue, stock updates, payout view) is <strong>₹20,000 → ₹14,999</strong>,
                roughly 12 developer-days. Sellers can use the responsive web portal instead, so this is genuinely
                optional. Full programme — web marketplace plus customer and dealer apps —{" "}
                <strong>₹1,09,998</strong> against a ₹1,70,000 list; with the seller app, ₹1,24,997.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="section">
          <div className="section-label">10</div>
          <h3 className="section-title">Why Choose Us</h3>
          <div className="why-grid">
            {[
              { icon: "⚡", title: "Fast Delivery", desc: "Web: 4.5–5 weeks · Mobile: 3–4 weeks · Weekly milestone demos" },
              { icon: "🔒", title: "Security & Trust", desc: "reCAPTCHA v3 bot protection, JWT auth, encrypted payments, role-based access, SSL" },
              { icon: "📱", title: "Multi-Platform", desc: "Web + iOS + Android from single React Native codebase · One development team" },
              { icon: "⭐", title: "Conversion Optimized", desc: "Product reviews, EMI payments, push notifications for mobile" },
              { icon: "💬", title: "Transparent Process", desc: "Regular updates, shared staging environment, and direct communication with the team" },
              { icon: "🛠️", title: "Post-Launch Support", desc: "30-day warranty for bugs, app store support, maintenance plans available" },
            ].map((w) => (
              <div className="why-card" key={w.title}>
                <span className="why-icon">{w.icon}</span>
                <h5>{w.title}</h5>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TERMS ── */}
        <section className="section">
          <div className="section-label">11</div>
          <h3 className="section-title">Terms &amp; Conditions</h3>
          <div className="card terms-card">
            <ul className="terms-list">
              <li>This revision (v1.3) supersedes v1.2 in full; the earlier single-seller quote is withdrawn</li>
              <li>Scope: four-role marketplace — customer, dealer, seller and admin, per the v1.3 scope document</li>
              <li>Timeline: 9–10 weeks, extended to build the seller portal, order splitting and split settlement at full quality</li>
              <li>Source code ownership transfers to the client upon final payment</li>
              <li>Client to provide a Razorpay account with <strong>Route activated</strong>, plus Google Cloud reCAPTCHA keys</li>
              <li>Client to confirm commission policy, payout cadence and seller agreement copy by day one</li>
              <li>Hosting, domain, gateway fees and third-party services are borne by the client</li>
              <li>TCS registration, deposits and monthly GSTR-8 filings are the client&apos;s obligation</li>
              <li>Any scope additions post-agreement will be quoted and approved separately</li>
              <li>Design revisions up to 2 rounds per milestone are included in the scope</li>
              <li>Proposal valid for 15 days from the date of submission</li>
              <li>30-day post-launch warranty for bugs within agreed scope (v1.3 baseline)</li>
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <h3>Ready to Get Started?</h3>
          <p>Let&apos;s build your e-commerce platform and take your business online.</p>
          <p className="cta-note">This proposal is confidential and prepared exclusively for the client.</p>
        </section>

      </div>

      <Script id="open-cost-estimation" strategy="afterInteractive">
        {`
          const target = document.getElementById("cost-estimation");
          if (target) {
            if (window.location.hash !== "#cost-estimation") {
              window.history.replaceState(null, "", "#cost-estimation");
            }
            target.scrollIntoView({ block: "start" });
          }
        `}
      </Script>

      {/* ── FOOTER ── */}
      <footer className="proposal-footer">
        <p>© 2026 India&apos;s No 1 Remote Gate Motor · All rights reserved</p>
        <p>
          Prepared by{" "}
          <a href="https://qodeways.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
            Qodeways Technologies Pvt Ltd
          </a>
        </p>
      </footer>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .proposal-root {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          background: #f8fafc;
          color: #1e293b;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* ── HEADER ── */
        .proposal-header {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
          color: white;
          padding: 1.25rem 0;
        }
        .header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .header-brand { display: flex; align-items: center; gap: 0.75rem; }
        .brand-logo {
          width: 46px; height: 46px; flex-shrink: 0;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem;
        }
        .brand-name { font-size: 1.35rem; font-weight: 800; }
        .header-meta { text-align: right; }
        .meta-label { font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
        .meta-client { font-size: 1.15rem; font-weight: 700; }
        .meta-date { font-size: 0.9rem; color: #cbd5e1; margin-top: 0.15rem; font-weight: 500; }
        .meta-badge {
          display: inline-block;
          background: rgba(59,130,246,0.3);
          border: 1px solid rgba(59,130,246,0.5);
          color: #93c5fd;
          font-size: 0.75rem;
          padding: 0.2rem 0.65rem;
          border-radius: 20px;
          margin-top: 0.3rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        /* ── HERO ── */
        .hero-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0e4d7a 100%);
          color: white;
          padding: 3.5rem 1.25rem 3rem;
          text-align: center;
        }
        .hero-inner { max-width: 850px; margin: 0 auto; }
        .hero-tag {
          display: inline-block;
          background: rgba(59,130,246,0.2);
          border: 1px solid rgba(59,130,246,0.4);
          color: #93c5fd;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.35rem 1rem;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.25rem;
        }
        .hero-title {
          font-size: clamp(1.8rem, 5vw, 3.2rem);
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }
        .hero-subtitle { display: block; color: #60a5fa; }
        .hero-desc {
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          font-weight: 500;
          color: #cbd5e1;
          max-width: 680px;
          margin: 0 auto 2rem;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          overflow: hidden;
        }
        .stat {
          text-align: center;
          padding: 1.25rem 0.5rem;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .stat:last-child { border-right: none; }
        .stat-num { display: block; font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 900; color: #60a5fa; }
        .stat-label { font-size: clamp(0.75rem, 1.5vw, 0.9rem); font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.04em; }

        /* ── LAYOUT ── */
        .content-wrapper { max-width: 1100px; margin: 0 auto; padding: 2.5rem 1.25rem; }
        .section { margin-bottom: 3.5rem; }
        .section-label {
          font-size: 0.82rem;
          font-weight: 800;
          color: #3b82f6;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 0.35rem;
        }
        .section-title {
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.25rem;
          padding-bottom: 0.65rem;
          border-bottom: 3px solid #e2e8f0;
          position: relative;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 56px; height: 3px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 2px;
        }

        /* ── BASE CARD ── */
        .card {
          background: white;
          border-radius: 14px;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04);
          border: 1px solid #e2e8f0;
          overflow-wrap: break-word;
          word-break: break-word;
          min-width: 0;
        }
        .summary-card { font-size: clamp(1rem, 2vw, 1.1rem); font-weight: 500; color: #334155; line-height: 1.8; }

        /* ── TWO COL ── */
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .problem-card, .solution-card { padding: 1.5rem; }
        .card-icon { font-size: 2rem; margin-bottom: 0.6rem; }
        .problem-card h4, .solution-card h4 { font-size: 1.15rem; font-weight: 800; margin-bottom: 0.9rem; }
        .bullet-list { list-style: none; padding: 0; }
        .bullet-list li { padding: 0.4rem 0 0.4rem 1.4rem; position: relative; font-size: 1rem; font-weight: 500; color: #475569; }
        .bullet-list li::before { content: '→'; position: absolute; left: 0; color: #3b82f6; font-weight: 700; }

        .section-intro {
          font-size: clamp(0.98rem, 2vw, 1.05rem);
          font-weight: 500;
          color: #475569;
          max-width: 70ch;
          margin-bottom: 1.25rem;
        }

        /* ── THREE / FOUR COL ── */
        .three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .four-col  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .role-card {
          background: white;
          border-radius: 14px;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: transform 0.2s;
          min-width: 0;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .role-card:hover { transform: translateY(-3px); }
        .customer-role { border-top: 4px solid #3b82f6; }
        .dealer-role   { border-top: 4px solid #10b981; }
        .seller-role   { border-top: 4px solid #8b5cf6; }
        .admin-role    { border-top: 4px solid #f59e0b; }
        .role-icon { font-size: 2.5rem; margin-bottom: 0.6rem; }
        .role-card h4 { font-size: 1.2rem; font-weight: 800; margin-bottom: 0.25rem; }
        .role-tag { font-size: 0.82rem; font-weight: 600; color: #64748b; margin-bottom: 0.9rem; background: #f1f5f9; display: inline-block; padding: 0.2rem 0.65rem; border-radius: 20px; }
        .role-list { list-style: none; padding: 0; }
        .role-list li { padding: 0.35rem 0; font-size: 0.95rem; font-weight: 500; color: #475569; border-bottom: 1px dashed #f1f5f9; }
        .role-list li:last-child { border: none; }

        /* ── FEATURES GRID ── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 0.9rem;
        }
        .feature-card {
          background: white;
          border-radius: 11px;
          padding: 1.1rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          transition: box-shadow 0.2s, transform 0.2s;
          min-width: 0;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .feature-card:hover { box-shadow: 0 4px 16px rgba(59,130,246,0.12); transform: translateY(-2px); }
        .feature-icon { font-size: 1.7rem; display: block; margin-bottom: 0.4rem; }
        .feature-card h5 { font-size: 1rem; font-weight: 800; color: #1e293b; margin-bottom: 0.3rem; }
        .feature-card p  { font-size: 0.9rem; font-weight: 500; color: #64748b; }

        /* ── TECH STACK ── */
        .tech-grid { display: flex; flex-direction: column; gap: 1rem; }
        .tech-group {
          background: white;
          border-radius: 11px;
          padding: 1rem 1.25rem;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .tech-group-title { font-size: 0.92rem; font-weight: 800; color: #475569; min-width: 120px; text-transform: uppercase; letter-spacing: 0.05em; }
        .tech-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tech-pill { padding: 0.35rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 700; }
        .frontend { background: #dbeafe; color: #1d4ed8; }
        .backend  { background: #dcfce7; color: #15803d; }

        /* ── TIMELINE ── */
        .timeline { display: flex; flex-direction: column; position: relative; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 76px; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #3b82f6, #06b6d4, #10b981, #f59e0b);
        }
        .timeline-item { display: flex; gap: 1.75rem; margin-bottom: 1.75rem; position: relative; }
        .timeline-marker {
          min-width: 76px;
          display: flex; flex-direction: column; align-items: flex-end;
          padding-right: 1.4rem; padding-top: 1rem;
          position: relative; flex-shrink: 0;
        }
        .timeline-marker::after {
          content: '';
          position: absolute;
          right: -7px; top: 18px;
          width: 13px; height: 13px;
          border-radius: 50%; border: 3px solid white;
        }
        .week1 .timeline-marker::after { box-shadow: 0 0 0 2px #3b82f6; background: #3b82f6; }
        .week2 .timeline-marker::after { box-shadow: 0 0 0 2px #06b6d4; background: #06b6d4; }
        .week3 .timeline-marker::after { box-shadow: 0 0 0 2px #10b981; background: #10b981; }
        .week4 .timeline-marker::after { box-shadow: 0 0 0 2px #f59e0b; background: #f59e0b; }
        .week5 .timeline-marker::after { box-shadow: 0 0 0 2px #8b5cf6; background: #8b5cf6; }
        .week6 .timeline-marker::after { box-shadow: 0 0 0 2px #ef4444; background: #ef4444; }
        .timeline-week { font-size: 0.82rem; font-weight: 800; color: #64748b; text-transform: uppercase; }
        .timeline-content {
          flex: 1;
          background: white; border-radius: 11px; padding: 1.25rem;
          border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          min-width: 0; overflow-wrap: break-word; word-break: break-word;
        }
        .week1 .timeline-content { border-left: 4px solid #3b82f6; }
        .week2 .timeline-content { border-left: 4px solid #06b6d4; }
        .week3 .timeline-content { border-left: 4px solid #10b981; }
        .week4 .timeline-content { border-left: 4px solid #f59e0b; }
        .week5 .timeline-content { border-left: 4px solid #8b5cf6; }
        .week6 .timeline-content { border-left: 4px solid #ef4444; }
        .timeline-content h4 { font-size: 1.08rem; font-weight: 800; margin-bottom: 0.65rem; color: #1e293b; }
        .timeline-content ul { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 0.35rem; }
        .timeline-content li { font-size: 0.93rem; font-weight: 500; color: #475569; padding-left: 1.1rem; position: relative; }
        .timeline-content li::before { content: '✓'; position: absolute; left: 0; color: #10b981; font-size: 0.85rem; font-weight: 700; }

        /* ── DELIVERABLES ── */
        .deliverables-grid { display: flex; flex-direction: column; gap: 0.9rem; }
        .deliverable-card {
          background: white; border-radius: 11px;
          padding: 1.1rem 1.25rem;
          border: 1px solid #e2e8f0;
          display: flex; align-items: flex-start; gap: 1rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        .deliverable-icon { font-size: 2.1rem; line-height: 1; margin-top: 0.1rem; flex-shrink: 0; }
        .deliverable-card h5 { font-size: 1.08rem; font-weight: 800; margin-bottom: 0.25rem; }
        .deliverable-card p  { font-size: 0.95rem; font-weight: 500; color: #64748b; }

        /* ── INVESTMENT ── */
        .investment-card { padding: 1.5rem; }
        .investment-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
        .investment-label  { font-size: 0.9rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
        .investment-amount { font-size: clamp(1.6rem, 4vw, 2.2rem); font-weight: 900; color: #0f172a; }
        .investment-note   { font-size: 0.9rem; font-weight: 500; color: #94a3b8; margin-top: 0.2rem; }
        .price-original { font-size: 1.2rem; font-weight: 700; color: #94a3b8; text-decoration: line-through; margin-bottom: 0.1rem; }
        .investment-badge {
          background: linear-gradient(135deg, #16a34a, #22c55e);
          color: white; padding: 0.7rem 1.4rem;
          border-radius: 16px; font-size: 1.5rem; font-weight: 900; white-space: nowrap;
          display: flex; flex-direction: column; align-items: center; line-height: 1;
          box-shadow: 0 6px 18px rgba(22,163,74,0.28);
        }
        .off-label { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.18em; margin-top: 0.2rem; }
        .estimate-caption { font-size: 0.9rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 0.6rem; }
        .estimate-table { border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; margin-bottom: 1.5rem; }
        .estimate-header, .estimate-row, .estimate-total {
          display: grid; grid-template-columns: 1.5fr 2.4fr 1fr 1fr; gap: 0.5rem;
          padding: 0.7rem 1rem; align-items: center;
        }
        .estimate-header {
          background: #f8fafc; font-size: 0.78rem; font-weight: 800; color: #64748b;
          text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid #e2e8f0;
        }
        .estimate-row { border-bottom: 1px solid #f1f5f9; }
        .estimate-total { background: #f8fafc; border-top: 2px solid #e2e8f0; }
        .e-phase { font-weight: 700; color: #1e293b; font-size: 0.9rem; text-align: left; }
        .e-deliv { font-size: 0.85rem; color: #64748b; font-weight: 500; text-align: left; }
        .e-time  { font-size: 0.88rem; color: #475569; font-weight: 600; text-align: center; }
        .e-cost  { font-weight: 800; color: #3b82f6; font-size: 0.95rem; text-align: right; }
        .estimate-total .e-phase, .estimate-total .e-time { font-weight: 800; }
        .estimate-total .e-cost { color: #16a34a; }
        .e-strike { text-decoration: line-through; color: #94a3b8; font-weight: 700; font-size: 0.82em; margin-right: 0.45rem; }

        /* ── NOTICE ── */
        .notice {
          margin-top: 1.25rem;
          background: #fffbeb;
          border: 1px solid #fde68a;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          padding: 1rem 1.15rem;
        }
        .notice-tag {
          font-size: 0.78rem; font-weight: 800; color: #92400e;
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.4rem;
        }
        .notice p:not(.notice-tag) { font-size: 0.92rem; font-weight: 500; color: #475569; }

        .milestone-table { border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; }
        .milestone-header {
          display: grid; grid-template-columns: 1.2fr 1.8fr 56px 96px; gap: 0.5rem;
          background: #f8fafc; padding: 0.75rem 1rem;
          font-size: 0.82rem; font-weight: 800; color: #64748b;
          text-transform: uppercase; letter-spacing: 0.05em;
          border-bottom: 1px solid #e2e8f0;
        }
        .milestone-row {
          display: grid; grid-template-columns: 1.2fr 1.8fr 56px 96px; gap: 0.5rem;
          padding: 0.9rem 1rem; border-bottom: 1px solid #f1f5f9; align-items: center;
        }
        .milestone-row:last-child { border: none; }
        .m-name    { font-weight: 700; font-size: 0.95rem; text-align: left; }
        .m-trigger { font-size: 0.9rem; font-weight: 500; color: #64748b; text-align: left; }
        .m-pct     { font-weight: 800; color: #3b82f6; font-size: 1.05rem; text-align: center; }
        .m-amt     { font-weight: 800; color: #0f172a; font-size: 0.95rem; text-align: right; }

        /* ── WHY US ── */
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .why-card {
          background: white; border-radius: 11px; padding: 1.25rem;
          border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          min-width: 0; overflow-wrap: break-word; word-break: break-word;
        }
        .why-icon { font-size: 2rem; display: block; margin-bottom: 0.6rem; }
        .why-card h5 { font-size: 1.05rem; font-weight: 800; margin-bottom: 0.35rem; }
        .why-card p  { font-size: 0.93rem; font-weight: 500; color: #64748b; }

        /* ── TERMS ── */
        .terms-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem; }
        .terms-list li {
          padding: 0.75rem 1rem 0.75rem 2.25rem;
          position: relative;
          background: #f8fafc; border-radius: 8px;
          font-size: 0.98rem; font-weight: 500; color: #475569;
        }
        .terms-list li::before {
          content: '§'; position: absolute; left: 0.7rem;
          color: #3b82f6; font-weight: 700;
        }

        /* ── CTA ── */
        .cta-section {
          background: linear-gradient(135deg, #0f172a, #1e3a5f);
          color: white; text-align: center;
          padding: 3.5rem 1.5rem;
          margin: 2rem 0 0;
          border-radius: 18px;
        }
        .cta-section h3 { font-size: clamp(1.6rem, 4vw, 2.3rem); font-weight: 900; margin-bottom: 0.65rem; }
        .cta-section > p { color: #94a3b8; margin-bottom: 1.25rem; font-size: clamp(1rem, 2vw, 1.1rem); font-weight: 500; }
        .cta-contacts { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
        .contact-item { display: flex; align-items: center; gap: 0.5rem; color: #e2e8f0; font-size: 1rem; font-weight: 600; }
        .cta-note { font-size: 0.85rem; font-weight: 500; color: #475569; }

        /* ── FOOTER ── */
        .proposal-footer {
          background: #0f172a; color: #475569;
          padding: 1.25rem 1.5rem;
          font-size: 0.9rem; font-weight: 500;
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;
        }
        .footer-link { color: #60a5fa; text-decoration: none; font-weight: 600; }
        .footer-link:hover { text-decoration: underline; }

        /* ════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ════════════════════════════════ */

        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
          .four-col { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .hero-section { padding: 2.5rem 1.25rem 2rem; }
          .three-col { grid-template-columns: repeat(3, 1fr); }
          .why-grid   { grid-template-columns: repeat(2, 1fr); }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline::before { left: 56px; }
          .timeline-marker  { min-width: 56px; padding-right: 1.1rem; }
          .timeline-item    { gap: 1.25rem; }
          .timeline-content ul { grid-template-columns: 1fr; }
          .milestone-header { grid-template-columns: 1.4fr 48px 92px; }
          .milestone-row    { grid-template-columns: 1.4fr 48px 92px; }
          .m-trigger        { display: none; }
          .estimate-header, .estimate-row, .estimate-total { grid-template-columns: 1.6fr 1fr 1fr; }
          .e-deliv { display: none; }
          .tech-group { flex-direction: column; align-items: flex-start; gap: 0.6rem; }
          .tech-group-title { min-width: unset; }
          .meta-client { font-size: 1rem; }
        }

        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr; }
          .brand-name { font-size: 1.15rem; }
          .meta-client { font-size: 0.95rem; }
          .meta-date { font-size: 0.82rem; }
        }

        @media (max-width: 600px) {
          .header-inner { flex-direction: column; align-items: flex-start; }
          .header-meta  { text-align: left; }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .stat { border-right: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1); }
          .stat:nth-child(2n) { border-right: none; }
          .stat:nth-last-child(-n+2) { border-bottom: none; }
          .content-wrapper { padding: 2rem 1rem; }
          .section { margin-bottom: 2.5rem; }
          .two-col    { grid-template-columns: 1fr; }
          .three-col  { grid-template-columns: 1fr; }
          .four-col   { grid-template-columns: 1fr; }
          .why-grid   { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr; }
          .timeline::before { display: none; }
          .timeline-marker  { display: none; }
          .timeline-item    { flex-direction: column; gap: 0; margin-bottom: 1.25rem; }
          .timeline-content { border-left-width: 4px !important; }
          .week1 .timeline-content::before,
          .week2 .timeline-content::before,
          .week3 .timeline-content::before,
          .week4 .timeline-content::before {
            content: attr(data-week);
            display: block;
            font-size: 0.68rem; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.08em;
            color: #64748b; margin-bottom: 0.4rem;
          }
          .deliverable-card { flex-direction: column; gap: 0.6rem; }
          .deliverable-icon { font-size: 1.5rem; }
          .investment-card { padding: 1.1rem; }
          .investment-header { flex-direction: column; }
          .milestone-header { padding: 0.55rem 0.75rem; }
          .milestone-row    { padding: 0.7rem 0.75rem; }
          .cta-section { padding: 2.5rem 1.1rem; border-radius: 14px; margin: 1.5rem 0 0; }
          .cta-contacts { flex-direction: column; gap: 0.75rem; align-items: center; }
          .proposal-footer { flex-direction: column; text-align: center; align-items: center; }
        }

        @media (max-width: 400px) {
          .brand-name { font-size: 0.95rem; }
          .meta-client { font-size: 0.88rem; }
          .meta-date { font-size: 0.78rem; }
          .meta-badge { font-size: 0.68rem; padding: 0.15rem 0.5rem; }
          .stat-num   { font-size: 1.3rem; }
          .stat-label { font-size: 0.6rem; }
          .hero-title { font-size: 1.35rem; }
          .section-title { font-size: 1.2rem; }
          .content-wrapper { padding: 1.5rem 0.85rem; }
          .card { padding: 1.1rem; }
          .feature-card, .why-card, .role-card { padding: 1rem; }
          .milestone-header, .milestone-row { font-size: 0.75rem; }
          .deliverable-icon { font-size: 1.25rem; }
          .cta-section { padding: 2rem 1rem; }
        }

        @media print {
          .proposal-root { background: white; }
          .hero-section, .proposal-header, .cta-section {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .cta-section { margin: 2rem 0 0; border-radius: 14px; }
          .feature-card:hover, .role-card:hover { transform: none; }
        }
      `}</style>
    </main>
  );
}
