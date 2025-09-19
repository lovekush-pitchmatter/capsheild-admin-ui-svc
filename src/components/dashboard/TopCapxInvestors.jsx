import React from "react";

const capxInvestors = [
  { id: 1, name: "James Smith", amount: 25000.0 },
  { id: 2, name: "Olivia Johnson", amount: 22300.25 },
  { id: 3, name: "William Brown", amount: 20740.9 },
  { id: 4, name: "Emma Davis", amount: 19820.5 },
  { id: 5, name: "Benjamin Wilson", amount: 18950.75 },
  { id: 6, name: "Sophia Taylor", amount: 18107.43 },
];

const TopCapxInvestors = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Top CAPX Investors
        </h2>
        <button className="text-sm text-blue-500 font-medium hover:underline">
          View All →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left text-sm font-medium text-gray-500">
              <th className="px-4 py-2">Sl. No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 text-right">Amount (CAPX)</th>
            </tr>
          </thead>
          <tbody>
            {capxInvestors.map((investor) => (
              <tr
                key={investor.id}
                className="border-t text-sm text-gray-700 hover:bg-gray-50"
              >
                <td className="px-4 py-2">{investor.id}</td>
                <td className="px-4 py-2">{investor.name}</td>
                <td className="px-4 py-2 text-right">
                  {investor.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopCapxInvestors;
