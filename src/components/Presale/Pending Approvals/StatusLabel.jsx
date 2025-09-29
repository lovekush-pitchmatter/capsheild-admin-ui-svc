export default function StatusBadge({ status }) {
  const colors = {
    "Payment Pending": "bg-yellow-100 text-yellow-800",
    "Payment Approved": "bg-green-100 text-green-800",
    "Wallet Missing": "bg-red-100 text-red-800",
    "Pending": "bg-yellow-100 text-yellow-800",
    "Allocated": "bg-green-100 text-green-800",
    "Paid": "bg-green-100 text-green-800",
     "Rejected": "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}
