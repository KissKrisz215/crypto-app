import React from "react";
import {
  NavbarLink,
  Wrapper,
  Container,
  NavbarContainer,
} from "./Navbar.styles";
import { SearchBar, CurrencyToggle, ThemeToggle } from "../index";
import SubHeader from "../SubHeader/SubHeader";

const Navbar = ({ active }) => (
  <Wrapper>
    <SubHeader />
    <NavbarContainer>
      <Container>
        <NavbarLink page="home" active={active} to="/">
          Coins
        </NavbarLink>
        <NavbarLink page="portfolio" active={active} to="/portfolio">
          Portfolio
        </NavbarLink>
      </Container>
      <Container gap="1rem">
        <SearchBar />
        <CurrencyToggle />
        <ThemeToggle />
      </Container>
    </NavbarContainer>
  </Wrapper>
);

export default Navbar;
