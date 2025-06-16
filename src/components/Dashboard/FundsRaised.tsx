import React from 'react';
import { FundsRaisedProps } from '../../types/dashboard';

const FundsRaised: React.FC<FundsRaisedProps> = ({ activeTimePeriod }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow w-full lg:w-2/3 h-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-[#171725] text-lg font-semibold mb-2 sm:mb-0">Total Funds Raised</h2>
        <div className="box-border flex flex-row items-center p-1 gap-2 sm:gap-4 w-full sm:w-[185px] h-8 bg-[#EFEFFF] border border-[#EFECFD] rounded-lg justify-around sm:justify-start">
          <div className="flex flex-row justify-center items-center p-1 gap-2.5 w-full sm:w-24 h-6 bg-white shadow rounded-md">
          <button className="text-sm text-[#171725] w-auto sm:w-auto">Last month</button>
            
            
          </div>
          <button className="text-sm text-[#171725] w-full sm:w-auto">Last year</button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 flex flex-col justify-start items-start mb-4 sm:mb-0">
          <div className="p-3 bg-[#EEF2F6] rounded-full mb-2">
            <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2473 28.0808C19.9007 28.0808 25.2943 22.6871 25.2943 16.0337H13.2473L13.2473 3.98657C6.59389 3.98653 1.2002 9.38023 1.2002 16.0337C1.2002 22.6871 6.59385 28.0808 13.2473 28.0808Z" stroke="#5D40ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.5178 1.72754V10.647H26.8002V10.0099C26.8002 5.43567 23.0921 1.72754 18.5178 1.72754Z" stroke="#5D40ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p className="text-[22px] font-semibold text-[#171725] mb-1">$10,500,500</p>
          <p className="text-xs text-[#64646D] font-medium mb-0">this month</p>
          <div className="flex items-center mt-2">
            <svg width="60" height="40" viewBox="0 0 108 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M2 55.3551L8.24461 43.5406C12.4368 35.6093 23.7821 35.5656 28.0351 43.4645V43.4645C32.1647 51.1341 43.0795 51.374 47.542 43.8932L52.4087 35.7347C57.5602 27.0988 69.1452 24.9886 77.011 31.2532L85.3954 37.931C92.0594 43.2385 99.4526 42.4048 100.97 34.0219C101.873 29.0356 102.447 22.5102 102.222 14.3799" stroke="#D5D7F8" stroke-width="2.3993" stroke-linecap="round"/>
              <path d="M2 48.3961L6.14463 40.5547C10.8464 31.6592 23.8082 32.3451 27.5449 41.6872V41.6872C31.4426 51.4318 45.166 51.6274 49.3398 41.9978L53.6631 32.0233C57.9394 22.1571 70.417 19.0425 78.8283 25.7416L86.3316 31.7176C92.4092 36.5581 99.2145 35.8556 100.746 28.2383C101.775 23.1178 102.465 16.2063 102.222 7.4209" stroke="#5D40ED" stroke-width="2.3993" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="102.606" cy="6.10308" r="4.19878" fill="white" stroke="#5D40ED" stroke-width="2.3993" stroke-linecap="round"/>
            </svg>
            <p className="text-green-500 text-base font-medium ml-2">↑ 3.2%</p>
          </div>

          <p className="text-[22px] font-semibold text-[#171725] mb-1 mt-4">$10,500,500</p>
          <p className="text-xs text-[#64646D] font-medium mb-0">this Year</p>
          <div className="flex items-center mt-2">
            <svg width="60" height="40" viewBox="0 0 108 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M2 55.3551L8.24461 43.5406C12.4368 35.6093 23.7821 35.5656 28.0351 43.4645V43.4645C32.1647 51.1341 43.0795 51.374 47.542 43.8932L52.4087 35.7347C57.5602 27.0988 69.1452 24.9886 77.011 31.2532L85.3954 37.931C92.0594 43.2385 99.4526 42.4048 100.97 34.0219C101.873 29.0356 102.447 22.5102 102.222 14.3799" stroke="#D5D7F8" stroke-width="2.3993" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M2 55.3551L8.24461 43.5406C12.4368 35.6093 23.7821 35.5656 28.0351 43.4645V43.4645C32.1647 51.1341 43.0795 51.374 47.542 43.8932L52.4087 35.7347C57.5602 27.0988 69.1452 24.9886 77.011 31.2532L85.3954 37.931C92.0594 43.2385 99.4526 42.4048 100.97 34.0219C101.873 29.0356 102.447 22.5102 102.222 14.3799" stroke="#D5D7F8" stroke-width="2.3993" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 48.3961L6.14463 40.5547C10.8464 31.6592 23.8082 32.3451 27.5449 41.6872V41.6872C31.4426 51.4318 45.166 51.6274 49.3398 41.9978L53.6631 32.0233C57.9394 22.1571 70.417 19.0425 78.8283 25.7416L86.3316 31.7176C92.4092 36.5581 99.2145 35.8556 100.746 28.2383C101.775 23.1178 102.465 16.2063 102.222 7.4209" stroke="#5D40ED" stroke-width="2.3993" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="102.606" cy="6.10308" r="4.19878" fill="white" stroke="#5D40ED" stroke-width="2.3993" stroke-linecap="round"/>
            </svg>
            <p className="text-green-500 text-base font-medium ml-2">↑ 10.6%</p>
          </div>
        </div>
        <div className="w-full sm:w-2/3 flex flex-col">
          <div className="flex items-end justify-around h-64 bg-white rounded p-4 border border-[#E0E0E0] mb-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
              <div key={month} className="flex items-end h-full justify-center w-1/12">
                <div
                  className="bg-[#5D40ED] w-3 rounded-t-sm mr-1"
                  style={{ height: `${Math.random() * 80 + 20}%` }}
                ></div>
                <div
                  className="bg-[#171725] w-3 rounded-t-sm"
                  style={{ height: `${Math.random() * 60 + 10}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-around text-xs text-[#64646D]">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundsRaised;