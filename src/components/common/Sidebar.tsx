import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../icons/HomeIcon";
import ArrowIcon from "../icons/ArrowIcon";

interface SidebarItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement> & { stroke?: string }>;
  to?: string;
}

interface SidebarSection {
  type: "main" | "heading";
  name?: string;
  items: SidebarItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarData: SidebarSection[] = [
  {
    type: "main",
    name: "MAIN",
    items: [{ name: "Dashboard", icon: HomeIcon, to: "/dashboard" }],
  },
  {
    type: "heading",
    name: "USER MANAGEMENT",
    items: [
      { name: "General", icon: HomeIcon, to: "/user/general" },
      { name: "Reports & Insights", icon: HomeIcon, to: "/user/reports" },
      { name: "Communication", icon: HomeIcon, to: "/user/communication" },
    ],
  },
  {
    type: "heading",
    name: "STARTUPS",
    items: [
      { name: "Applications", icon: HomeIcon, to: "/startups/applications" },
      { name: "Deals", icon: HomeIcon, to: "/startups/deals" },
      { name: "Reports", icon: HomeIcon, to: "/startups/reports" },
    ],
  },
  {
    type: "heading",
    name: "INVESTORS",
    items: [
      { name: "Investor Info", icon: HomeIcon, to: "/investors/info" },
      { name: "Investments", icon: HomeIcon, to: "/investors/investments" },
      { name: "Reports", icon: HomeIcon, to: "/investors/reports" },
    ],
  },
  {
    type: "heading",
    name: "MENTORS",
    items: [
      { name: "Applications", icon: HomeIcon, to: "/mentors/applications" },
      { name: "Management", icon: HomeIcon, to: "/mentors/management" },
      { name: "Reports", icon: HomeIcon, to: "/mentors/reports" },
    ],
  },
  {
    type: "heading",
    name: "VENDORS",
    items: [
      { name: "Applications", icon: HomeIcon, to: "/vendors/applications" },
      { name: "Products & Sales", icon: HomeIcon, to: "/vendors/products" },
      { name: "Reports", icon: HomeIcon, to: "/vendors/reports" },
    ],
  },
  {
    type: "heading",
    name: "STARTUP ENTHUSIAST",
    items: [
      { name: "Applications", icon: HomeIcon, to: "/enthusiast/applications" },
      { name: "Reports", icon: HomeIcon, to: "/enthusiast/reports" },
    ],
  },
  {
    type: "heading",
    name: "CHAPTERS",
    items: [
      { name: "Management", icon: HomeIcon, to: "/chapters/management" },
      { name: "Reports", icon: HomeIcon, to: "/chapters/reports" },
    ],
  },
  {
    type: "heading",
    name: "EVENTS",
    items: [
      { name: "Event Management", icon: HomeIcon, to: "/events/management" },
      { name: "Reports", icon: HomeIcon, to: "/events/reports" },
    ],
  },
  {
    type: "heading",
    name: "FINANCE MANAGEMENT",
    items: [
      { name: "Transactions", icon: HomeIcon, to: "/finance/transactions" },
      { name: "Revenue & Fees", icon: HomeIcon, to: "/finance/revenue" },
      { name: "Reports", icon: HomeIcon, to: "/finance/reports" },
    ],
  },
  {
    type: "heading",
    name: "SUBSCRIPTIONS",
    items: [
      {
        name: "Manage Membership",
        icon: HomeIcon,
        to: "/subscriptions/manage",
      },
      { name: "Promo Codes", icon: HomeIcon, to: "/subscriptions/promo-codes" },
    ],
  },
  {
    type: "heading",
    name: "STAFF MANAGEMENT",
    items: [
      { name: "Admin Staff", icon: HomeIcon, to: "/staff/admin" },
      { name: "Logs", icon: HomeIcon, to: "/staff/logs" },
    ],
  },
  {
    type: "heading",
    name: "SYSTEM SETTINGS",
    items: [
      { name: "Country & Regions", icon: HomeIcon, to: "/settings/countries" },
      {
        name: "Currency & Language",
        icon: HomeIcon,
        to: "/settings/currency-language",
      },
      {
        name: "Skills & Interests",
        icon: HomeIcon,
        to: "/settings/skills-interests",
      },
      {
        name: "Targeting & Segmentation",
        icon: HomeIcon,
        to: "/settings/targeting",
      },
      { name: "Payment Settings", icon: HomeIcon, to: "/settings/payment" },
      { name: "Roles & Permissions", icon: HomeIcon, to: "/settings/roles" },
      { name: "Tax Management", icon: HomeIcon, to: "/settings/tax" },
      {
        name: "Communication Settings",
        icon: HomeIcon,
        to: "/settings/communication",
      },
    ],
  },
  {
    type: "heading",
    name: "REFERRALS",
    items: [
      { name: "Overview", icon: HomeIcon, to: "/referrals/overview" },
      { name: "Plans", icon: HomeIcon, to: "/referrals/plans" },
    ],
  },
  {
    type: "heading",
    name: "INTEGRATIONS",
    items: [
      { name: "Third-Party", icon: HomeIcon, to: "/integrations/third-party" },
      { name: "Plans", icon: HomeIcon, to: "/integrations/plans" },
    ],
  },
  {
    type: "heading",
    name: "ANALYTICS",
    items: [
      { name: "User Analytics", icon: HomeIcon, to: "/analytics/users" },
      { name: "Deal Analytics", icon: HomeIcon, to: "/analytics/deals" },
    ],
  },
  {
    type: "heading",
    name: "SUPPORT CENTER",
    items: [
      { name: "Tickets", icon: HomeIcon, to: "/support/tickets" },
      { name: "Knowledge Base", icon: HomeIcon, to: "/support/knowledge" },
    ],
  },
  {
    type: "heading",
    name: "SECURITY & COMPLIANCE",
    items: [
      { name: "Account Security", icon: HomeIcon, to: "/security/account" },
      { name: "Compliance", icon: HomeIcon, to: "/security/compliance" },
    ],
  },
  {
    type: "heading",
    name: "MATCHING SYSTEM",
    items: [
      { name: "Overview", icon: HomeIcon, to: "/matching/overview" },
      { name: "Matching Criteria", icon: HomeIcon, to: "/matching/criteria" },
      { name: "Match History", icon: HomeIcon, to: "/matching/history" },
    ],
  },
  {
    type: "heading",
    name: "MATCHING ALGORITHM",
    items: [
      {
        name: "Algorithm Configuration",
        icon: HomeIcon,
        to: "/algorithm/config",
      },
      {
        name: "Automated Matching",
        icon: HomeIcon,
        to: "/algorithm/automated",
      },
      {
        name: "Performance Analytics",
        icon: HomeIcon,
        to: "/algorithm/analytics",
      },
    ],
  },
  {
    type: "heading",
    name: "MANAGE QUESTIONS",
    items: [
      { name: "Create Questions", icon: HomeIcon, to: "/questions/create" },
      { name: "Question Logic", icon: HomeIcon, to: "/questions/logic" },
      { name: "Question Reports", icon: HomeIcon, to: "/questions/reports" },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: number]: boolean;
  }>({ 0: true });
  const location = useLocation();

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
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
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
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
              {(section.type === "heading" || section.type === "main") && (
                <div
                  className="flex items-center justify-between px-6 mb-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleSection(index)}
                >
                  <h3 className="text-[#64646D] text-[14px] py-2 font-semibold roboto-font uppercase">
                    {section.name || section.type}
                  </h3>
                  <ArrowIcon
                    className={`transform transition-transform duration-200 ${
                      expandedSections[index] ? "rotate-90" : ""
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
                          to={item.to || "#"}
                          onClick={onClose}
                          className={`flex items-center py-2 px-6 transition-colors duration-200 ${
                            isActive
                              ? "bg-[#E0EDFF] text-[#0056D2]"
                              : "text-[#171725] hover:bg-gray-100"
                          }`}
                        >
                          <item.icon
                            className="mr-3 flex-shrink-0"
                            stroke={isActive ? "#0056D2" : "#292D32"}
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
