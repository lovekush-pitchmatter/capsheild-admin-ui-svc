import React from 'react';

const TrackRecord = () => {
  return (
    <div className="space-y-8">
      {/* Investment Statistics */}
      <div className="grid grid-cols-2 gap-3 sm:flex sm:justify-between sm:space-x-4 sm:gap-0 lg:flex-nowrap">
        <div className="flex flex-col items-center bg-white border rounded-lg p-3 sm:p-4 shadow w-full">
          <img 
            src="/track-record-page/active.png" 
            alt="Active Investments" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
          />
          <div className="text-xs text-gray-600 mb-1 text-center">Active Investments</div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">25</div>
        </div>
        <div className="flex flex-col items-center bg-white border rounded-lg p-3 sm:p-4 shadow w-full">
          <img 
            src="/track-record-page/total.png" 
            alt="Total Exits" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
          />
          <div className="text-xs text-gray-600 mb-1 text-center">Total Exits</div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">8</div>
        </div>
        <div className="flex flex-col items-center bg-white border rounded-lg p-3 sm:p-4 shadow w-full">
          <img 
            src="/track-record-page/best.png" 
            alt="Best ROI" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
          />
          <div className="text-xs text-gray-600 mb-1 text-center">Best ROI</div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">4x</div>
        </div>
        <div className="flex flex-col items-center bg-white border rounded-lg p-3 sm:p-4 shadow w-full">
          <img 
            src="/track-record-page/avg.png" 
            alt="Avg Holding Period" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
          />
          <div className="text-xs text-gray-600 mb-1 text-center">Avg Holding Period</div>
          <div className="text-xl sm:text-3xl font-bold text-gray-900">3.5 years</div>
        </div>
      </div>

      {/* Investment Distribution */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <div className="bg-white border rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-gray-900">12</div>
          <div className="text-xs text-gray-600 text-center">Startups</div>
        </div>
        <div className="bg-white border rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-gray-900">6</div>
          <div className="text-xs text-gray-600 text-center">Real Estate</div>
        </div>
        <div className="bg-white border rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-gray-900">5</div>
          <div className="text-xs text-gray-600 text-center">Public Equity</div>
        </div>
        <div className="bg-white border rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-gray-900">3</div>
          <div className="text-xs text-gray-600 text-center">Franchise</div>
        </div>
        <div className="bg-white border rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-gray-900">4</div>
          <div className="text-xs text-gray-600 text-center">Crypto</div>
        </div>
        <div className="bg-white border rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-gray-900">2</div>
          <div className="text-xs text-gray-600 text-center">Other</div>
        </div>
      </div>

      {/* Engagement & Behavior Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-6">Engagement & Behavior</h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="block sm:hidden">
            {/* Mobile Card Layout */}
            <div className="space-y-4 p-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="text-gray-700 font-medium mb-2">Investment Frequency</div>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Quarterly</span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="text-gray-700 font-medium mb-2">Decision Speed</div>
                <div className="text-gray-600">1-3 months</div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="text-gray-700 font-medium mb-2">Network Influence</div>
                <div className="text-gray-600">Moderate - Brings 3-5 co-investors regularly</div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="text-gray-700 font-medium mb-2">Event Participation</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Roadshows</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Investor Roundtables</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Private Dinners</span>
                </div>
              </div>
              <div>
                <div className="text-gray-700 font-medium mb-2">Content Preference</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Pitch decks</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Financial models</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Short video pitches</span>
                </div>
              </div>
            </div>
          </div>
          <table className="hidden sm:table w-full text-sm border-collapse border-spacing-0">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Investment Frequency</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Quarterly</span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Decision Speed</td>
                <td className="p-4 text-gray-600">1-3 months</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Network Influence</td>
                <td className="p-4 text-gray-600">Moderate - Brings 3-5 co-investors regularly</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Event Participation</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Roadshows</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Investor Roundtables</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Private Dinners</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Content Preference</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">Pitch decks</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Financial models</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Short video pitches</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Past Investment Experience Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-6">Past Investment Experience</h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="block sm:hidden">
            {/* Mobile Card Layout */}
            <div className="space-y-4 p-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="text-gray-700 font-medium mb-2">Portfolio Size</div>
                <div className="text-gray-600">25 Active</div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="text-gray-700 font-medium mb-2">Biggest Win</div>
                <div className="text-gray-600">Payments startup 4.1x in 3 years</div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="text-gray-700 font-medium mb-2">Past Losses & Lessons</div>
                <div className="text-gray-600">Backed deal with no exit plan, now requires defined exit strategy</div>
              </div>
              <div>
                <div className="text-gray-700 font-medium mb-2">Recent Exit</div>
                <div className="text-gray-600">AI HealthTech IPO (2024)</div>
              </div>
            </div>
          </div>
          <table className="hidden sm:table w-full text-sm border-collapse border-spacing-0">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Portfolio Size</td>
                <td className="p-4 text-gray-600">25 Active</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Biggest Win</td>
                <td className="p-4 text-gray-600">Payments startup 4.1x in 3 years</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Past Losses & Lessons</td>
                <td className="p-4 text-gray-600">Backed deal with no exit plan, now requires defined exit strategy</td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Recent Exit</td>
                <td className="p-4 text-gray-600">AI HealthTech IPO (2024)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;