import React from 'react';
import Logo from '../../assets/right_logo.png'; // Adjust path as needed

interface HeaderProps {
  userImage: string;
  userName: string;
  userDesignation: string;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ userImage, userName, userDesignation, onMenuClick }) => {
  const [showFlagDropdown, setShowFlagDropdown] = React.useState(false);
  const [selectedFlag, setSelectedFlag] = React.useState('us');
  const [isMoon, setIsMoon] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showMessages, setShowMessages] = React.useState(false);
  const [showUserDropdown, setShowUserDropdown] = React.useState(false);

  const flags = [
    { code: 'gb', name: 'United Kingdom' },
    { code: 'us', name: 'United States' },
    { code: 'de', name: 'Deutschland' },
    { code: 'fr', name: 'France' },
    { code: 'it', name: 'Italia' },
    { code: 'jp', name: '日本' },
    { code: 'cn', name: '中国' },
    { code: 'in', name: 'India' },
    { code: 'br', name: 'Brasil' },
    { code: 'au', name: 'Australia' },
  ];

  const notifications = [
    { user: 'Brigid Dawson', action: 'followed you', time: '4h ago', image: 'https://via.placeholder.com/32' },
    { user: 'John Dwyer', action: 'liked your post', time: 'Yesterday', image: 'https://via.placeholder.com/32' },
    { user: 'Tim Hellman', action: 'liked your post', time: 'Tuesday', image: 'https://via.placeholder.com/32' },
    { user: '', action: 'Running low on storage space', time: 'Monday', image: '', isWarning: true },
    { user: 'Shannon Shaw', action: 'commented on your post', time: '4 days ago', image: 'https://via.placeholder.com/32' },
  ];

  const messages = [
    { user: 'Alex Carter', message: 'Hi, how are you?', time: '4h ago', image: 'https://via.placeholder.com/32' },
    { user: 'Emma Brown', message: 'Meeting at 3 PM', time: 'Yesterday', image: 'https://via.placeholder.com/32' },
    { user: 'Liam Smith', message: 'Check the new updates', time: '2 days ago', image: 'https://via.placeholder.com/32' },
  ];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <header className="w-full h-[70px] flex items-center justify-between px-4 lg:px-6 bg-white border-b border-[#E8E8E9] shadow-sm font-poppins">
      {/* Left Section: Logo, Hamburger, Search */}
      <div className="flex items-center flex-grow">
        {/* Logo with divider */}
        <div className="flex items-center justify-between gap-4 pr-12 border-r border-[#E0E0E0]">
          <img src={Logo} alt="Logo" className="h-[20px]" />
        </div>

        {/* Mobile Hamburger Menu (visible only on small screens) */}
        <button 
          className="p-1 lg:hidden ml-2"
          onClick={onMenuClick}
          aria-label="Open sidebar"
        >
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0002 18H2.3335M23.6668 10H2.3335M23.6668 2H2.3335" stroke="black" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Desktop Hamburger Menu (visible only on large screens) */}
        <button 
          className="p-1 hidden lg:block ml-2"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0002 18H2.3335M23.6668 10H2.3335M23.6668 2H2.3335" stroke="black" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Search Bar */}
        <div className="hidden lg:block w-[333px] ml-5">
          <div className="flex items-center px-4 py-2 border border-[#94949B] rounded-[10px] h-[37px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#6C757D" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.0004 20.9999L16.6499 16.6494" stroke="#6C757D" strokeWidth="1.66678" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search here"
              className="ml-2 w-full border-none focus:outline-none text-[#94949B] text-[14px] font-medium"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Icons + User */}
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        {/* Icons */}
        <div className="hidden sm:flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-8">
          {/* Flag Dropdown */}
          <div className="relative">
            <div onClick={() => setShowFlagDropdown(!showFlagDropdown)} className="cursor-pointer">
              <img src={`flag-${selectedFlag}.svg`} alt="Selected Flag" className="w-6 h-6" />
            </div>
            {showFlagDropdown && (
              <div className="absolute mt-2 w-64 bg-white border rounded-lg shadow-lg z-10">
                <div className="p-2 max-h-60 overflow-y-auto">
                  {flags.map((flag) => (
                    <div
                      key={flag.code}
                      onClick={() => {
                        setSelectedFlag(flag.code);
                        setShowFlagDropdown(false);
                      }}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      <span className="text-sm font-medium">{flag.code.toUpperCase()}</span>
                      <img src={`flag-${flag.code}.svg`} alt={flag.name} className="w-6 h-6" />
                      <span className="text-sm text-gray-700">{flag.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sun Icon */}
          <div onClick={() => setIsMoon(!isMoon)} className="cursor-pointer">
            {isMoon ? (
              <svg enable-background="new 0 0 512 512" height="45px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="35px" xmlns="http://www.w3.org/2000/svg">
                <path d="M349.852,343.15c-49.875,49.916-131.083,49.916-181,0c-49.916-49.918-49.916-131.125,0-181.021  c13.209-13.187,29.312-23.25,47.832-29.812c5.834-2.042,12.293-0.562,16.625,3.792c4.376,4.375,5.855,10.833,3.793,16.625  c-12.542,35.375-4,73.666,22.25,99.917c26.209,26.228,64.5,34.75,99.916,22.25c5.792-2.062,12.271-0.582,16.625,3.793  c4.376,4.332,5.834,10.812,3.771,16.625C373.143,313.838,363.06,329.941,349.852,343.15z M191.477,184.754  c-37.438,37.438-37.438,98.354,0,135.771c40,40.021,108.125,36.416,143-8.168c-35.959,2.25-71.375-10.729-97.75-37.084  c-26.375-26.354-39.333-61.771-37.084-97.729C196.769,179.796,194.039,182.192,191.477,184.754z" fill="#5D40ED"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="#5D40ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z" stroke="#5D40ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>

          {/* Notifications Box */}
          <div className="relative">
            <div onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.44043V9.77043" stroke="#5D40ED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="#5D40ED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203" stroke="#5D40ED" strokeWidth="1.5" strokeMiterlimit="10"/>
              </svg>
            </div>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg z-10">
                <div className="p-3 border-b bg-gray-50">
                  <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {notifications.map((notification, index) => (
                    <div key={index} className={`flex items-center p-3 border-b last:border-b-0 hover:bg-gray-100 ${notification.isWarning ? 'bg-red-50' : ''}`}>
                      {notification.image ? (
                        <img src={notification.image} alt="User" className="w-8 h-8 rounded-full mr-3" />
                      ) : (
                        <div className="w-8 h-8 rounded-full mr-3 bg-gray-200 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#6B7280"/>
                          </svg>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">
                          {notification.user && <span className="font-semibold">{notification.user} </span>}
                          {notification.action}
                        </p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                      {!notification.isWarning && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#00C4B4"/>
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t text-center">
                  <a href="#" className="text-sm text-teal-500 hover:underline">See all recent activity</a>
                </div>
              </div>
            )}
          </div>

          {/* Messages Box */}
          <div className="relative">
            <div onClick={() => setShowMessages(!showMessages)} className="cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#5D40ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 8H17" stroke="#5D40ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 13H13" stroke="#5D40ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {showMessages && (
              <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg z-10">
                <div className="p-3 border-b bg-gray-50">
                  <h3 className="text-sm font-semibold text-gray-800">Messages</h3>
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {messages.map((message, index) => (
                    <div key={index} className="flex items-center p-3 border-b last:border-b-0 hover:bg-gray-100">
                      <img src={message.image} alt="User" className="w-8 h-8 rounded-full mr-3" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">{message.user}</span> {message.message}
                        </p>
                        <p className="text-xs text-gray-500">{message.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t text-center">
                  <a href="#" className="text-sm text-teal-500 hover:underline">See all messages</a>
                </div>
              </div>
            )}
          </div>

          {/* Fullscreen Icon */}
          <div onClick={toggleFullscreen} className="cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.36364 0C7.7612 0 7.27273 0.488473 7.27273 1.09091V7.27273H1.09091C0.488469 7.27273 0 7.7612 0 8.36364C0 8.96607 0.488469 9.45455 1.09091 9.45455H8.36364C8.96607 9.45455 9.45455 8.96607 9.45455 8.36364V1.09091C9.45455 0.488473 8.96607 0 8.36364 0Z" fill="#5D40ED"/>
              <path d="M15.6363 9.45455H22.909C23.5115 9.45455 24 8.96607 24 8.36364C24 7.7612 23.5115 7.27273 22.909 7.27273H16.7272V1.09091C16.7272 0.488473 16.2388 0 15.6363 0C15.0339 0 14.5454 0.488473 14.5454 1.09091V8.36364C14.5454 8.96607 15.0339 9.45455 15.6363 9.45455Z" fill="#5D40ED"/>
              <path d="M8.36364 14.5459H1.09091C0.488469 14.5459 0 15.0344 0 15.6368C0 16.2392 0.488469 16.7277 1.09091 16.7277H7.27273V22.9095C7.27273 23.512 7.7612 24.0004 8.36364 24.0004C8.96607 24.0004 9.45455 23.512 9.45455 22.9095V15.6368C9.45455 15.0344 8.96607 14.5459 8.36364 14.5459Z" fill="#5D40ED"/>
              <path d="M22.909 14.5459H15.6363C15.0339 14.5459 14.5454 15.0344 14.5454 15.6368V22.9095C14.5454 23.512 15.0339 24.0004 15.6363 24.0004C16.2388 24.0004 16.7272 23.512 16.7272 22.9095V16.7277H22.909C23.5115 16.7277 24 16.2392 24 15.6368C24 15.0344 23.5115 14.5459 22.909 14.5459Z" fill="#5D40ED"/>
            </svg>
          </div>

          {/* Grid Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" stroke="#5D40ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" stroke="#5D40ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="#5D40ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="#5D40ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* User */}
        <div className="relative">
          <div
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="flex items-center gap-x-2 pl-2 sm:pl-4 border-l border-gray-200 cursor-pointer"
          >
            <img src="https://via.placeholder.com/32" alt="User" className="w-8 h-8 rounded-full object-cover" />
            <div className="flex flex-col text-right sm:text-left">
              <span className="text-black text-sm sm:text-[14px] font-medium leading-tight whitespace-nowrap">Samuel Sam</span>
              <span className="text-[#64646D] text-xs sm:text-[12px] whitespace-nowrap">Admin Manager</span>
            </div>
          </div>
          {showUserDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
              <div className="p-2 hover:bg-gray-100 cursor-pointer">My Profile</div>
              <div className="p-2 hover:bg-gray-100 cursor-pointer">Edit Profile</div>
              <div className="p-2 hover:bg-gray-100 cursor-pointer">Inbox</div>
              <div className="p-2 hover:bg-gray-100 cursor-pointer">Settings</div>
              <div className="p-2 hover:bg-gray-100 cursor-pointer">Help</div>
              <div className="p-2 hover:bg-gray-100 cursor-pointer">Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;