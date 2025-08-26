import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { CircleEllipsis } from "lucide-react";

export function TableRow({ row, index}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2"><input type="checkbox" /></td>
      <td className="p-2">{index + 1}</td>
      <td className="p-2">{row.username}</td>
      <td className="p-2">{row.fullName}</td>
      <td className="p-2">{row.country}</td>
      <td className="p-2">{row.docType}</td>
      <td className="p-2">{row.idNumber}</td>
      <td className="p-2">{row.source}</td>
      <td className="p-2">{row.submittedOn}</td>
      <td className="p-2">{row.reviewedBy}</td>
      <td className="p-2 whitespace-nowrap"><StatusBadge status={row.status} /></td>
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

