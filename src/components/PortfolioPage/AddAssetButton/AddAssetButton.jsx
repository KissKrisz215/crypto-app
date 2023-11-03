import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
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
  ModalHeaderMobile,
} from "./AddAssetButton.styles";
import Icons from "../../../assets/index";
import ModalInput from "../ModalInput";
import { LoadingSpinner } from "../../LoadingAnimations/";
import { setData } from "../../../store/portfolio/actions";
import {
  setIsLoading,
  setListData,
  setErrorMessage,
} from "../../../store/modal/actions";
import { getData } from "../../../store/modal/actions";

const AddAssetButton = () => {
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const listData = useSelector((state) => state.coinSearch.listData);
  const isLoading = useSelector((state) => state.coinSearch.isLoading);
  const errorMessage = useSelector((state) => state.coinSearch.errorMessage);

  const data = useSelector((state) => state.portfolio.data);
  const modalRef = useRef(null);
  const activeCurrency = useSelector((state) => state.activeCurrency);
  const dispatch = useDispatch();

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

  const getTokenAmount = async (coin, amount) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin.name.toLowerCase()}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      return amount / data.market_data.current_price[activeCurrency.name];
    } catch (err) {
      console.log(err);
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
    dispatch(setIsLoading(true));
    dispatch(setErrorMessage(null));
    if (value.length === 0) {
      dispatch(setListData(null));
      setIsSearchOpen(false);
    } else {
      dispatch(getData(searchValue));
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

  const handleSave = async () => {
    const { amount, date, coin } = formData;
    const purchaseAmount = await getTokenAmount(coin, amount);
    if (isComplete === true) {
      const coins = {
        currency: activeCurrency,
        purchasePrice: amount,
        purchaseDate: date,
        purchaseAmount: purchaseAmount,
        data: coin,
        id: nanoid(),
      };

      const dataCopy = [...data];
      dataCopy.push(coins);
      dispatch(setData(dataCopy));

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
                <ModalHeaderMobile>Select Coins</ModalHeaderMobile>
                <InputWrapper ref={modalRef}>
                  <ModalInput
                    title="Select Coins"
                    change={handleSearch}
                    value={searchValue}
                  >
                    {!errorMessage && isSearchOpen && (
                      <DropDownContainer>
                        {listData &&
                          listData.map((coin) => (
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
