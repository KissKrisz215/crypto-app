import React from "react";
import axios from "axios";
import {
  SearchInput,
  SearchContainer,
  InputIcon,
  DropDownContainer,
  DropDownItem,
} from "./SearchBar.styles";
import Icons from "../../assets/index";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
    this.prevInputRef = React.createRef();
    this.prevInput = this.prevInputRef.current;
  }

  state = {
    searchValue: "",
    data: null,
    errorMessage: null,
    isOpen: false,
  };

  async getData() {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${this.state.searchValue}`
      );
      const slicedData = data.coins.slice(0, 25);
      this.setState({ data: slicedData, errorMessage: null });
    } catch (err) {
      console.log(err);
      this.setState({
        errorMessage: "There was an error retrieving the data.",
      });
    }
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
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
    document.addEventListener("click", this.handleClickOutside);
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
    document.removeEventListener("click", this.handleClickOutside);
  }

  render() {
    const { SearchIcon } = Icons;
    const { data, searchValue, isOpen, errorMessage } = this.state;
    return (
      <SearchContainer>
        <SearchInput
          onChange={this.handleSearch}
          placeholder="Search..."
          value={searchValue}
        ></SearchInput>
        {!errorMessage && isOpen && (
          <DropDownContainer ref={this.dropdown}>
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
          <DropDownContainer ref={this.dropdown}>
            Not Items Found
          </DropDownContainer>
        )}
        <InputIcon src={SearchIcon} alt="" />
      </SearchContainer>
    );
  }
}
