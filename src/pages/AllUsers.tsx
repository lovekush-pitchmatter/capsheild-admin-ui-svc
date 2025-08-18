import React, { useState } from 'react';
import { Search, Filter, Bell, User, Settings, ChevronDown, MoreHorizontal, Circle, ChevronLeft,
  ChevronRight} from 'lucide-react';
import Layout from '../components/layout/Layout';


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




// const AllUsers = () => {
//   const [users] = useState<User[]>(sampleusers);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 5;

//   const totalPages = Math.ceil(users.length / usersPerPage);
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


// const AllUsers = () => {
//   const [users] = useState<User[]>(sampleusers);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage, setUsersPerPage] = useState(10);



// const AllUsers = () => {
//   const [selectedMenu, setSelectedMenu] = useState('All Users');

  // const menuItems = [
  //   'All Users',
  //   'KYC Verification',
  //   'Referrals & Opinion',
  //   'Classification Status',
  //   'User Address Log',
  //   'Add Fund',
  //   'Deduct Fund',
  //   'Blocked Users'
  // ];

  // const sampleusers = [
  //   {
  //     id: '01',
  //     username: 'abayomina',
  //     fullName: 'Abay Princess',
  //     country: 'Nigeria',
  //     referredBy: 'promotional',
  //     email: '•',
  //     mobile: '•',
  //     status: 'KYC',
  //     joinedOn: '29 Jan 2024',
  //     action: '⚙️'
  //   },
  //   {
  //     id: '02',
  //     username: 'sonnistock',
  //     fullName: 'Aristotle Onisk',
  //     country: 'Japan',
  //     referredBy: 'promotional',
  //     email: '•',
  //     mobile: '•',
  //     status: 'KYC',
  //     joinedOn: '29 Jan 2024',
  //     action: '⚙️'
  //   },
  //   {
  //     id: '03',
  //     username: 'chrishroud',
  //     fullName: 'Ernest Reynolds',
  //     country: 'USA',
  //     referredBy: 'organicsearchsme',
  //     email: '•',
  //     mobile: '•',
  //     status: 'KYC',
  //     joinedOn: '27 Jan 2024',
  //     action: '⚙️'
  //   },
  //   {
  //     id: '04',
  //     username: 'enriquemarq',
  //     fullName: 'Enrique Perez',
  //     country: 'Spain',
  //     referredBy: 'organicsearchsme',
  //     email: '•',
  //     mobile: '•',
  //     status: 'KYC',
  //     joinedOn: '28 Jan 2024',
  //     action: '⚙️'
  //   },
  //   {
  //     id: '05',
  //     username: 'lexitalexander',
  //     fullName: 'Lexie Alexander',
  //     country: 'Australia',
  //     referredBy: 'promotional',
  //     email: '•',
  //     mobile: '•',
  //     status: 'Rejected',
  //     joinedOn: '15 Mar 2024',
  //     action: '⚙️'
  //   }
  // ];

  const sampleusers: User[] = [
  { id: '01', username: 'abayomina', fullName: 'Abay Princess', country: 'Nigeria', referredBy: 'promotional', email: '•', mobile: '•', status: 'KYC', joinedOn: '29 Jan 2024', action: '⚙️' },
  { id: '02', username: 'sonnistock', fullName: 'Aristotle Onisk', country: 'Japan', referredBy: 'promotional', email: '•', mobile: '•', status: 'KYC', joinedOn: '29 Jan 2024', action: '⚙️' },
  { id: '03', username: 'chrishroud', fullName: 'Ernest Reynolds', country: 'USA', referredBy: 'organicsearchsme', email: '•', mobile: '•', status: 'KYC', joinedOn: '27 Jan 2024', action: '⚙️' },
  { id: '04', username: 'enriquemarq', fullName: 'Enrique Perez', country: 'Spain', referredBy: 'organicsearchsme', email: '•', mobile: '•', status: 'KYC', joinedOn: '28 Jan 2024', action: '⚙️' },
  { id: '05', username: 'lexitalexander', fullName: 'Lexie Alexander', country: 'Australia', referredBy: 'promotional', email: '•', mobile: '•', status: 'Rejected', joinedOn: '15 Mar 2024', action: '⚙️' },
  // Add more users if you want to test pagination better
];


  const stats = [
    { label: 'All Users', value: '115', change: '+10% this week', color: 'text-orange-500' },
    { label: 'KYC Users', value: '300', change: '+8% this week', color: 'text-blue-500' },
    { label: 'KYC Verified', value: '1500', change: '+19% this week', color: 'text-purple-500' },
    { label: 'Compromised Users', value: '200', change: '+3% this week', color: 'text-pink-500' },
    { label: 'Penalty Reports', value: '1,276', change: '+12% this week', color: 'text-green-500' }
  ];

  // const getStatusColor = (status) => {
  //   switch (status) {
  //     case 'KYC': return 'text-green-500';
  //     case 'Rejected': return 'text-red-500';
  //     default: return 'text-gray-500';
  //   }
  // };

  // const getStatusDot = (status) => {
  //   switch (status) {
  //     case 'KYC': return 'bg-green-500';
  //     case 'Rejected': return 'bg-red-500';
  //     default: return 'bg-gray-500';
  //   }
  // };

