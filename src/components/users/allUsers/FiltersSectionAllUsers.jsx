import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { UserRoundCheck, UserMinus, UserX } from "lucide-react";

function InterestAreaDropdown({ interestArea }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((s) => s !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <div className="relative w-fit">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="border rounded px-2 py-1 border-gray-400 text-gray-900 w-34 text-sm text-left flex flex-nowrap items-center justify-between"
      >
        {selected.length > 0 ? selected.join(", ") : "Interest Area"}
        <FiChevronDown className="ml-2 text-black" size={17} />
      </button>

      {open && (
        <div className="absolute mt-1 w-48 border bg-white shadow p-2 z-10 h-fit">
          {interestArea.map((s, i) => (
            <label
              key={i}
              className="flex items-center gap-2 py-1 text-sm hover:bg-gray-500 hover:text-white"
            >
              <input
                type="checkbox"
                checked={selected.includes(s)}
                onChange={() => toggleOption(s)}
              />
              {s}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function KycDropdown({ kycStatus }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("KYC Status");

  const statusIcons = {
    Approved: (
      <div className="bg-green-600 p-0.5 rounded-md">
        <UserRoundCheck className="text-white w-4 h-4" />
      </div>
    ),
    Pending: (
      <div className="bg-blue-600 p-0.5 rounded-md">
        <UserMinus className="text-white w-4 h-4" />
      </div>
    ),
    Rejected: (
      <div className="bg-red-600 p-0.5 rounded-md">
        <UserX className="text-white w-4 h-4" />
      </div>
    ),
    "Auto - Verified": (
      <div className="bg-green-600 p-0.5 rounded-md">
        <UserRoundCheck className="text-white w-4 h-4" />
      </div>
    ),
  };

  return (
    <div className="relative w-30">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="border rounded px-2 py-1 border-gray-400 text-gray-900 text-sm flex items-center justify-between w-full"
      >
        {selected !== "KYC Status" ? (
          <span className="flex items-center gap-2">
            {statusIcons[selected]}
            {selected}
          </span>
        ) : (
          <span>{selected}</span>
        )}
        <FiChevronDown className="ml-2 text-gray-600" />
      </button>

      {open && (
        <div className="absolute mt-1 w-40 border bg-white shadow-lg z-10">
          {kycStatus.map((s, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(s);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-500 hover:text-white cursor-pointer text-sm"
            >
              {statusIcons[s] && statusIcons[s]}
              <span>{s}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatusDropdown({ userStatus }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Status");

  const statusIcons = {
    Active: (
      <div className="bg-green-600 p-1 rounded-full">
        <UserRoundCheck className="text-white w-6 h-6" />
      </div>
    ),
    Pending: (
      <div className="bg-yellow-600 p-1 rounded-full">
        <UserMinus className="text-white w-6 h-6" />
      </div>
    ),
    Blocked: (
      <div className="bg-red-600 p-1 rounded-full">
        <UserX className="text-white w-6 h-6" />
      </div>
    ),
  };

  return (
    <div className="relative w-30">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="border rounded px-2 py-1 border-gray-400 text-gray-900 text-sm flex items-center justify-between w-full"
      >
        {selected !== "User Status" ? (
          <span className="flex items-center gap-2">
            {statusIcons[selected]}
            {selected}
          </span>
        ) : (
          <span>{selected}</span>
        )}
        <FiChevronDown className="ml-2 text-gray-600" />
      </button>

      {open && (
        <div className="absolute mt-1 w-36 border bg-white shadow-lg z-10">
          {userStatus.map((s, i) => (
            <div
              key={i}
              onClick={() => {
                setSelected(s);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-500 hover:text-white cursor-pointer text-sm"
            >
              {statusIcons[s] && statusIcons[s]}
              <span>{s}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const FiltersSectionAllUsers = ({
  userStatus,
  kycStatus,
  investor,
  interestArea,
  tokens,
  referral,
}) => {
  return (
    <div className="flex gap-2">
      {userStatus?.length > 0 && <StatusDropdown userStatus={userStatus} />}
      {kycStatus?.length > 0 && <KycDropdown kycStatus={kycStatus} />}
      {investor?.length > 0 && (
        <select
          className="border rounded px-2 py-1 border-gray-400 text-gray-900 w-28 text-sm"
          defaultValue="Investor"
        >
          <option value="Investor" disabled hidden>
            Investor Type
          </option>
          {investor.map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>
      )}
      {interestArea?.length > 0 && (
        <InterestAreaDropdown interestArea={interestArea} />
      )}
      {tokens?.length > 0 && (
        <select
          className="border rounded px-2 py-1 border-gray-400 text-gray-900 w-28 text-sm"
          defaultValue="Tokens"
        >
          <option value="Tokens" disabled hidden>
            Tokens Held
          </option>
          {tokens.map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>
      )}
      {referral?.length > 0 && (
        <select
          className="border rounded px-2 py-1 border-gray-400 text-gray-900 w-28 text-sm"
          defaultValue="Referral"
        >
          <option value="Referral" disabled hidden>
            Referral Status
          </option>
          {referral.map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FiltersSectionAllUsers;
