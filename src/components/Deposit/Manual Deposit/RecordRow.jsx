import { useState } from "react";
import StatusBadge from "./StatusTag";
import { CircleEllipsis } from "lucide-react";

export function TableRow({ row, index, image }) {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2 text-xs text-gray-700">{index + 1}</td>
      <td className="p-2 text-xs text-gray-700">{row.Depositid}</td>
      <td className="p-2 text-xs text-gray-700">{row.userid}</td>
      <td className="p-2 text-xs text-gray-700">{row.method}</td>
      <td className="p-2 text-xs text-gray-700">{row.amount}</td>
      <td className="p-2 text-xs text-gray-700">{row.date}</td>
      <td className="p-2 text-xs text-gray-700 whitespace-nowrap">
        <StatusBadge status={row.status} />
      </td>
      <td className="p-2 text-xs text-gray-700">{row.referenceid}</td>
      <td className="p-2 text-xs text-gray-700">{row.verifiedid}</td>
      <td className="p-2 cursor-pointer relative">
        <CircleEllipsis
          className="text-purple-600 w-full"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <ul className="py-1 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Safe as draft</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Approve Depost</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reject Deposit</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit Entry</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
            </ul>
          </div>
        )}
      </td>
    </tr>
  );
}




