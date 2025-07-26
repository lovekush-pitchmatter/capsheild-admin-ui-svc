import React from "react";
import Logo from "../assets/logo.png";

const LoginLeft = () => {
  return (
    <div className="max-lg:hidden w-1/2 bg-[#f5f6fa] flex items-center justify-center relative">
      <div className="flex items-center justify-center h-full w-full">
        <div className="rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#6c47ff] shadow-xl flex items-center justify-center w-72 h-72">
          <img src={Logo} alt="Logo" className="w-40 h-40 object-contain" />
      </div>
      </div>
    </div>
  );
};

export default LoginLeft;
