import { Users, UserCheck, BadgeCheck, UserX, ShoppingBag } from "lucide-react";

import { FaUserCheck, FaUsers, FaUserSlash } from "react-icons/fa";

const stats = [
  { 
    title: "Total Users", 
    value: "115", 
    change: " this week",
    number: "+20",
    icon: FaUsers, 
    color: "text-orange-600",
    border: "border-orange-600",
    bgColor: "orange-100"
  },
  { 
    title: "Active Users", 
    value: "300", 
    change: " this week", 
    number: "+20",
    icon: FaUserCheck, 
    color: "text-blue-600",
    border: "border-blue-600",
    bgColor: "blue-100"
  },
  { 
    title: "KYC Verified", 
    value: "1500", 
    change: " this week", 
    number: "+1k",
    icon: BadgeCheck, 
    color: "text-purple-600",
    border: "border-purple-600",
    bgColor: "purple-100"
  },
  { 
    title: "Blocked/Flagged Users", 
    value: "200", 
    change: " this week",
    number: "+10", 
    icon: FaUserSlash, 
    color: "text-pink-600",
    border: "border-pink-600",
    bgColor: "pink-100"
  },
  { 
    title: "Presale Buyers", 
    value: "1,276", 
    change: " this week", 
    number: "+100",
    icon: ShoppingBag, 
    color: "text-green-600",
    border: "border-green-600",
    bgColor: "green-100"
  },
];

export default function UserStatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-5">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white p-5 flex flex-col items-start justify-between border-2 border-gray-100"
        >
          <div className={`p-2 rounded-md bg-${item.bgColor} border ${item.color} ${item.border}`}>
            <item.icon className="w-6 h-6" />
          </div>
          <p className="text-gray-600 text-sm mt-3">{item.title}</p>
          <h2 className="text-2xl font-bold ">{item.value}</h2>
          <p className="text-sm text-green-600 font-medium mt-2">
            <span className="bg-gray-100 py-0.5 px-1.5 rounded-md">{item.number}</span>
            {item.change}
          </p>
        </div>
      ))}
    </div>
  );
}
