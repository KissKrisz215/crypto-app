import React from "react";
import axios from "axios";
import { SearchInput, SearchContainer, InputIcon } from "./SearchBar.styles";
import Icons from "../../assets/index";

const getData = async () => {
  const response = await axios(`https://api.coingecko.com/api/v3/coins/list`);
  const filteredArray = response.data.filter((item) => item.name.includes("b"));
  console.log(filteredArray);
};
console.log(getData());
export default class SearchBar extends React.Component {
  state = {
    searchValue: "",
    coinsData: [],
  };

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { SearchIcon } = Icons;

    return (
      <SearchContainer>
        <SearchInput
          onChange={this.handleSearch}
          placeholder="Search..."
        ></SearchInput>

        <InputIcon src={SearchIcon} alt="" />
      </SearchContainer>
    );
  }
}
