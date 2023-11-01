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
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../../store/search/actions";

const SearchBar = ({ isActive }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const prevInputRef = useRef("");

  const isLoading = useSelector((state) => state.search.isLoading);
  const data = useSelector((state) => state.search.data);
  const errorMessage = useSelector((state) => state.search.errorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchValue.length > 0 && prevInputRef.current !== searchValue) {
      dispatch(getSearchResults(searchValue));
      prevInputRef.current = searchValue;
    }
  }, [searchValue]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
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
        <SearchContainer ref={dropdownRef} isActive={isActive}>
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