//   const menuItems = [
//   'All Users',
//   'KYC Verification',
//   'Referrals & Opinion',
//   'Classification Status',
//   'User Address Log',
//   'Add Fund',
//   'Deduct Fund',
//   'Blocked Users',
// ];

// const AllUsers: React.FC = () => {
//   // Sidebar selected menu
//   const [selectedMenu, setSelectedMenu] = useState<string>('All Users');

//   // User list and pagination state
//   const [users] = useState<User[]>(sampleusers);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const usersPerPage = 5;

//   const totalPages = Math.ceil(users.length / usersPerPage);

//   // Get users for current page
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const handlePageChange = (pageNumber: number) => {
//     if (pageNumber < 1 || pageNumber > totalPages) return;
//     setCurrentPage(pageNumber);
//   };

const AllUsers: React.FC = () => {
  // Just keep your local state for pagination etc.
  const [users] = useState<User[]>(sampleusers);
  const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  const usersPerPage = 5;

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // const handlePageChange = (pageNumber: number) => {
  //   if (pageNumber < 1 || pageNumber > totalPages) return;
  //   setCurrentPage(pageNumber);
  // };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Helper functions for status colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'KYC': return 'text-green-500';
      case 'Rejected': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'KYC': return 'bg-green-500';
      case 'Rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      {/* <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-gray-900">CAPShield</span>
          </div>
          
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setSelectedMenu(item)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedMenu === item
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div> */}
       {/* Your table and pagination UI */}
   {/* <main className="p-6">
       
      </main> */}
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">All Users</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-5 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  <div className={`w-3 h-3 rounded-full ${stat.color.replace('text-', 'bg-')}`}></div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border mb-4">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Filter</span>
                    <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded text-sm">
                      <span>KYC Status</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Transfer Type</span>
                    <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded text-sm">
                      <span>All</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Referral Source</span>
                    <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded text-sm">
                      <span>All</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded text-sm">
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded" />
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
                  {users.map((user, index) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{user.id}</td>
                      <td className="px-4 py-3 text-sm text-blue-600">{user.username}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-xs text-purple-600">{user.fullName.charAt(0)}</span>
                          </div>
                          <span>{user.fullName}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{user.country}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.referredBy}</td>
                      <td className="px-4 py-3 text-center">
                        <div className={`w-2 h-2 rounded-full ${user.email === '•' ? 'bg-green-500' : 'bg-red-500'} mx-auto`}></div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className={`w-2 h-2 rounded-full ${user.mobile === '•' ? 'bg-green-500' : 'bg-red-500'} mx-auto`}></div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className={`w-2 h-2 rounded-full ${getStatusDot(user.status)} mx-auto`}></div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === 'KYC' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">{user.joinedOn}</td>
                      <td className="px-4 py-3">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
{/* 
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
      </div> */}

            {/* Pagination */}
            <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1 to 5 of 15 entries
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default AllUsers;