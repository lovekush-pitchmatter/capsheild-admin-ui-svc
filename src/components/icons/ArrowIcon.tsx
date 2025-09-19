import React from 'react';

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {}

const ArrowIcon: React.FC<ArrowIconProps> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.93994 13.2802L10.2866 8.93355C10.7999 8.42021 10.7999 7.58021 10.2866 7.06688L5.93994 2.72021" stroke="#64646D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ArrowIcon; 