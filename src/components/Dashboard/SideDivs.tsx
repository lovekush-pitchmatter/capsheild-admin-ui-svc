import React from 'react';
import { SideDivsProps } from '../../types/dashboard';

const SideDivs: React.FC<SideDivsProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full lg:w-1/3 h-full auto-rows-fr">
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between w-full h-20">
      <div className="flex justify-between items-center">
        <span className="text-[18px] text-sm font-roboto font-bold text-[#000000]">$67.6k</span>
        <div className="bg-[#F0F2F5] p-0.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3136_1651)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2643 2.87715C19.2508 3.04906 19.3792 3.19937 19.5511 3.21285C19.723 3.22633 19.8734 3.09789 19.8868 2.92598L19.9988 1.55344H19.9987C20.0002 1.53387 19.9999 1.51387 19.9976 1.49363C19.9781 1.32238 19.8234 1.19941 19.6521 1.21898L18.2845 1.38031C18.1133 1.39984 17.9903 1.55453 18.0099 1.72578C18.0294 1.89703 18.1841 2.02 18.3554 2.00043L18.859 1.94102L15.291 5.65102L11.5566 3.80898C11.4441 3.74375 11.2982 3.75352 11.1947 3.84359L8.77594 5.95027C8.82242 5.69367 8.8468 5.42949 8.8468 5.15969C8.8468 2.72066 6.8625 0.736328 4.42344 0.736328C1.98438 0.736328 0 2.72063 0 5.15965C0 7.59867 1.9843 9.58297 4.42332 9.58297C6.16113 9.58297 7.66781 8.57547 8.3907 7.11406L11.4485 4.45082L15.2196 6.3109C15.3472 6.37387 15.497 6.34144 15.5882 6.24113L19.3051 2.37625L19.2643 2.87715ZM4.42336 8.95801C2.32895 8.95801 0.625 7.25406 0.625 5.15965C0.625 3.06523 2.32895 1.36129 4.42332 1.36129C6.51773 1.36129 8.22168 3.06523 8.22168 5.15965C8.22168 7.25406 6.51777 8.95801 4.42336 8.95801ZM9.82816 9.44516H8.05969C7.67199 9.44516 7.35656 9.76058 7.35656 10.1483V18.5602C7.35656 18.9479 7.67199 19.2633 8.05969 19.2633H9.82816C10.2159 19.2633 10.5313 18.9479 10.5313 18.5602V10.1483C10.5313 9.76059 10.2159 9.44516 9.82816 9.44516ZM9.90629 18.5602C9.90629 18.6026 9.87051 18.6384 9.82816 18.6384H8.05969C8.01734 18.6384 7.98156 18.6026 7.98156 18.5602V10.1483C7.98156 10.106 8.01734 10.0702 8.05969 10.0702H9.82816C9.87051 10.0702 9.90629 10.106 9.90629 10.1483V18.5602ZM14.5626 11.1841H12.7941C12.4064 11.1841 12.091 11.4995 12.091 11.8872V18.5602C12.091 18.9479 12.4064 19.2634 12.7941 19.2634H14.5626C14.9503 19.2634 15.2657 18.9479 15.2657 18.5602V11.8872C15.2657 11.4995 14.9503 11.1841 14.5626 11.1841ZM14.6407 18.5602C14.6407 18.6026 14.6049 18.6384 14.5626 18.6384H12.7941C12.7518 18.6384 12.716 18.6026 12.716 18.5602V11.8872C12.716 11.8448 12.7518 11.8091 12.7941 11.8091H14.5626C14.6049 11.8091 14.6407 11.8448 14.6407 11.8872V18.5602ZM19.2969 6.10059H17.5284C17.1407 6.10059 16.8253 6.41602 16.8253 6.80371V18.5602C16.8253 18.9479 17.1407 19.2633 17.5284 19.2633H19.2969C19.6846 19.2633 20 18.9479 20 18.5602V6.80371C20 6.41602 19.6846 6.10059 19.2969 6.10059ZM19.375 18.5602C19.375 18.6025 19.3392 18.6383 19.2969 18.6383H17.5284C17.4861 18.6383 17.4503 18.6025 17.4503 18.5602V6.80371C17.4503 6.76137 17.4861 6.72559 17.5284 6.72559H19.2969C19.3392 6.72559 19.375 6.76137 19.375 6.80371V18.5602ZM5.09379 13.7469H3.32535C2.93766 13.7469 2.62223 14.0623 2.62223 14.45V18.5602C2.62223 18.9479 2.93766 19.2633 3.32535 19.2633H5.09379C5.48148 19.2633 5.79691 18.9479 5.79691 18.5602V14.45C5.79691 14.0623 5.48148 13.7469 5.09379 13.7469ZM5.17191 18.5602C5.17191 18.6025 5.13613 18.6383 5.09379 18.6383H3.32535C3.28301 18.6383 3.24723 18.6025 3.24723 18.5602V14.45C3.24723 14.4077 3.28301 14.3719 3.32535 14.3719H5.09379C5.13613 14.3719 5.17191 14.4077 5.17191 14.45V18.5602ZM6.03531 6.08648C6.08254 6.46996 5.94812 6.86824 5.59535 7.1359C5.35242 7.32023 5.04023 7.42887 4.73586 7.47121V7.76098C4.73586 7.93355 4.59594 8.07348 4.42336 8.07348C4.25078 8.07348 4.11086 7.93355 4.11086 7.76098V7.46543C3.85828 7.42449 3.61668 7.33512 3.40984 7.19734C3.11891 7.00355 2.89602 6.71777 2.80184 6.33988C2.7607 6.17269 2.86293 6.00383 3.03012 5.9627C3.1973 5.92156 3.36617 6.02379 3.4073 6.19098C3.46047 6.40426 3.58766 6.56648 3.7541 6.67734C4.16344 6.94996 4.82371 6.94055 5.21937 6.64031C5.56832 6.37555 5.44035 5.88727 5.10195 5.68297C4.89672 5.55906 4.62824 5.49367 4.37707 5.45246C4.0723 5.40242 3.74219 5.3118 3.47426 5.13687C2.78332 4.68582 2.76266 3.6934 3.39355 3.18043C3.58742 3.02281 3.82824 2.91461 4.08488 2.86293L4.1109 2.85789V2.55828C4.1109 2.3857 4.25082 2.24578 4.42340 2.24578C4.59598 2.24578 4.73590 2.3857 4.73590 2.55828V2.85312C4.77797 2.86039 4.81980 2.8693 4.86125 2.87977C5.30543 2.99238 5.70949 3.28441 5.92172 3.78992C5.98844 3.94902 5.91359 4.13211 5.75449 4.19887C5.59539 4.26559 5.41230 4.19074 5.34555 4.03164C5.19363 3.66953 4.82051 3.45465 4.43062 3.45445C4.01504 3.45422 3.53000 3.70391 3.55301 4.17805C3.57527 4.63664 4.10914 4.77676 4.47719 4.83719C4.79328 4.88906 5.13785 4.97539 5.42422 5.14828C5.77504 5.36012 5.98973 5.71641 6.03531 6.08648Z" fill="#50C878"/>
          </g>
          <defs>
          <clipPath id="clip0_3136_1651">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </div>
      </div>
      <span className="text-[12px] text-sm font-roboto font-medium text-[#64646D] ">Revenue</span>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between w-full h-20">
      <div className="flex justify-between items-center">
        <span className="text-[18px] text-sm font-roboto font-bold text-[#000000]">12.6K</span>
        <div className="bg-[#F0F2F5] p-0.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9165 11.4585C7.9165 12.2669 8.54152 12.9169 9.30818 12.9169H10.8748C11.5415 12.9169 12.0832 12.3502 12.0832 11.6419C12.0832 10.8835 11.7498 10.6085 11.2582 10.4335L8.74984 9.55853C8.25817 9.38353 7.92485 9.11686 7.92485 8.35019C7.92485 7.65019 8.4665 7.0752 9.13316 7.0752H10.6998C11.4665 7.0752 12.0915 7.7252 12.0915 8.53353" stroke="#FFC700" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.25V13.75" stroke="#FFC700" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 10.0003C18.3332 14.6003 14.5998 18.3337 9.99984 18.3337C5.39984 18.3337 1.6665 14.6003 1.6665 10.0003C1.6665 5.40033 5.39984 1.66699 9.99984 1.66699" stroke="#FFC700" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.1665 2.5V5.83333H17.4998" stroke="#FFC700" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 1.66699L14.1665 5.83366" stroke="#FFC700" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <span className="text-[12px] text-sm font-roboto font-medium text-[#64646D]">Investors Registered</span>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between w-full h-20">
      <div className="flex justify-between items-center">
        <span className="text-[18px] text-sm font-roboto font-bold text-[#000000]">143</span>
        <div className="bg-[#F0F2F5] p-0.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9165 11.4585C7.9165 12.2669 8.54152 12.9169 9.30818 12.9169H10.8748C11.5415 12.9169 12.0832 12.3502 12.0832 11.6419C12.0832 10.8835 11.7498 10.6085 11.2582 10.4335L8.74984 9.55853C8.25817 9.38353 7.92485 9.11686 7.92485 8.35019C7.92485 7.65019 8.4665 7.0752 9.13316 7.0752H10.6998C11.4665 7.0752 12.0915 7.7252 12.0915 8.53353" stroke="#0FA4E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.25V13.75" stroke="#0FA4E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 10.0003C18.3332 14.6003 14.5998 18.3337 9.99984 18.3337C5.39984 18.3337 1.6665 14.6003 1.6665 10.0003C1.6665 5.40033 5.39984 1.66699 9.99984 1.66699" stroke="#0FA4E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.1665 2.5V5.83333H17.4998" stroke="#0FA4E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 1.66699L14.1665 5.83366" stroke="#0FA4E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <span className="text-[12px] text-sm font-roboto font-medium text-[#64646D]">Active Campaigns</span>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between w-full h-20" >
      <div className="flex justify-between items-center">
        <span className="text-[18px] text-sm font-roboto font-bold text-[#000000]">651</span>
        <div className="bg-[#F0F2F5] p-0.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9165 11.4585C7.9165 12.2669 8.54152 12.9169 9.30818 12.9169H10.8748C11.5415 12.9169 12.0832 12.3502 12.0832 11.6419C12.0832 10.8835 11.7498 10.6085 11.2582 10.4335L8.74984 9.55853C8.25817 9.38353 7.92485 9.11686 7.92485 8.35019C7.92485 7.65019 8.4665 7.0752 9.13316 7.0752H10.6998C11.4665 7.0752 12.0915 7.7252 12.0915 8.53353" stroke="#F000B9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.25V13.75" stroke="#F000B9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 10.0003C18.3332 14.6003 14.5998 18.3337 9.99984 18.3337C5.39984 18.3337 1.6665 14.6003 1.6665 10.0003C1.6665 5.40033 5.39984 1.66699 9.99984 1.66699" stroke="#F000B9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.1665 2.5V5.83333H17.4998" stroke="#F000B9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 1.66699L14.1665 5.83366" stroke="#F000B9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <span className="text-[12px] text-sm font-roboto font-medium text-[#64646D]">Applications Pending</span>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between w-full h-20">
      <div className="flex justify-between items-center">
        <span className="text-[18px] text-sm font-roboto font-bold text-[#000000]">$400.7k</span>
        <div className="bg-[#F0F2F5] p-0.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9165 11.4585C7.9165 12.2669 8.54152 12.9169 9.30818 12.9169H10.8748C11.5415 12.9169 12.0832 12.3502 12.0832 11.6419C12.0832 10.8835 11.7498 10.6085 11.2582 10.4335L8.74984 9.55853C8.25817 9.38353 7.92485 9.11686 7.92485 8.35019C7.92485 7.65019 8.4665 7.0752 9.13316 7.0752H10.6998C11.4665 7.0752 12.0915 7.7252 12.0915 8.53353" stroke="#FF5723" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.25V13.75" stroke="#FF5723" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 10.0003C18.3332 14.6003 14.5998 18.3337 9.99984 18.3337C5.39984 18.3337 1.6665 14.6003 1.6665 10.0003C1.6665 5.40033 5.39984 1.66699 9.99984 1.66699" stroke="#FF5723" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.1665 2.5V5.83333H17.4998" stroke="#FF5723" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 1.66699L14.1665 5.83366" stroke="#FF5723" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <span className="text-[12px] text-sm font-roboto font-medium text-[#64646D]">Investments</span>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between w-full h-20">
      <div className="flex justify-between items-center">
        <span className="text-[18px] text-sm font-roboto font-bold text-[#000000]">280</span>
        <div className="bg-[#F0F2F5] p-0.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9165 11.4585C7.9165 12.2669 8.54152 12.9169 9.30818 12.9169H10.8748C11.5415 12.9169 12.0832 12.3502 12.0832 11.6419C12.0832 10.8835 11.7498 10.6085 11.2582 10.4335L8.74984 9.55853C8.25817 9.38353 7.92485 9.11686 7.92485 8.35019C7.92485 7.65019 8.4665 7.0752 9.13316 7.0752H10.6998C11.4665 7.0752 12.0915 7.7252 12.0915 8.53353" stroke="#8FA400" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.25V13.75" stroke="#8FA400" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 10.0003C18.3332 14.6003 14.5998 18.3337 9.99984 18.3337C5.39984 18.3337 1.6665 14.6003 1.6665 10.0003C1.6665 5.40033 5.39984 1.66699 9.99984 1.66699" stroke="#8FA400" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.1665 2.5V5.83333H17.4998" stroke="#8FA400" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 1.66699L14.1665 5.83366" stroke="#8FA400" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <span className="text-[12px] text-sm font-roboto font-medium text-[#64646D]">Projects</span>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between w-full h-20">
      <div className="flex justify-between items-center">
        <span className="text-[18px] text-sm font-roboto font-bold text-[#000000]">65</span>
        <div className="bg-[#F0F2F5] p-0.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9165 11.4585C7.9165 12.2669 8.54152 12.9169 9.30818 12.9169H10.8748C11.5415 12.9169 12.0832 12.3502 12.0832 11.6419C12.0832 10.8835 11.7498 10.6085 11.2582 10.4335L8.74984 9.55853C8.25817 9.38353 7.92485 9.11686 7.92485 8.35019C7.92485 7.65019 8.4665 7.0752 9.13316 7.0752H10.6998C11.4665 7.0752 12.0915 7.7252 12.0915 8.53353" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.25V13.75" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 10.0003C18.3332 14.6003 14.5998 18.3337 9.99984 18.3337C5.39984 18.3337 1.6665 14.6003 1.6665 10.0003C1.6665 5.40033 5.39984 1.66699 9.99984 1.66699" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.1665 2.5V5.83333H17.4998" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 1.66699L14.1665 5.83366" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <span className="text-[12px] text-sm font-roboto font-medium text-[#64646D]">Mentors</span>
    </div>
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between w-full h-20">
      <div className="flex justify-between items-center">
        <span className="text-[18px]  font-roboto font-bold text-[#000000]">120</span>
        <div className="bg-[#F0F2F5] p-0.5 rounded-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.9165 11.4585C7.9165 12.2669 8.54152 12.9169 9.30818 12.9169H10.8748C11.5415 12.9169 12.0832 12.3502 12.0832 11.6419C12.0832 10.8835 11.7498 10.6085 11.2582 10.4335L8.74984 9.55853C8.25817 9.38353 7.92485 9.11686 7.92485 8.35019C7.92485 7.65019 8.4665 7.0752 9.13316 7.0752H10.6998C11.4665 7.0752 12.0915 7.7252 12.0915 8.53353" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.25V13.75" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 10.0003C18.3332 14.6003 14.5998 18.3337 9.99984 18.3337C5.39984 18.3337 1.6665 14.6003 1.6665 10.0003C1.6665 5.40033 5.39984 1.66699 9.99984 1.66699" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.1665 2.5V5.83333H17.4998" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.3332 1.66699L14.1665 5.83366" stroke="#FF0000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <span className="text-[12px] text-sm font-roboto font-medium text-[#64646D]">Vendors</span>
    </div>
  </div>
  );
};

export default SideDivs;