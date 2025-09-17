// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import FilterDropdown from "./FilterDropdown";
// import { useState } from "react";

// const customerDataByFilter = {
//   "All Time": [
//     { name: "Total", value: 5000, color: "#3B82F6" },
//     { name: "New", value: 1500, color: "#F97316" },
//     { name: "KYC", value: 900, color: "#EF4444" },
//     { name: "Active", value: 3000, color: "#22C55E" },
//   ],
//   Yearly: [
//     { name: "Total", value: 3000, color: "#3B82F6" },
//     { name: "New", value: 1000, color: "#F97316" },
//     { name: "KYC", value: 500, color: "#EF4444" },
//     { name: "Active", value: 2000, color: "#22C55E" },
//   ],
//   Monthly: [
//     { name: "Total", value: 1500, color: "#3B82F6" },
//     { name: "New", value: 500, color: "#F97316" },
//     { name: "KYC", value: 100, color: "#EF4444" },
//     { name: "Active", value: 500, color: "#22C55E" },
//   ],
//   Weekly: [
//     { name: "Total", value: 400, color: "#3B82F6" },
//     { name: "New", value: 120, color: "#F97316" },
//     { name: "KYC", value: 40, color: "#EF4444" },
//     { name: "Active", value: 200, color: "#22C55E" },
//   ],
// };

// export default function CustomerOverviewCard() {
//   const [filter, setFilter] = useState("Monthly");
//   const options = ["All Time", "Yearly", "Monthly", "Weekly"];

//   const customerData = customerDataByFilter[filter];

//   return (
//     <div className="bg-white p-4 rounded-xl shadow-sm relative w-full">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-sm font-semibold">Customer Overview</h2>
//         <FilterDropdown options={options} value={filter} onChange={setFilter} />
//       </div>

//       <div className="flex">
//         <div className="w-full items-start flex flex-col justify-center gap-1 mt-2">
//           {customerData.map((item, index) => (
//             <div key={index} className="flex items-center gap-1 text-xs">
//               <span
//                 className="w-3 h-3 rounded-full"
//                 style={{ backgroundColor: item.color }}
//               ></span>
//               <span>
//                 {item.name}: {item.value}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="h-40 w-full">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={customerData}
//                 innerRadius={50}
//                 outerRadius={80}
//                 startAngle={180}
//                 endAngle={0}
//                 paddingAngle={3}
//                 dataKey="value"
//               >
//                 {customerData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }
