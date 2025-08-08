import React from "react";
import LogoImg from '../../assets/Logo.png'

const Logo = () => {
  return (
    <>
      <img src={LogoImg} alt={"logo"} className="w-48 h-auto" />
    </>
  );
};

export default Logo;
