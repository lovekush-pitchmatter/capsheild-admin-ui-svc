import React from 'react';
import { PortfolioValueProps } from '../../types/dashboard';

const PortfolioValue: React.FC<PortfolioValueProps> = ({ value }) => {
  return (
    <div>
    <h2 className="text-[#171725] text-[30px] font-medium mb-2" style={{ fontFamily: 'Roboto' }}>Portfolio value</h2>
    <h2 className="text-[#171725] text-[30px] font-medium mb-2" style={{ fontFamily: 'Roboto' }}>has been grown by</h2>
    <p className="text-[#171725] text-[36px] font-semibold mb-4" style={{ fontFamily: 'Roboto' }}>$7.52k</p>
    <p className="text-[#64646D] text-[16px] font-normal mb-28" style={{ fontFamily: 'Roboto' }}>In last 7 days</p>
    <div></div>
    <div className="flex items-center justify-between">
      <div className="p-2 bg-[#EEF2F6] rounded-full">
        {/* CapShield Logo SVG */}
        <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.6064 8.49825L13.976 4.79014L4.34177 8.49825C4.34177 8.49825 0.476722 10.7866 0.528619 13.8745C0.290143 12.2138 0.146809 10.4617 0.0899704 8.62429L-0.00146484 5.61059L13.9772 0.234375L20.4111 2.7081C20.4111 2.7081 20.4185 2.71181 20.4222 2.71552C23.2333 4.00922 23.6077 8.49825 23.6077 8.49825H23.6064Z" fill="url(#paint0_linear_3158_2539)"/>
        <path d="M20.5865 29.2489C19.2866 30.5945 17.8175 31.7622 16.1778 32.7532L13.9808 34.0778L11.7839 32.7532C5.55261 28.9932 1.779 22.6568 0.534722 13.8752C0.48159 10.7874 4.34787 8.49902 4.34787 8.49902C4.63824 18.2481 7.66677 25.3023 13.9821 29.1118C13.9821 29.1118 18.0609 31.0393 20.5877 29.2489H20.5865Z" fill="url(#paint1_linear_3158_2539)"/>
        <path d="M27.9549 5.6109L27.8635 8.62459C27.5966 17.6101 25.155 24.5209 20.5881 29.2485C18.0612 31.0389 13.9824 29.1113 13.9824 29.1113C20.294 25.3019 23.3213 18.2477 23.6129 8.49856C23.6129 8.49856 23.2385 4.00952 20.4275 2.71582L27.9549 5.6109Z" fill="url(#paint2_linear_3158_2539)"/>
        <path d="M0.53418 13.8945V13.874" stroke="white" stroke-width="0.100086" stroke-miterlimit="10"/>
        <defs>
        <linearGradient id="paint0_linear_3158_2539" x1="22.7341" y1="7.23668" x2="0.0393114" y2="6.96978" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="#5E41F1"/>
        </linearGradient>
        <linearGradient id="paint1_linear_3158_2539" x1="4.09827" y1="9.04641" x2="15.1349" y2="33.3438" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="#5E41F1"/>
        </linearGradient>
        <linearGradient id="paint2_linear_3158_2539" x1="15.5937" y1="29.2447" x2="26.0953" y2="4.81391" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stop-color="#5E41F1"/>
        </linearGradient>
        </defs>
        </svg>

      </div>
      <div className="flex-grow">
        <p className="text-[#171725] text-[18px] font-semibold" style={{ fontFamily: 'Roboto' }}>CapShield</p>
        <p className="text-[#64646D] text-[16px] font-medium flex items-center" style={{ fontFamily: 'Roboto' }}>
          4 <span className="mr-1">CSD</span> <span className="text-[#37D397] mr-1">↑ 4.52%</span>
        </p>
      </div>
      <div className="text-right">
          <p className="text-[#171725] text-[20px] font-bold" style={{ fontFamily: 'Roboto' }}>$1.35</p>
          <p className="text-[#64646D] text-[12px] font-medium" style={{ fontFamily: 'Roboto' }}>MCap $45.041 Bn</p>
      </div>
    </div>
  </div>
  );
};

export default PortfolioValue;