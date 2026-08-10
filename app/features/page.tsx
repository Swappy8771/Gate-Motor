'use client';

export default function FeaturesComparison() {
  const includedFeatures = [
    'Unlimited Products (Sale Unlimited)',
    '2 Business Email ID Setup',
    'Advanced Payment Gateway (UPI, Cards, Net Banking, EMI)',
    'Partial Cash on Delivery Option',
    'Advanced Coupon Code System (With Expiry Time)',
    'Order Status Updates (Order Tracking for Customers)',
    'Google reCAPTCHA on All Forms',
    'Product Reviews and Ratings',
    'Product Customization',
    'Website Auto Translator',
    'Progressive Web App (PWA)',
    'Sitemap Submission on Google',
    'Google Analytics Setup',
    'Advanced GST Calculation (State & Product-wise)',
    'Admin Dashboard Access',
    'Multi-Vendor Marketplace (Amazon/Flipkart Style)',
    'Seller Product Adding Feature (Seller Portal)',
    'Seller Split Settlement & Payout Ledger (Razorpay Route)',
    'Commission Management (Per Seller or Category)',
    'Marketplace GST/TCS Reporting Data',
    'Google My Business Profile Integration',
    'Email Reminders for Non-Buyers',
  ];

  const notIncludedFeatures = [
    'All Gold E-com Features (Full Suite)',
    'Free Domain (.com, .in, .org)',
    'Free 1 Year Premium Web Hosting',
    'Shipping Integration (Ecom Express, Ekart, Delhivery)',
    'Customer Info - Who Viewed But Not Bought',
    'Abandoned Cart Recovery with AI',
    'Country Wise Auto Currency Change',
    'Upsell & Cross-sell Recommendations (AI)',
    'Advanced Security Suite (Firewall, Malware Scanning)',
    'Custom Backup & Restore Options',
    'Auto Invoice and Order Mailing System',
    'Real-Time Stock Alerts for Customers',
    'Location-wise Delivery Charge Adding Option',
    'Website Traffic Counter',
    'Email Reminders for Non-Buyers',
    'International Payment Processing',
    'SEO Ready Website Setup',
  ];

  const leastImportantFeatures = [
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
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-8 sm:py-12 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">Features Breakdown</h1>
        <p className="text-base sm:text-lg opacity-90">Gate Motor E-Commerce Platform</p>
      </div>

      <div className="w-full mx-auto px-2 sm:px-4 py-6 sm:py-12">
        {/* 3 Column Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          {/* Headers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-b divide-x">
            <div className="bg-green-600 text-white p-3 sm:p-4 md:p-6 border-b sm:border-b-0">
              <h3 className="text-base sm:text-lg md:text-lg font-bold">Features Included in Current Estimation</h3>
              <p className="text-xs sm:text-sm opacity-90 mt-1">15 Features</p>
            </div>
            <div className="bg-red-600 text-white p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-lg md:text-lg font-bold">Features Not Included in This Estimation</h3>
              <p className="text-xs sm:text-sm opacity-90 mt-1">16 Features</p>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-x divide-y sm:divide-y-0">
            {/* Column 1: Included */}
            <div className="p-3 sm:p-4 md:p-6 bg-green-50">
              <ul className="space-y-2 sm:space-y-3">
                {includedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800">
                    <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Not Included */}
            <div className="p-3 sm:p-4 md:p-6 bg-red-50">
              <ul className="space-y-2 sm:space-y-3">
                {notIncludedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800">
                    <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">✗</span>
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
