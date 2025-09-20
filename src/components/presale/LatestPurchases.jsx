import { useState } from "react";
import purchases from "./presaleData";
import Avatar from "../../assets/Avatar.jpg"

const LatestPurchases = () => {
  const [filter, setFilter] = useState("Today");

  const statusColors = {
    Completed: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Failed: "bg-red-100 text-red-600",
    Refunded: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Latest Purchases
        </h2>
        <div className="flex bg-gray-100 rounded-lg text-sm font-medium p-1">
          {["Today", "Weekly", "Monthly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded-lg ${
                filter === tab
                  ? "bg-white text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 w-full h-[2px] mb-4"></div>

      <div className="space-y-4">
        {purchases.map((purchase, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 border-b pb-3 last:border-b-0"
          >
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <img src={Avatar} className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"/>
              <div>
                <p className="font-medium text-gray-800">{purchase.name}</p>
                <p className="text-xs text-gray-500">{purchase.date}</p>
              </div>
            </div>

            <div className="flex gap-4 text-right text-sm font-medium text-gray-700">
              <div>
                {purchase.capx}{" "}
                <span className="block text-xs text-gray-500">CAPX</span>
              </div>
              <div>
                {purchase.usd}{" "}
                <span className="block text-xs text-gray-500">USD</span>
              </div>
            </div>

            <span
              className={`px-3 py-1 w-20 rounded-full text-xs font-medium ${statusColors[purchase.status]}`}
            >
              {purchase.status}
            </span>
          </div>
        ))}
      </div>
    </div>  
  )
}

export default LatestPurchases

