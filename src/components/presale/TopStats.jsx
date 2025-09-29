import { FlagIcon } from "lucide-react";
import StatCard from "./StatCard";
import { FaCoins, FaDatabase, FaHourglassStart, FaUsers } from "react-icons/fa";
import { PieChart } from "lucide-react";

const TopStats = () => {
  const stats = [
    {
      title: "Raised (USD)",
      value: "1,280,000.00",
      icon: <FaDatabase size={24} />,
      textColor: "blue-500",
      bgColor: "bg-blue-200",
    },
    {
      title: "Tokens Sold",
      value: "1,825,000.00 CAPX",
      icon: <FaCoins size={24} />,
      textColor: "pink-500",
      bgColor: "bg-pink-200",
    },
    {
      title: "Current Stage",
      value: "Stage 3 / 6",
      icon: <FlagIcon size={24} />,
      textColor: "orange-500",
      bgColor: "bg-orange-200",
    },
    {
      title: "Stage Progress",
      value: "78%",
      span: "62,500 CAPX left",
      icon: <FaHourglassStart size={24} />,
      textColor: "purple-500",
      bgColor: "bg-purple-200",
    },
    {
      title: "Investors",
      value: "336",
      icon: <FaUsers size={24} />,
      textColor: "blue-500",
      bgColor: "bg-blue-200",
    },
    {
      title: "Avg Ticket",
      value: "3,810.00 USD",
      icon: <PieChart size={24} />,
      textColor: "green-500",
      bgColor: "bg-green-200",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-[1px] border-gray-200">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>  
  )
}

export default TopStats