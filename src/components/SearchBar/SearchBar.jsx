import React from "react";
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

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
    this.prevInputRef = React.createRef();
    this.prevInput = this.prevInputRef.current;
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  state = {
    searchValue: "",
    data: null,
    errorMessage: null,
    isOpen: false,
    isLoading: true,
  };

  async getData() {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${this.state.searchValue}`
      );
      if (data.coins.length === 0) {
        this.setState({
          data: [],
          errorMessage: "There was an error retrieving the data.",
          isLoading: false,
        });
      } else {
        const slicedData = data.coins.slice(0, 25);
        this.setState({
          data: slicedData,
          errorMessage: null,
          isLoading: false,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        isLoading: true,
        data: [],
      });
    }
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value, isLoading: true, errorMessage: null });
    if (value.length === 0) {
      this.setState({ data: null, isOpen: false });
    } else {
      this.getData();
      this.setState({ isOpen: true });
    }
  };

  handleClickOutside = (event) => {
    if (
      this.dropdown.current &&
      !this.dropdown.current.contains(event.target)
    ) {
      this.closeDropdown();
    }
  };

  closeDropdown() {
    this.setState({ isOpen: false, searchValue: "" });
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentDidUpdate() {
    if (
      this.state.searchValue.length > 0 &&
      this.prevInputRef.current !== this.state.searchValue
    ) {
      this.getData();
      this.prevInputRef.current = this.state.searchValue;
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  render() {
    const { SearchIcon } = Icons;
    const { data, searchValue, isOpen, errorMessage, isLoading } = this.state;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <SearchContainer ref={this.dropdown}>
            <SearchInput
              onChange={this.handleSearch}
              placeholder="Search..."
              value={searchValue}
            ></SearchInput>
            {!errorMessage && isOpen && (
              <DropDownContainer>
                {data &&
                  data.map((coin) => (
                    <DropDownItem
                      onClick={() => closeDropdown()}
                      to={`/coins/${coin.name}`}
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
                  {" "}
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
            <InputIcon src={SearchIcon} alt="" />
          </SearchContainer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
