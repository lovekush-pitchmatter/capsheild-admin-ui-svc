import LatestPurchases from "./LatestPurchases";
import PresaleChart from "./PresaleChart"
import StageBreakdown from "./StageBreakdown";
import TopInvestorCountries from "./TopInvestorCountries";
import TopInvestors from "./TopInvestors";
import TopStats from "./TopStats"

const PresaleOverview = () => {
  return (
    <div className="bg-gray-100 min-h-screen max-h-fit p-2 flex flex-col gap-[31px] overflow-hidden">
      <h1 className="text-2xl font-semibold mb-4 bg-amber-300 sm:bg-blue-400 md:bg-emerald-500 lg:bg-fuchsia-600 xl:bg-orange-400">Presale Overview</h1>
      <TopStats />  
      <div className="lg:flex gap-[31px] w-[100%] h-fit">
        <PresaleChart/>
        <LatestPurchases/>
      </div>
      <StageBreakdown/>
      <div className="lg:flex gap-[31px] w-[100%] h-fit">
        <TopInvestors/>
        <TopInvestorCountries/>
      </div>
    </div>
  )
}

export default PresaleOverview;