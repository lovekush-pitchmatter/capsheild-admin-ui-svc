import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const PresaleChart = () => {
  const data = [
    { name: "Jan", moreThan5k: 5000000, lessThan5k: 2500000 },
    { name: "Feb", moreThan5k: 1200000, lessThan5k: 1000000 },
    { name: "Mar", moreThan5k: 3000000, lessThan5k: 10500000 },
    { name: "Apr", moreThan5k: 2600000, lessThan5k: 1500000 },
    { name: "May", moreThan5k: 600000, lessThan5k: 400000 },
    { name: "Jun", moreThan5k: 300000, lessThan5k: 500000 },
    { name: "Jul", moreThan5k: 1500000, lessThan5k: 2000000 },
    { name: "Aug", moreThan5k: 700000, lessThan5k: 500000 },
    { name: "Sep", moreThan5k: 7500000, lessThan5k: 2800000 },
    { name: "Oct", moreThan5k: 2000000, lessThan5k: 1800000 },
    { name: "Nov", moreThan5k: 10500000, lessThan5k: 5200000 },
    { name: "Dec", moreThan5k: 2500000, lessThan5k: 1300000 },
  ];

  const ticks = [
    0,
    500000,
    1000000,
    2500000,
    5000000,
    7500000,
    10000000,
    12000000,
  ];


  return (
    <div className="rounded-xl shadow-md flex-1 flex flex-col gap-[2px] mb-9 lg:mb-0">
      <h2 className="text-lg font-semibold rounded-t-xl bg-white p-2">
        CAPX Presale Chart
      </h2>
      <div className="bg-white rounded-b-xl pt-2 h-[300px] lg:h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            barCategoryGap="20%"
            barGap={3}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />

            <YAxis
              domain={[0, 12000000]}
              ticks={ticks}
              tickFormatter={(value) => {
                if (value === 0) return "$0";
                if (value >= 1000000) return `$${(value / 1000000).toFixed(1).replace(".0","")}M`;
                return `$${value / 1000}k`;
              }}
            />

            <Tooltip
              formatter={(value) =>
                `$${value >= 1000000 ? value / 1000000 + "M" : value / 1000 + "k"}`
              }
              contentStyle={{ borderRadius: "10px" }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) =>
                value === "moreThan5k" ? "> 5k" : "< 5k"
              }
            />
            <Bar dataKey="moreThan5k" fill="#2563eb" radius={[4, 4, 0, 0]} />
            <Bar dataKey="lessThan5k" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PresaleChart;
