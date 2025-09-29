import React, { useState } from 'react';

const Wallet = () => {
  const [walletAddress] = useState("0xF8A7A1B23948f9C31B4cE8Be9123456789c3E");
  
  const [balances] = useState([
    { token: "CAPX", amount: "12,500.00", type: "primary" },
    { token: "USDC", amount: "3674.00", type: "primary" },
    { token: "ANGEL", amount: "8,200.50", type: "primary" },
    { token: "Fiat", amount: "1,245.75 USD", type: "fiat" },
    { token: "USDT", amount: "350.00", type: "primary" },
    { token: "Airdrops Claimed", amount: "3", type: "count" }
  ]);
  const leftBalances = balances.slice(0, Math.ceil(balances.length / 2));
  const rightBalances = balances.slice(Math.ceil(balances.length / 2));

  const [transactions] = useState([
    {
      slNo: "01",
      date: "2025-08-01",
      token: "ANGEL",
      type: "Airdrop",
      amount: "500.00",
      status: "Completed"
    },
    {
      slNo: "02",
      date: "2025-08-01",
      token: "USDT",
      type: "Reward",
      amount: "2,000.00",
      status: "Pending"
    },
    {
      slNo: "03",
      date: "2025-07-30",
      token: "CAPX",
      type: "Purchase",
      amount: "50.00",
      status: "Failed"
    }
  ]);

  const [accessLog] = useState([
    {
      slNo: "01",
      time: "2025-08-09 14:22",
      action: "Viewed Wallet",
      by: "admin_rahul",
      country: "🇦🇪 UAE",
      ip: "94.200.15.12"
    },
    {
      slNo: "02",
      time: "2025-08-08 10:05",
      action: "Linked External Wallet",
      by: "user",
      country: "🇯🇵 Japan",
      ip: "86.98.34.7"
    },
    {
      slNo: "03",
      time: "2025-08-07 18:40",
      action: "Withdrawal Approved",
      by: "admin_sara",
      country: "🇺🇸 USA",
      ip: "94.200.18.21"
    },
    {
      slNo: "04",
      time: "2025-08-07 16:12",
      action: "Login (Admin View)",
      by: "admin_sara",
      country: "🇮🇳 India",
      ip: "94.200.18.21"
    },
    {
      slNo: "05",
      time: "2025-08-06 09:30",
      action: "Airdrop Credited",
      by: "system",
      country: "🇦🇺 Australia",
      ip: "-"
    }
  ]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Add toast notification here if needed
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      'Completed': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Failed': 'bg-red-100 text-red-700'
    };
    
    return statusColors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top Section */}
      <div>
        <h3 className="text-gray-900 text-lg sm:text-xl font-semibold mb-4">Wallet (Primary)</h3>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <input 
              type="text" 
              value={walletAddress}
              readOnly
              className="w-full border border-purple-400 rounded-lg p-3 pr-12 text-xs sm:text-sm bg-white focus:outline-none"
            />
            <button 
              type="button"
              onClick={() => copyToClipboard(walletAddress)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600 hover:text-purple-800"
              title="Copy address"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <button className="px-4 py-2 border border-purple-400 rounded-lg text-purple-600 font-medium hover:bg-purple-50 text-sm whitespace-nowrap">
            View on explorer
          </button>
        </div>
      </div>

      {/* Network Info Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs sm:text-sm space-y-2 sm:space-y-0">
        <div>
          <span className="text-gray-700 font-medium mr-1">Network:</span>
          <span>ETH Ethereum (ERC20)</span>
        </div>
        <div>
          Contract address ending in <span className="text-purple-600 font-medium">56cc2</span>
        </div>
      </div>

      {/* Balances Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-4">Balances</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full border-collapse">
              <tbody>
                {leftBalances.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">{item.token}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full border-collapse">
              <tbody>
                {rightBalances.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-600 font-medium bg-gray-50 border border-gray-200">{item.token}</td>
                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-800 font-medium text-right bg-white border border-gray-200">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-purple-700 text-lg font-semibold">Transactions</h3>
          <button className="text-purple-600 text-sm font-medium hover:text-purple-800">
            View All &gt;
          </button>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-6 bg-gray-50 border-b border-gray-200 p-3 text-sm font-semibold text-gray-700">
            <div>Sl. No.</div>
            <div>Date</div>
            <div>Token</div>
            <div>Type</div>
            <div>Amount</div>
            <div>Status</div>
          </div>
          <div>
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className={`grid grid-cols-6 p-3 text-sm ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-purple-50 transition-colors cursor-default`}
              >
                <div className="text-gray-600">{transaction.slNo}</div>
                <div className="text-gray-600">{transaction.date}</div>
                <div className="text-gray-900 font-medium">{transaction.token}</div>
                <div className="text-gray-600">{transaction.type}</div>
                <div className="text-gray-900 font-medium">{transaction.amount}</div>
                <div>
                  <span className={`inline-block px-2 py-1 text-xs rounded font-medium ${getStatusBadge(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card Layout */}
        <div className="sm:hidden space-y-3">
          {transactions.map((transaction, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 text-xs">#{transaction.slNo}</span>
                  <span className="text-gray-900 font-medium text-sm">{transaction.token}</span>
                </div>
                <span className={`inline-block px-2 py-1 text-xs rounded font-medium ${getStatusBadge(transaction.status)}`}>
                  {transaction.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Date:</span>
                  <span className="ml-2 text-gray-700">{transaction.date}</span>
                </div>
                <div>
                  <span className="text-gray-500">Type:</span>
                  <span className="ml-2 text-gray-700">{transaction.type}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500">Amount:</span>
                  <span className="ml-2 text-gray-900 font-medium">{transaction.amount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Access Log Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-purple-700 text-lg font-semibold">Access Log</h3>
          <button className="text-purple-600 text-sm font-medium hover:text-purple-800">
            View All &gt;
          </button>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-6 bg-gray-50 border-b border-gray-200 p-3 text-sm font-semibold text-gray-700">
            <div>Sl. No.</div>
            <div>Time (UTC)</div>
            <div>Action</div>
            <div>By</div>
            <div>Country</div>
            <div>IP Address</div>
          </div>
          <div>
            {accessLog.map((log, index) => (
              <div
                key={index}
                className={`grid grid-cols-6 p-3 text-sm ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-purple-50 transition-colors cursor-default`}
              >
                <div className="text-gray-600">{log.slNo}</div>
                <div className="text-gray-600">{log.time}</div>
                <div className="text-gray-900 font-medium">{log.action}</div>
                <div className="text-gray-600">{log.by}</div>
                <div className="text-gray-600">{log.country}</div>
                <div className="text-gray-600">{log.ip}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Card Layout */}
        <div className="lg:hidden space-y-3">
          {accessLog.map((log, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500 text-xs">#{log.slNo}</span>
                  <span className="text-gray-900 font-medium text-sm">{log.action}</span>
                </div>
                <span className="text-gray-500 text-xs">{log.time}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">By:</span>
                  <span className="ml-2 text-gray-700">{log.by}</span>
                </div>
                <div>
                  <span className="text-gray-500">Country:</span>
                  <span className="ml-2 text-gray-700">{log.country}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-gray-500">IP:</span>
                  <span className="ml-2 text-gray-700 font-mono text-xs">{log.ip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;