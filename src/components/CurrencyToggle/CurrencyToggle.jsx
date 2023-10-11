import React, { useState, useEffect, useRef } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownContainer,
  ActiveDropdown,
  CurrencyToggleContainer,
  DropdownIcon,
  DropdownHeader,
  DropdownArrow,
} from "./CurrencyToggle.styles";
import Icons from "../../assets/index";

const CurrencyToggle = ({
  activeCurrency,
  currencies,
  handleActiveCurrency,
}) => {
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
    <CurrencyToggleContainer onClick={handleToggle}>
      <DropdownContainer ref={dropdownRef}>
        <ActiveDropdown>
          <DropdownIcon>{activeCurrency.symbol}</DropdownIcon>
          <DropdownHeader>
            {activeCurrency.name.toUpperCase()}{" "}
            <DropdownArrow
              src={Icons.ArrowIcon}
              isopen={isOpen}
            ></DropdownArrow>
          </DropdownHeader>
        </ActiveDropdown>
        {isOpen && (
          <DropdownMenu>
            {currencies.map((currency) => (
              <DropdownItem
                key={currency.name}
                onClick={() => handleActiveCurrency(currency)}
              >
                <DropdownIcon>{currency.symbol}</DropdownIcon>
                <DropdownHeader>
                  {currency.name.toUpperCase()}
                  {activeCurrency.name === currency.name ? (
                    <span>√</span>
                  ) : null}
                </DropdownHeader>
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </DropdownContainer>
    </CurrencyToggleContainer>
  );
};

export default CurrencyToggle;
