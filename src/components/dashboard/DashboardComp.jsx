import React from "react";
import StakingTracker from "./StakingTracker";
import StatsCard from "./StatsCard";
import PresalePerformance from "./PresalePerformance";
import DashboardCards from "./DashboardCards";
import { statsData } from "./statsData";
import InvestorMap from "./InvestorMap";
import WalletHoldings from "./WalletHoldings";
import LatestInvestments from "./LatestInvestments";
import EngagementReport from "./EngagementReport";
import TopRewardEarners from "./TopRewardEarners";
import TopCapxInvestors from "./TopCapxInvestors";

const DashboardComp = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex  w-full max-lg:flex-col gap-6">
          <div className="w-full lg:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statsData.map((stat) => (
              <StatsCard key={stat.id} {...stat} />
            ))}
          </div>
          <div className="w-full lg:w-1/3">
            <StakingTracker />
          </div>
        </div>

        <div className=" flex h-full w-full max-xl:flex-col gap-6">
          <div className="xl:w-3/5 w-full ">
            <PresalePerformance />
          </div>
          <div className="xl:w-2/5 w-full ">
            <DashboardCards />
          </div>
        </div>

        <div className=" flex flex-col h-full w-full  gap-6">
          <InvestorMap />

          <div className="flex flex-col xl:flex-row gap-6 w-full">
            <WalletHoldings />

            <LatestInvestments />
          </div>
        </div>

        <div className=" flex h-full w-full max-xl:flex-col gap-6">
          <div className="xl:w-1/3 w-full ">
            <TopCapxInvestors />
          </div>
          <div className="xl:w-1/3 w-full ">
            <TopRewardEarners />
          </div>
          <div className="xl:w-1/3 w-full ">
            <EngagementReport />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComp;
