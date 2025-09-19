// import { FaUserFriends } from "react-icons/fa";
// import { GiSpinningWheel, GiParachute } from "react-icons/gi";
// import { MdOutlineQuiz } from "react-icons/md";
// import FilterDropdown from "./FilterDropdown";
// import { useState } from "react";

// const engagementDataByFilter = {
//   "All Time": [
//     { id: 1, label: "Referrals", value: 95, icon: <FaUserFriends />, color: "text-orange-500", barColor: "bg-orange-500" },
//     { id: 2, label: "Spins & Games", value: 70, icon: <GiSpinningWheel />, color: "text-green-500", barColor: "bg-green-500" },
//     { id: 3, label: "Polls & Quizzes", value: 85, icon: <MdOutlineQuiz />, color: "text-blue-500", barColor: "bg-blue-500" },
//     { id: 4, label: "Airdrop Claims", value: 60, icon: <GiParachute />, color: "text-purple-500", barColor: "bg-purple-500" },
//   ],
//   Yearly: [
//     { id: 1, label: "Referrals", value: 88, icon: <FaUserFriends />, color: "text-orange-500", barColor: "bg-orange-500" },
//     { id: 2, label: "Spins & Games", value: 77, icon: <GiSpinningWheel />, color: "text-green-500", barColor: "bg-green-500" },
//     { id: 3, label: "Polls & Quizzes", value: 68, icon: <MdOutlineQuiz />, color: "text-blue-500", barColor: "bg-blue-500" },
//     { id: 4, label: "Airdrop Claims", value: 82, icon: <GiParachute />, color: "text-purple-500", barColor: "bg-purple-500" },
//   ],
//   Monthly: [
//     { id: 1, label: "Referrals", value: 80, icon: <FaUserFriends />, color: "text-orange-500", barColor: "bg-orange-500" },
//     { id: 2, label: "Spins & Games", value: 65, icon: <GiSpinningWheel />, color: "text-green-500", barColor: "bg-green-500" },
//     { id: 3, label: "Polls & Quizzes", value: 72, icon: <MdOutlineQuiz />, color: "text-blue-500", barColor: "bg-blue-500" },
//     { id: 4, label: "Airdrop Claims", value: 55, icon: <GiParachute />, color: "text-purple-500", barColor: "bg-purple-500" },
//   ],
//   Weekly: [
//     { id: 1, label: "Referrals", value: 60, icon: <FaUserFriends />, color: "text-orange-500", barColor: "bg-orange-500" },
//     { id: 2, label: "Spins & Games", value: 50, icon: <GiSpinningWheel />, color: "text-green-500", barColor: "bg-green-500" },
//     { id: 3, label: "Polls & Quizzes", value: 40, icon: <MdOutlineQuiz />, color: "text-blue-500", barColor: "bg-blue-500" },
//     { id: 4, label: "Airdrop Claims", value: 30, icon: <GiParachute />, color: "text-purple-500", barColor: "bg-purple-500" },
//   ],
// };

// export default function EngagementSourcesCard() {
//   const options = ["All Time", "Yearly", "Monthly", "Weekly"];
//   const [filter, setFilter] = useState("Monthly");
  
//   const engagementData = engagementDataByFilter[filter];
//   return (
//     <div className="bg-white p-4 rounded-xl shadow-sm relative w-full">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-sm font-semibold">Engagement Sources</h2>
//         <FilterDropdown options={options} value={filter} onChange={setFilter} />
//       </div>

//       <div className="space-y-4">
//         {engagementData.map((item) => (
//           <div key={item.id} className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <span className={`text-lg ${item.color}`}>{item.icon}</span>
//               <span className="text-sm">{item.label}</span>
//             </div>
//             <div className="flex items-center gap-2 w-32">
//               <div className="w-full bg-gray-200 h-2 rounded-full">
//                 <div
//                   className={`h-2 rounded-full ${item.barColor}`}
//                   style={{ width: `${item.value}%` }}
//                 ></div>
//               </div>
//               <span className="text-xs text-gray-500">{item.value}%</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
