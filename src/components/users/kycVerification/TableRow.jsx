import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { CircleEllipsis, UserMinus, UserRoundCheck, UserX } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export function TableRow({ row, index, image, title}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {      
        title === "KYC Verification" && <tr className="border-b hover:bg-gray-50">
              <td className="p-2  text-gray-700"><input type="checkbox" /></td>
              <td className="p-2 text-xs text-gray-700">{index + 1}</td>
              <td className="p-2 text-xs text-gray-700">
                {row.username}
              </td>
              <td className="p-2 pe-4 text-xs text-gray-700 w-fit ">
                <div className="flex items-center justify-start gap-1">
                  <img className="w-9 h-9 object-cover rounded-full" src={image} alt="" />
                  <div>{row.fullName}</div>
                </div>
              </td>
              <td className="p-2 text-xs text-gray-700">
                <div className="flex items-center">
                  <ReactCountryFlag
                    countryCode={row.countryCode}   
                    svg
                    style={{ width: "1em", height: "1em", marginRight: "2px" }}
                  />
                  {row.country}
                </div>
              </td>      
              <td className="p-2 text-xs text-gray-700">{row.docType}</td>
              <td className="p-2 text-xs text-gray-700">{row.idNumber}</td>
              <td className="p-2 text-xs text-gray-700">{row.source}</td>
              <td className="p-2 text-xs text-gray-700">{row.submittedOn}</td>
              <td className="p-2 text-xs text-gray-700">{row.reviewedBy}</td>
              <td className="p-2 text-xs text-gray-700 whitespace-nowrap"><StatusBadge status={row.status} /></td>
              <td className="p-2 cursor-pointer relative">
                <CircleEllipsis
                  className="text-purple- w-full"
                  onClick={() => setMenuOpen(!menuOpen)}
                />

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <ul className="py-1 text-sm text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Details</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Approve</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reject</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Request re-submit</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Put on hold</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Assign reviewer</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Download docs (zip)</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Audit log</li>
                    </ul>
                  </div>
                )}
              </td>
        </tr>
      }  

      {      
        title === "Referral Network" &&  
        <tr className="border-b hover:bg-gray-50">
          <td className="p-2 text-xs text-gray-700">{index + 1}</td>
          <td className="p-2 text-xs text-gray-700">
            {row.username}
          </td>
          <td className="p-2 pe-4 text-xs text-gray-700 w-fit ">
            <div className="flex items-center justify-start gap-1">
              <img className="w-9 h-9 object-cover rounded-full" src={image} alt="" />
              <div>{row.fullName}</div>
            </div>
          </td>
          <td className="p-2 text-xs text-gray-700">
            <div className="flex items-center">
              <ReactCountryFlag
                countryCode={row.countryCode}   
                svg
                style={{ width: "1em", height: "1em", marginRight: "2px" }}
              />
              {row.country}
            </div>
          </td>      
          <td className="p-2 text-xs text-gray-700">
            {row.referredBy}
          </td>
          <td className="p-2 text-xs text-gray-700">
            {row.uplineL2}
          </td>
          <td className="p-2 text-xs text-gray-700">
            {row.uplineL3}
          </td>
          <td className="p-2 text-xs text-gray-700">
            {row.levelEligible}
          </td>
          <td className="p-2 text-xs text-gray-700 text-center">
            {row.referrals}
          </td>
          <td className="p-2 cursor-pointer relative">
            <CircleEllipsis
              className="text-purple-600 w-full"
              onClick={() => setMenuOpen(!menuOpen)}
            />

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Downline</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Upline</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Level History</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Notes</li>
                </ul>
              </div>
            )}
          </td>
        </tr>
      }  

      {
        title === "All Users" && 
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2 text-xs text-gray-700">{index + 1}</td>
            <td className="p-2 text-xs text-gray-700">
              {row.username}
            </td>
            <td className="p-2 pe-4 text-xs text-gray-700 ">
              <div className="flex items-center justify-start gap-1">
                <img className="w-9 h-9 object-cover rounded-full" src={image} alt="" />
                <div>{row.fullName}</div>
              </div>
            </td>
            <td className="p-2 text-xs text-gray-700">
              <div className="flex items-center justify-center">
                {row.country}
              </div>
            </td>      
            <td className="p-2 text-xs text-gray-700">
              {row.referredBy}
            </td>
            <td className="px-4 py-2">
              {row.email  ? <FaCheckCircle className="text-green-600"/> :  <FaTimesCircle className="text-red-600"/> }
            </td>
            <td className="px-4 py-2">
              {row.mobile  ? <FaCheckCircle className="text-green-600"/> :  <FaTimesCircle className="text-red-600"/> }
            </td>            
            <td className="">
              <div className="flex ">
                  {row.status === "Active" ? (
                    <>
                      <div className="bg-green-600 p-1 rounded-full">                                        
                        <UserRoundCheck className="text-white w-6 h-6" />
                      </div>
                    </>
                  ) : row.status === "Pending" ? (
                    <>
                      <div className="bg-yellow-600 p-1 rounded-full">
                        <UserMinus className="text-white w-6 h-6" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-red-600 p-1 rounded-full">
                        <UserX className="text-white w-6 h-6" />
                      </div>
                    </>
                  )}
              </div>            
            </td>
            <td>
              <div className="flex">
                  {row.kyc === "Active" ? (
                    <>
                      <div className="bg-green-600 p-0.5 rounded-md">                                        
                        <UserRoundCheck className="text-white w-6 h-6" />
                      </div>
                    </>
                  ) : row.kyc === "Pending" ? (
                    <>
                      <div className="bg-blue-600 p-1 rounded-md">
                        <UserMinus className="text-white w-6 h-6" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-red-600 p-1 rounded-md">
                        <UserX className="text-white w-6 h-6" />
                      </div>
                    </>
                  )}
              </div>            
            </td>
            <td className="p-2 text-xs text-gray-700 text-center">
              {row.joined}
            </td>
            <td className="p-2 cursor-pointer relative">
              <CircleEllipsis
                className="text-purple-600 w-full"
                onClick={() => setMenuOpen(!menuOpen)}
              />

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-1 text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Promote</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Activate Ref Link</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Block / Unblock</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Add Fund</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Debit Fund</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Flag</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Send Message</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Logs</li>
                  </ul>
                </div>
              )}
            </td>
          </tr>

      }  
  
    </>
  );
}

