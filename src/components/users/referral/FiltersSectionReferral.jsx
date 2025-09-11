import Select from "react-select";
import ReactCountryFlag from "react-country-flag";

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

const FiltersSectionReferral = ({ level = [], countryOptions = [], referredBy = [] }) => {
  return (
    <div className="flex gap-2">
      {/* Level Eligible */}
      {level.length > 0 && (
        <select
          className="border rounded px-2 py-1 border-gray-400 text-gray-900"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Level Eligible
          </option>
          {level.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      )}

      {/* Country */}
      {countryOptions.length > 0 && (
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
              <ReactCountryFlag
                countryCode={option.value}
                svg
                style={{ fontSize: "1.2em" }}
              />
              <span>{option.label}</span>
            </div>
          )}
        />
      )}

      {/* Referred By */}
      {referredBy.length > 0 && (
        <select
          className="border rounded px-3 py-1 border-gray-400 text-gray-900"
          defaultValue=""
        >
          <option value="" disabled hidden>
            Referred By
          </option>
          {referredBy.map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FiltersSectionReferral;
