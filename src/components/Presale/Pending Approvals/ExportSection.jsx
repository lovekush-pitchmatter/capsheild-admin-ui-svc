import { FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

export function ExportSection({ data = [], title = "export" }) {
  if (!data || data.length === 0) return null;

  // ✅ Export CSV
  const exportCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${title}.csv`);
  };

  // ✅ Export Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${title}.xlsx`);
  };

  // ✅ Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text(title, 14, 16);
    doc.autoTable({
      head: [Object.keys(data[0])],
      body: data.map((row) => Object.values(row)),
      startY: 20,
    });
    doc.save(`${title}.pdf`);
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={exportCSV}
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        <FiDownload /> CSV
      </button>
      <button
        onClick={exportExcel}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        <FiDownload /> Excel
      </button>
      <button
        onClick={exportPDF}
        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        <FiDownload /> PDF
      </button>
    </div>
  );
}
