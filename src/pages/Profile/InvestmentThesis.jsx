import React from 'react';

const InvestmentThesis = () => {
  return (
    <div className="space-y-3">
      {/* Investment Focus Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-1">Investment Focus</h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm border-collapse border-spacing-0">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Asset Types</td>
                <td className="p-2">
                  <div className="flex flex-wrap gap-2 max-w-[100%]">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Startups</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Stocks</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Real Estate</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Mutual Funds</span>
                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs">Web3 / Crypto</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Bonds</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Commodities</span>
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Franchise</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Deal Stage</td>
                <td className="p-2">
                  <div className="flex flex-wrap gap-2 max-w-[70%]">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Pre-Seed</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Seed</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Series A</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Growth Stage</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Pre-IPO</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Sectors</td>
                <td className="p-2">
                  <div className="flex flex-wrap gap-2 max-w-[70%]">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">FinTech</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">HealthTech</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">AI/ML</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">ClimateTech</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Sub-Sectors</td>
                <td className="p-2">
                  <div className="flex flex-wrap gap-2 max-w-[100%]">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">FinTech - Payments</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Blockchain Infrastructure</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">HealthTech - Telemedicine</span>
                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs">Medical Devices</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Regions</td>
                <td className="p-2">
                  <div className="flex flex-wrap gap-2 max-w-[100%]">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">MENA - UAE</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">KSA</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Europe - Germany</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">France</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">APAC - Singapore</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">India</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Market Type</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Emerging Markets</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Developed Markets</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Urban/Rural Focus</td>
                <td className="p-2">
                  <div className="flex flex-wrap gap-2 max-w-[70%]">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Urban</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Rural</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Semi-Urban / Peri-Urban</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Investment Capacity Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-1">Investment Capacity</h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm border-collapse border-spacing-0">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Ticket Size</td>
                <td className="p-4 text-gray-600">$100K - $2M</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Preferred Currency</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">USD</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">AED</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">EUR</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Preferred Deal Structure</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Convertible Notes</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Equity</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">SAFE Note</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Annual Capital Allocation</td>
                <td className="p-4 text-gray-600">$250K - $500K</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Syndicate Role</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Lead Investor</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Passive Investor</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Drawdown Tolerance</td>
                <td className="p-4 text-gray-600">Up to 20%</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Exit Strategy Preference</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">M&A</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">IPO</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Token Liquidity Event</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Risk Appetite by Asset Class</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Startups - High</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Real Estate - Low</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Web3/Crypto - Medium</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Risk & Horizon Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-1">Risk & Horizon</h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm border-collapse border-spacing-0">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Risk Appetite (Overall)</td>
                <td className="p-2">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Medium</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Holding Period</td>
                <td className="p-4 text-gray-600">3-5 years</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Liquidity Preference</td>
                <td className="p-4 text-gray-600">Moderate</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Impact/ESG Focus</td>
                <td className="p-4 text-gray-600">Yes, prefers sustainability score 70/100</td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Due Diligence Preference</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Third-party reports</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Founder references</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Deal Preferences Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-1">Deal Preferences</h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm border-collapse border-spacing-0">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Co-Invest</td>
                <td className="p-4 text-gray-600">Yes</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Tokenized Asset Types</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">STOs</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Fractional Real Estate</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">NFT-backed Assets</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Preferred Co-Investment Range</td>
                <td className="p-4 text-gray-600">$100K - $250K</td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Real Estate Types</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Commercial</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Mixed-Use</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Hospitality</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentThesis;