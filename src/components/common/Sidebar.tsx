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
    items: [{ name: 'Dashboard', icon: HomeIcon, to: '/' }],
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
      { name: 'Customer List', icon: HomeIcon, to: '/kyc/customers' },
      { name: 'Verification Status', icon: HomeIcon, to: '/kyc/verification-status' },

    ],
  },
  {
    type: 'heading',
    name: 'Referrals',
    items: [
      { name: 'Referral Dashboard', icon: HomeIcon, to: '/referrals/dashboard' },
      { name: 'Referral List', icon: HomeIcon, to: '/referrals/list' },
    ],
  },
  {
    type: 'heading',
    name: 'Presale',
    items: [
      { name: 'Presale Applications', icon: HomeIcon, to: '/presale/applications' },
      { name: 'Presale Management', icon: HomeIcon, to: '/presale/management' },
    ],
  },
  {
    type: 'heading',
    name: 'Widgets',
    items: [
      { name: 'Widget Applications', icon: HomeIcon, to: '/widgets/applications' },
      { name: 'Products & Sales', icon: HomeIcon, to: '/widgets/products' },
    ],
  },
  {
    type: 'heading',
    name: 'Staking',
    items: [
      { name: 'Staking Applications', icon: HomeIcon, to: '/staking/applications' },
      { name: 'Active Stakes', icon: HomeIcon, to: '/staking/active' },
    ],
  },
  {
    type: 'heading',
    name: 'CAPX Token',
    items: [
      { name: 'Token Management', icon: HomeIcon, to: '/capx-token/management' },
      { name: 'Transaction Reports', icon: HomeIcon, to: '/capx-token/reports' },
    ],
  },
  {
    type: 'heading',
    name: 'Wallet',
    items: [
      { name: 'Wallet Overview', icon: HomeIcon, to: '/wallet/overview' },
      { name: 'Transaction History', icon: HomeIcon, to: '/wallet/transactions' },
    ],
  },
  {
    type: 'heading',
    name: 'Deposits',
    items: [
      { name: 'Transactions', icon: HomeIcon, to: '/deposits/transactions' },
      { name: 'Revenue & Fees', icon: HomeIcon, to: '/deposits/revenue' },
    ],
  },
  {
    type: 'heading',
    name: 'Withdrawals',
    items: [
      { name: 'Manage Withdrawals', icon: HomeIcon, to: '/withdrawals/manage' },
      { name: 'Withdrawal History', icon: HomeIcon, to: '/withdrawals/history' },
    ],
  },
  {
    type: 'heading',
    name: 'Commmissions',
    items: [
      { name: 'Manage Withdrawals', icon: HomeIcon, to: '/withdrawals/manage' },
      { name: 'Withdrawal History', icon: HomeIcon, to: '/withdrawals/history' },
    ],
  },
  {
    type: 'heading',
    name: 'Rewards',
    items: [
      { name: 'Country & Regions', icon: HomeIcon, to: '/rewards/countries' },
      { name: 'Currency & Language', icon: HomeIcon, to: '/rewards/currency-language' },
      { name: 'Skills & Interests', icon: HomeIcon, to: '/rewards/skills-interests' },
      { name: 'Targeting & Segmentation', icon: HomeIcon, to: '/rewards/targeting' },
    ],
  },
  {
    type: 'heading',
    name: 'AngelSEED',
    items: [
      { name: 'Overview', icon: HomeIcon, to: '/angelseed/overview' },
      { name: 'Plans', icon: HomeIcon, to: '/angelseed/plans' },
    ],
  },
  {
    type: 'heading',
    name: 'Games',
    items: [
      { name: 'Third-Party', icon: HomeIcon, to: '/games/third-party' },
      { name: 'Plans', icon: HomeIcon, to: '/games/plans' },
    ],
  },
  {
    type: 'heading',
    name: 'Polls & Quizzes',
    items: [
      { name: 'Poll Analytics', icon: HomeIcon, to: '/polls-quizzes/poll-analytics' },
      { name: 'Quiz Analytics', icon: HomeIcon, to: '/polls-quizzes/quiz-analytics' },
    ],
  },
  {
    type: 'heading',
    name: 'Deals',
    items: [
      { name: 'Active Deals', icon: HomeIcon, to: '/deals/active' },
      { name: 'Pending Deals', icon: HomeIcon, to: '/deals/pending' },
      { name: 'Deal History', icon: HomeIcon, to: '/deals/history' },
    ],
  },
  {
    type: 'heading',
    name: 'Content',
    items: [
      { name: 'Articles', icon: HomeIcon, to: '/content/articles' },
      { name: 'Media Library', icon: HomeIcon, to: '/content/media-library' },
      { name: 'Drafts', icon: HomeIcon, to: '/content/drafts' },

    ],
  },
  {
    type: 'heading',
    name: 'Reports',
    items: [
      { name: 'Overview', icon: HomeIcon, to: '/reports/overview' },
      { name: 'Sales Reports', icon: HomeIcon, to: '/reports/sales' },
      { name: 'User Reports', icon: HomeIcon, to: '/reports/users' },
    ],
  },
  {
    type: 'heading',
    name: 'Support',
    items: [
      { name: 'Ticket Management', icon: HomeIcon, to: '/support/tickets' },
      { name: 'Knowledge Base', icon: HomeIcon, to: '/support/knowledge-base' },
      { name: 'Live Chat', icon: HomeIcon, to: '/support/live-chat' },
    ],
  },
  {
    type: 'heading',
    name: 'Admins',
    items: [
      { name: 'User Management', icon: HomeIcon, to: '/admins/users' },
      { name: 'Roles & Permissions', icon: HomeIcon, to: '/admins/roles' },
      { name: 'Activity Logs', icon: HomeIcon, to: '/admins/logs' },
    ],
  },

  {
    type: 'heading',
    name: 'Settings',
    items: [
      { name: 'General Settings', icon: HomeIcon, to: '/settings/general' },
      { name: 'User Preferences', icon: HomeIcon, to: '/settings/preferences' },
      { name: 'Security Settings', icon: HomeIcon, to: '/settings/security' },
      { name: 'Notification Settings', icon: HomeIcon, to: '/settings/notifications' },
    ],
  },
  {
    type: 'heading',
    name: 'Currency & Country',
    items: [
      { name: 'Currency Settings', icon: HomeIcon, to: '/currency-country/currency-settings' },
      { name: 'Country Settings', icon: HomeIcon, to: '/currency-country/country-settings' },
      { name: 'Exchange Rates', icon: HomeIcon, to: '/currency-country/exchange-rates' },
    ],
  },
  {
    type: 'heading',
    name: 'Network Settings',
    items: [
      { name: 'VPN Configuration', icon: HomeIcon, to: '/network-settings/vpn' },
      { name: 'Firewall Rules', icon: HomeIcon, to: '/network-settings/firewall' },
      { name: 'Proxy Settings', icon: HomeIcon, to: '/network-settings/proxy' },
    ],
  },
  {
    type: 'heading',
    name: 'Package Plans',
    items: [
      { name: 'Plan Overview', icon: HomeIcon, to: '/package-plans/overview' },
      { name: 'Create Plan', icon: HomeIcon, to: '/package-plans/create' },
    ],
  },
  {
    type: 'heading',
    name: 'Payment Gateways',
    items: [
      { name: 'Gateway Configuration', icon: HomeIcon, to: '/payment-gateways/configuration' },
      { name: 'Transaction Logs', icon: HomeIcon, to: '/payment-gateways/transactions' },
    ],
  },
  {
    type: 'heading',
    name: 'Integrations',
    items: [
      { name: 'API Keys', icon: HomeIcon, to: '/integrations/api-keys' },
      { name: 'Connected Services', icon: HomeIcon, to: '/integrations/services' },
      { name: 'Integration Logs', icon: HomeIcon, to: '/integrations/logs' },
    ],
  },
  {
    type: 'heading',
    name: 'Logs',
    items: [
      { name: 'System Logs', icon: HomeIcon, to: '/logs/system' },
      { name: 'User Activity', icon: HomeIcon, to: '/logs/user-activity' },
    ],
  },
  {
    type: 'heading',
    name: 'Audit Tools',
    items: [
      { name: 'Audit Logs', icon: HomeIcon, to: '/audit-tools/logs' },
      { name: 'Compliance Checks', icon: HomeIcon, to: '/audit-tools/compliance' },
    ],
  },
  {
    type: 'heading',
    name: 'Blacklist',
    items: [
      { name: 'Manage Blacklist', icon: HomeIcon, to: '/blacklist/manage' },
      { name: 'Blacklist Reports', icon: HomeIcon, to: '/blacklist/reports' },
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
