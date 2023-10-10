import React from "react";
import axios from "axios";

import { ThemeContext } from "styled-components";
import {
  ButtonContainer,
  Button,
  ModalWrapper,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconWrapper,
  ModalContainer,
  IconContainer,
  IconTitle,
  Icon,
  InputWrapper,
  ModalButtonWrapper,
  ModalButton,
  DropDownContainer,
  DropDownItem,
  DropDownHeader,
  ModalBackDrop,
} from "./AddAssetButton.styles";
import Icons from "../../assets/index";
import ModalInput from "../ModalInput";
import { LoadingSpinner } from "../LoadingAnimations/";

export default class AddAssetButton extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  state = {
    isOpen: false,
    isComplete: false,
    formData: {
      coin: {
        name: "Bitcoin",
        symbol: "BTC",
        thumb: Icons.BitcoinIcon,
      },
      amount: null,
      date: null,
    },
    selectedCoin: null,
    searchValue: "",
    errorMessage: null,
    isSearchOpen: false,
    isLoading: true,
    data: null,
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
    this.handleSave();
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  componentDidUpdate() {
    const { isComplete, amount, date, selectedCoin } = this.state;
    if (!isComplete && amount && date && selectedCoin) {
      const selectedDate = new Date(date);
      const currentDate = new Date();
      if (amount > 0 && selectedDate <= currentDate) {
        this.setState({ isComplete: true });
      }
    }

    if (isComplete && amount === "") {
      this.setState({ isComplete: false });
    }

    if (isComplete && date) {
      const selectedDate = new Date(date);
      const currentDate = new Date();
      if (selectedDate > currentDate) {
        this.setState({ isComplete: false });
      }
    }
  }

  async getData() {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${this.state.searchValue}`
      );
      if (data.coins.length === 0) {
        this.setState({
          data: [],
          errorMessage: "There was an error retrieving the data.",
          isLoading: false,
        });
      } else {
        const slicedData = data.coins.slice(0, 25);
        this.setState({
          data: slicedData,
          errorMessage: null,
          isLoading: false,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        isLoading: true,
        data: [],
      });
    }
  }

  handleClickOutside = (event) => {
    if (
      this.modalRef.current &&
      !this.modalRef.current.contains(event.target)
    ) {
      this.closeDropdown();
    }
  };

  closeDropdown() {
    this.setState({ isSearchOpen: false, searchValue: this.state.data.name });
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value, isLoading: true, errorMessage: null });
    if (value.length === 0) {
      this.setState({ data: null, isSearchOpen: false });
    } else {
      this.getData();
      this.setState({ isSearchOpen: true });
    }
  };

  handleModalToggle = () => {
    this.setState({
      isComplete: false,
      amount: "",
      date: "",
      data: null,
      formData: {
        coin: {
          name: "Bitcoin",
          symbol: "BTC",
          thumb: Icons.BitcoinIcon,
        },
      },
      searchValue: "",
      isOpen: !this.state.isOpen,
      selectedCoin: null,
    });
  };

  handleCoinChange = (coin) => {
    this.closeDropdown();
    this.setState({
      formData: { coin: coin },
      searchValue: coin.name,
      selectedCoin: coin.name,
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSave = () => {
    const {
      isComplete,
      amount,
      date,
      formData: { coin },
    } = this.state;
    if (isComplete === true) {
      const existingPortfolio = localStorage.getItem("portfolio");

      const coins = {
        currency: this.props.activeCurrency,
        purchasePrice: amount,
        purchaseDate: date,
        data: coin,
      };

      if (existingPortfolio) {
        const data = JSON.parse(existingPortfolio);
        data.push(coins);
        localStorage.setItem("portfolio", JSON.stringify(data));
      } else {
        localStorage.setItem("portfolio", JSON.stringify([]));
      }
      this.handleModalToggle();
    }
  };

  render() {
    const {
      searchValue,
      errorMessage,
      isSearchOpen,
      isLoading,
      data,
      amount,
      date,
      isOpen,
      isComplete,
      formData: {
        coin: { name, symbol, thumb },
      },
    } = this.state;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <ButtonContainer>
            {isOpen && <ModalBackDrop />}
            <Button onClick={this.handleModalToggle}>Add Asset</Button>
            <ModalWrapper isOpen={isOpen}>
              <ModalContainer>
                <ModalHeader>Select Coins</ModalHeader>
                <ModalCloseButton
                  onClick={this.handleModalToggle}
                  src={Icons.CrossIcon}
                ></ModalCloseButton>
                <ModalBody>
                  <IconWrapper>
                    <IconContainer>
                      <Icon src={thumb} />
                    </IconContainer>
                    <IconTitle>
                      {name}({symbol})
                    </IconTitle>
                  </IconWrapper>
                  <InputWrapper ref={this.modalRef}>
                    <ModalInput
                      title="Select Coins"
                      change={this.handleSearch}
                      value={searchValue}
                    >
                      {!errorMessage && isSearchOpen && (
                        <DropDownContainer>
                          {data &&
                            data.map((coin) => (
                              <DropDownItem
                                onClick={() => this.handleCoinChange(coin)}
                              >
                                {coin.name}
                              </DropDownItem>
                            ))}
                        </DropDownContainer>
                      )}
                      {errorMessage && isSearchOpen && (
                        <DropDownContainer>
                          <DropDownHeader> No Results</DropDownHeader>
                        </DropDownContainer>
                      )}
                      {isLoading && isSearchOpen && (
                        <DropDownContainer>
                          <DropDownHeader>
                            {" "}
                            <LoadingSpinner
                              width="25px"
                              height="25px"
                              border="4px"
                              color={theme.primary}
                              borderColor={theme.main}
                            />
                          </DropDownHeader>
                        </DropDownContainer>
                      )}
                    </ModalInput>
                    <ModalInput
                      change={this.handleInputChange}
                      title="Purchased Amount"
                      name="amount"
                      value={amount}
                    />
                    <ModalInput
                      change={this.handleInputChange}
                      title=""
                      name="date"
                      value={date}
                      type="date"
                    />
                  </InputWrapper>
                </ModalBody>
                <ModalButtonWrapper>
                  <ModalButton
                    isComplete={true}
                    onClick={this.handleModalToggle}
                    color={theme.modal1}
                    bgColor={"#ffffff"}
                  >
                    Close
                  </ModalButton>
                  <ModalButton
                    isComplete={isComplete}
                    color={theme.modal2}
                    bgColor={"#06d554"}
                    onClick={this.handleSave}
                  >
                    Save and Continue
                  </ModalButton>
                </ModalButtonWrapper>
              </ModalContainer>
            </ModalWrapper>
          </ButtonContainer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
