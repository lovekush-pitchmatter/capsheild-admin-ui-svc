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
  stage = [],          
  network = [],
}) {
  return (
    <div className="flex gap-2 items-center justify-between mb-4">
      <div className="flex gap-2">
        {status.length > 0 && (
          <select className="border rounded px-2 py-1 border-gray-400 text-gray-900" defaultValue="Status">
            <option value="Status" disabled hidden>Status</option>
            {status.map((s, i) => (
              <option key={i}>{s}</option>
            ))}        
          </select>
        )}

        {stage.length > 0 && (
          <select className="border rounded px-3 py-1 border-gray-400 text-gray-900">
            <option value="stage" disabled hidden>Stage</option>
            {stage.map((s, i) => (
              <option key={i}>{s}</option>
            ))}        
          </select>
        )}        

        {network.length > 0 && (
          <select className="border rounded px-3 py-1 border-gray-400 text-gray-900">
            <option value="network" disabled hidden>network</option>
            {network.map((s, i) => (
              <option key={i}>{s}</option>
            ))}        
          </select>
        )}  

        {        
          search === "Search" && <input className="border rounded px-3 py-1 border-gray-400 text-gray-900" type="date" name="date" id="date" />
        }      
      </div>

    {
      search === "Search" && <div className="relative">
        <BsSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 left-3.5"/>
        <input
          className="border rounded px-3 ps-10 py-1 border-gray-400 text-gray-900"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />      
      </div>
    }
    </div>
  );
}
