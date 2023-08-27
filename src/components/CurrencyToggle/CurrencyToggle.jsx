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

export default class CurrencyToggle extends React.Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
  }

  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
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
            <DropdownIcon>{this.props.activeCurrency.symbol}</DropdownIcon>
            <DropdownHeader>
              {this.props.activeCurrency.name.toUpperCase()}{" "}
              <DropdownArrow
                src={Icons.ArrowIcon}
                isopen={this.state.isOpen}
              ></DropdownArrow>
            </DropdownHeader>
          </ActiveDropdown>
          {this.state.isOpen && (
            <DropdownMenu>
              {this.props.currencies.map((currency) => (
                <DropdownItem
                  key={currency.name}
                  onClick={() => this.props.handleActiveCurrency(currency)}
                >
                  <DropdownIcon>{currency.symbol}</DropdownIcon>
                  <DropdownHeader>
                    {currency.name.toUpperCase()}
                    {this.props.activeCurrency.name === currency.name ? (
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
