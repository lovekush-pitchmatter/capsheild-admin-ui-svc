import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaCamera, FaTimes, FaUserCircle, FaChevronDown } from "react-icons/fa";
import TrackRecord from "./TrackRecord";
import InvestmentThesis from "./InvestmentThesis";
import Security from "./Security";
import Activity from "./Activity";
import Wallet from "./Wallet";
import KYC from "./KYC";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const tabs = [
    "Edit Profile",
    "KYC",
    "Wallet",
    "Activity",
    "Security",
    "Investment Thesis",
    "Track Record",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">User Profile Summary</h1>
          <button
            onClick={() => window.location.href = "/dashboard"}
            className="w-10 h-10 rounded-full border border-purple-100 flex items-center justify-center text-purple-600 shadow-sm bg-white"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        {/* Main grid: left sidebar + right content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Sidebar (narrow) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-6">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Profile header */}
              <div className="bg-gray-50 p-4 sm:p-6 flex items-center space-x-4 text-left">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full p-[2px] bg-gradient-to-r from-purple-500 to-purple-300 flex-shrink-0">
                  <img
                    src="/samuel-sam.png"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-semibold">Samuel sam</h2>
                  <p className="text-gray-500 text-xs">samuel2025</p>
                  <p className="text-purple-600 text-xs font-medium">Angel Investor</p>
                </div>
              </div>

              {/* Engagement score */}
              <div className="px-4 py-4 border-b border-gray-200">
                <p className="text-black text-lg font-medium mb-3">Engagement Score</p>
                <div className="flex flex-col items-center justify-center">
                  <svg className="w-20 sm:w-25 h-20 sm:h-25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="44" stroke="#eee" strokeWidth="8" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      stroke="#7c3aed"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="276.46"
                      strokeDashoffset="44.47"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '22px', fontWeight: 700, fill: '#111' }}>
                      8.4
                    </text>
                    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" style={{ fontSize: '10px', fill: '#666' }}>
                      / 10
                    </text>
                  </svg>
                  
                  <p className="text-black text-sm font-medium mt-2">Amazing!</p>
                  <div className="flex items-center mt-1 space-x-1">
                    <span className="text-green-500 text-xs">↑</span>
                    <span className="text-black text-xs">0.6pt in the last 6 months</span>
                  </div>
                </div>
              </div>

              {/* Profile & Status */}
              <div className="px-4 py-4 border-b border-gray-200 text-xs space-y-2">
                <h3 className="font-semibold text-purple-700 text-sm">Profile & Status</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Full Name</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">Samuel Sam</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Role & Level</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">Community Member - Ant</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">KYC Status</span>
                    <span className="text-gray-600">:</span>
                    <span className="rounded-full bg-green-100 text-green-700 py-0.5 text-xs font-medium flex items-center space-x-1">
                      <FaCheckCircle className="text-green-500 text-xs" />
                      <span>Verified</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Member Since</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">02 Jan 2025</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Last Active</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">07 Aug 2025, 14:20 UTC</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Status</span>
                    <span className="text-gray-600">:</span>
                    <span className="rounded-full bg-green-100 text-green-700 py-0.5 text-xs font-medium flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Active</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Community & Gamification */}
              <div className="px-4 py-4 border-b border-gray-200 text-xs space-y-2">
                <h3 className="font-semibold text-purple-700 text-sm">Community & Gamification</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Badges Earned</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">5</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Events Attended</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">3</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600">Referrals Made</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">14</span>
                  </div>
                </div>
              </div>

              {/* Wallet Snapshot */}
              <div className="px-4 py-4 border-b border-gray-200 text-xs space-y-2">
                <h3 className="font-semibold text-purple-700 text-sm">Wallet Snapshot</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">CAPX Tokens</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">1200.00</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">ANGEL Tokens</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">134,000.78</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600">Last Wallet Activity</span>
                    <span className="text-gray-600">:</span>
                    <span className="text-gray-800 font-medium">07 Aug 2025, 14:20 UTC</span>
                  </div>
                </div>
              </div>

              {/* Quick Flags and action buttons */}
              <div className="p-4 space-y-2 text-xs">
                <h3 className="font-semibold text-purple-700 text-sm mb-2">Quick Flags</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Risk Status</span>
                    <span className="text-gray-600">:</span>
                    <span className="inline-block text-red-700 px-2 py-0.5 text-xs rounded">High Risk</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Investor Club Status</span>
                    <span className="text-gray-600">:</span>
                    <span className="inline-block text-gray-700 px-2 py-0.5 text-xs rounded">Gold Investor Club</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600 mb-2">Chapter Affiliation</span>
                    <span className="text-gray-600">:</span>
                    <span className="inline-block text-gray-700 px-2 py-0.5 text-xs rounded">Al Barsha – Dubai</span>
                  </div>
                  <div className="grid grid-cols-[80px_20px_1fr] sm:grid-cols-[100px_20px_1fr] gap-x-2 items-start">
                    <span className="text-gray-600">Upgrade Level</span>
                    <span className="text-gray-600">:</span>
                    <span className="inline-block text-gray-700 px-2 py-0.5 text-xs rounded">Premium Plan</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <button className="w-full h-11 py-2 text-xs rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium">Promote to Level 2</button>
                  <button className="w-full py-2 h-11 text-xs rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-medium">Activate Referral Link</button>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content (form + tabs) */}
          <main className="lg:col-span-9">
            <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
              {/* Tabs */}
              <div className="border-t border-gray-300 mb-6">
                {/* Desktop Tabs */}
                <div className="hidden sm:flex flex-wrap gap-x-6 gap-y-2" role="tablist">
                  {tabs.map((tab, idx) => (
                    <button
                      key={idx}
                      role="tab"
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                        activeTab === tab
                          ? "text-purple-700 bg-purple-50 border-t-2 border-purple-600"
                          : "text-gray-600 hover:text-purple-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Mobile Dropdown */}
                <div className="sm:hidden relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-left"
                  >
                    <span className="text-sm font-medium text-gray-900">{activeTab}</span>
                    <FaChevronDown className={`text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                      {tabs.map((tab, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveTab(tab);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                            activeTab === tab
                              ? "bg-purple-50 text-purple-700 font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          } ${idx !== tabs.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Editable content */}
              {activeTab === "Edit Profile" && (
                <>
                  {/* Profile Image Section */}
                  <div className="mb-8">
                    <p className="text-gray-600 text-sm mb-4">Profile Image</p>
                    <div className="flex items-center">
                      <div className="w-20 sm:w-26 h-20 sm:h-26 rounded-full border-2 border-gray-200 flex items-center justify-center relative bg-gray-50">
                        <FaUserCircle className="text-gray-300 text-3xl sm:text-4xl" />
                        <button className="absolute -bottom-1 -right-1 bg-blue-300 rounded-full p-2 shadow-md hover:bg-purple-700">
                          <FaCamera className="text-white text-xs" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-purple-700 text-lg font-semibold mb-6">PERSONAL INFORMATION</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="firstName">First Name</label>
                          <input 
                            id="firstName" 
                            type="text" 
                            placeholder="Aarav" 
                            className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="lastName">Last Name</label>
                          <input 
                            id="lastName" 
                            type="text" 
                            placeholder="Mehta" 
                            className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="dob">Date of Birth</label>
                          <input 
                            id="dob" 
                            type="text" 
                            placeholder="18-04-1978" 
                            className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                          />
                        </div>

                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="nationality">Nationality</label>
                          <select 
                            id="nationality" 
                            className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none bg-white"
                          >
                            <option>Americans</option>
                          </select>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="language">Preferred Language</label>
                          <select 
                            id="language" 
                            className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none bg-white"
                          >
                            <option>English</option>
                          </select>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="username">Username</label>
                          <input 
                            id="username" 
                            type="text" 
                            placeholder="wa34shivanand" 
                            className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-purple-700 text-lg font-semibold mb-6">CONTACT DETAILS</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="phone">Mobile Phone Number</label>
                          <div className="relative">
                            <div className="flex">
                              <div className="flex items-center bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg px-3">
                                <span className="text-sm">🇺🇸 US</span>
                              </div>
                              <input 
                                id="phone" 
                                type="text"  
                                placeholder="+1 (555) 356-7832"
                                className="flex-1 border border-gray-300 rounded-r-lg p-3 text-sm pr-10 focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                              />
                            </div>
                            <FaTimesCircle className="absolute right-3 top-3 text-red-500" />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="email">Primary Email Address</label>
                          <div className="relative">
                            <input 
                              id="email" 
                              type="email" 
                              placeholder="aarav@brixagency.com" 
                              className="w-full border border-gray-300 rounded-lg p-3 text-sm pr-10 focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                            />
                            <FaCheckCircle className="absolute right-3 top-3 text-green-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-purple-700 text-lg font-semibold mb-6">ADDRESS</h3>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-col">
                          <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="address">Address</label>
                          <input 
                            id="address" 
                            type="text" 
                            placeholder="123 Main Street, Los Angeles, CA" 
                            className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="country">Country</label>
                            <select 
                              id="country" 
                              className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none bg-white"
                            >
                              <option>Select Country</option>
                            </select>
                          </div>

                          <div className="flex flex-col">
                            <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="state">State / Province</label>
                            <input 
                              id="state" 
                              type="text" 
                              placeholder="State/Province Name" 
                              className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col">
                            <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="city">City</label>
                            <input 
                              id="city" 
                              type="text" 
                              placeholder="City Name" 
                              className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                            />
                          </div>

                          <div className="flex flex-col">
                            <label className="text-sm text-gray-600 mb-2 font-medium" htmlFor="zip">ZIP Code</label>
                            <input 
                              id="zip" 
                              type="text" 
                              placeholder="ZIP Code" 
                              className="border border-gray-300 rounded-lg p-3 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-200 focus:outline-none" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bottom action buttons */}
                  <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
                    <button type="button" className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 w-full sm:w-1/2">Cancel</button>
                    <button type="submit" className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium text-sm hover:from-purple-700 hover:to-purple-900 w-full sm:w-1/2">Save</button>
                  </div>
                </>
              )}

              {/* Other tabs content placeholders */}
              {activeTab === "KYC" && <KYC />}
              {activeTab === "Wallet" && <Wallet />}
              {activeTab === "Activity" && <Activity />}
              {activeTab === "Security" && <Security />}
              {activeTab === "Investment Thesis" && <InvestmentThesis />}
              {activeTab === "Track Record" && <TrackRecord />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;