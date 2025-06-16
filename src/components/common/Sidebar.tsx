import React, { useState } from 'react';
import HomeIcon from '../icons/HomeIcon';
import ArrowIcon from '../icons/ArrowIcon';

interface SidebarItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement> & { stroke?: string }>;
  current?: boolean;
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
    type: 'heading',
    name: 'MAIN',
    items: [
      { name: 'Dashboard', icon: HomeIcon, current: true },
    ],
  },
  {
    type: 'heading',
    name: 'USER MANAGEMENT',
    items: [
      { name: 'General', icon: HomeIcon },
      { name: 'Reports & Insights', icon: HomeIcon },
      { name: 'Communication', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'STARTUPS',
    items: [
      { name: 'Applications', icon: HomeIcon },
      { name: 'Deals', icon: HomeIcon },
      { name: 'Reports', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'INVESTORS',
    items: [
      { name: 'Investor Info', icon: HomeIcon },
      { name: 'Investments', icon: HomeIcon },
      { name: 'Reports', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'MENTORS',
    items: [
      { name: 'Applications', icon: HomeIcon },
      { name: 'Management', icon: HomeIcon },
      { name: 'Reports', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'VENDORS',
    items: [
      { name: 'Applications', icon: HomeIcon },
      { name: 'Products & Sales', icon: HomeIcon },
      { name: 'Reports', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'STARTUP ENTHUSIAST',
    items: [
      { name: 'Applications', icon: HomeIcon },
      { name: 'Reports', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'CHAPTERS',
    items: [
      { name: 'Management', icon: HomeIcon },
      { name: 'Reports', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'EVENTS',
    items: [
      { name: 'Event Management', icon: HomeIcon },
      { name: 'Reports', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'FINANCE MANAGEMENT',
    items: [
      { name: 'Transactions', icon: HomeIcon },
      { name: 'Revenue & Fees', icon: HomeIcon },
      { name: 'Reports', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'SUBSCRIPTIONS',
    items: [
      { name: 'Manage Membership', icon: HomeIcon },
      { name: 'Promo Codes', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'STAFF MANAGEMENT',
    items: [
      { name: 'Admin Staff', icon: HomeIcon },
      { name: 'Logs', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'SYSTEM SETTINGS',
    items: [
      { name: 'Country & Regions', icon: HomeIcon },
      { name: 'Currency & Language', icon: HomeIcon },
      { name: 'Skills & Interests', icon: HomeIcon },
      { name: 'Targeting & Segmentation', icon: HomeIcon },
      { name: 'Payment Settings', icon: HomeIcon },
      { name: 'Roles & Permissions', icon: HomeIcon },
      { name: 'Tax Management', icon: HomeIcon },
      { name: 'Communication Settings', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'REFERRALS',
    items: [
      { name: 'Overview', icon: HomeIcon },
      { name: 'Plans', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'INTEGRATIONS',
    items: [
      { name: 'Third-Party', icon: HomeIcon },
      { name: 'Plans', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'ANALYTICS',
    items: [
      { name: 'User Analytics', icon: HomeIcon },
      { name: 'Deal Analytics', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'SUPPORT CENTER',
    items: [
      { name: 'Tickets', icon: HomeIcon },
      { name: 'Knowledge Base', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'SECURITY & COMPLIANCE',
    items: [
      { name: 'Account Security', icon: HomeIcon },
      { name: 'Compliance', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'MATCHING SYSTEM',
    items: [
      { name: 'Overview', icon: HomeIcon },
      { name: 'Matching Criteria', icon: HomeIcon },
      { name: 'Match History', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'MATCHING ALGORITHM',
    items: [
      { name: 'Algorithm Configuration', icon: HomeIcon },
      { name: 'Automated Matching', icon: HomeIcon },
      { name: 'Performance Analytics', icon: HomeIcon },
    ],
  },
  {
    type: 'heading',
    name: 'MANAGE QUESTIONS',
    items: [
      { name: 'Create Questions', icon: HomeIcon },
      { name: 'Question Logic', icon: HomeIcon },
      { name: 'Question Reports', icon: HomeIcon },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({
    0: true, // Main section always expanded
  });

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 bg-white shadow-lg
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
          ${isOpen ? 'lg:w-64' : 'lg:w-[80px]'}
          lg:translate-x-0
          overflow-y-auto
        `}
      >
        {/* Mobile Header inside sidebar */}
        <div className="flex items-center justify-between p-4 lg:hidden border-b border-gray-200">
          <div className="py-2 px-4">
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Close sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        

        <nav className="py-4">
          {sidebarData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-2">
              {/* Show heading with toggle for 'heading' type sections */}
              {section.type === 'heading' && (
                <div
                  className={`group flex items-center py-2 text-sm font-medium rounded-md cursor-pointer
                    ${isOpen ? 'px-4 justify-between' : 'lg:justify-center px-4'}`}
                  onClick={() => isOpen && toggleSection(sectionIdx)}
                >
                  <div className="flex items-center">
                    <HomeIcon
                      className={`flex-shrink-0 h-6 w-6 mr-3 text-gray-400 group-hover:text-gray-500
                        ${!isOpen ? 'lg:mr-0' : ''}`}
                      aria-hidden="true"
                      stroke="currentColor"
                    />
                    <h3 className={`text-xs font-semibold text-gray-500 uppercase tracking-wider
                      ${isOpen ? 'block' : 'hidden lg:hidden'}`}>
                      {section.name}
                    </h3>
                  </div>
                  {isOpen && !expandedSections[sectionIdx] && (
                    <ArrowIcon
                      className="ml-auto h-5 w-5 transform "
                      aria-hidden="true"
                    />
                  )}
                </div>
              )}

              {/* Show items directly for 'main' type or when section is expanded */}
              {(section.type === 'main' || (isOpen && expandedSections[sectionIdx])) && (
                <div className="space-y-1">
                  {section.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={itemIdx}
                        href="#"
                        className={`group flex items-center py-2 text-sm font-medium rounded-md
                          ${item.current ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                          ${!isOpen ? 'lg:justify-center px-4' : 'lg:justify-start px-4 ml-4'}`}
                      >
                        <Icon
                          className={`flex-shrink-0 h-6 w-6 mr-3
                            ${item.current ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'}
                            ${!isOpen ? 'lg:mr-0' : ''}`}
                          aria-hidden="true"
                          stroke={item.current ? 'white' : 'currentColor'}
                        />
                        <span className={`text-sm font-medium whitespace-nowrap
                          ${item.current ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'}
                          ${!isOpen ? 'lg:hidden' : ''}`}>
                          {item.name}
                        </span>
                        {isOpen && (
                          <svg
                            className="ml-auto h-5 w-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 5L16 12L9 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </a>
                    );
                  })}
                </div>
              )}

              {(section.name === 'MAIN' || section.name === 'SETTINGS') && (
                <div className={`mt-4 pt-4 border-t border-gray-200
                  ${!isOpen && 'lg:hidden'}`}>
                </div>
              )}
            </div>
          ))}

          {/* Sign out button */}
          <div className="mt-auto px-4">
            <a
              href="#"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900
                ${!isOpen ? 'lg:justify-center' : 'lg:justify-start'}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`flex-shrink-0 h-6 w-6 mr-3 text-gray-400 group-hover:text-gray-500
                  ${!isOpen ? 'lg:mr-0' : ''}`} aria-hidden="true">
                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={`${!isOpen ? 'lg:hidden' : ''}`}>Sign out</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;