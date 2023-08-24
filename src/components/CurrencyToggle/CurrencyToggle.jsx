import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownContainer,
  ActiveDropdown,
  CurrencyToggleContainer,
  DropdownIcon,
  DropdownHeader,
  DropdownArrow,
} from "./CurrencyToggle.styles";
import Icons from "../../assets/index";

const currencies = [
  {
    name: "USD",
    symbol: "$",
    isActive: true,
  },
  {
    name: "EUR",
    symbol: "€",
    isActive: false,
  },
  {
    name: "GBP",
    symbol: "£",
    isActive: false,
  },
];
export default class CurrencyToggle extends React.Component {
  state = {
    isOpen: false,
    activeCurrency: currencies[0],
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleActiveCurrency = (currency) => {
    this.setState({ activeCurrency: currency });
  };

  render() {
    return (
      <CurrencyToggleContainer onClick={this.handleToggle}>
        <DropdownContainer>
          <ActiveDropdown>
            <DropdownIcon>{this.state.activeCurrency.symbol}</DropdownIcon>
            <DropdownHeader>
              {this.state.activeCurrency.name}{" "}
              <DropdownArrow
                src={Icons.ArrowIcon}
                isOpen={this.state.isOpen}
              ></DropdownArrow>
            </DropdownHeader>
          </ActiveDropdown>
          {this.state.isOpen && (
            <DropdownMenu>
              {currencies.map((currency) => (
                <DropdownItem
                  onClick={() => this.handleActiveCurrency(currency)}
                >
                  <DropdownIcon>{currency.symbol}</DropdownIcon>
                  <DropdownHeader>
                    {currency.name}
                    {this.state.activeCurrency.name === currency.name ? (
                      <span>√</span>
                    ) : null}
                  </DropdownHeader>
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
      </CurrencyToggleContainer>
    );
  }
}
