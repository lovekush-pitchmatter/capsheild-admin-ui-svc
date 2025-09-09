export default function StatusBadge({ status }) {
  const colors = {
    Pending: "bg-yellow-100 text-yellow-800",
    "Auto-Approved": "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
    Resubmitted: "bg-blue-100 text-blue-800",
    "API Failed": "bg-orange-100 text-orange-800",
    //  PaymentPending: "bg-yellow-100 text-yellow-800",
    // "Payment Approved": "bg-green-100 text-green-800",
    // WalletMissing: "bg-red-100 text-red-800",
    // Resubmitted: "bg-blue-100 text-blue-800",
    // "PaymentPending": "bg-orange-100 text-orange-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}
