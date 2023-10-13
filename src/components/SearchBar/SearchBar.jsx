import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ThemeContext } from "styled-components";
import {
  SearchInput,
  SearchContainer,
  InputIcon,
  DropDownContainer,
  DropDownItem,
  DropDownHeader,
} from "./SearchBar.styles";
import Icons from "../../assets/index";
import { LoadingSpinner } from "../LoadingAnimations/";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef(null);
  const prevInputRef = useRef("");

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          `https://api.coingecko.com/api/v3/search?query=${searchValue}`
        );
        if (data.coins.length === 0) {
          setData([]);
          setErrorMessage("There was an error retrieving the data.");
          setIsLoading(false);
        } else {
          const slicedData = data.coins.slice(0, 25);
          setData(slicedData);
          setErrorMessage(null);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(true);
        setData([]);
      }
    };

    if (searchValue.length > 0 && prevInputRef.current !== searchValue) {
      getData();
      prevInputRef.current = searchValue;
    }
  }, [searchValue]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    setIsLoading(true);
    setErrorMessage(null);
    setIsOpen(value.length > 0);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setSearchValue("");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <SearchContainer ref={dropdownRef}>
          <SearchInput
            onChange={handleSearch}
            placeholder="Search..."
            value={searchValue}
          ></SearchInput>
          {!errorMessage && isOpen && (
            <DropDownContainer>
              {data &&
                data.map((coin) => (
                  <DropDownItem
                    key={coin.name}
                    onClick={closeDropdown}
                    to={`/coins/${coin.name.toLowerCase()}`}
                  >
                    {coin.name}
                  </DropDownItem>
                ))}
            </DropDownContainer>
          )}
          {errorMessage && isOpen && (
            <DropDownContainer>
              <DropDownHeader> No Results</DropDownHeader>
            </DropDownContainer>
          )}
          {isLoading && isOpen && (
            <DropDownContainer>
              <DropDownHeader>
                <LoadingSpinner
                  width="25px"
                  height="25px"
                  border="4px"
                  color={theme.primary}
                  borderColor={theme.main}
                />
              </DropDownHeader>
            </DropDownContainer>
          )}
          <InputIcon src={Icons.SearchIcon} alt="" />
        </SearchContainer>
      )}
    </ThemeContext.Consumer>
  );
};

export default SearchBar;
