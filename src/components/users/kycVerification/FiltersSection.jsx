import { BsSearch } from "react-icons/bs";
import FiltersSectionReferral from "../referral/FiltersSectionReferral";
import FiltersSectionAllUsers from "../allUsers/FiltersSectionAllUsers";

export function FiltersSection({ 
  title = "",
  searchQuery = "",           
  setSearchQuery = () => {},  
  search, 
  status = [],                
  documentType = [],          
  source = [],
  level = [],          
  referredBy = [],
  interestArea = [],
  referral = [],
  tokens = [],
  investor = [],
  userStatus = [],
  kycStatus = [],
  countryOptions = []
}) {

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-2">
        {status.length > 0 && (
          <select className="border rounded px-2 py-1 border-gray-400 text-gray-900 w-fit" defaultValue="Status">
            <option value="Status" disabled hidden>Status</option>
            {status.map((s, i) => (
              <option key={i}>{s}</option>
            ))}        
          </select>
        )}

        {documentType.length > 0 && (
          <select className="border rounded px-3 py-1 border-gray-400 w-28 text-gray-900">
            <option value="Document Type" disabled hidden>Document Type</option>
            {documentType.map((s, i) => (
              <option key={i}>{s}</option>
            ))}        
          </select>
        )}        

        {source.length > 0 && (
          <select className="border rounded px-3 py-1 border-gray-400 w-28 text-gray-900">
            <option value="Source" disabled hidden>Source</option>
            {source.map((s, i) => (
              <option key={i}>{s}</option>
            ))}        
          </select>
        )}  

        <FiltersSectionReferral 
          level={level}
          countryOptions={countryOptions}
          referredBy={referredBy}
        />

        {        
          search === "Search" && title !== "All Users" && <input className="border rounded px-3 py-1 border-gray-400 text-gray-900" type="date" name="date" id="date" />
        }  

        {title === "All Users" && (
          <FiltersSectionAllUsers
            userStatus={userStatus}
            kycStatus={kycStatus}
            investor={investor}
            interestArea={interestArea}
            tokens={tokens}
            referral={referral}
          />
        )}
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
