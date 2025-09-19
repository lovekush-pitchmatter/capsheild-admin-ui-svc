import React from "react";

const earners = [
  { id: 1, name: "Savannah Nguyen", amount: 12500.0 },
  { id: 2, name: "Annette Black", amount: 11300.25 },
  { id: 3, name: "Theresa Webb", amount: 10740.9 },
  { id: 4, name: "Marvin McKinney", amount: 9820.5 },
  { id: 5, name: "Brooklyn Simmons", amount: 8950.75 },
  { id: 6, name: "Dianne Russell", amount: 8107.43 },
];

const TopRewardEarners = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Top Reward Earners
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
              <th className="px-4 py-2 text-right">Amount (ANGEL)</th>
            </tr>
          </thead>
          <tbody>
            {earners.map((earner) => (
              <tr
                key={earner.id}
                className="border-t text-sm text-gray-700 hover:bg-gray-50"
              >
                <td className="px-4 py-2">{earner.id}</td>
                <td className="px-4 py-2">{earner.name}</td>
                <td className="px-4 py-2 text-right">
                  {earner.amount.toLocaleString(undefined, {
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

export default TopRewardEarners;
