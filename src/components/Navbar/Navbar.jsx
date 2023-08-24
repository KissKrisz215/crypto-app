import React from "react";
import {
  NavbarLink,
  Wrapper,
  Container,
  NavbarContainer,
} from "./Navbar.styles";
import { SearchBar, CurrencyToggle, ThemeToggle } from "../index";
import SubHeader from "../SubHeader/SubHeader";

export default class Navbar extends React.Component {
  render() {
    return (
      <Wrapper>
        <SubHeader />
        <NavbarContainer>
          <Container>
            <NavbarLink page="home" active={this.props.active} to="/">
              Coins
            </NavbarLink>
            <NavbarLink
              page="portfolio"
              active={this.props.active}
              to="/portfolio"
            >
              Portfolio
            </NavbarLink>
          </Container>
          <Container gap="1rem">
            <SearchBar />
            <CurrencyToggle />
            <ThemeToggle handleChangeTheme={this.props.handleChangeTheme} />
          </Container>
        </NavbarContainer>
      </Wrapper>
    );
  }
}
