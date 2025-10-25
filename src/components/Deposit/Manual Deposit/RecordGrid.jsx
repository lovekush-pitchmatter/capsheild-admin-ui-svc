import { FiltersSection } from "./RecordFilter";
import { TableFooter } from "./GridPager";
import { HeaderRow } from "./GridHeader";
import { TableRow } from "./RecordRow";
import { useState } from "react";

const RecordGrid = ({ titles, search, RecordQueue, status, verifedby,  headerRow, walletstatus, networktype }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);



  const filteredData = RecordQueue.filter((row) =>
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
        <h1 className="text-2xl font-semibold">{titles}</h1>
       
      </div>

      <div className="bg-white p-2 rounded-lg mt-2">
        <FiltersSection
          {...(search ? {
            searchQuery,
            setSearchQuery,
            search,
            status,
            verifedby
          } : { 
            walletstatus,
            networktype
          }
        )
      }
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
                    No Manual Deposit found
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

export default RecordGrid;
