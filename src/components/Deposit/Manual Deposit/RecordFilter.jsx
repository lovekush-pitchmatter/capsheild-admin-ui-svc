import { BsSearch } from "react-icons/bs";


const customStyles = {
  placeholder: (provided) => ({
    ...provided,
    color: "#111827", 
  }),
   control: (provided) => ({
    ...provided,
    border: "1px solid #B8BEC8", 
  }),
};


export function FiltersSection({ 
  searchQuery = "",           
  setSearchQuery = () => {},  
  search, 
  status = [],                
  verifedby = [],          
}) {
  return (
   <div className="flex justify-between items-center">
  {/* LEFT SIDE — date, selects, and search input */}
  <div className="flex gap-2 items-center">
    {search === "Search" && (
      <input
        className="border rounded-2x1 px-3 py-1 border-gray-400 text-gray-900"
        type="date"
        name="date"
        id="date"
      />
    )}

    {status.length > 0 && (
      <select
        className="border rounded px-5 py-1 border-gray-400 text-gray-900"
        defaultValue="Status"
      >
        <option value="Status" disabled hidden>
          Status
        </option>
        {status.map((s, i) => (
          <option key={i}>{s}</option>
        ))}
      </select>
    )}

    {verifedby.length > 0 && (
      <select className="border rounded px-3 py-1 border-gray-400 text-gray-900">
        <option value="verifedby" disabled hidden>
          Verified by 
        </option>
        {verifedby.map((s, i) => (
          <option key={i}>{s}</option>
        ))}
      </select>
    )}

    {/* ✅ Move Search Bar Here */}
    {search === "Search" && (
      <div className="relative">
        <BsSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-3.5" />
        <input
          className="border rounded px-4 ps-12 py-1 border-gray-400 text-gray-900"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    )}
  </div>

  {/* RIGHT SIDE — buttons */}
  <div className="flex gap-4">
    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
      + Filters
    </button>
    <button
      onClick={() => exportToCSV(filteredData, `${title}_export.csv`)}
      className="bg-green-600 text-white px-4 py-2 rounded-lg"
    >
      Export
    </button>
  </div>
</div>

  );
}
