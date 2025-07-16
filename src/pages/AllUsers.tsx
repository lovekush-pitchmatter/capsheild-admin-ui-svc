import { useState } from "react";
import Dropdown, { DropdownOption } from "../components/Dropdown.tsx";
import Button from "../components/Button.tsx";
import USflag from "../assets/images/USflag.png";
import AshleyAvatar from "../assets/images/ashley.png";
import SamuelAvatar from "../assets/images/samuel.png";
import Layout from "../components/layout/Layout.tsx";
import {
  CheckCircle,
  X,
  MoreHorizontal,
  Upload,
  Search,
  Menu,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// User type
interface VerifiedStatus {
  email: boolean;
  kyc: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  country: string;
  role: string;
  status: "Active" | "Inactive" | "Suspended";
  lastSync: string;
  verified: VerifiedStatus;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "Ashley Lawson",
    email: "ashley@softnio.com",
    avatar: AshleyAvatar,
    country: "🇺🇸",
    role: "Investor",
    status: "Active",
    lastSync: "2024-10-30",
    verified: { email: true, kyc: true },
  },
  {
    id: 2,
    name: "Jane Montgomery",
    email: "jane84@example.com",
    avatar: SamuelAvatar,
    country: "🇺🇸",
    role: "Startup Founder",
    status: "Suspended",
    lastSync: "2024-10-28",
    verified: { email: true, kyc: false },
  },
];

const AllUsers = () => {
  const [users] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleRowsPerPageChange = (option: DropdownOption<number>) => {
    setUsersPerPage(option.value);
    setCurrentPage(1);
  };

  const handleBulkAction = (option: DropdownOption) => {
    console.log("Bulk action selected:", option.value);
    // Optional: filter or apply status
  };

  const statusOptions: DropdownOption[] = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
    { label: "Suspended", value: "Suspended" },
  ];

  const rowsPerPageOptions: DropdownOption<number>[] = [
    { label: "5", value: 5 },
    { label: "10", value: 10 },
    { label: "20", value: 20 },
  ];

  return (
    <Layout>
      <div className="all-users-page sm:p-10 p-2 overflow-auto">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <h1>All users</h1>
            <p>You have total {users.length} users.</p>
          </div>
          <div className="header-actions">
            <Button >
              <Upload className="lucide-icon export-icon w-4"  /> Export
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 bg-gray-100 mb-4 items-center   gap-2 w-full p-2 rounded-md">
          <Dropdown
            placeholder="Bulk Action"
            options={statusOptions}
            onSelect={handleBulkAction}
          />
          <Button  >Apply</Button>
         <div className="flex items-center justify-end gap-2">

          <Search className="lucide-icon control-icon" />
          <Menu className="lucide-icon control-icon" />
          <Settings className="lucide-icon control-icon" />
         </div>
        </div>

        {/* Table */}
      <div className="overflow-x-scroll w-full rounded-md ">
          <table className="min-w-[800px] w-full text-sm">
            <thead className="bg-[#5D40ED]  text-left">
              <tr className=" text-white">
                <th className="p-4"><input type="checkbox" /></th>
                <th className="p-4">User</th>
                <th className="p-4">Country</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Sync</th>
                <th className="p-4">Verified</th>
                <th className="p-4 ">
                  Action 
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="p-2"><input type="checkbox" /></td>
                  <td className="p-2 flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </td>
                  <td className="p-2">
                    <img
                      src={USflag}
                      alt={`${user.country} Flag`}
                      className="w-6 h-6  object-contain"
                    />
                  </td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">
                    <span
                      className={`text-xs px-2 font-semibold py-1 rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : user.status === "Inactive"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-2">{user.lastSync}</td>
                  <td className="p-2 ">
                    {["email", "kyc"].map((type) => (
                      <span
                        className="flex items-center gap-1 pb-1 text-xs text-gray-700"
                        key={type}
                      >
                        {user.verified[type as keyof VerifiedStatus] ? (
                          <CheckCircle className="text-green-500" size={16} />
                        ) : (
                          <X className="text-red-500" size={16} />
                        )}
                        {type.toUpperCase()}
                      </span>
                    ))}
                  </td>
                  <td className="p-2">
                    <MoreHorizontal className="text-gray-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
       <div className="flex  flex-row items-center justify-between gap-3 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <Dropdown
              placeholder={usersPerPage.toString()}
              options={rowsPerPageOptions}
              onSelect={handleRowsPerPageChange}
            />
          </div>
          <div className="flex items-center  gap-2">
            <span className="w-full">
              {`${indexOfFirstUser + 1} - ${Math.min(
                indexOfLastUser,
                users.length
              )} of ${users.length}`}
            </span>
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-2"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-2"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllUsers;






























































 