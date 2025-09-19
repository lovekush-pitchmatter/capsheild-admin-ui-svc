// import {
//   LineChart,
//   Line,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { FaMoneyBillTrendUp } from "react-icons/fa6";
// import { GiReceiveMoney } from "react-icons/gi";
// import { PiCoins } from "react-icons/pi";
// import FilterDropdown from "./FilterDropdown";

// // Different chart data sets
// const chartData = {
//   "All Time": [
//     { name: "2019", sales: 3500000 },
//     { name: "2020", sales: 4200000 },
//     { name: "2021", sales: 5000000 },
//     { name: "2022", sales: 6200000 },
//     { name: "2023", sales: 7000000 },
//   ],
//   Yearly: [
//     { name: "Jan", sales: 900000 },
//     { name: "Feb", sales: 700000 },
//     { name: "Mar", sales: 800000 },
//     { name: "Apr", sales: 750000 },
//     { name: "May", sales: 850000 },
//     { name: "Jun", sales: 950000 },
//     { name: "Jul", sales: 700000 },
//     { name: "Aug", sales: 930000 },
//     { name: "Sep", sales: 720000 },
//     { name: "Oct", sales: 800000 },
//     { name: "Nov", sales: 690000 },
//     { name: "Dec", sales: 910000 },
//   ],
//   Monthly: [
//     { name: "Week 1", sales: 200000 },
//     { name: "Week 2", sales: 250000 },
//     { name: "Week 3", sales: 180000 },
//     { name: "Week 4", sales: 300000 },
//   ],
//   Weekly: [
//     { name: "Mon", sales: 40000 },
//     { name: "Tue", sales: 50000 },
//     { name: "Wed", sales: 30000 },
//     { name: "Thu", sales: 60000 },
//     { name: "Fri", sales: 70000 },
//     { name: "Sat", sales: 20000 },
//     { name: "Sun", sales: 10000 },
//   ],
// };

// // Different stats sets
// const statsData = {
//   "All Time": [
//     {
//       id: 1,
//       label: "CAPX Raised",
//       value: "$25M",
//       icon: <FaMoneyBillTrendUp />,
//       color: "text-green-600",
//     },
//     {
//       id: 2,
//       label: "ANGEL Earned",
//       value: "180M ANGEL",
//       icon: <PiCoins />,
//       color: "text-yellow-600",
//     },
//     {
//       id: 3,
//       label: "Commission Paid",
//       value: "$2.5M",
//       icon: <GiReceiveMoney />,
//       color: "text-purple-600",
//     },
//   ],
//   Yearly: [
//     {
//       id: 1,
//       label: "CAPX Raised",
//       value: "$418K",
//       icon: <FaMoneyBillTrendUp />,
//       color: "text-green-600",
//     },
//     {
//       id: 2,
//       label: "ANGEL Earned",
//       value: "3.24M ANGEL",
//       icon: <PiCoins />,
//       color: "text-yellow-600",
//     },
//     {
//       id: 3,
//       label: "Commission Paid",
//       value: "$40K",
//       icon: <GiReceiveMoney />,
//       color: "text-purple-600",
//     },
//   ],
//   Monthly: [
//     {
//       id: 1,
//       label: "CAPX Raised",
//       value: "$95K",
//       icon: <FaMoneyBillTrendUp />,
//       color: "text-green-600",
//     },
//     {
//       id: 2,
//       label: "ANGEL Earned",
//       value: "720K ANGEL",
//       icon: <PiCoins />,
//       color: "text-yellow-600",
//     },
//     {
//       id: 3,
//       label: "Commission Paid",
//       value: "$9K",
//       icon: <GiReceiveMoney />,
//       color: "text-purple-600",
//     },
//   ],
//   Weekly: [
//     {
//       id: 1,
//       label: "CAPX Raised",
//       value: "$18K",
//       icon: <FaMoneyBillTrendUp />,
//       color: "text-green-600",
//     },
//     {
//       id: 2,
//       label: "ANGEL Earned",
//       value: "140K ANGEL",
//       icon: <PiCoins />,
//       color: "text-yellow-600",
//     },
//     {
//       id: 3,
//       label: "Commission Paid",
//       value: "$2K",
//       icon: <GiReceiveMoney />,
//       color: "text-purple-600",
//     },
//   ],
// };

// export default function PresalePerformance() {
//   const [filter, setFilter] = useState("Yearly");
//   const [isOpen, setIsOpen] = useState(false);

//   const options = ["All Time", "Yearly", "Monthly", "Weekly"];

//   return (
//     <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm w-full relative">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h2 className="text-lg font-semibold">Presale Performance</h2>
//           <p className="text-sm text-gray-500">Fundraising Progress</p>
//         </div>

//         {/* Dropdown */}
        
//          <FilterDropdown options={options} value={filter} onChange={setFilter} />
               
//       </div>

//       {/* Stats */}
//       <div className="flex items-center justify-center flex-wrap gap-4 mb-6">
//         {statsData[filter].map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg"
//           >
//             <span className={`text-xl ${item.color}`}>{item.icon}</span>
//             <div>
//               <p className="text-xs text-gray-500">{item.label}</p>
//               <p className="sm:text-base text-sm font-semibold">{item.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Chart */}
//       <div className="h-72 w-full">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={chartData[filter]}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis dataKey="name" />
//             <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
//             <Tooltip
//               formatter={(value) => [`$${(value / 1000).toFixed(0)}k`, "Sales"]}
//               labelFormatter={(label) => `${label}`}
//             />
//             {/* Bars */}
//             <Bar
//               dataKey="sales"
//               fill="#A78BFA"
//               opacity={0.3}
//               radius={[10, 10, 0, 0]}
//               barSize={20}
//             />
//             {/* Line */}
//             <Line
//               type="monotone"
//               dataKey="sales"
//               stroke="#7C3AED"
//               strokeWidth={3}
//               dot={{ r: 5, fill: "#7C3AED" }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
