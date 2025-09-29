import React, { useState, ReactNode } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom"; 

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header
        userImage="https://randomuser.me/api/portraits/men/32.jpg"
        userName="Samuel sam"
        userDesignation="Admin Manager"
        onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
      />
      <div className="flex-1 flex overflow-auto">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        {/* {children} */}
         <div className="flex-1 overflow-y-auto">
    {children}
  </div>
  
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
