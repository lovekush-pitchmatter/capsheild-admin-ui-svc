import { useState } from "react";
import StatusBadge from "./StatusLabel";
import { CircleEllipsis } from "lucide-react";

export function TableRow({ row, index, image }) {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const isPurchasedRow = row.purchased !== undefined;
  const isAllocatedRow = row.allocated !== undefined;

  return (
    <>
      {isPurchasedRow ? (
        <tr className="border-b hover:bg-gray-50">
          <td className="p-2 text-xs text-gray-700">{index + 1}</td>
          <td className="p-2 text-xs text-gray-700">{row.username}</td>
          <td className="p-2 text-xs text-gray-700">{row.purchased}</td>
          <td className="p-2 text-xs text-gray-700">{row.stage}</td>
          <td className="p-2 text-xs text-gray-700">{row.network}</td>
          <td className="p-2 text-xs text-gray-700">{row.walletAddress}</td>
          <td className="p-2 text-xs text-gray-700">{row.purchasedDate}</td>
          <td className="p-2 text-xs text-gray-700 whitespace-nowrap">
            <StatusBadge status={row.status} />
          </td>
          <td className="p-2 cursor-pointer relative">
            <CircleEllipsis
              className="text-purple-600 w-full"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Approve Allocation</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reject Request</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Request Wallet Address</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Verify Payment</li>
                </ul>
              </div>
            )}
          </td>
        </tr>
      ) : isAllocatedRow ? (
        <tr className="border-b hover:bg-gray-50">
          <td className="p-2 text-xs text-gray-700">{index + 1}</td>
          <td className="p-2 text-xs text-gray-700">{row.username}</td>
          <td className="p-2 text-xs text-gray-700">{row.allocated}</td>
          <td className="p-2 text-xs text-gray-700">{row.walletAddress}</td>
          <td className="p-2 text-xs text-gray-700">{row.network}</td>
          <td className="p-2 text-xs text-gray-700">{row.purchasedDate}</td>
          <td className="p-2 text-xs text-gray-700 whitespace-nowrap">
            <StatusBadge status={row.status} />
          </td>
          <td className="p-2 cursor-pointer relative">
            <CircleEllipsis
              className="text-purple-600 w-full"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Allocation Details</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Approve Allocation</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reject Allocation</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Adjust Token Allocation</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Request Wallet Address</li>
                </ul>
              </div>
            )}
          </td>
        </tr>
      ) : (
        <tr className="border-b hover:bg-gray-50">
          <td className="p-2 text-xs text-gray-700">{index + 1}</td>
          <td className="p-2 text-xs text-gray-700">{row.username}</td>
          <td className="p-2 text-xs text-gray-700">{row.level}</td>
          <td className="p-2 text-xs text-gray-700">{row.investor}</td>
          <td className="p-2 text-xs text-gray-700">{row.invested}</td>
          <td className="p-2 text-xs text-gray-700">{row.currency}</td>
          <td className="p-2 text-xs text-gray-700">{row.commision}</td> 
          <td className="p-2 text-xs text-gray-700 whitespace-nowrap">
            <StatusBadge status={row.status} />
          </td>
          <td className="p-2 text-xs text-gray-700">{row.creditwallet}</td> 
          <td className="p-2 cursor-pointer relative">
            <CircleEllipsis
              className="text-purple-600 w-full"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View Details</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Approve Commission</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reject Commmission</li>
                </ul>
              </div>
            )}
          </td>
        </tr>

      )}
    </>
  );
}




