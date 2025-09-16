import React, { useState } from 'react';

const Activity = () => {
  const [rewardsData] = useState({
    capxTokens: 1250.00,
    angelTokens: 750.56764
  });

  const [statsData] = useState([
    { icon: <img src="/icons-activity-page/events.png" alt="Events Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "3", label: "Events Attended" },
    { icon: <img src="/icons-activity-page/login.png" alt="Logins Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "125", label: "Total Logins" },
    { icon: <img src="/icons-activity-page/refer.png" alt="Referrals Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "12", label: "Referrals" },
    { icon: <img src="/icons-activity-page/poll.png" alt="Polls Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "15", label: "Poll Votes" },
    { icon: <img src="/icons-activity-page/quiz.png" alt="Quizzes Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "8", label: "Quizzes Completed" },
    { icon: <img src="/icons-activity-page/survey.png" alt="Surveys Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "10", label: "Surveys Submitted" },
    { icon: <img src="/icons-activity-page/game.png" alt="Games Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "22", label: "Games Played" },
    { icon: <img src="/icons-activity-page/airdrop.png" alt="Airdrops Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "15", label: "Airdrops Claimed" },
    { icon: <img src="/icons-activity-page/spin.png" alt="Spin Icon" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />, value: "49", label: "Spin Played" }
  ]);

  const [activityLog] = useState([
    {
      date: "09 Aug 2025 14:22",
      activity: "Login",
      details: "IP: 94.200.15.12"
    },
    {
      date: "08 Aug 2025 10:05",
      activity: "Poll Answered",
      details: "Preferred Investment Sectors"
    },
    {
      date: "08 Aug 2025 09:40",
      activity: "Referral Sent",
      details: "Code: REF-9932"
    },
    {
      date: "07 Aug 2025 18:40",
      activity: "Airdrop Claimed",
      details: "50.00 ANGEL"
    },
    {
      date: "07 Aug 2025 16:12",
      activity: "Game Played",
      details: "Spin & Win"
    },
    {
      date: "06 Aug 2025 09:30",
      activity: "Survey Completed",
      details: "Startup Funding Interest"
    },
    {
      date: "05 Aug 2025 20:11",
      activity: "Login",
      details: "IP: 94.200.14.78"
    },
    {
      date: "04 Aug 2025 15:50",
      activity: "Quiz Completed",
      details: "CAPShield Basics"
    },
    {
      date: "03 Aug 2025 18:20",
      activity: "Reward Credited",
      details: "100.00 CAPX"
    },
    {
      date: "03 Aug 2025 09:15",
      activity: "Event Attended",
      details: "Investor Masterclass"
    }
  ]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Rewards Earned Section */}
      <div>
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Rewards Card - Full Width */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-gray-800 font-semibold">Rewards Earned</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <img src="/icons-activity-page/capx.png" alt="CAPX" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    {rewardsData.capxTokens.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">CAPShield (CAPX)</div>
                </div>
                <div className="text-center">
                  <img src="/icons-activity-page/angel.png" alt="ANGEL" className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    {rewardsData.angelTokens.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">AngelSEED (ANGEL)</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Grid - 3 columns on mobile */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="mb-2">{stat.icon}</div>
                <div className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-8">
          {/* Column 1: Rewards */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="bg-gray-50 px-10 py-3 border-b border-gray-200">
              <h3 className="text-gray-800 font-semibold">Rewards Earned</h3>
            </div>
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
              <img src="/icons-activity-page/capx.png" alt="CAPX" className="w-10 h-10 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800 mb-1">
                {rewardsData.capxTokens.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-sm text-gray-500 mb-4">CAPShield (CAPX)</div>
              <hr className="w-full border-gray-200 mb-4" />
              <img src="/icons-activity-page/angel.png" alt="ANGEL" className="w-10 h-10 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800 mb-1">
                {rewardsData.angelTokens.toLocaleString('en-US', { minimumFractionDigits: 5, maximumFractionDigits: 5 })}
              </div>
              <div className="text-sm text-gray-500">AngelSEED (ANGEL)</div>
            </div>
          </div>

          {/* Column 2: Events, Polls, Games */}
          <div className="space-y-6">
            {[
              statsData[0], 
              statsData[3], 
              statsData[6]  
            ].map((stat, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-2 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Column 3: Logins, Quizzes, Airdrops */}
          <div className="space-y-6">
            {[
              statsData[1], 
              statsData[4], 
              statsData[7]  
            ].map((stat, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-2 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Column 4: Referrals, Surveys, Spins */}
          <div className="space-y-6">
            {[
              statsData[2], // Referrals
              statsData[5], // Surveys Submitted
              statsData[8]  // Spin Played
            ].map((stat, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-2 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Log Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-6">Recent Activity Log</h3>
        
        {/* Desktop Table */}
        <div className="hidden sm:block bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 border-b border-gray-200">
            <div className="text-sm font-semibold text-gray-700">Date & Time (UTC)</div>
            <div className="text-sm font-semibold text-gray-700">Activity</div>
            <div className="text-sm font-semibold text-gray-700">Details</div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {activityLog.map((activity, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="text-sm text-gray-600">{activity.date}</div>
                <div className="text-sm text-gray-800 font-medium">{activity.activity}</div>
                <div className="text-sm text-gray-600">{activity.details}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card Layout */}
        <div className="sm:hidden space-y-3">
          {activityLog.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-gray-900">{activity.activity}</span>
                <span className="text-xs text-gray-500">{activity.date.split(' ')[0]}</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">{activity.date.split(' ').slice(1).join(' ')}</div>
              <div className="text-sm text-gray-600">{activity.details}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;