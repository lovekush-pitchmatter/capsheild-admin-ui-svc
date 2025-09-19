import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FilterDropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 border rounded-lg px-2 py-1 text-xs text-gray-600 hover:bg-gray-50"
      >
        {value} <IoIosArrowDown size={14} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-white  rounded-lg shadow-lg z-20">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 ${
                value === opt ? "bg-gray-100 font-medium" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
