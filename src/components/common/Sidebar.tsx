import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';
import ArrowIcon from '../icons/ArrowIcon';

interface SidebarItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement> & { stroke?: string }>;
  to?: string;
}

interface SidebarSection {
  type: 'main' | 'heading';
  name?: string;
  items: SidebarItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarData: SidebarSection[] = [
  {
    type: 'main',
    name: 'MAIN',
    items: [{ name: 'Dashboard', icon: HomeIcon, to: '/dashboard' }],
  },
  {
    type: 'heading',
    name: 'Users',
    items: [
      { name: 'All Users', icon: HomeIcon, to: '/user/users' },
      { name: 'KYC Verification', icon: HomeIcon, to: '/user/kyc-verification' },
      { name: 'Referrals & uplines', icon: HomeIcon, to: '/user/referrals-uplines' },
      { name: 'Commmision Status', icon: HomeIcon, to: '/user/commision-Status' },
      { name: 'Users Action Log', icon: HomeIcon, to: '/user/user-action-log' },
      { name: 'Add Fund', icon: HomeIcon, to: '/user/add-fund' },
      { name: 'Deduct fund', icon: HomeIcon, to: '/user/deduct-fund' },
      { name: 'Blocked Users', icon: HomeIcon, to: '/user/blocked-users' },
    ],
  },
  {
    type: 'heading',
    name: 'KYC',
    items: [
      { name: 'Applications', icon: HomeIcon, to: '/startups/applications' },
      { name: 'Deals', icon: HomeIcon, to: '/startups/deals' },
      { name: 'Reports', icon: HomeIcon, to: '/startups/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Referrals',
    items: [
      { name: 'Investor Info', icon: HomeIcon, to: '/investors/info' },
      { name: 'Investments', icon: HomeIcon, to: '/investors/investments' },
      { name: 'Reports', icon: HomeIcon, to: '/investors/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Presale',
    items: [
      { name: 'Applications', icon: HomeIcon, to: '/mentors/applications' },
      { name: 'Management', icon: HomeIcon, to: '/mentors/management' },
      { name: 'Reports', icon: HomeIcon, to: '/mentors/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Widgets',
    items: [
      { name: 'Applications', icon: HomeIcon, to: '/vendors/applications' },
      { name: 'Products & Sales', icon: HomeIcon, to: '/vendors/products' },
      { name: 'Reports', icon: HomeIcon, to: '/vendors/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Staking',
    items: [
      { name: 'Applications', icon: HomeIcon, to: '/enthusiast/applications' },
      { name: 'Reports', icon: HomeIcon, to: '/enthusiast/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'CAPX Token',
    items: [
      { name: 'Management', icon: HomeIcon, to: '/chapters/management' },
      { name: 'Reports', icon: HomeIcon, to: '/chapters/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Wallet',
    items: [
      { name: 'Event Management', icon: HomeIcon, to: '/events/management' },
      { name: 'Reports', icon: HomeIcon, to: '/events/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Deposits',
    items: [
      { name: 'Transactions', icon: HomeIcon, to: '/finance/transactions' },
      { name: 'Revenue & Fees', icon: HomeIcon, to: '/finance/revenue' },
      { name: 'Reports', icon: HomeIcon, to: '/finance/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Withdrawals',
    items: [
      { name: 'Manage Membership', icon: HomeIcon, to: '/subscriptions/manage' },
      { name: 'Promo Codes', icon: HomeIcon, to: '/subscriptions/promo-codes' },
    ],
  },
  {
    type: 'heading',
    name: 'Commmissions',
    items: [
      { name: 'Admin Staff', icon: HomeIcon, to: '/staff/admin' },
      { name: 'Logs', icon: HomeIcon, to: '/staff/logs' },
    ],
  },
  {
    type: 'heading',
    name: 'Rewards',
    items: [
      { name: 'Country & Regions', icon: HomeIcon, to: '/settings/countries' },
      { name: 'Currency & Language', icon: HomeIcon, to: '/settings/currency-language' },
      { name: 'Skills & Interests', icon: HomeIcon, to: '/settings/skills-interests' },
      { name: 'Targeting & Segmentation', icon: HomeIcon, to: '/settings/targeting' },
      { name: 'Payment Settings', icon: HomeIcon, to: '/settings/payment' },
      { name: 'Roles & Permissions', icon: HomeIcon, to: '/settings/roles' },
      { name: 'Tax Management', icon: HomeIcon, to: '/settings/tax' },
      { name: 'Communication Settings', icon: HomeIcon, to: '/settings/communication' },
    ],
  },
  {
    type: 'heading',
    name: 'AngelSEED',
    items: [
      { name: 'Overview', icon: HomeIcon, to: '/referrals/overview' },
      { name: 'Plans', icon: HomeIcon, to: '/referrals/plans' },
    ],
  },
  {
    type: 'heading',
    name: 'Games',
    items: [
      { name: 'Third-Party', icon: HomeIcon, to: '/integrations/third-party' },
      { name: 'Plans', icon: HomeIcon, to: '/integrations/plans' },
    ],
  },
  {
    type: 'heading',
    name: 'Polls & Quizzes',
    items: [
      { name: 'User Analytics', icon: HomeIcon, to: '/analytics/users' },
      { name: 'Deal Analytics', icon: HomeIcon, to: '/analytics/deals' },
    ],
  },
  {
    type: 'heading',
    name: 'Deals',
    items: [
      { name: 'Tickets', icon: HomeIcon, to: '/support/tickets' },
      { name: 'Knowledge Base', icon: HomeIcon, to: '/support/knowledge' },
    ],
  },
  {
    type: 'heading',
    name: 'Content',
    items: [
      { name: 'Account Security', icon: HomeIcon, to: '/security/account' },
      { name: 'Compliance', icon: HomeIcon, to: '/security/compliance' },
    ],
  },
  {
    type: 'heading',
    name: 'Reports',
    items: [
      { name: 'Overview', icon: HomeIcon, to: '/matching/overview' },
      { name: 'Matching Criteria', icon: HomeIcon, to: '/matching/criteria' },
      { name: 'Match History', icon: HomeIcon, to: '/matching/history' },
    ],
  },
  {
    type: 'heading',
    name: 'Support',
    items: [
      { name: 'Algorithm Configuration', icon: HomeIcon, to: '/algorithm/config' },
      { name: 'Automated Matching', icon: HomeIcon, to: '/algorithm/automated' },
      { name: 'Performance Analytics', icon: HomeIcon, to: '/algorithm/analytics' },
    ],
  },
  {
    type: 'heading',
    name: 'Admins',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },

  {
    type: 'heading',
    name: 'Settings',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Currency & Country',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Network Settings',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Package Plans',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Payment Gateways',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Integrations',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Logs',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Audit Tools',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Blacklist',
    items: [
      { name: 'Create Questions', icon: HomeIcon, to: '/questions/create' },
      { name: 'Question Logic', icon: HomeIcon, to: '/questions/logic' },
      { name: 'Question Reports', icon: HomeIcon, to: '/questions/reports' },
    ],
  },

];


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({ 0: true });
  const location = useLocation();

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (

    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-4 lg:hidden border-b border-gray-200">
          <div className="py-2 px-4" />
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Close sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav className="py-4">
          {sidebarData.map((section, index) => (
            <div key={index} className="mb-4">
              {(section.type === 'heading' || section.type === 'main') && (
                <div
                  className="flex items-center justify-between px-6 mb-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection(index)}
                >
                  <h3 className="text-[#64646D] text-[12px] font-medium roboto-font uppercase">
                    {section.name || section.type}
                  </h3>
                  <ArrowIcon
                    className={`transform transition-transform duration-200 ${expandedSections[index] ? 'rotate-90' : ''
                      }`}
                  />
                </div>
              )}

              {expandedSections[index] && (
                <ul>
                  {section.items.map((item, itemIndex) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <li key={itemIndex} className="mb-1">
                        <Link
                          to={item.to || '#'}
                          onClick={onClose}
                          className={`flex items-center py-2 px-6 transition-colors duration-200 ${isActive
                            ? 'bg-[#E0EDFF] text-[#0056D2]'
                            : 'text-[#171725] hover:bg-gray-100'
                            }`}
                        >
                          {/* <item.icon
                            className="mr-3 flex-shrink-0"
                            stroke={isActive ? '#0056D2' : '#292D32'}
                          /> */}
                          <div
                            className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${isActive ? 'bg-blue-600' : 'bg-gray-600'
                              }`}
                          />
                          <span className="text-[14px] roboto-font font-normal flex-1 truncate">
                            {item.name}
                          </span>
                          <ArrowIcon className="ml-auto flex-shrink-0" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>


  );
};

export default Sidebar;
