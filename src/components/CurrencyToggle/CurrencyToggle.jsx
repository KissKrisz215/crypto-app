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
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
  }

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

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.dropdown && !this.dropdown.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    return (
      <CurrencyToggleContainer onClick={this.handleToggle}>
        <DropdownContainer ref={this.dropdown}>
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
