import React, { useState } from 'react';

const Security = () => {
  const [devices] = useState([
    {
      name: 'iPhone 13',
      type: 'Mobile App',
      lastUsed: '09 Aug 2025'
    },
    {
      name: 'MacBook Air',
      type: 'Web Browser',
      lastUsed: '06 Aug 2025'
    }
  ]);

  const handleResetPassword = () => {
    console.log('Reset password clicked');
    // Add your reset password logic here
  };

  const handleLogoutAllDevices = () => {
    console.log('Logout all devices clicked');
    // Add your logout logic here
  };

  const handleBlockUser = () => {
    console.log('Block user clicked');
    // Add your block user logic here
  };

  const handleReset2FA = () => {
    console.log('Reset 2FA clicked');
    // Add your 2FA reset logic here
  };

  return (
    <div className="space-y-8">
      {/* Login & Access Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-6">Login & Access</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm border-collapse border-spacing-0">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-50 text-gray-700 font-medium">Last Login </td>
                  <td className="p-4 flex items-center space-x-2 text-gray-500 font-semibold">
                    <span>09 Aug 2025, 14:22 UTC</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 text-gray-700 font-medium">Last Login IP</td>
                  <td className="p-4 text-gray-500 font-semibold">94.200.15.12</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm border-collapse border-spacing-0">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 bg-gray-50 text-gray-700 font-medium">Login Location</td>
                  <td className="p-4 flex items-center space-x-2 text-gray-900 font-semibold">
                    <span>🇦🇪 Dubai, UAE</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 text-gray-700 font-medium">Failed Login Attempts</td>
                  <td className="p-4 text-gray-900 font-semibold">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Access Control Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-6">Access Control</h3>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm border-collapse border-spacing-0">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">2FA Status</td>
                <td className="p-4 flex items-center space-x-2 text-gray-900 font-semibold">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-1 text-xs rounded font-medium">
                    Enabled
                  </span>
                  <button 
                    onClick={handleReset2FA}
                    className="inline-block bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded font-medium hover:bg-yellow-200"
                  >
                    Reset 2FA
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 text-gray-700 font-medium">Password Last Changed</td>
                <td className="p-4 text-gray-900 font-semibold">09 Aug 2025, 14:22 UTC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Devices Section */}
      <div>
        <h3 className="text-purple-700 text-lg font-semibold mb-6">Active Devices</h3>
        
        {/* Devices Table */}
        <div className=" rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 text-sm font-medium text-gray-700">
            <span>Device</span>
            <span>Type</span>
            <span>Last Used</span>
          </div>
          <div className="divide-y divide-gray-200">
            {devices.map((device, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 text-sm">
                <span className="text-gray-800 font-medium">{device.name}</span>
                <span className="text-gray-600">{device.type}</span>
                <span className="text-gray-600">{device.lastUsed}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button 
            onClick={handleResetPassword}
            className="flex items-center px-8 py-3 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            Reset Password
          </button>
          
          <button 
            onClick={handleLogoutAllDevices}
            className="flex items-center px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
          >
            Logout All Devices
          </button>
          
          <button 
            onClick={handleBlockUser}
            className="flex items-center px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
          >
            Block
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;