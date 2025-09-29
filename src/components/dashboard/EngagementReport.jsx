import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import FilterDropdown from "./FilterDropdown"; // import your custom dropdown

// Engagement data for different filters
const engagementData = {
  "All Time": [
    { name: "Spins", value: 50260, color: "#f97316" },
    { name: "Quizzes", value: 35200, color: "#22c55e" },
    { name: "Games", value: 27600, color: "#a855f7" },
    { name: "Polls", value: 20600, color: "#3b82f6" },
    { name: "Surveys", value: 12000, color: "#06b6d4" },
    { name: "Airdrops", value: 8000, color: "#10b981" },
  ],
  Yearly: [
    { name: "Spins", value: 11260, color: "#f97316" },
    { name: "Quizzes", value: 7520, color: "#22c55e" },
    { name: "Games", value: 6760, color: "#a855f7" },
    { name: "Polls", value: 5600, color: "#3b82f6" },
    { name: "Surveys", value: 4000, color: "#06b6d4" },
    { name: "Airdrops", value: 3000, color: "#10b981" },
  ],
  Monthly: [
    { name: "Spins", value: 1200, color: "#f97316" },
    { name: "Quizzes", value: 950, color: "#22c55e" },
    { name: "Games", value: 860, color: "#a855f7" },
    { name: "Polls", value: 720, color: "#3b82f6" },
    { name: "Surveys", value: 500, color: "#06b6d4" },
    { name: "Airdrops", value: 350, color: "#10b981" },
  ],
  Weekly: [
    { name: "Spins", value: 300, color: "#f97316" },
    { name: "Quizzes", value: 220, color: "#22c55e" },
    { name: "Games", value: 180, color: "#a855f7" },
    { name: "Polls", value: 150, color: "#3b82f6" },
    { name: "Surveys", value: 100, color: "#06b6d4" },
    { name: "Airdrops", value: 80, color: "#10b981" },
  ],
};

const options = ["All Time", "Yearly", "Monthly", "Weekly"];

// ✅ Custom label to show % inside the donut
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="12"
      fontWeight="600"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const EngagementReport = () => {
  const [filter, setFilter] = useState("Yearly");

  // pick dataset based on filter
  const chartData = useMemo(() => engagementData[filter], [filter]);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Engagement Report
        </h2>
        <FilterDropdown options={options} value={filter} onChange={setFilter} />
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value.toLocaleString()}`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center mt-4 gap-4 text-sm">
        {chartData.map((item, index) => (
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

export default EngagementReport;
