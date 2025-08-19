import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  FileDown, 
  FileSpreadsheet, 
  FileText, 
  Printer
} from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Layout from "../components/layout/Layout";

interface User {
  id: string;
  username: string;
  fullName: string;
  country: string;
  referredBy: string;
  email: string;
  mobile: string;
  status: string;
  joinedOn: string;
  action: string;
}

const sampleusers: User[] = [
  { id: "01", username: "alinapetrova", fullName: "Alina Petrova", country: "UAE", referredBy: "eleanorpena", email: "•", mobile: "•", status: "KYC", joinedOn: "25 Jan 2024", action: "⚙️" },
  { id: "02", username: "annetteblack", fullName: "Annette Black", country: "Japan", referredBy: "jeromebell", email: "•", mobile: "•", status: "KYC", joinedOn: "25 Jan 2024", action: "⚙️" },
  { id: "03", username: "ronaldrichards", fullName: "Ronald Richards", country: "USA", referredBy: "cameronwilliamson", email: "•", mobile: "•", status: "KYC", joinedOn: "10 Feb 2024", action: "⚙️" },
  { id: "04", username: "eleanorpena", fullName: "Eleanor Pena", country: "Switzerland", referredBy: "mavinmckinney", email: "•", mobile: "•", status: "KYC", joinedOn: "10 Feb 2024", action: "⚙️" },
  { id: "05", username: "lesliealexander", fullName: "Leslie Alexander", country: "Australia", referredBy: "jeromebell", email: "•", mobile: "•", status: "Rejected", joinedOn: "15 Mar 2024", action: "⚙️" },
  { id: "06", username: "albertflores", fullName: "Albert Flores", country: "Uk", referredBy: "annetteblack", email: "•", mobile: "•", status: "KYC", joinedOn: "15 Mar 2024", action: "⚙️" },
  { id: "07", username: "jacobjones", fullName: "Jacob Jones", country: "India", referredBy: "Development", email: "•", mobile: "•", status: "KYC", joinedOn: "27 Apr 2024", action: "⚙️" },
  { id: "08", username: "jeromebell", fullName: "Jerome Bell", country: "China", referredBy: "cryptoqueen", email: "•", mobile: "•", status: "KYC", joinedOn: "27 Apr 2024", action: "⚙️" },
  { id: "09", username: "marvinmckinney", fullName: "Marvin Mckinney", country: "Canada", referredBy: "lesiealexander", email: "•", mobile: "•", status: "KYC", joinedOn: "30 Apr 2024", action: "⚙️" },
  { id: "10", username: "cameronwilli", fullName: "Cameron Williamson", country: "India", referredBy: "annetteblack", email: "•", mobile: "•", status: "Rejected", joinedOn: "30 Apr 2024", action: "⚙️" },
];

const stats = [
  { label: "Total Users", value: "115", change: "+10% this week", color: "text-orange-500" },
  { label: "Active Users", value: "300", change: "+8% this week", color: "text-blue-500" },
  { label: "KYC Verified", value: "1500", change: "+19% this week", color: "text-purple-500" },
  { label: "Blocked/Flagged Users", value: "200", change: "+3% this week", color: "text-pink-500" },
  { label: "Presale Buyers", value: "1,276", change: "+12% this week", color: "text-green-500" },
];

