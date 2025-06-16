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
      <div className="all-users-page">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <h1>All users</h1>
            <p>You have total {users.length} users.</p>
          </div>
          <div className="header-actions">
            <Button>
              <Upload className="lucide-icon export-icon" /> Export
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <Dropdown
            placeholder="Bulk Action"
            options={statusOptions}
            onSelect={handleBulkAction}
          />
          <Button className="apply-button">Apply</Button>
          <div className="flex-grow" />
          <Search className="lucide-icon control-icon" />
          <Menu className="lucide-icon control-icon" />
          <Settings className="lucide-icon control-icon" />
        </div>

        {/* Table */}
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>User</th>
                <th>Country</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Sync</th>
                <th>Verified</th>
                <th>
                  Action <ChevronRight className="lucide-icon table-header-icon" />
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
                >
                  <td><input type="checkbox" /></td>
                  <td className="user-cell">
                    <img src={user.avatar} alt={user.name} className="user-avatar" />
                    <div className="user-info">
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                    </div>
                  </td>
                  <td>
                    <img src={USflag} alt={`${user.country} Flag`} className="country-flag" />
                  </td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status-badge status-${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.lastSync}</td>
                  <td>
                    {["email", "kyc"].map((type) => (
                      <span className="verified-status" key={type}>
                        {user.verified[type as keyof VerifiedStatus] ? (
                          <CheckCircle className="lucide-icon check-icon" />
                        ) : (
                          <X className="lucide-icon x-icon" />
                        )}{" "}
                        {type.toUpperCase()}
                      </span>
                    ))}
                  </td>
                  <td>
                    <MoreHorizontal className="lucide-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span>Rows per page:</span>
          <Dropdown
            placeholder={usersPerPage.toString()}
            options={rowsPerPageOptions}
            onSelect={handleRowsPerPageChange}
          />
          <span>
            {`${indexOfFirstUser + 1} - ${Math.min(indexOfLastUser, users.length)} of ${users.length}`}
          </span>
          <Button onClick={handlePrevPage} disabled={currentPage === 1}>
            <ChevronLeft className="lucide-icon" />
          </Button>
          <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
            <ChevronRight className="lucide-icon" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AllUsers;
