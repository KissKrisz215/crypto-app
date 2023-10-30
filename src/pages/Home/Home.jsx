import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { useSelector } from "react-redux";
import {
  Container,
  Header,
  Wrapper,
  ChartsContainer,
  ChartWrapper,
  ErrorContainer,
  ErrorMessage,
  CoinTableWrapper,
  CoinTableContainer,
} from "./Home.styles";
import ChartItem from "../../components/Chart/Chart";
import { formatCurrency, addCommas } from "../../utils";
import CoinTable from "../../components/CoinTable/";

const Home = ({ handleChangeActive }) => {
  const [pricesData, setPricesData] = useState(null);
  const [marketData, setMarketData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [currencyPrice, setCurrencyPrice] = useState(null);
  const [currencyVolume, setCurrencyVolume] = useState(null);
  const [pricesDate, setPricesDate] = useState({ name: "1d", days: 1 });
  const [marketDate, setMarketDate] = useState({ name: "1d", days: 1 });
  const [sortBy, setSortBy] = useState(null);
  const [sortType, setSortType] = useState(false);
  const [activeCategory, setActiveCategory] = useState({
    name: "Cryptocurrency",
    category: null,
  });
  const [showRows, setShowRows] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const activeCurrency = useSelector((state) => state.activeCurrency);
  const changeCurrentPage = (value) => {
    if (value > 0) {
      setCurrentPage(value);
    }
  };

  const handleShowRowsChange = (value) => {
    setShowRows(value);
  };

  const changeActiveCategory = (value) => {
    setActiveCategory(value);
  };

  const sortCoins = (value) => {
    setSortBy(value);
    setSortType(!sortType);
  };

  const getData = async (days, interval) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${
          activeCurrency.name
        }&days=${days}${interval ? `&interval=${interval}` : ""}`
      );
      return data;
    } catch (err) {
      console.log(err);
      setErrorMessage("There was an error retrieving the data.");
    }
  };

  const getPricesData = async () => {
    const days = pricesDate.days;
    let interval = "daily";
    switch (pricesDate.name) {
      case "1d":
        interval = null;
        break;
      case "1w":
        interval = null;
        break;
      case "1m":
        interval = null;
        break;
    }
    const data = await getData(days, interval);
    const pricesData = data.prices;

    setPricesData(pricesData);
    setErrorMessage(null);
  };

  const getMarketData = async () => {
    const days = marketDate.days;
    let interval = "daily";
    switch (marketDate.name) {
      case "1d":
        interval = null;
        break;
    }
    const data = await getData(days, interval);
    const marketData12 = data.total_volumes;

    setMarketData(marketData12);
    setErrorMessage(null);
  };

  const getPriceAndVolume = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false"
      );

      const currencyPrice = addCommas(
        data.market_data.current_price[activeCurrency.name]
      );

      const currencyVolume = formatCurrency(
        data.market_data.total_volume[activeCurrency.name]
      );

      setCurrencyPrice(currencyPrice);
      setCurrencyVolume(currencyVolume);
    } catch (err) {
      console.log(err);
      setErrorMessage("There was an error retrieving the data.");
    }
  };

  useEffect(() => {
    setCurrency(activeCurrency);
    getMarketData();
    getPricesData();
    getPriceAndVolume();
    handleChangeActive("home");
  }, [activeCurrency, handleChangeActive]);

  useEffect(() => {
    getMarketData();
  }, [marketDate]);

  useEffect(() => {
    getPricesData();
  }, [pricesDate]);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Wrapper>
          <Container>
            <Header>Your overview</Header>
            <ChartsContainer>
              <ChartWrapper>
                {errorMessage && (
                  <ErrorContainer>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                  </ErrorContainer>
                )}
                {pricesData && (
                  <ChartItem
                    currency={currency}
                    data={pricesData}
                    type="line"
                    color={theme.chart1}
                    title="BTC"
                    info={currencyPrice}
                    date={pricesDate.name}
                    changeDate={setPricesDate}
                  />
                )}
              </ChartWrapper>
              <ChartWrapper>
                {errorMessage && (
                  <ErrorContainer>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                  </ErrorContainer>
                )}
                {marketData && (
                  <ChartItem
                    currency={currency}
                    data={marketData}
                    type="bar"
                    color={theme.chart2}
                    title="BTC Volume"
                    info={currencyVolume}
                    date={marketDate.name}
                    changeDate={setMarketDate}
                  />
                )}
              </ChartWrapper>
            </ChartsContainer>
            <CoinTableWrapper>
              <Header>Your overview</Header>
              <CoinTableContainer>
                <CoinTable
                  sortCoins={sortCoins}
                  sortBy={sortBy}
                  sortType={sortType}
                  activeCategory={activeCategory}
                  changeActiveCategory={changeActiveCategory}
                  showRows={showRows}
                  handleShowRowsChange={handleShowRowsChange}
                  changeCurrentPage={changeCurrentPage}
                  currentPage={currentPage}
                />
              </CoinTableContainer>
            </CoinTableWrapper>
          </Container>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default Home;
