import { saveAs } from "file-saver";
import Papa from "papaparse";

export const exportToCSV = (data, filename = "export.csv") => {
  if (!data || data.length === 0) return;

  // Convert to CSV
  const csv = Papa.unparse(data);

  // Convert to Blob and trigger download
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, filename);
};
