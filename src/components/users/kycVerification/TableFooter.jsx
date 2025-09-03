import { ChevronLeft, ChevronRight } from "lucide-react";

export function TableFooter({
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  totalEntries,
  startIndex,
  endIndex
}) {
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Show</span>
        <select
          className="border rounded px-2 py-1 border-gray-400 text-gray-900"
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setCurrentPage(1); 
          }}
        >
          {[10, 25, 50, 100].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <span className="text-sm text-gray-600">entries</span>
        <p className="text-sm text-gray-600 ml-4">
          Showing {totalEntries === 0 ? 0 : startIndex + 1} to {endIndex} of {totalEntries} entries
        </p>
      </div>

      <div className="flex gap-2">
         <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 rounded bg-gray-100 disabled:opacity-50"
        >
          <ChevronLeft size={18} />
        </button>

        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 rounded ${
              currentPage === num ? "bg-purple-600 text-white" : "bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() =>
            currentPage < totalPages && setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded bg-gray-100 disabled:opacity-50"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
