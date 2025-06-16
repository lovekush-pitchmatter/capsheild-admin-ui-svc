import React from 'react';
import { FundraisingTypeProps } from '../../types/dashboard';

const FundraisingType: React.FC<FundraisingTypeProps> = ({ types }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow w-full lg:w-2/3 h-auto">
      <h2 className="text-[#171725] text-lg font-semibold mb-4" style={{ fontFamily: 'Roboto' }}>Fundraising Type</h2>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
        {/* STO Section */}
        <div className="flex-1 flex flex-col items-start text-left px-4 sm:px-6 relative pb-4 sm:pb-0 border-b sm:border-b-0 sm:border-r border-gray-200 sm:last:border-r-0">
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-[#5D40ED]"></div>
          <h3 className="text-[#000000] text-base sm:text-lg font-poppins font-medium mb-1">STO</h3>
          <p className="text-[#94949B] text-xs sm:text-sm font-roboto font-regular mb-2">Regulated tokenized investments</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[#5D40ED] text-xs font-poppins font-medium px-2 py-1 rounded-full">Tokenized Equity</span>
          </div>
          <p className="text-[#000000] text-xl sm:text-2xl font-medium font-poppins mb-2">%48.<span className="text-[#94949B] text-base sm:text-xl font-medium font-poppins">75</span></p>
          <p className="flex flex-col sm:flex-row items-start sm:items-end mb-1">
            <span className="text-[#000000] font-poppins text-sm sm:text-base font-semibold mr-0 sm:mr-5">75</span> 
            <span className="text-[#000000] font-poppins text-sm sm:text-base font-semibold mt-1 sm:mt-0">$48,750,000</span>
          </p>
          <p className="flex flex-col sm:flex-row items-start sm:items-end">
            <span className="text-[#94949B] font-poppins text-xs font-regular">No. Projects</span> 
            <span className="text-[#94949B] font-poppins text-xs font-regular mt-1 sm:mt-0 sm:ml-5">Raised Amount</span>
          </p>
        </div>

        {/* ICO Section */}
        <div className="flex-1 flex flex-col items-start text-left px-4 sm:px-6 relative pb-4 sm:pb-0 border-b sm:border-b-0 sm:border-r border-gray-200 sm:last:border-r-0">
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-[#50C878]"></div>
          <h3 className="text-[#000000] text-base sm:text-lg font-poppins font-medium mb-1">ICO</h3>
          <p className="text-[#94949B] text-xs sm:text-sm font-roboto font-regular mb-2">Token sales for capital raising</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[#FF9800] text-xs font-poppins font-medium px-2 py-1 rounded-full">Utility Token</span>
          </div>
          <p className="text-[#000000] text-xl sm:text-2xl font-medium font-poppins mb-2">%16.<span className="text-[#94949B] text-base sm:text-xl font-medium font-poppins">75</span></p>
          <p className="flex flex-col sm:flex-row items-start sm:items-end mb-1">
            <span className="text-[#000000] font-poppins text-sm sm:text-base font-semibold mr-0 sm:mr-5">43</span> 
            <span className="text-[#000000] font-poppins text-sm sm:text-base font-semibold mt-1 sm:mt-0">$16,750,000</span>
          </p>
          <p className="flex flex-col sm:flex-row items-start sm:items-end">
            <span className="text-[#94949B] font-poppins text-xs font-regular">No. Projects</span> 
            <span className="text-[#94949B] font-poppins text-xs font-regular mt-1 sm:mt-0 sm:ml-5">Raised Amount</span>
          </p>
        </div>

        {/* Private Deals Section */}
        <div className="flex-1 flex flex-col items-start text-left px-4 sm:px-6 relative pt-4 sm:pt-0">
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-[#FF9800]"></div>
          <h3 className="text-[#000000] text-base sm:text-lg font-poppins font-medium mb-1">Private Deals</h3>
          <p className="text-[#94949B] text-xs sm:text-sm font-roboto font-regular mb-2">Investments in equity or SAFE note</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#FFC700] text-[#FF9800] text-xs font-poppins font-medium px-2 py-1 rounded-full">Equity</span>
            <span className="bg-[#FFC700] text-[#FF9800] text-xs font-poppins font-medium px-2 py-1 rounded-full">SAFE Note</span>
            <span className="bg-[#FFC700] text-[#FF9800] text-xs font-poppins font-medium px-2 py-1 rounded-full">Debt</span>
          </div>
          <p className="text-[#000000] text-xl sm:text-2xl font-medium font-poppins mb-2">%34.<span className="text-[#94949B] text-base sm:text-xl font-medium font-poppins">50</span></p>
          <p className="flex flex-col sm:flex-row items-start sm:items-end mb-1">
            <span className="text-[#000000] font-poppins text-sm sm:text-base font-semibold mr-0 sm:mr-5">50</span> 
            <span className="text-[#000000] font-poppins text-sm sm:text-base font-semibold mt-1 sm:mt-0">$34,500,00</span>
          </p>
          <p className="flex flex-col sm:flex-row items-start sm:items-end">
            <span className="text-[#94949B] font-poppins text-xs font-regular">No. Projects</span> 
            <span className="text-[#94949B] font-poppins text-xs font-regular mt-1 sm:mt-0 sm:ml-5">Raised Amount</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundraisingType;