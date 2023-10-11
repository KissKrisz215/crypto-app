import React, { useState, useEffect, useRef } from "react";
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

const AddAssetButton = ({ activeCurrency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    coin: {
      name: "Bitcoin",
      symbol: "BTC",
      thumb: Icons.BitcoinIcon,
    },
    amount: null,
    date: null,
  });
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    handleSave();
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    const { amount, date } = formData;
    if (!isComplete && amount && date && selectedCoin) {
      const selectedDate = new Date(date);
      const currentDate = new Date();
      if (amount > 0 && selectedDate <= currentDate) {
        setIsComplete(true);
      }
    }

    if (isComplete && amount === "") {
      setIsComplete(false);
    }

    if (isComplete && date) {
      const selectedDate = new Date(date);
      const currentDate = new Date();
      if (selectedDate > currentDate) {
        setIsComplete(false);
      }
    }
  }, [formData]);

  const getData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${searchValue}`
      );
      if (data.coins.length === 0) {
        setData([]);
        setErrorMessage("There was an error retrieving the data.");
        setIsLoading(false);
      } else {
        const slicedData = data.coins.slice(0, 25);
        setData(slicedData);
        setErrorMessage(null);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(true);
      setData([]);
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  const closeDropdown = () => {
    setIsSearchOpen(false);
    setSearchValue("");
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    setIsLoading(true);
    setErrorMessage(null);
    if (value.length === 0) {
      setData(null);
      setIsSearchOpen(false);
    } else {
      getData();
      setIsSearchOpen(true);
    }
  };

  const handleModalToggle = () => {
    setIsComplete(false);
    setFormData({
      coin: {
        name: "Bitcoin",
        symbol: "BTC",
        thumb: Icons.BitcoinIcon,
      },
      amount: "",
      date: "",
    });
    setSearchValue("");
    setIsOpen(!isOpen);
    setSelectedCoin(null);
  };

  const handleCoinChange = (coin) => {
    closeDropdown();
    setFormData({
      ...formData,
      coin,
    });
    setSearchValue(coin.name);
    setSelectedCoin(coin.name);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const { amount, date, coin } = formData;
    if (isComplete === true) {
      const existingPortfolio = localStorage.getItem("portfolio");

      const coins = {
        currency: activeCurrency,
        purchasePrice: amount,
        purchaseDate: date,
        data: coin,
      };

      if (existingPortfolio) {
        const data = JSON.parse(existingPortfolio);
        data.push(coins);
        localStorage.setItem("portfolio", JSON.stringify(data));
      } else {
        localStorage.setItem("portfolio", JSON.stringify([coins]));
      }
      handleModalToggle();
    }
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <ButtonContainer>
          {isOpen && <ModalBackDrop />}
          <Button onClick={handleModalToggle}>Add Asset</Button>
          <ModalWrapper isOpen={isOpen}>
            <ModalContainer>
              <ModalHeader>Select Coins</ModalHeader>
              <ModalCloseButton
                onClick={handleModalToggle}
                src={Icons.CrossIcon}
              ></ModalCloseButton>
              <ModalBody>
                <IconWrapper>
                  <IconContainer>
                    <Icon src={formData.coin.thumb} />
                  </IconContainer>
                  <IconTitle>
                    {formData.coin.name}({formData.coin.symbol})
                  </IconTitle>
                </IconWrapper>
                <InputWrapper ref={modalRef}>
                  <ModalInput
                    title="Select Coins"
                    change={handleSearch}
                    value={searchValue}
                  >
                    {!errorMessage && isSearchOpen && (
                      <DropDownContainer>
                        {data &&
                          data.map((coin) => (
                            <DropDownItem
                              key={coin.name}
                              onClick={() => handleCoinChange(coin)}
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
                    change={handleInputChange}
                    title="Purchased Amount"
                    name="amount"
                    value={formData.amount}
                  />
                  <ModalInput
                    change={handleInputChange}
                    title=""
                    name="date"
                    value={formData.date}
                    type="date"
                  />
                </InputWrapper>
              </ModalBody>
              <ModalButtonWrapper>
                <ModalButton
                  isComplete={true}
                  onClick={handleModalToggle}
                  color={theme.modal1}
                  bgColor={"#ffffff"}
                >
                  Close
                </ModalButton>
                <ModalButton
                  isComplete={isComplete}
                  color={theme.modal2}
                  bgColor={"#06d554"}
                  onClick={handleSave}
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
};

export default AddAssetButton;
