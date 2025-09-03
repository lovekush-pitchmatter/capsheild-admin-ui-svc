import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";

const countryOptions = [
  { value: "CA", label: "Canada" },
  { value: "US", label: "United States" },
  { value: "FR", label: "France" },
  { value: "AU", label: "Australia" },
];

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
  documentType = [],          
  source = [],
  level = [],          
  referredBy = [],
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

        {documentType.length > 0 && (
          <select className="border rounded px-3 py-1 border-gray-400 text-gray-900">
            <option value="Document Type" disabled hidden>Document Type</option>
            {documentType.map((s, i) => (
              <option key={i}>{s}</option>
            ))}        
          </select>
        )}        

        {source.length > 0 && (
          <select className="border rounded px-3 py-1 border-gray-400 text-gray-900">
            <option value="Source" disabled hidden>Source</option>
            {source.map((s, i) => (
              <option key={i}>{s}</option>
            ))}        
          </select>
        )}  

        {level.length > 0 && (
          <select
            className="border rounded px-2 py-1 border-gray-400 text-gray-900"
            defaultValue="" 
          >
            <option value="" disabled hidden>Level Eligible</option>
            {level.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        )}

        <Select
          options={countryOptions}
          placeholder="Country"
          styles={customStyles}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              neutral20: "black", 
              neutral30: "black", 
              neutral40: "black", 
            },
          })}
          formatOptionLabel={(option) => (
            <div className="flex items-center gap-2">
              <ReactCountryFlag countryCode={option.value} svg style={{ fontSize: "1.2em" }} />
              <span>{option.label}</span>
            </div>
          )}
        />

        {referredBy.length > 0 && (
          <select className="border rounded px-3 py-1 border-gray-400 text-gray-900" defaultValue="">
            <option value="" disabled hidden>Referred By</option>
            {referredBy.map((s, i) => (
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
