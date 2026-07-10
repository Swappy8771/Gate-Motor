'use client';

export default function FeaturesComparison() {
  const includedFeatures = [
    'Unlimited Products',
    'Business Email Setup (2 IDs)',
    'Google My Business Integration',
    'Advanced Payment Gateway (UPI, Cards, Net Banking, EMI)',
    'Order Tracking System',
    'Auto Invoice & Order Mailing',
    'Google reCAPTCHA',
    'Product Reviews & Ratings',
    'Email Reminders for Non-Buyers',
    'Website Auto Translator',
    'SEO Ready Website',
    'Google Search Console Setup',
    'Sitemap Submission',
    'Google Analytics Setup',
    'Admin Access',
    'Server & cPanel Access',
  ];

  const notIncludedFeatures = [
    'Advanced Coupon Code System',
    'Integrated Shipping APIs (Delhivery, Ekart, etc.)',
    'Advanced GST Calculation (State-wise)',
    'Location-wise Delivery Charges',
    'Dynamic Shipping by Pin Code',
    'Partial Cash on Delivery',
    'Real-Time Stock Alerts',
  ];

  const leastImportantFeatures = [
    'Multi-Vendor Marketplace',
    'Seller Product Adding (Frontend)',
    'Product Customization (Custom Branding)',
    'Free Domain & Hosting Bundle',
    'Country-wise Auto Currency Switch',
    'Website Traffic Counter Display',
    'Progressive Web App (PWA)',
    'Abandoned Cart Recovery (AI)',
    'AI Upsell & Cross-sell Recommendations',
    'Advanced Security Suite (Firewall, Malware Scanning)',
    'Automated Backups & Restore',
    'Customer Behavior Analytics (Who viewed but not bought)',
    'Advanced Email Automation with SMS',
    'Live Courier Tracking Integration',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Features Breakdown</h1>
        <p className="text-lg opacity-90">Gate Motor E-Commerce Platform</p>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
        {/* 3 Column Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b">
            <div className="bg-green-600 text-white p-6 border-r">
              <h3 className="text-lg font-bold">Features Included in Current Estimation</h3>
              <p className="text-sm opacity-90 mt-1">16 Features</p>
            </div>
            <div className="bg-red-600 text-white p-6 border-r">
              <h3 className="text-lg font-bold">Features Not Included in This Estimation</h3>
              <p className="text-sm opacity-90 mt-1">7 Features</p>
            </div>
            <div className="bg-yellow-600 text-white p-6">
              <h3 className="text-lg font-bold">Features Least Important (Our Suggestion)</h3>
              <p className="text-sm opacity-90 mt-1">14 Features</p>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Column 1: Included */}
            <div className="p-6 bg-green-50 border-r min-h-screen">
              <ul className="space-y-3">
                {includedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Not Included */}
            <div className="p-6 bg-red-50 border-r min-h-screen">
              <ul className="space-y-3">
                {notIncludedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                    <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">✗</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Least Important */}
            <div className="p-6 bg-yellow-50 min-h-screen">
              <ul className="space-y-3">
                {leastImportantFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                    <span className="text-yellow-700 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
