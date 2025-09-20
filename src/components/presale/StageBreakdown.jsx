import { useState } from "react";
import { stageBreakdownData } from "./presaleData";

const StageBreakdown = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalPages = Math.ceil(stageBreakdownData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = stageBreakdownData.slice(startIndex, endIndex);

  return (
    <div className="p-4 sm:p-6 bg-white shadow rounded-lg ">
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Stage Breakdown
      </h2>

      <div className="bg-gray-200 w-full h-[2px] mb-4"></div>

      <div className="rounded-lg">
        <table className="w-full border border-gray-200 text-[10px] sm:text-xs md:text-sm lg:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-1 sm:p-2 md:p-3 text-left break-words">Stage</th>
              <th className="p-1 sm:p-2 md:p-3 text-left break-words">Price &lt; $5k</th>
              <th className="p-1 sm:p-2 md:p-3 text-left break-words">Price ≥ $5k</th>
              <th className="p-1 sm:p-2 md:p-3 text-left break-words">Sold &lt; $5k</th>
              <th className="p-1 sm:p-2 md:p-3 text-left break-words">Sold ≥ $5k</th>
              <th className="p-1 sm:p-2 md:p-3 text-left break-words">Target</th>
              <th className="p-1 sm:p-2 md:p-3 text-left break-words">Progress</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, idx) => (
              <tr
                key={idx}
                className="border border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="p-1 sm:p-2 md:p-3 truncate">{row.stage}</td>
                <td className="p-1 sm:p-2 md:p-3 truncate">{row.priceLt5k}</td>
                <td className="p-1 sm:p-2 md:p-3 truncate">{row.priceGt5k}</td>
                <td className="p-1 sm:p-2 md:p-3 truncate">{row.soldLt5k}</td>
                <td className="p-1 sm:p-2 md:p-3 truncate">{row.soldGt5k}</td>
                <td className="p-1 sm:p-2 md:p-3 truncate">{row.target}</td>
                <td className="p-1 sm:p-2 md:p-3 truncate">{row.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-[10px] sm:text-xs md:text-sm space-y-3 sm:space-y-0">
        {/* Left side: Dropdown */}
        <div className="flex flex-wrap items-center space-x-2">
          <label className="text-gray-600" htmlFor="entries">
            Show
          </label>
          <select
            id="entries"
            className="border rounded px-2 py-1"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
          <p className="text-gray-600 mt-2 sm:mt-0">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, stageBreakdownData.length)} of{" "}
            {stageBreakdownData.length} entries
          </p>
        </div>

        {/* Right side: Pagination */}
        <div className="flex items-center space-x-1 sm:space-x-2 mt-2 sm:mt-0">
          <button
            className="px-2 py-1 text-sm sm:text-lg cursor-pointer rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>

          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 cursor-pointer rounded ${
                currentPage === num ? "bg-purple-600 text-white" : "bg-gray-200"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            className="px-2 py-1 text-sm sm:text-lg rounded cursor-pointer disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default StageBreakdown;
