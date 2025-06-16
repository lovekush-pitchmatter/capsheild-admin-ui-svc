import React from 'react';
import { TotalFundraisingCampaignsProps } from '../../types/dashboard';
import CampaignCard from '../CampaignCard/CampaignCard';

const TotalFundraisingCampaigns: React.FC<TotalFundraisingCampaignsProps> = ({ campaigns }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3">
          <h2 className="text-[#171725] text-lg font-semibold mb-2" style={{ fontFamily: 'Roboto' }}>
            Total Fundraising Campaigns
          </h2>
          <p className="text-[#64646D] text-base mb-4" style={{ fontFamily: 'Roboto', fontWeight: 'normal' }}>
            The campaigns that raised the most funds in the shortest time.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <div className="rounded-full" style={{ width: '40px', height: '41px' }}>
              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.65625" width="40" height="40" rx="20" fill="#50C878" fill-opacity="0.1"/>
                <path d="M26.0702 18.2262L20.0002 12.1562L13.9302 18.2262" stroke="#50C878" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 29.1562V12.3262" stroke="#50C878" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="space-y-2 text-[24px] font-bold text-[#171725]" style={{ fontFamily: 'Roboto' }}>
                $400.7k
              </p>
              <p className="text-sm text-[#64646D]" style={{ fontFamily: 'Roboto', fontWeight: 'normal' }}>
                Deal Flow Growth
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {campaigns.map((campaign, index) => (
              <CampaignCard key={index} {...campaign} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalFundraisingCampaigns;