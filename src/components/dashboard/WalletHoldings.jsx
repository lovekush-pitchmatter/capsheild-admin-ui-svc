import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "USD", value: 20000, color: "#facc15" }, // Yellow
  { name: "USDT", value: 20000, color: "#22c55e" }, // Green
  { name: "CAPX", value: 16000, color: "#a855f7" }, // Purple
  { name: "ANGEL", value: 40000, color: "#7c3aed" }, // Deep Purple
  { name: "Other", value: 23000, color: "#3b82f6" }, // Blue
];

// ✅ Custom label renderer to show "$xxk" near each slice
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#111827"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="12"
      fontWeight="500"
    >
      ${Math.round(value / 1000)}k
    </text>
  );
};

const WalletHoldings = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800">Wallet Holdings</h2>
      <p className="text-sm text-gray-500 mb-4">
        Apprx. Current Market Value in USD
      </p>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              labelLine={false}
              label={renderCustomizedLabel} // ✅ Add labels here
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center mt-2 gap-4 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletHoldings;
