import React from "react";
import { NavbarLink } from "./Navbar.styles";
import { SearchBar, CurrencyToggle, ThemeToggle } from "../index";


export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      <NavbarLink to="/">Coins</NavbarLink>
      <NavbarLink to="/portfolio">Portfolio</NavbarLink>
      <SearchBar />
      <CurrencyToggle />
      <ThemeToggle />
      </div>
    );
  }
}
