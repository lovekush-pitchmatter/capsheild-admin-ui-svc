import React from 'react';
import { SummaryChartProps } from '../../types/dashboard';

const SummaryChart: React.FC<SummaryChartProps> = ({
  activeTimePeriod,
  setActiveTimePeriod,
  activeSummaryCard,
  setActiveSummaryCard,
}) => {
  return (
<div>
  <h2 className="text-[#000000] text-lg font-semibold mb-4" style={{ fontFamily: 'Roboto' }}>Summary</h2>
  <div className="flex justify-between items-center mb-4">
    <div className="flex space-x-1 w-full max-w-[60%]">
      {['1D', '1W', '1M', '1Y', 'All'].map((period) => (
        <button
          key={period}
          className={`flex-1 py-1 rounded-md text-sm font-medium ${
            activeTimePeriod === period ? 'bg-[#5D40ED] text-white' : 'bg-white text-[#171725]'
          }`}
          onClick={() => setActiveTimePeriod(period)}
        >
          {period}
        </button>
      ))}
    </div>
    <div className="flex items-center text-[#64646D] text-sm font-normal whitespace-nowrap ml-2" style={{ fontFamily: 'Roboto' }}>
      <span>19/03/2024 - 25/03/2024</span>
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
        <path d="M5.3335 1.98926V3.98926" stroke="#292D32" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6665 1.98926V3.98926" stroke="#292D32" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.3335 6.71582H13.6668" stroke="#292D32" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 6.32259V11.9893C14 13.9893 13 15.3226 10.6667 15.3226H5.33333C3 15.3226 2 13.9893 2 11.9893V6.32259C2 4.32259 3 2.98926 5.33333 2.98926H10.6667C13 2.98926 14 4.32259 14 6.32259Z" stroke="#292D32" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.463 9.78939H10.469" stroke="#292D32" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.463 11.7894H10.469" stroke="#292D32" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.99715 9.78939H8.00314" stroke="#292D32" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.99715 11.7894H8.00314" stroke="#292D32" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.52938 9.78939H5.53537" stroke="#292D32" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.52938 11.7894H5.53537" stroke="#292D32" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
  <div className="flex"> {/* New flex container for cards and chart */}
    <div className="flex flex-col space-y-4 mb-4 pr-4 w-1/3"> {/* Container for summary cards */}
      {/* Current Value Card */}
      <button
        className={`flex-none p-4 rounded-lg shadow-sm text-center max-w-[180px] ${
          activeSummaryCard === 'Current Value'
            ? 'bg-[#5D40ED] text-white'
            : 'bg-white text-[#171725]'
        }`}
        onClick={() => setActiveSummaryCard('Current Value')}
      >
        <p className={`text-[14px] font-normal`} style={{ fontFamily: 'Roboto', color: activeSummaryCard === 'Current Value' ? 'white' : '#111111' }}>Current Value</p>
        <p className={`text-[20px] font-semibold mt-1`} style={{ fontFamily: 'Roboto' }}>
          $2,760,000{' '}
          {/* <span className="text-[#37D397] text-[14px] font-medium flex items-center justify-center inline-flex" style={{ fontFamily: 'Roboto' }}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M9.03484 4.94125L5.99984 1.90625L2.96484 4.94125" stroke="#37D397" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 10.4062V1.99121" stroke="#37D397" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            11.5%
          </span>

<span className={`text-[14px] font-medium flex items-center justify-center inline-flex ${activeSummaryCard === 'Current Value' ? 'text-white' : 'text-[#37D397]'}`} style={{ fontFamily: 'Roboto' }}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M9.03484 4.94125L5.99984 1.90625L2.96484 4.94125" stroke={activeSummaryCard === 'Current Value' ? 'white' : '#37D397'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 10.4062V1.99121" stroke={activeSummaryCard === 'Current Value' ? 'white' : '#37D397'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            10.4%
          </span> */}
        </p>
      </button>

      {/* Profit Revenue Card */}
      <button
        className={`flex-none p-4 rounded-lg shadow-sm text-center max-w-[180px] ${
          activeSummaryCard === 'Profit Revenue'
            ? 'bg-[#CDC4F9] text-[#171725]'
            : 'bg-white text-[#171725]'
        }`}
        onClick={() => setActiveSummaryCard('Profit Revenue')}
      >
        <p className="text-[14px] font-normal" style={{ fontFamily: 'Roboto', color: '#171725' }}>Profit Revenue</p>
        <p className="text-[20px] font-semibold mt-1" style={{ fontFamily: 'Roboto' }}>
          $260,000{' '}
          
        </p>
      </button>

      {/* Investment Card */}
      <button
        className={`flex-none p-4 rounded-lg shadow-sm text-center max-w-[180px] ${
          activeSummaryCard === 'Investment'
            ? 'bg-gray-100 text-[#171725]'
            : 'bg-white text-[#171725]'
        }`}
        onClick={() => setActiveSummaryCard('Investment')}
      >
        <p className="text-[14px] font-normal" style={{ fontFamily: 'Roboto', color: '#171725' }}>Investment</p>
        <p className="text-[20px] font-semibold mt-1" style={{ fontFamily: 'Roboto' }}>
          $2,500,000
        </p>
      </button>
    </div>
    {/* Placeholder for chart */}
    <div className="w-2/3 h-64 bg-gray-200 rounded ml-4"></div> {/* Adjusted width and added margin */}
  </div>
</div>
  );
};

export default SummaryChart;