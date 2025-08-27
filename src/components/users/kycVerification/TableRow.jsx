import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { CircleEllipsis } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export function TableRow({ row, index, image}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2 text-gray-700"><input type="checkbox" /></td>
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
          className="text-purple-600"
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
  );
}