const AllUsers: React.FC = () => {
  // --- State ---
  const [users] = useState<User[]>(sampleusers);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // single source of truth for page size
  const [searchTerm, setSearchTerm] = useState("");

  // --- Derived data ---
  const filteredData = users.filter((u) => {
    const haystack = `${u.username} ${u.fullName} ${u.country} ${u.referredBy}`.toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });

  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / rowsPerPage));

  const paginatedUsers = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const [openActionId, setOpenActionId] = useState<string | null>(null);

  const toggleActionMenu = (id: string) => {
    setOpenActionId(openActionId === id ? null : id);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "users.xlsx");
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "users.csv");
  };

  const exportToPDF = () => {
    const input = document.getElementById("user-table");

    if (!input) return;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "pt", "a4");
      const imgWidth = 820;
      const pageHeight = 595;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 20, 20, imgWidth, imgHeight);
      pdf.save("users.pdf");
    });
  };

  const printTable = () => {
    const printContent = document.getElementById("user-table");
    const WinPrint = window.open("", "", "width=900,height=650");
    if (WinPrint && printContent) {
      WinPrint.document.write(printContent.outerHTML);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    }
  };


  // --- Helpers ---
  const getStatusDot = (status: string) => {
    switch (status) {
      case "KYC":
        return "bg-green-500";
      case "Rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // reset to first page when page size changes
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex">
        <div className="flex-1">
          {/* Header */}
          <header className="bg-white shadow-sm border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">All Users</h1>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded text-sm">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
                <div className="flex gap-2 mt-2">
                  <button onClick={exportToCSV} className="bg-green-100 p-2 rounded hover:bg-green-200">
                    <FileText className="w-5 h-5 text-green-600" />
                  </button>
                  <button onClick={exportToExcel} className="bg-purple-100 p-2 rounded hover:bg-purple-200">
                    <FileSpreadsheet className="w-5 h-5 text-purple-600" />
                  </button>
                  <button onClick={exportToPDF} className="bg-red-100 p-2 rounded hover:bg-red-200">
                    <FileDown className="w-5 h-5 text-red-600" />
                  </button>
                  <button onClick={printTable} className="bg-orange-100 p-2 rounded hover:bg-orange-200">
                    <Printer className="w-5 h-5 text-orange-600" />
                  </button>
                </div>


                {/* <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Bell className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">A</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div> */}
              </div>
            </div>
          </header>

          <div className="p-6">
            {/* Stats */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    {/* <span className="text-2xl font-bold text-gray-900">{stat.value}</span> */}
                    <div className={`w-3 h-3 rounded-full ${stat.color.replace("text-", "bg-")}`} />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  {/* <p className="text-sm text-gray-600 mb-1">{stat.label}</p> */}
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Filters header (visual only) */}
            <div className="bg-white rounded-lg shadow-sm border mb-4">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">

                      <button className="flex items-center space-x-7 px-3 py-1 border border-gray-300 rounded text-sm">
                        <span>Status</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">

                      <button className="flex items-center space-x-7 px-3 py-1 border border-gray-300 rounded text-sm">
                        <span>KYC Status</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">

                      <button className="flex items-center space-x-7 px-3 py-1 border border-gray-300 rounded text-sm">
                        <span>Interest Area</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">

                      <button className="flex items-center space-x-7 px-3 py-1 border border-gray-300 rounded text-sm">
                        <span>Tokens Held</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center space-x-2">

                      <button className="flex items-center space-x-7 px-3 py-1 border border-gray-300 rounded text-sm">
                        <span>Referral Status</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>


                  </div>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {/* <input type="checkbox" className="rounded" /> */}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL No.</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referred By</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KYC</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined On</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          {/* <input type="checkbox" className="rounded" /> */}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{user.id}</td>
                        <td className="px-4 py-3 text-sm text-blue-600">{user.username}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-xs text-purple-600">{user.fullName.charAt(1)}</span>
                            </div>
                            <span>{user.fullName}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{user.country}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{user.referredBy}</td>
                        <td className="px-4 py-3 text-center">
                          <div className={`w-2 h-2 rounded-full ${user.email === "•" ? "bg-green-500" : "bg-red-500"} mx-auto`} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className={`w-2 h-2 rounded-full ${user.mobile === "•" ? "bg-green-500" : "bg-red-500"} mx-auto`} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className={`w-2 h-2 rounded-full ${getStatusDot(user.status)} mx-auto`} />
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === "KYC" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">{user.joinedOn}</td>
                        <td className="px-4 py-3 relative">
                          <button
                            onClick={() => toggleActionMenu(user.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <MoreHorizontal className="w-5 h-5" />
                          </button>

                          {/* Dropdown */}
                          {openActionId === user.id && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                              <ul className="py-1 text-sm text-gray-700">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Promote</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Activate Ref Link</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Block / Unblock</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Add Fund</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Debit Fund</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Flag</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Send Message</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Logs</li>
                              </ul>
                            </div>
                          )}
                        </td>

                      </tr>
                    ))}
                    {paginatedUsers.length === 0 && (
                      <tr>
                        <td className="px-4 py-6 text-center text-sm text-gray-500" colSpan={12}>
                          No results.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4 px-4 pb-4">
                {/* Left: rows per page + showing */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center">
                    <label className="mr-2 text-gray-700 text-sm">Show</label>
                    <select
                      value={rowsPerPage}
                      onChange={handleRowsPerPageChange}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                      {[5, 10, 20].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>

                  <p className="text-sm text-gray-500">
                    {totalItems === 0
                      ? "Showing 0 entries"
                      : `Showing ${(currentPage - 1) * rowsPerPage + 1} to ${Math.min(
                        currentPage * rowsPerPage,
                        totalItems
                      )} of ${totalItems} entries`}
                  </p>
                </div>

                {/* Right: pager */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded ${currentPage === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-purple-600 hover:bg-purple-600 hover:text-white"
                      }`}
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i + 1)}
                      className={`px-3 py-1 rounded text-sm ${currentPage === i + 1
                        ? "bg-purple-600 text-white"
                        : "border border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages || totalItems === 0}
                    className={`p-2 rounded ${currentPage === totalPages || totalItems === 0
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-purple-600 hover:bg-purple-600 hover:text-white"
                      }`}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /p-6 */}
        </div>
      </div>
    </Layout>
  );
};

export default AllUsers;
