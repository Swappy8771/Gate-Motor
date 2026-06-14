import type { Metadata } from "next";
import Image from "next/image";

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
            <p className="meta-date">Date: June 2026</p>
            <span className="meta-badge">Confidential</span>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-inner">
          <span className="hero-tag">Official Project Proposal</span>
          <h2 className="hero-title">
            B2C &amp; B2B E-Commerce Platform
            <span className="hero-subtitle"> for Gate Automation Products</span>
          </h2>
          <p className="hero-desc">
            A comprehensive digital commerce solution enabling retail customers and registered dealers
            to seamlessly purchase Sliding Gate Automation, Swing Gate Automation, Boom Barriers,
            Wireless Remotes &amp; Mobile Operated Devices — with full admin control over products,
            inventory, orders, and dealer approvals.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">User Roles</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">14+</span>
              <span className="stat-label">Core Features</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">3–4</span>
              <span className="stat-label">Week Delivery</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">5</span>
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
              The platform will serve two distinct customer segments — <strong>retail customers (B2C)</strong> and{" "}
              <strong>verified business dealers (B2B)</strong> — under one unified system, with a powerful
              admin dashboard for complete business management.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Products covered: <strong>Sliding Gate Automation, Swing Gate Automation, Boom Barrier
              Automation, Wireless Remote,</strong> and <strong>Mobile Operated Device</strong>. The platform
              will feature dual pricing, GST-based dealer verification with admin approval, Razorpay payment
              integration, and real-time order tracking — delivering a seamless purchase experience across all devices.
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
                <li>No unified online sales channel for retail &amp; dealer customers</li>
                <li>Manual dealer verification and pricing negotiation</li>
                <li>No real-time inventory visibility for customers</li>
                <li>Fragmented order management across channels</li>
                <li>Limited reach beyond physical distribution network</li>
              </ul>
            </div>
            <div className="card solution-card">
              <div className="card-icon solution-icon">✅</div>
              <h4>Our Solution</h4>
              <ul className="bullet-list">
                <li>Single platform serving B2C &amp; B2B with role-based access</li>
                <li>Automated GST verification &amp; admin approval for dealers</li>
                <li>Real-time product catalog with live inventory status</li>
                <li>Centralized order management &amp; tracking dashboard</li>
                <li>24/7 online storefront with mobile-first design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── USER ROLES ── */}
        <section className="section">
          <div className="section-label">03</div>
          <h3 className="section-title">User Roles &amp; Access</h3>
          <div className="three-col">
            <div className="role-card customer-role">
              <div className="role-icon">👤</div>
              <h4>Customer</h4>
              <p className="role-tag">B2C · Retail</p>
              <ul className="role-list">
                <li>Browse product catalog</li>
                <li>Purchase at retail price</li>
                <li>Track orders in real-time</li>
                <li>Manage profile &amp; addresses</li>
                <li>View purchase history</li>
              </ul>
            </div>
            <div className="role-card dealer-role">
              <div className="role-icon">🏭</div>
              <h4>Dealer</h4>
              <p className="role-tag">B2B · Wholesale</p>
              <ul className="role-list">
                <li>Register with GST number</li>
                <li>Admin approval required</li>
                <li>Access dealer-specific pricing</li>
                <li>Bulk quantity purchasing</li>
                <li>Dedicated dealer dashboard</li>
              </ul>
            </div>
            <div className="role-card admin-role">
              <div className="role-icon">🛡️</div>
              <h4>Admin</h4>
              <p className="role-tag">Platform · Management</p>
              <ul className="role-list">
                <li>Manage products &amp; categories</li>
                <li>Approve/reject dealers</li>
                <li>Set dealer discount pricing</li>
                <li>Manage inventory &amp; orders</li>
                <li>View reports &amp; analytics</li>
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
              { icon: "🚪", title: "Sliding Gate Automation", desc: "Dedicated product pages with motor specs, installation guides, and compatible remote models" },
              { icon: "🔄", title: "Swing Gate Automation", desc: "Full catalog listing for single & double leaf swing gate motors with technical datasheets" },
              { icon: "🚧", title: "Boom Barrier Automation", desc: "Boom barrier product range for commercial & industrial use with dealer bulk pricing" },
              { icon: "📡", title: "Wireless Remote", desc: "Frequency-based remote listings with compatibility filter and pair-device documentation" },
              { icon: "📱", title: "Mobile Operated Device", desc: "App-controlled gate device listings with setup videos and mobile pairing guides" },
              { icon: "🔐", title: "Customer Auth", desc: "Secure registration, login, OTP/email verification, and profile management" },
              { icon: "🏢", title: "Dealer Registration", desc: "GST-based onboarding with document upload and admin approval workflow" },
              { icon: "🏷️", title: "Dual Pricing System", desc: "Separate retail and dealer-specific discounted pricing per product" },
              { icon: "🗂️", title: "Category Management", desc: "Category structure for Gate Automation, Barriers, Remotes, and Accessories" },
              { icon: "📊", title: "Inventory Management", desc: "Real-time stock tracking with low-stock alerts and availability status" },
              { icon: "🛒", title: "Shopping Cart & Checkout", desc: "Persistent cart with quantity controls, price breakdown, and saved items" },
              { icon: "💳", title: "Razorpay Payments", desc: "Secure checkout supporting UPI, cards, net banking, and EMI options" },
              { icon: "📋", title: "Order Management", desc: "Complete order lifecycle — placed, confirmed, shipped, delivered, returned" },
              { icon: "📈", title: "Reports & Analytics", desc: "Sales reports, revenue trends, top products, and dealer performance" },
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
              </div>
            </div>
            <div className="tech-group">
              <h4 className="tech-group-title">Backend</h4>
              <div className="tech-pills">
                <span className="tech-pill backend">Node.js</span>
                <span className="tech-pill backend">Express.js</span>
                <span className="tech-pill backend">REST APIs</span>
                <span className="tech-pill backend">JWT Auth</span>
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
                week: "Week 1",
                title: "Foundation & Authentication",
                color: "week1",
                tasks: [
                  "Project setup — Next.js frontend + Node.js backend",
                  "Database schema design",
                  "Customer registration & login (JWT auth)",
                  "Dealer registration with GST verification flow",
                  "Admin approval workflow for dealers",
                  "Role-based access control (Customer / Dealer / Admin)",
                ],
              },
              {
                week: "Week 2",
                title: "Product & Catalog System",
                color: "week2",
                tasks: [
                  "Category management (CRUD + hierarchy)",
                  "Product listing with images & specifications",
                  "Dual pricing — retail price & dealer discount price",
                  "Inventory management & stock tracking",
                  "Product search, filter, and sorting",
                  "Admin product management dashboard",
                ],
              },
              {
                week: "Week 3",
                title: "Cart, Checkout & Payments",
                color: "week3",
                tasks: [
                  "Shopping cart with persistent state",
                  "Checkout flow with address management",
                  "Razorpay payment integration (UPI, cards, netbanking)",
                  "Order creation & confirmation",
                  "Order status management & tracking",
                  "Email/SMS notifications on order events",
                ],
              },
              {
                week: "Week 4",
                title: "Polish, Analytics & Launch",
                color: "week4",
                tasks: [
                  "Homepage banner & promotions management",
                  "Reports & analytics dashboard (sales, revenue, top products)",
                  "Mobile responsiveness audit & fixes",
                  "Performance optimization & security hardening",
                  "UAT testing & bug fixes",
                  "Deployment, DNS setup & go-live support",
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
              { icon: "🌐", title: "Public Website", desc: "Responsive marketing site with product catalog, category browsing, and SEO-optimized pages" },
              { icon: "👥", title: "Customer Portal", desc: "Full-featured portal for registration, browsing, cart, checkout, orders, and profile management" },
              { icon: "🏭", title: "Dealer Portal", desc: "Dedicated portal with GST onboarding, discounted pricing view, bulk orders, and dealer dashboard" },
              { icon: "⚙️", title: "Admin Dashboard", desc: "Comprehensive management panel for products, categories, inventory, users, dealers, and orders" },
              { icon: "🚀", title: "Deployment & Go-Live", desc: "Production deployment, SSL setup, domain configuration, and post-launch support handover" },
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
        <section className="section">
          <div className="section-label">08</div>
          <h3 className="section-title">Investment</h3>
          <div className="card investment-card">
            <div className="investment-header">
              <div>
                <p className="investment-label">Total Project Investment</p>
                <p className="investment-amount">₹ — To Be Discussed</p>
                <p className="investment-note">Inclusive of development, testing, and deployment</p>
              </div>
              <div className="investment-badge">Fixed Price</div>
            </div>
            <div className="milestone-table">
              <div className="milestone-header">
                <span>Milestone</span>
                <span>Payment</span>
                <span>%</span>
              </div>
              {[
                { milestone: "Project Kickoff", trigger: "On agreement signing", pct: "30%" },
                { milestone: "Mid Delivery", trigger: "After Week 2 completion", pct: "40%" },
                { milestone: "Final Delivery", trigger: "Post go-live & handover", pct: "30%" },
              ].map((m) => (
                <div className="milestone-row" key={m.milestone}>
                  <span className="m-name">{m.milestone}</span>
                  <span className="m-trigger">{m.trigger}</span>
                  <span className="m-pct">{m.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="section">
          <div className="section-label">09</div>
          <h3 className="section-title">Why Choose Us</h3>
          <div className="why-grid">
            {[
              { icon: "⚡", title: "Fast Delivery", desc: "3–4 week timeline with weekly milestone demos to keep you informed" },
              { icon: "🔒", title: "Secure by Design", desc: "JWT auth, encrypted payments, role-based access, and SSL on all routes" },
              { icon: "📱", title: "Mobile First", desc: "Every screen designed and tested for mobile, tablet, and desktop" },
              { icon: "🔧", title: "Scalable Architecture", desc: "Built to grow — add new features, dealers, or products without rebuilding" },
              { icon: "💬", title: "Transparent Process", desc: "Regular updates, shared staging environment, and direct communication" },
              { icon: "🛠️", title: "Post-Launch Support", desc: "Bug fixes and go-live support included; maintenance plans available" },
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
          <div className="section-label">10</div>
          <h3 className="section-title">Terms &amp; Conditions</h3>
          <div className="card terms-card">
            <ul className="terms-list">
              <li>Source code ownership transfers to the client upon final payment</li>
              <li>Client to provide Razorpay merchant account credentials for integration</li>
              <li>Hosting and domain costs are borne by the client unless agreed otherwise</li>
              <li>Any scope additions post-agreement will be quoted and approved separately</li>
              <li>Design revisions up to 2 rounds per milestone are included in the scope</li>
              <li>Proposal valid for 15 days from the date of submission</li>
              <li>30-day post-launch warranty for bugs within agreed scope</li>
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <h3>Ready to Get Started?</h3>
          <p>Let&apos;s build your e-commerce platform and take your business online.</p>
          <div className="cta-contacts">
            <div className="contact-item">
              <span>📍</span>
              <span>Chakan Talegaon Road, Mahalunge Ingale, Chakan MIDC, Pune 410501</span>
            </div>
          </div>
          <p className="cta-note">This proposal is confidential and prepared exclusively for the client.</p>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer className="proposal-footer">
        <p>© 2026 India&apos;s No 1 Remote Gate Motor · All rights reserved</p>
        <p>Chakan MIDC, Pune 410501 · Proposal valid for 15 days</p>
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
        .brand-from { font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
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
        .stat-divider { display: none; }

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

        /* ── THREE COL ── */
        .three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .role-card {
          background: white;
          border-radius: 14px;
          padding: 1.5rem;
          border: 2px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: transform 0.2s;
        }
        .role-card:hover { transform: translateY(-3px); }
        .customer-role { border-top: 4px solid #3b82f6; }
        .dealer-role   { border-top: 4px solid #10b981; }
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
        .timeline-week { font-size: 0.82rem; font-weight: 800; color: #64748b; text-transform: uppercase; }
        .timeline-content {
          flex: 1;
          background: white; border-radius: 11px; padding: 1.25rem;
          border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        .week1 .timeline-content { border-left: 4px solid #3b82f6; }
        .week2 .timeline-content { border-left: 4px solid #06b6d4; }
        .week3 .timeline-content { border-left: 4px solid #10b981; }
        .week4 .timeline-content { border-left: 4px solid #f59e0b; }
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
        .investment-badge {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          color: white; padding: 0.5rem 1.25rem;
          border-radius: 20px; font-size: 0.95rem; font-weight: 800; white-space: nowrap;
        }
        .milestone-table { border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; }
        .milestone-header {
          display: grid; grid-template-columns: 1fr 2fr 70px;
          background: #f8fafc; padding: 0.75rem 1rem;
          font-size: 0.85rem; font-weight: 800; color: #64748b;
          text-transform: uppercase; letter-spacing: 0.05em;
          border-bottom: 1px solid #e2e8f0;
        }
        .milestone-row {
          display: grid; grid-template-columns: 1fr 2fr 70px;
          padding: 0.9rem 1rem; border-bottom: 1px solid #f1f5f9; align-items: center;
        }
        .milestone-row:last-child { border: none; }
        .m-name    { font-weight: 700; font-size: 1rem; }
        .m-trigger { font-size: 0.92rem; font-weight: 500; color: #64748b; }
        .m-pct     { font-weight: 800; color: #3b82f6; font-size: 1.1rem; }

        /* ── WHY US ── */
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .why-card {
          background: white; border-radius: 11px; padding: 1.25rem;
          border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.05);
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
          .three-col { grid-template-columns: repeat(3, 1fr); }
          .why-grid   { grid-template-columns: repeat(3, 1fr); }
          .features-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
        }

        @media (max-width: 768px) {
          .hero-section { padding: 2.5rem 1.25rem 2rem; }
          .three-col { grid-template-columns: repeat(2, 1fr); }
          .why-grid   { grid-template-columns: repeat(2, 1fr); }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .timeline::before { left: 56px; }
          .timeline-marker  { min-width: 56px; padding-right: 1.1rem; }
          .timeline-item    { gap: 1.25rem; }
          .timeline-content ul { grid-template-columns: 1fr; }
          .milestone-header { grid-template-columns: 1fr 70px; }
          .milestone-row    { grid-template-columns: 1fr 70px; }
          .m-trigger        { display: none; }
          .tech-group { flex-direction: column; align-items: flex-start; gap: 0.6rem; }
          .tech-group-title { min-width: unset; }
        }

        @media (max-width: 600px) {
          .header-inner { flex-direction: column; align-items: flex-start; }
          .header-meta  { text-align: left; }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .stat:nth-child(odd)  { border-right: 1px solid rgba(255,255,255,0.1); }
          .stat:nth-last-child(-n+2) { border-bottom: none; }
          .content-wrapper { padding: 2rem 1rem; }
          .section { margin-bottom: 2.5rem; }
          .two-col    { grid-template-columns: 1fr; }
          .three-col  { grid-template-columns: 1fr; }
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
          .brand-name { font-size: 1rem; }
          .stat-num   { font-size: 1.3rem; }
          .stat-label { font-size: 0.6rem; }
          .hero-title { font-size: 1.35rem; }
          .section-title { font-size: 1.2rem; }
          .content-wrapper { padding: 1.5rem 0.85rem; }
          .card { padding: 1.1rem; }
          .feature-card, .why-card, .role-card { padding: 1rem; }
          .milestone-header, .milestone-row { font-size: 0.75rem; }
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
