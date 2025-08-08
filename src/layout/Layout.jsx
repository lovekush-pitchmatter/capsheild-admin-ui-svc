import React, { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-white ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex-1 sm:p-4 p-2 flex flex-col">

        <Header isOpen={isOpen} />

        <div className="flex flex-col justify-between h-full">
          {children}

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;