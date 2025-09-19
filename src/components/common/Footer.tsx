import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="py-4 px-6 text-center text-[#64646D] text-[12px] roboto-font">
      <p>COPYRIGHT ©{new Date().getFullYear()} Pitchmatter, All rights Reserved</p>
    </div>
  );
};

export default Footer; 