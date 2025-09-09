import { FiltersSection } from "./TableFilters";
import { TableFooter } from "./PaginationFooter";
import { HeaderRow } from "./HeaderRow";
import { TableRow } from "./DataRow";
import { useState } from "react";

const Data = ({
  title,
  search,
  PendingData,
  status,
  documentType,
  source,
  headerrow,
  level,
  referredBy,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // 🔹 Utility function to export filtered data as CSV
  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      alert("No data to export!");
      return;
    }

    const csvRows = [];
    const headers = Object.keys(data[0] || {});
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => JSON.stringify(row[header] ?? ""));
      csvRows.push(values.join(","));
    }

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // 🔹 Filter logic
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
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          search={search}
          status={status}
          documentType={documentType}
          source={source}
          level={level}
          referredBy={referredBy}
        />

        <div className="bg-white shadow-md rounded-lg">
          <table className="min-w-full table-fixed border-collapse">
            <HeaderRow headerRow={headerrow} />
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, index) => (
                  <TableRow
                    key={row.id}
                    row={row}
                    index={startIndex + index}
                    image={row.image}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="text-center py-4 text-gray-500"
                  >
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 🔹 Pagination */}
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
};

export default Data;
