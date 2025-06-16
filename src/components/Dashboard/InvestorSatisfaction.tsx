import React from 'react';
import { InvestorSatisfactionProps } from '../../types/dashboard';

const InvestorSatisfaction: React.FC<InvestorSatisfactionProps> = ({ satisfaction }) => {
  const angle = (satisfaction / 100) * 180; // Convert percentage to angle (0-180 degrees for semi-circle)

  return (
    <div className="bg-white p-3 rounded-lg shadow w-full lg:w-1/3 h-auto text-sm">
    <h2 className="text-[#000000] text-lg font-semibold font-roboto text-[18px] mb-2" style={{ fontFamily: 'Roboto' }}>Investor Satisfaction</h2>
    <div className="flex items-end mb-4">
      <p className="text-[#000000] text-[26px] font-roboto font-medium mr-2">9.7</p>
      <p className="text-[#50C878] text-[12px] text-xs font-poppins font-medium" >+2.1%</p>
    </div>
    <p className="text-[#94949B] font-roboto text-[12px] font-regular text-xs mb-4" >Performance score</p>

    <div className="flex w-full mb-4 space-x-0.5">
      <div className="h-2 rounded-full bg-[#5D40ED]" style={{ width: '42%' }}></div>
      <div className="h-2 rounded-full bg-[#50C878]" style={{ width: '18%' }}></div>
      <div className="h-2 rounded-full bg-[#0FA4E9]" style={{ width: '14%' }}></div>
      <div className="h-2 rounded-full bg-[#FFC700]" style={{ width: '17%' }}></div>
      <div className="h-2 rounded-full bg-[#C92519]" style={{ width: '9%' }}></div>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8.5" r="7" fill="white" stroke="#5D40ED"  stroke-width="2"/>
        </svg>

          <span className="text-[#000000] font-poppins text-[14px] text-sm font-medium ml-2" >Excellent</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#000000] text-[14px] text-base font-medium font-poppins" >1029</span>
          <span className="text-[#94949B] text-[14px] text-sm font-medium font-poppins" >42%</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8.5" r="7" fill="white" stroke="#50C878" stroke-width="2"/>
        </svg>
          <span className="text-[#000000] font-poppins text-[14px] text-sm font-medium ml-2">Very Good</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#000000] text-[14px] text-base font-medium font-poppins" >426</span>
          <span className="text-[#94949B] text-[14px] text-sm font-medium font-poppins" >18%</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8.5" r="7" fill="white" stroke="#0FA4E9" stroke-width="2"/>
        </svg>
          <span className="text-[#000000] font-poppins text-[14px] text-sm font-medium ml-2">Good</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#000000] text-[14px] text-base font-medium font-poppins" >326</span>
          <span className="text-[#94949B] text-[14px] text-sm font-medium font-poppins" >14%</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8.5" r="7" fill="white" stroke="#FFC700" stroke-width="2"/>
        </svg>
          <span className="text-[#000000] font-poppins text-[14px] text-sm font-medium ml-2">Poor</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#000000] text-[14px] text-base font-medium font-poppins" >395</span>
          <span className="text-[#94949B] text-[14px] text-sm font-medium font-poppins" >17%</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8.5" r="7" fill="white" stroke="#C92519" stroke-width="2"/>
        </svg>
          <span className="text-[#000000] font-poppins text-[14px] text-sm font-medium ml-2">Very Poor</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#000000] text-[14px] text-base font-medium font-poppins" >129</span>
          <span className="text-[#94949B] text-[14px] text-sm font-medium font-poppins" >9%</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default InvestorSatisfaction;