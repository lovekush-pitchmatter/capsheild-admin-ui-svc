import { FiltersSection } from "./TableFilters";
import { TableFooter } from "./PaginationFooter";
import { HeaderRow } from "./HeaderRow";
import { TableRow } from "./DataRow";
import { useState } from "react";

const DataTable = ({ titles, title, search, PendingData, status, stage, network, headerRow, walletstatus, networktype, stats }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);



  const filteredData = PendingData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );


  const totalEntries = filteredData.length;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalEntries);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="p-6 w-full bg-gray-100 h-full">
      <h1 className="text-2xl font-bold">{titles}</h1>
      <div
        className="grid gap-5 mb-6"
        style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm text-left">
            <div className="flex flex-col items-start justify-start mb-2">
              <img src={stat.image} alt={stat.label} className="w-10 h-10 mobject-contain" />
              <span className="text-lg font-bold text-gray-800">
                {stat.label}
              </span>
            </div>
            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
          </div>
        ))}
      </div>


      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex gap-6">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            + Filters
          </button>
          <button
            onClick={() => exportToCSV(filteredData, `${title}_export.csv`)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Export
          </button>

        </div>
      </div>

      <div className="bg-white p-2 rounded-lg mt-2">
        <FiltersSection
          {...(search ? {
            searchQuery,
            setSearchQuery,
            search,
            status,
            stage,
            network,
          } : {
            walletstatus,
            networktype
          })}
        />

        <div className="bg-white shadow-md rounded-lg">
          <table className="min-w-full table-fixed border-collapse">
            <HeaderRow headerRow={headerRow} />
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, index) => (
                  <TableRow key={row.id} row={row} index={startIndex + index} image={row.image} />
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4 text-gray-500">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pass pagination props */}
        <TableFooter
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalEntries={totalEntries}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </div>
    </div>
  );
}

export default DataTable;
