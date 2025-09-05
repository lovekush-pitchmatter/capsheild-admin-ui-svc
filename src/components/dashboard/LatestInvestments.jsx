import React from "react";

const investments = [
  { name: "Alice Mathew", username: "alicemathew33", avatar: "https://i.pravatar.cc/40?img=1", quantity: "25,000.00 CAPX", price: "$7,500.00", date: "25 May 2024", status: "Completed" },
  { name: "Rahul Shankar", username: "rahulsh18", avatar: "https://i.pravatar.cc/40?img=2", quantity: "100,000.98787 ANGEL", price: "$5,40,000.00", date: "25 Jan 2024", status: "In Progress" },
  { name: "Dana Thomas", username: "danathomas", avatar: "", quantity: "50,000.00 CAPX", price: "$50,000.00", date: "25 Feb 2024", status: "Completed" },
  { name: "Omar Hartson", username: "omarhartson", avatar: "https://i.pravatar.cc/40?img=3", quantity: "75,000.00 ANGEL", price: "$30,000.00", date: "25 May 2024", status: "In Progress" },
  { name: "Julie Christopher", username: "juliec8765", avatar: "https://i.pravatar.cc/40?img=4", quantity: "35,000.00 CAPX", price: "$63,000.00", date: "25 Jan 2024", status: "Completed" },
];

const statusClasses = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-orange-100 text-orange-700",
};

const LatestInvestments = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Latest Investments</h2>
        <button className="text-sm text-blue-600 hover:underline">View All →</button>
      </div>

      {/* Scrollable table wrapper */}
      <div className="overflow-x-auto max-md:w-[80vw] mx-auto">
        <table className="w-full table-auto text-sm text-left text-gray-500 border-collapse">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">Investor</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {investments.map((inv, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-3 flex items-center gap-3 min-w-0">
                  {inv.avatar ? (
                    <img src={inv.avatar} alt={inv.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-semibold flex-shrink-0">
                      {inv.name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 truncate max-w-[150px]">{inv.name}</p>
                    <p className="text-sm text-gray-500 truncate max-w-[150px]">{inv.username}</p>
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">{inv.quantity}</td>
                <td className="px-6 py-3 whitespace-nowrap">{inv.price}</td>
                <td className="px-6 py-3 whitespace-nowrap">{inv.date}</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusClasses[inv.status]}`}>
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestInvestments;
