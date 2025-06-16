import React from 'react';
import { MyWalletProps } from '../../types/dashboard';

const Wallet: React.FC<MyWalletProps> = () => {
  return (
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow box-border">
            <div className="flex justify-between items-center mb-4">
                  <h2 className="text-[#171725] text-lg font-semibold" style={{ fontFamily: 'Roboto' }}>My Wallet</h2>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center border border-[#5D40ED] rounded-lg px-3 py-1.5 space-x-2">
                      <span className="text-[#171725] text-sm">USD</span>
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#5D40ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <button className="p-2 rounded-full bg-[#F0F2F5]">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.33 8.42676C10.83 8.27676 11.38 8.17676 12 8.17676C14.76 8.17676 17 10.4168 17 13.1768C17 15.9368 14.76 18.1768 12 18.1768C9.24 18.1768 7 15.9368 7 13.1768C7 12.1468 7.31 11.1968 7.84 10.3968" stroke="#94949B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.62012 8.56723L11.2801 6.65723" stroke="#94949B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.62012 8.56738L11.5601 9.98738" stroke="#94949B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 22.917H15C20 22.917 22 20.917 22 15.917V9.91699C22 4.91699 20 2.91699 15 2.91699H9C4 2.91699 2 4.91699 2 9.91699V15.917C2 20.917 4 22.917 9 22.917Z" stroke="#94949B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </button>
                  </div>
                </div>
                <p className="text-[#171725] text-2xl font-bold mb-2" style={{ fontFamily: 'Roboto' }}>$1152.25k</p>
                <p className="text-[#64646D] text-base font-normal mb-4" style={{ fontFamily: 'Roboto' }}>
                  Total net revenue is $756.83 <span className="text-[#37D397]">↑ 11.5%</span> increased in last week
                </p>
                {/* Bar Chart */}
                <div className="w-full mb-4">
                  <svg width="316" height="104" viewBox="0 0 316 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0761719" width="16" height="103" rx="8" fill="#5D40ED"/>
                    <rect x="25" y="56.0762" width="16" height="47" rx="8" fill="#5D40ED"/>
                    <rect x="50" y="40.0762" width="16" height="63" rx="8" fill="#5D40ED"/>
                    <rect x="75" y="58.0762" width="16" height="45" rx="8" fill="#5D40ED"/>
                    <rect x="100" y="72.0762" width="16" height="31" rx="8" fill="#5D40ED"/>
                    <rect x="125" y="21.0762" width="16" height="82" rx="8" fill="#5D40ED"/>
                    <rect x="150" y="54.0762" width="16" height="49" rx="8" fill="#5D40ED"/>
                    <rect x="175" y="37.0762" width="16" height="66" rx="8" fill="#5D40ED"/>
                    <rect x="200" y="9.07617" width="16" height="94" rx="8" fill="#5D40ED"/>
                    <rect x="225" y="62.0762" width="16" height="41" rx="8" fill="#5D40ED"/>
                    <rect x="250" y="31.0762" width="16" height="72" rx="8" fill="#5D40ED"/>
                    <rect x="275" y="31.0762" width="16" height="72" rx="8" fill="#5D40ED"/>
                    <rect x="300" y="31.0762" width="16" height="72" rx="8" fill="#5D40ED"/>
                  </svg>
                </div>
                
                {/* Top Performing Investment */}
                <div className="bg-violet-200 p-4 rounded-lg">
                  <p className="text-[#64646D] text-sm font-normal" style={{ fontFamily: 'Roboto' }}>
                    Top performing investment is <span className="text-[#171725] font-normal" style={{ fontFamily: 'Roboto' }}>Share Holdings</span>
                  </p>
                  <p className="text-[#171725] text-xl font-semibold" style={{ fontFamily: 'Roboto' }}>
                    $165.52k <span className="text-[#37D397] text-base font-medium" style={{ fontFamily: 'Roboto' }}>↑ 4.52%</span>
                  </p>
                </div>
                
              </div>
  );
};

export default Wallet;