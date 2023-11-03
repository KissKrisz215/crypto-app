import React from "react";
import {
  NavbarLink,
  Wrapper,
  Container,
  NavbarContainer,
  OverviewContainer,
  OverViewText,
} from "./Navbar.styles";
import { SearchBar, CurrencyToggle, ThemeToggle } from "../../index";
import SubHeader from "../SubHeader/SubHeader";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import SearchMobile from "../SearchMobile";

const Navbar = ({ active }) => (
  <Wrapper>
    <SubHeader />
    <NavbarContainer>
      <OverviewContainer to="/">
        <OverViewText>Overview</OverViewText>
      </OverviewContainer>
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
    <MobileNavbar active={active} />
    <SearchMobile />
  </Wrapper>
);

export default Navbar;
