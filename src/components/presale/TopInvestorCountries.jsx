import ReactCountryFlag from "react-country-flag"
import { topInvestorCountries } from "./presaleData"

const TopInvestorCountries = () => {
  return (
    <div className="p-3 bg-white shadow rounded-lg lg:w-1/2 h-full">
      <h2 className="text-lg font-semibold mb-4">Top 5 Investor Countries</h2>

      <div className="bg-gray-200 w-full h-[2px] mb-4"></div>

      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-sm">
              <th className="p-2 text-left">Rank</th>
              <th className="p-2 text-left">Country</th>
              <th className="p-2 text-left">Investors</th>
              <th className="p-2 text-left">USD Raised</th>
              <th className="p-2 text-left">% of Total</th>
            </tr>
          </thead>
          <tbody>
            {topInvestorCountries.map((row, idx) => (
              <tr
                key={idx}
                className="border border-gray-200 text-xs hover:bg-gray-50 transition"
              >
                <td className="p-2">{row.rank}</td>
                <td className="p-2">
                  <div className="flex items-center">
                    <ReactCountryFlag
                      countryCode={row.countryCode}   
                      svg
                      style={{ width: "1em", height: "1em", marginRight: "2px" }}
                    />
                    {row.country}
                  </div>
                </td>
                <td className="p-2">{row.investors}</td>
                <td className="p-2">{row.usdRaised}</td>
                <td className="p-2">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopInvestorCountries