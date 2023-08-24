import React from "react";
import { SearchInput, SearchContainer, InputIcon } from "./SearchBar.styles";
import Icons from "../../assets/index";
export default class SearchBar extends React.Component {
  render() {
    const { SearchIcon } = Icons;

    return (
      <SearchContainer>
        <SearchInput placeholder="Search..."></SearchInput>

        <InputIcon src={SearchIcon} alt="" />
      </SearchContainer>
    );
  }
}
