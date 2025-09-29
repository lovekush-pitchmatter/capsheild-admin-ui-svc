import React from "react";
import WorldMap from "react-svg-worldmap";

const data = [
  {
    country: "ae",
    code: "UAE",
    value: 12878,
    percentage: 34.2,
    color: "#2563eb",
  }, // UAE
  {
    country: "in",
    code: "India",
    value: 9975,
    percentage: 26.5,
    color: "#16a34a",
  }, // India
  {
    country: "ca",
    code: "Canada",
    value: 3500,
    percentage: 9.3,
    color: "#f59e0b",
  }, // Singapore
  {
    country: "de",
    code: "Germany",
    value: 999,
    percentage: 2.7,
    color: "#dc2626",
  }, // Germany
];
const InvestorMap = () => {
  // Function to style each country based on dataset
  const stylingFunction = ({ countryCode }) => {
    const countryData = data.find(
      (item) => item.country === countryCode.toLowerCase()
    );
    if (countryData) {
      return {
        fill: countryData.color,
        stroke: "#fff",
        strokeWidth: 1,
      };
    }
    return {
      fill: "#e5e7eb", // default gray for countries not in data
      stroke: "#fff",
      strokeWidth: 1,
    };
  };
  const getFlagEmoji = (countryCode) =>
    countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt())
      );

  return (
    <div className="w-full p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Top Investor Locations</h2>
      <div className="flex max-lg:flex-col gap-6 items-center justify-center">
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <WorldMap
            data={data}
            value-suffix=" Investors"
            size="responsive" // keeps it scaling
            styleFunction={stylingFunction}
            style={{ width: "100%", height: "100%" }} // stretch to container
          />
        </div>

        <div className="lg:w-1/2 w-full  mt-4 space-y-3">
          {data.map((item) => (
            <div
              key={item.country}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{getFlagEmoji(item.country)}</span>
                <div>
                  <p className="font-medium">{item.code}</p>
                  <p className="text-sm text-gray-500">
                    {item.value.toLocaleString()} Investors
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 w-32">
                <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-2"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">
                  {item.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorMap;
