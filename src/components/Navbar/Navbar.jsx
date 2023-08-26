import React from "react";
import {
  NavbarLink,
  Wrapper,
  Container,
  NavbarContainer,
} from "./Navbar.styles";
import { SearchBar, CurrencyToggle, ThemeToggle } from "../index";
import SubHeader from "../SubHeader/SubHeader";

const currencies = [
  {
    name: "usd",
    symbol: "$",
    isActive: true,
  },
  {
    name: "eur",
    symbol: "€",
    isActive: false,
  },
  {
    name: "gbp",
    symbol: "£",
    isActive: false,
  },
];
export default class Navbar extends React.Component {
  state = {
    activeCurrency: currencies[0],
  };

  handleActiveCurrency = (currency) => {
    this.setState({ activeCurrency: currency });
  };

  render() {
    return (
      <Wrapper>
        <SubHeader activeCurrency={this.state.activeCurrency} />
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
            <CurrencyToggle
              activeCurrency={this.state.activeCurrency}
              handleActiveCurrency={this.handleActiveCurrency}
              currencies={currencies}
            />
            <ThemeToggle handleChangeTheme={this.props.handleChangeTheme} />
          </Container>
        </NavbarContainer>
      </Wrapper>
    );
  }
}
