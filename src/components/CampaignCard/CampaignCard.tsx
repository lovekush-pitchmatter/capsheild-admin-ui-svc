import React from 'react';

export interface CampaignCardProps {
  image: string;
  title: string;
  description: string;
  valuation: string;
  target: string;
  investors: number;
  raisedPercentage: string;
  daysLeft: string;
  status?: 'Special' | 'New' | 'Closing soon' | 'Accepting reservations';
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', // Test image from Unsplash
  title,
  description,
  valuation,
  target,
  investors,
  raisedPercentage,
  daysLeft,
  status,
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Special':
        return 'bg-[#FF6370]';
      case 'New':
        return 'bg-[#6D5DD3]';
      case 'Closing soon':
        return 'bg-[#FF9800]';
      case 'Accepting reservations':
        return 'bg-[#37D397]';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden relative">
      {/* Banner Image Section */}
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {status && (
          <div className="absolute top-2 left-2 flex items-center space-x-1">
            {/* Special SVG */}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.9922 6.07032H4.33074V9.18926C4.33074 9.91701 4.72494 10.0643 5.20578 9.51848L8.485 5.79308C8.88786 5.33823 8.71892 4.96136 8.10813 4.96136H6.76958V1.84242C6.76958 1.11466 6.37538 0.967379 5.89455 1.51319L2.61532 5.2386C2.21679 5.69778 2.38574 6.07032 2.9922 6.07032Z"
                stroke="#E86339"
                strokeWidth="0.779736"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`text-white text-xs font-semibold px-2 py-1 rounded ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>
        )}
        <div className="absolute top-2 left-16 text-white text-[10px] font-medium bg-black bg-opacity-50 px-1 rounded">
          pft
        </div>
        <div className="absolute top-2 right-2 bg-white rounded-full p-0.5 shadow-md">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      </div>
      <div className="p-3">
        {/* Title */}
        <h3 className="font-['Roboto'] text-[14px] font-semibold text-[#171725]">{title}</h3>
        <p className="text-xs text-[#64646D] mt-1 line-clamp-2">{description}</p>
        <p className="text-xs text-[#92929D] mt-1">Pitchmatter Funding Portal - Reg CF</p>
        {/* Progress Bar */}
        <div className="mt-2">
          <p className="text-xs text-[#92929D]">Raised</p>
          <p className="text-sm font-semibold text-[#171725]">
            {raisedPercentage} - <span className="text-[#F15D5F]">{daysLeft}</span>
          </p>
          <svg width="211" height="9" viewBox="0 0 211 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.382812" width="210.643" height="7.79736" rx="3.89868" fill="#E8E8E9" />
            <rect x="1.03955" y="1.42285" width="208.564" height="5.71806" rx="2.85903" fill="#50C878" />
            <rect x="1.03906" y="1.42285" width="10.3965" height="5.71806" rx="2.85903" fill="#269D4D" />
          </svg>
        </div>
        {/* Valuation, Target, Investors */}
        <div className="flex justify-between items-center mt-2 text-center">
          <div>
            <p className="text-sm font-medium text-[#171725]">${valuation}</p>
            <p className="text-xs text-[#92929D]">Valuation</p>
          </div>
          <div className="h-7 w-[1px] bg-gray-300"></div>
          <div>
            <p className="text-sm font-medium text-[#171725]">${target}</p>
            <p className="text-xs text-[#92929D]">Target</p>
          </div>
          <div className="h-7 w-[1px] bg-gray-300"></div>
          <div>
            <p className="text-sm font-medium text-[#171725]">{investors}</p>
            <p className="text-xs text-[#92929D]">Investors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;