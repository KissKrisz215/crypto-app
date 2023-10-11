import React, { useState, useEffect, useRef } from "react";
import {
  SelectWrapper,
  SelectButton,
  SelectOption,
  SelectHeader,
  SelectDropdown,
  SelectContainer,
  ArrowLogo,
  NavigationText,
} from "./SelectRows.styles";
import Icons from "../../assets/index";

const RowsArray = [10, 25, 50, 100];

const SelectRows = ({ showRows, handleShowRowsChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <SelectWrapper onClick={handleToggle} ref={dropdownRef}>
      <NavigationText>Show:</NavigationText>
      <SelectContainer>
        <SelectHeader>
          {showRows && showRows}
          <ArrowLogo src={Icons.ArrowIcon} />
        </SelectHeader>
        {isOpen && (
          <SelectDropdown>
            <SelectButton>
              {RowsArray &&
                RowsArray.map((item) => (
                  <SelectOption
                    key={item}
                    onClick={() => handleShowRowsChange(item)}
                    value={item}
                  >
                    {item}
                  </SelectOption>
                ))}
            </SelectButton>
          </SelectDropdown>
        )}
      </SelectContainer>
    </SelectWrapper>
  );
};

export default SelectRows;
