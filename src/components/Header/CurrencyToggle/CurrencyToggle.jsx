import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Icons from "../../../assets/index";
import { setActiveCurrency } from "../../../store/currency/actions";

const currencies = [
  {
    name: "usd",
    symbol: "$",
    isActive: true,
  },
  {
    name: "eur",
    symbol: "€",
    isActive: false,
  },
  {
    name: "gbp",
    symbol: "£",
    isActive: false,
  },
];

const CurrencyToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const activeCurrency = useSelector((state) => state.activeCurrency);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();

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
              alt="Dropdown arrow"
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
                onClick={() => dispatch(setActiveCurrency(currency))}
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
