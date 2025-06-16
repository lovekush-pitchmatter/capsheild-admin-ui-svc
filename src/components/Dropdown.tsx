import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

export interface DropdownOption {
  label: string;
  value: string | number;
  image?: string;
}

interface DropdownProps {
  label?: string;
  placeholder: string;
  options: DropdownOption[];
  onSelect?: (selected: DropdownOption | DropdownOption[]) => void;
  value?: string | number | (string | number)[];
  isMultiSelect?: boolean;
  disabled?: boolean;
}

function Dropdown({
  label,
  placeholder,
  options = [],
  onSelect,
  value,
  isMultiSelect = false,
  disabled = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      if (isMultiSelect) {
        const initialSelected = options.filter((option) =>
          Array.isArray(value) ? value.includes(option.value) : false
        );
        setSelectedOptions(initialSelected);
      } else {
        const initialSelected = options.find(
          (option) => option.value === value
        );
        setSelectedOptions(initialSelected ? [initialSelected] : []);
      }
    } else {
      setSelectedOptions([]);
    }
  }, [value, options, isMultiSelect]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    let newSelected: DropdownOption[];

    if (isMultiSelect) {
      const isAlreadySelected = selectedOptions.some(
        (s) => s.value === option.value
      );
      if (isAlreadySelected) {
        newSelected = selectedOptions.filter((s) => s.value !== option.value);
      } else {
        newSelected = [...selectedOptions, option];
      }
      setSelectedOptions(newSelected);
      if (onSelect) {
        onSelect(newSelected);
      }
    } else {
      newSelected = [option];
      setSelectedOptions(newSelected);
      setIsOpen(false);
      if (onSelect) {
        onSelect(option);
      }
    }
  };

  const handleRemoveTag = (optionToRemove: DropdownOption) => {
    const newSelected = selectedOptions.filter(
      (s) => s.value !== optionToRemove.value
    );
    setSelectedOptions(newSelected);
    if (onSelect) {
      onSelect(newSelected);
    }
  };

  const displayValue = () => {
    if (isMultiSelect) {
      return (
        <div className="dropdown-header-content">
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option) => (
              <span key={option.value} className="dropdown-tag">
                {option.label}
                <button
                  type="button"
                  className="dropdown-tag-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveTag(option);
                  }}
                >
                  <X size={12} />
                </button>
              </span>
            ))
          ) : (
            <span className="dropdown-placeholder">{placeholder}</span>
          )}
        </div>
      );
    } else {
      const selected = selectedOptions.length > 0 ? selectedOptions[0] : null;
      return selected ? (
        <span className="dropdown-single-value">
          {selected.image && (
            <img
              src={selected.image}
              alt={selected.label}
              className="dropdown-flag-icon"
            />
          )}
          {selected.label}
        </span>
      ) : (
        placeholder
      );
    }
  };

  const isOptionSelected = (option: DropdownOption) => {
    return selectedOptions.some((s) => s.value === option.value);
  };

  return (
    <div className="form-field-group">
      {label && <label className="input-label">{label}</label>}
      <div
        className={`dropdown-container ${isOpen ? "open" : ""} ${
          isMultiSelect ? "multi-select" : ""
        } ${selectedOptions.length > 0 ? "has-value" : ""} ${
          disabled ? "disabled" : ""
        }`}
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          className="dropdown-header flex items-center  gap-2"
          disabled={disabled}
        >
          {displayValue()}
          <ChevronDown className="lucide-icon dropdown-arrow" />
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={isOptionSelected(option) ? "selected" : ""}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
