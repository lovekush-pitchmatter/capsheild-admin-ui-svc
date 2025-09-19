// import { AreaChart, Area, ResponsiveContainer } from "recharts";

// const StatsCard = ({
//   title,
//   value,
//   change,
//   changeColor,
//   icon: Icon,
//   chartData,
//   color,
//   bg,
// }) => {
//   return (
//     <div
//       className={`rounded-xl px-4 py-2 border border-zinc-200 ${bg} flex flex-col gap-2`}
//     >
//       {/* Top Section */}
//       <div className="flex gap-4 items-center">
//         <div
//           className="text-2xl p-2 rounded-full text-white"
//           style={{ backgroundColor: color }}
//         >
//           <Icon />
//         </div>
//         <div>
//           <h3 className="text-sm text-gray-500">{title}</h3>
//           <p className="text-xl font-bold">{value}</p>
//         </div>
//       </div>

//       {/* Mini Area Chart */}
//       <div className="h-10 w-36">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={chartData}>
//             <Area
//               type="monotone"
//               dataKey="value"
//               stroke={color}
//               strokeWidth={2}
//               fill={color}
//               fillOpacity={0.2} // semi-transparent fill
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Change */}
//       <p className="flex gap-1 tracking-wider items-center text-xs font-medium">
//         <span className={`rounded p-1 px-1.5 bg-green-200 ${changeColor}`}>
//           {change}
//         </span>
//         this week
//       </p>
//     </div>
//   );
// };

// export default StatsCard;
