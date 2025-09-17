// import { useState } from "react";
// import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

// const capxData = [
//   { name: "Feb", value: 20 },
//   { name: "Mar", value: 40 },
//   { name: "Apr", value: 30 },
//   { name: "May", value: 60 },
//   { name: "Jun", value: 50 },
//   { name: "Jul", value: 80 },
//   { name: "Aug", value: 70 },
//   { name: "Sep", value: 90 },
// ];

// const angelData = [
//   { name: "Feb", value: 10 },
//   { name: "Mar", value: 30 },
//   { name: "Apr", value: 20 },
//   { name: "May", value: 50 },
//   { name: "Jun", value: 40 },
//   { name: "Jul", value: 70 },
//   { name: "Aug", value: 60 },
//   { name: "Sep", value: 85 },
// ];

// export default function StakingTracker() {
//   const [activeTab, setActiveTab] = useState("CAPX");

//   const data = activeTab === "CAPX" ? capxData : angelData;
//   const title = activeTab === "CAPX" ? "CAPX Staking Tracker" : "ANGEL Staking Tracker";
//   const value = activeTab === "CAPX" ? "100,000.00" : "1,234,000.0000";
//   const change = activeTab === "CAPX" ? "+10k" : "+120k";
//   const color = "#7C3AED"; // purple

//   return (
//     <div className="bg-white rounded-xl border border-zinc-200 p-4 flex flex-col gap-3 w-full h-full">
//       {/* Header */}
//       <div className="flex justify-between items-start">
//         <div>
//           <h3 className="text-sm text-gray-500">{title}</h3>
//           <p className="text-xs text-gray-400">Monthly Report</p>
//         </div>
//         <div className="text-right">
//           <p className="text-lg font-bold">{value}</p>
//           <p className="text-xs text-green-600">{change} this month</p>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="h-40">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={data}>
//             <defs>
//               <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor={color} stopOpacity={0.4} />
//                 <stop offset="95%" stopColor={color} stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
//             <YAxis hide />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="value"
//               stroke={color}
//               strokeWidth={2}
//               fill="url(#colorFill)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Tabs */}
//       <div className="flex items-center justify-center gap-2">
//         <button
//           onClick={() => setActiveTab("CAPX")}
//           className={`px-6 py-1 rounded-md border ${
//             activeTab === "CAPX" ? "bg-purple-600 text-white" : "bg-white text-purple-600 border-purple-600"
//           }`}
//         >
//           CAPX
//         </button>
//         <button
//           onClick={() => setActiveTab("ANGEL")}
//           className={`px-6 py-1 rounded-md border ${
//             activeTab === "ANGEL" ? "bg-purple-600 text-white" : "bg-white text-purple-600 border-purple-600"
//           }`}
//         >
//           ANGEL
//         </button>
//       </div>
//     </div>
//   );
// }
