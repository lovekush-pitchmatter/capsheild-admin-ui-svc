import React from 'react';
import { InvestmentBreakdownProps } from '../../types/dashboard';

const InvestmentBreakdown: React.FC<InvestmentBreakdownProps> = ({ breakdown }) => {
  return (
    <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow box-border">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      {/* Donut Chart */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <p className="absolute text-[#171725] text-[32px] font-bold text-center leading-tight" style={{ fontFamily: 'Roboto' }}>
            $2,760k<br />
            <span className="text-[#64646D] text-[16px] font-normal" style={{ fontFamily: 'Roboto' }}>
              Portfolio Value
            </span>
          </p>
          <svg width="338" height="338" viewBox="0 0 338 338" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Private Equity - $828k (Purple) */}
            <mask id="path-1-outside-1_3158_2582" maskUnits="userSpaceOnUse" x="100.011" y="10.5557" width="243.952" height="243.952" fill="black">
              <rect fill="white" x="100.011" y="10.5557" width="243.952" height="243.952" />
              <path d="M154.76 50.8444C178.18 48.107 201.885 52.3758 222.879 63.111C243.873 73.8462 261.211 90.5658 272.703 111.155C284.194 131.745 289.322 155.279 287.438 178.783C285.554 202.287 276.742 224.704 262.118 243.2L231.393 218.907C241.213 206.487 247.13 191.435 248.395 175.654C249.66 159.872 246.217 144.069 238.501 130.244C230.785 116.419 219.142 105.193 205.046 97.9848C190.95 90.7765 175.032 87.9102 159.307 89.7483L154.76 50.8444Z" />
            </mask>
            <path d="M154.76 50.8444C178.18 48.107 201.885 52.3758 222.879 63.111C243.873 73.8462 261.211 90.5658 272.703 111.155C284.194 131.745 289.322 155.279 287.438 178.783C285.554 202.287 276.742 224.704 262.118 243.2L231.393 218.907C241.213 206.487 247.13 191.435 248.395 175.654C249.66 159.872 246.217 144.069 238.501 130.244C230.785 116.419 219.142 105.193 205.046 97.9848C190.95 90.7765 175.032 87.9102 159.307 89.7483L154.76 50.8444Z" fill="#5D40ED" />
            <path d="M154.76 50.8444C178.18 48.107 201.885 52.3758 222.879 63.111C243.873 73.8462 261.211 90.5658 272.703 111.155C284.194 131.745 289.322 155.279 287.438 178.783C285.554 202.287 276.742 224.704 262.118 243.2L231.393 218.907C241.213 206.487 247.13 191.435 248.395 175.654C249.66 159.872 246.217 144.069 238.501 130.244C230.785 116.419 219.142 105.193 205.046 97.9848C190.95 90.7765 175.032 87.9102 159.307 89.7483L154.76 50.8444Z" stroke="white" stroke-width="9.28977" mask="url(#path-1-outside-1_3158_2582)" />

            {/* Public Equity - $690k (Orange) */}
            <mask id="path-2-outside-2_3158_2582" maskUnits="userSpaceOnUse" x="89.4046" y="202.182" width="130.108" height="130.108" fill="black">
              <rect fill="white" x="89.4046" y="202.182" width="130.108" height="130.108" />
              <path d="M194.427 285.645C179.143 289.036 163.34 289.384 147.922 286.669C132.503 283.953 117.77 278.227 104.564 269.818L125.663 236.685C134.518 242.324 144.396 246.163 154.735 247.984C165.074 249.805 175.67 249.571 185.918 247.297L194.427 285.645Z" />
            </mask>
            <path d="M194.427 285.645C179.143 289.036 163.34 289.384 147.922 286.669C132.503 283.953 117.77 278.227 104.564 269.818L125.663 236.685C134.518 242.324 144.396 246.163 154.735 247.984C165.074 249.805 175.67 249.571 185.918 247.297L194.427 285.645Z" fill="#FFB480" />
            <path d="M194.427 285.645C179.143 289.036 163.34 289.384 147.922 286.669C132.503 283.953 117.77 278.227 104.564 269.818L125.663 236.685C134.518 242.324 144.396 246.163 154.735 247.984C165.074 249.805 175.67 249.571 185.918 247.297L194.427 285.645Z" stroke="white" stroke-width="9.28977" mask="url(#path-2-outside-2_3158_2582)" />

            {/* Bank Bonds - $414k (Red) */}
            <mask id="path-3-outside-3_3158_2582" maskUnits="userSpaceOnUse" x="161.53" y="197.232" width="110.309" height="110.309" fill="black">
              <rect fill="white" x="161.53" y="197.232" width="110.309" height="110.309" />
              <path d="M263.156 241.868C246.14 264.026 221.883 279.505 194.619 285.602L186.046 247.269C204.328 243.18 220.593 232.802 232.002 217.944L263.156 241.868Z" />
            </mask>
            <path d="M263.156 241.868C246.14 264.026 221.883 279.505 194.619 285.602L186.046 247.269C204.328 243.18 220.593 232.802 232.002 217.944L263.156 241.868Z" fill="#FF6961" />
            <path d="M263.156 241.868C246.14 264.026 221.883 279.505 194.619 285.602L186.046 247.269C204.328 243.18 220.593 232.802 232.002 217.944L263.156 241.868Z" stroke="white" stroke-width="9.28977" mask="url(#path-3-outside-3_3158_2582)" />

            {/* Bank Bonds - $276k (Green) */}
            <mask id="path-4-outside-4_3158_2582" maskUnits="userSpaceOnUse" x="14.4513" y="137.128" width="139.3" height="139.3" fill="black">
              <rect fill="white" x="14.4513" y="137.128" width="139.3" height="139.3" />
              <path d="M100.22 266.915C84.0745 255.61 70.984 240.479 62.1197 222.875C53.2554 205.272 48.8938 185.745 49.4252 166.043L88.5388 167.098C88.1818 180.334 91.1119 193.452 97.067 205.278C103.022 217.104 111.816 227.269 122.662 234.864L100.22 266.915Z" />
            </mask>
            <path d="M100.22 266.915C84.0745 255.61 70.984 240.479 62.1197 222.875C53.2554 205.272 48.8938 185.745 49.4252 166.043L88.5388 167.098C88.1818 180.334 91.1119 193.452 97.067 205.278C103.022 217.104 111.816 227.269 122.662 234.864L100.22 266.915Z" fill="#BBB30A" />
            <path d="M100.22 266.915C84.0745 255.61 70.984 240.479 62.1197 222.875C53.2554 205.272 48.8938 185.745 49.4252 166.043L88.5388 167.098C88.1818 180.334 91.1119 193.452 97.067 205.278C103.022 217.104 111.816 227.269 122.662 234.864L100.22 266.915Z" stroke="white" stroke-width="9.28977" mask="url(#path-4-outside-4_3158_2582)" />

            {/* Cash - $276k (Yellow) */}
            <mask id="path-5-outside-5_3158_2582" maskUnits="userSpaceOnUse" x="15.8655" y="77.7309" width="121.622" height="121.622" fill="black">
              <rect fill="white" x="15.8655" y="77.7309" width="121.622" height="121.622" />
              <path d="M49.3818 169.257C49.3818 153.601 52.4655 138.098 58.4568 123.634C64.4481 109.17 73.2297 96.0271 84.3002 84.9566L112.09 112.747C104.669 120.168 98.7827 128.978 94.7665 138.674C90.7503 148.37 88.6831 158.762 88.6832 169.257L49.3818 169.257Z" />
            </mask>
            <path d="M49.3818 169.257C49.3818 153.601 52.4655 138.098 58.4568 123.634C64.4481 109.17 73.2297 96.0271 84.3002 84.9566L112.09 112.747C104.669 120.168 98.7827 128.978 94.7665 138.674C90.7503 148.37 88.6831 158.762 88.6832 169.257L49.3818 169.257Z" fill="#FFC109" />
            <path d="M49.3818 169.257C49.3818 153.601 52.4655 138.098 58.4568 123.634C64.4481 109.17 73.2297 96.0271 84.3002 84.9566L112.09 112.747C104.669 120.168 98.7827 128.978 94.7665 138.674C90.7503 148.37 88.6831 158.762 88.6832 169.257L49.3818 169.257Z" stroke="white" stroke-width="9.28977" mask="url(#path-5-outside-5_3158_2582)" />

            {/* Crypto - $276k (Magenta) */}
            <mask id="path-6-outside-6_3158_2582" maskUnits="userSpaceOnUse" x="77.3838" y="25.405" width="107.48" height="107.48" fill="black">
              <rect fill="white" x="77.3838" y="25.405" width="107.48" height="107.48" />
              <path d="M84.3002 84.9566C102.885 66.3715 127.091 54.449 153.153 51.0433L158.262 90.1439C140.821 92.4231 124.621 100.402 112.184 112.84L84.3002 84.9566Z" />
            </mask>
            <path d="M84.3002 84.9566C102.885 66.3715 127.091 54.449 153.153 51.0433L158.262 90.1439C140.821 92.4231 124.621 100.402 112.184 112.84L84.3002 84.9566Z" fill="#D106FE" />
            <path d="M84.3002 84.9566C102.885 66.3715 127.091 54.449 153.153 51.0433L158.262 90.1439C140.821 92.4231 124.621 100.402 112.184 112.84L84.3002 84.9566Z" stroke="white" stroke-width="9.28977" mask="url(#path-6-outside-6_3158_2582)" />
          </svg>
        </div>
      </div>

      {/* Investment Breakdown */}
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-8 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <span className="w-3 h-3 rounded-full bg-[#5D40ED] mr-2"></span>
            <span className="text-[#64646D] text-[14px] font-normal" style={{ fontFamily: 'Poppins' }}>
              Private Equity
            </span>
          </div>
          <span className="text-[#171725] font-bold text-[28px] leading-tight text-center" style={{ fontFamily: 'Roboto' }}>
            $828k{' '}
            <span className="text-[#37D397] text-[16px] font-semibold" style={{ fontFamily: 'Roboto' }}>
              ↑ 25.30%
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <span className="w-3 h-3 rounded-full bg-[#FFB480] mr-2"></span>
            <span className="text-[#64646D] text-[14px] font-normal" style={{ fontFamily: 'Poppins' }}>
              Public Equity
            </span>
          </div>
          <span className="text-[#171725] font-bold text-[28px] leading-tight text-center" style={{ fontFamily: 'Roboto' }}>
            $690k{' '}
            <span className="text-[#37D397] text-[16px] font-semibold" style={{ fontFamily: 'Roboto' }}>
              ↑ 21.42%
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <span className="w-3 h-3 rounded-full bg-[#FF6961] mr-2"></span>
            <span className="text-[#64646D] text-[14px] font-normal" style={{ fontFamily: 'Poppins' }}>
              Bank Bonds
            </span>
          </div>
          <span className="text-[#171725] font-bold text-[28px] leading-tight text-center" style={{ fontFamily: 'Roboto' }}>
            $414k{' '}
            <span className="text-[#37D397] text-[16px] font-semibold" style={{ fontFamily: 'Roboto' }}>
              ↑ 20.18%
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <span className="w-3 h-3 rounded-full bg-[#BBB30A] mr-2"></span>
            <span className="text-[#64646D] text-[14px] font-normal" style={{ fontFamily: 'Poppins' }}>
              Bank Bonds
            </span>
          </div>
          <span className="text-[#171725] font-bold text-[28px] leading-tight text-center" style={{ fontFamily: 'Roboto' }}>
            $276k{' '}
            <span className="text-[#37D397] text-[16px] font-semibold" style={{ fontFamily: 'Roboto' }}>
              ↑ 15.65%
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <span className="w-3 h-3 rounded-full bg-[#FFC109] mr-2"></span>
            <span className="text-[#64646D] text-[14px] font-normal" style={{ fontFamily: 'Poppins' }}>
              Cash
            </span>
          </div>
          <span className="text-[#171725] font-bold text-[28px] leading-tight text-center" style={{ fontFamily: 'Roboto' }}>
            $276k{' '}
            <span className="text-[#37D397] text-[16px] font-semibold" style={{ fontFamily: 'Roboto' }}>
              ↑ 18.50%
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <span className="w-3 h-3 rounded-full bg-[#D106FE] mr-2"></span>
            <span className="text-[#64646D] text-[14px] font-normal" style={{ fontFamily: 'Poppins' }}>
              Crypto
            </span>
          </div>
          <span className="text-[#171725] font-bold text-[28px] leading-tight text-center" style={{ fontFamily: 'Roboto' }}>
            $276k{' '}
            <span className="text-[#37D397] text-[16px] font-semibold" style={{ fontFamily: 'Roboto' }}>
              ↑ 15.65%
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default InvestmentBreakdown;