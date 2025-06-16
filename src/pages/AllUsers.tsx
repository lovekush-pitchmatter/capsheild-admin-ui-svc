import React, { useState } from 'react';
import Dropdown, { DropdownOption } from '../components/Dropdown.tsx';
import Button from '../components/Button.tsx';
import USflag from '../assets/images/USflag.png';
import AshleyAvatar from '../assets/images/ashley.png';
import SamuelAvatar from '../assets/images/samuel.png';
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

// Import Lucide icons for AllUsers page
import {
  CheckCircle,
  X,
  Info,
  MoreHorizontal,
  Upload, // For the Export button
  Search, // Added for the Search icon
  Menu, // Added for the Filter/Menu icon
  Settings, // Added for the Settings icon
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: 'Ashley Lawson',
    email: 'ashley@softnio.com',
    avatar: AshleyAvatar,
    country: '🇺🇸',
    role: 'Investor',
    status: 'Active',
    lastSync: '2024-10-30',
    verified: { email: true, kyc: true },
  },
  {
    id: 2,
    name: 'Jane Montgomery',
    email: 'jane84@example.com',
    avatar: SamuelAvatar,
    country: '🇺🇸',
    role: 'Startup Founder',
    status: 'Suspended',
    lastSync: '2024-10-28',
    verified: { email: true, kyc: false },
  },
  {
    id: 3,
    name: 'Frances Burns',
    email: 'frances@example.com',
    avatar: AshleyAvatar,
    country: '🇺🇸',
    role: 'Investor',
    status: 'Inactive',
    lastSync: '2024-10-30',
    verified: { email: true, kyc: true },
  },
  {
    id: 4,
    name: 'Victoria Lynch',
    email: 'victoria@example.com',
    avatar: SamuelAvatar,
    country: '🇺🇸',
    role: 'Startup Founder',
    status: 'Active',
    lastSync: '2024-10-28',
    verified: { email: true, kyc: true },
  },
  {
    id: 5,
    name: 'Ashley Lawson',
    email: 'ashley@softnio.com',
    avatar: AshleyAvatar,
    country: '🇺🇸',
    role: 'Investor',
    status: 'Active',
    lastSync: '2024-10-30',
    verified: { email: true, kyc: true },
  },
  {
    id: 6,
    name: 'Jane Montgomery',
    email: 'ashley@softnio.com',
    avatar: SamuelAvatar,
    country: '🇺🇸',
    role: 'Startup Founder',
    status: 'Active',
    lastSync: '2024-10-30',
    verified: { email: true, kyc: true },
  },
  {
    id: 7,
    name: 'Ashley Lawson',
    email: 'ashley@softnio.com',
    avatar: AshleyAvatar,
    country: '🇺🇸',
    role: 'Investor',
    status: 'Active',
    lastSync: '2024-10-30',
    verified: { email: true, kyc: true },
  },
  {
    id: 8,
    name: 'Jane Montgomery',
    email: 'ashley@softnio.com',
    avatar: SamuelAvatar,
    country: '🇺🇸',
    role: 'Startup Founder',
    status: 'Active',
    lastSync: '2024-10-30',
    verified: { email: true, kyc: true },
  },
  {
    id: 9,
    name: 'Ashley Lawson',
    email: 'ashley@softnio.com',
    avatar: AshleyAvatar,
    country: '🇺🇸',
    role: 'Investor',
    status: 'Active',
    lastSync: '2024-10-30',
    verified: { email: true, kyc: true },
  },
  {
    id: 10,
    name: 'Jane Montgomery',
    email: 'ashley@softnio.com',
    avatar: SamuelAvatar,
    country: '🇺🇸',
    role: 'Startup Founder',
    status: 'Active',
    lastSync: '2024-10-30',
    verified: { email: true, kyc: true },
  },
];

function AllUsers() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [users] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  // Get current users for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowsPerPageChange = (option: DropdownOption) => {
    setUsersPerPage(option.value as number);
    setCurrentPage(1); // Reset to first page when rows per page changes
  };

  const statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Suspended', value: 'Suspended' },
  ];

  const rowsPerPageOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '20', value: 20 },
  ];

  return (
    <div className="all-users-page">
      <div className="header">
        <div className="header-content">
          <h1>All users</h1>
          <p>You have total 2,595 users.</p>
        </div>
        <div className="header-actions">
          <Button><Upload className="lucide-icon export-icon" /> Export</Button>
        </div>
      </div>

      <div className="controls">
        <Dropdown 
          placeholder="Bulk Action"
          options={statusOptions}
        />
        <Button className="apply-button">Apply</Button>
        <div className="flex-grow"></div>
        <Search className="lucide-icon control-icon" />
        <Menu className="lucide-icon control-icon" />
        <Settings className="lucide-icon control-icon" />
      </div>

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
              <th>Action <ChevronRight className="lucide-icon table-header-icon" /></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}>
                <td><input type="checkbox" /></td>
                <td className="user-cell">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="user-avatar" />
                  ) : (
                    <div className="user-avatar-placeholder">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  <div className="user-info">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                </td>
                <td><img src={USflag} alt="US Flag" className="country-flag" /></td>
                <td>{user.role}</td>
                <td><span className={`status-badge status-${user.status.toLowerCase()}`}>{user.status}</span></td>
                <td>{user.lastSync}</td>
                <td>
                  <span className="verified-status">
                    {user.verified.email ? <CheckCircle className="lucide-icon check-icon" /> : <X className="lucide-icon x-icon" />} Email
                  </span>
                  <span className="verified-status">
                    {user.verified.kyc ? <CheckCircle className="lucide-icon check-icon" /> : <X className="lucide-icon x-icon" />} KYC
                  </span>
                </td>
                <td><MoreHorizontal className="lucide-icon" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span>Rows per page:</span>
        <Dropdown 
          placeholder="10"
          options={rowsPerPageOptions}
          onSelect={handleRowsPerPageChange}
        />
        <span>{`${indexOfFirstUser + 1} - ${Math.min(indexOfLastUser, users.length)} of ${users.length}`}</span>
        <Button onClick={handlePrevPage} disabled={currentPage === 1}><ChevronLeft className="lucide-icon" /></Button>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}><ChevronRight className="lucide-icon" /></Button>
      </div>
    </div>
  );
}

export default AllUsers; 