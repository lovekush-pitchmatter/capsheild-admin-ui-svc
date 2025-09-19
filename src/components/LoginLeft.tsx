import React from "react";
import Logo from "../assets/logo.png";

const LoginLeft = () => {
  return (
    <div className="max-lg:hidden w-1/2 bg-[#f5f6fa] flex items-center justify-center">
      <div className="flex items-center justify-center w-56 h-56 rounded-full bg-[#f5f6fa]">
        <img src={Logo} alt="Logo" className="w-40 h-40 object-contain" />
      </div>
    </div>
  );
};

export default LoginLeft;
