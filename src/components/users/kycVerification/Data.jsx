import {FiltersSection} from "./FiltersSection";
import {TableFooter} from "./TableFooter";
import {TableHeader} from "./TableHeader";
import {TableRow} from "./TableRow";
import { FileSpreadsheet, FileText, Printer, Copy } from "lucide-react";
import { useState } from "react";

const Data = ({title, search, sampleData, status, documentType, source, tableHeader, level, country, referredBy}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1); 

  const filteredData = sampleData.filter((row) =>
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
          <div className="flex gap-3">
            <button className="p-2 bg-blue-100 rounded hover:bg-blue-200">
              <FileSpreadsheet size={20} className="text-blue-600" />
            </button>
            <button className="p-2 bg-red-100 rounded hover:bg-red-200">
              <FileText size={20} className="text-red-600" />
            </button>
            <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <Printer size={20} className="text-gray-600" />
            </button>
            <button className="p-2 bg-purple-100 rounded hover:bg-purple-200">
              <Copy size={20} className="text-purple-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 rounded-lg mt-2">
        <FiltersSection 
          {...(search ? {
              searchQuery,
              setSearchQuery,
              search,
              status,
              documentType,
              source
            } : {
              level, 
              country, 
              referredBy,
            })}
        />

        <div className="bg-white shadow-md rounded-lg">
          <table className="min-w-full table-fixed border-collapse">
            <TableHeader tableHeader={tableHeader}/>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row,index) => (
                  <TableRow key={row.id} row={row} index={startIndex + index} image={row.image}/>
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

export default Data;
