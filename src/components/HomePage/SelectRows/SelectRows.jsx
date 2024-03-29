import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
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
import Icons from "../../../assets/index";
import { setShowRows } from "../../../store/coins/actions";

const RowsArray = [10, 25, 50, 100];

const SelectRows = ({ showRows }) => {
  const dispatch = useDispatch();
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
          <ArrowLogo alt="Arrow Icon" src={Icons.ArrowIcon} />
        </SelectHeader>
        {isOpen && (
          <SelectDropdown>
            <SelectButton>
              {RowsArray &&
                RowsArray.map((item) => (
                  <SelectOption
                    key={item}
                    onClick={() => dispatch(setShowRows(item))}
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
