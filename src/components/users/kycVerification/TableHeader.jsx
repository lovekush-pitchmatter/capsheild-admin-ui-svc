export function TableHeader() {
  return (
    <thead className="bg-gray-100 ">
      <tr>
        <th className="p-2 text-left"><input type="checkbox" /></th>
        <th className="p-2 text-left">#</th>
        <th className="p-2 text-left">Username</th>
        <th className="p-2 text-left">Full Name</th>
        <th className="p-2 text-left">Country</th>
        <th className="p-2 text-left">Document Type</th>
        <th className="p-2 text-left">ID Number</th>
        <th className="p-2 text-left">Source</th>
        <th className="p-2 text-left">Submitted On</th>
        <th className="p-2 text-left">Reviewed By</th>
        <th className="p-2 text-left">Status</th>
        <th className="p-2 text-left">Action</th>
      </tr>
    </thead>
  );
}
