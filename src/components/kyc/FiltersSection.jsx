import { BsSearch } from "react-icons/bs";

export function FiltersSection({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex gap-2 items-center justify-between mb-4">
      <div className="flex gap-2">
        <select className="border rounded px-2 py-1 border-gray-400 text-gray-900" defaultValue="Status">
          <option value="Status" disabled hidden>Status</option>
          <option>All</option>
          <option>Auto-Approved</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
          <option>Expired</option>
          <option>On Hold</option>
          <option>API Failed</option>
          <option>Need to re-verify</option>
          <option>PEP/Sanctions Hit</option>
          <option>In Review</option>   
        </select>

        <select className="border rounded px-3 py-1 border-gray-400 text-gray-900">
          <option value="Status" disabled hidden>Status</option>
          <option>All</option>
          <option>Passport</option>
          <option>National ID / Emirates ID</option>
          <option>Driver's License</option>
          <option>Residence Permit / Visa</option>
          <option>Utility Bill (Address)</option>
          <option>Bank Statement (Address)</option>
          <option>Selfie / Liveness</option>
          <option>Other</option>        
        </select>

        <select className="border rounded px-3 py-1 border-gray-400 text-gray-900">
          <option value="Status" disabled hidden>Status</option>
          <option>All</option>
          <option>Auto (API)</option>
          <option>Manual</option>
          <option>Assisted (API + Manual)</option>
          <option>Resubmission</option>
          <option>Bulk Import</option>        
        </select>

        <input className="border rounded px-3 py-1 border-gray-400 text-gray-900" type="date" name="date" id="date" />
      </div>

      <div className="relative">
        <BsSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-3.5"/>
        <input
          className="border rounded px-3 ps-10 py-1 border-gray-400 text-gray-900"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />      
      </div>
    </div>
  );
}
