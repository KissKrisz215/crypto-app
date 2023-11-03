import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
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
  ChartsDesktopContainer,
  SubHeader,
} from "./Home.styles";
import ChartItem from "../../components/HomePage/Chart";
import { formatCurrency, addCommas } from "../../utils";
import CoinTable from "../../components/HomePage/CoinTable";
import {
  getChartData,
  setMarketDate,
  setPricesDate,
  getPriceAndVolume,
  setCurrency,
} from "../../store/charts/actions";
import LinksSocial from "../../components/HomePage/LinksSocial";
import MobileCharts from "../../components/HomePage/MobileCharts";

const Home = ({ handleChangeActive }) => {
  const dispatch = useDispatch();
  const {
    pricesData,
    marketData,
    currency,
    currencyPrice,
    currencyVolume,
    pricesDate,
    marketDate,
    errorMessage,
  } = useSelector((state) => state.chart);
  const [sortBy, setSortBy] = useState(null);
  const [sortType, setSortType] = useState(false);
  const activeCurrency = useSelector((state) => state.activeCurrency);

  const sortCoins = (value) => {
    setSortBy(value);
    setSortType(!sortType);
  };

  const getPricesData = async () => {
    const days = pricesDate.days;
    const type = "line";
    let interval = "daily";
    const name = pricesDate.name;
    if (name === "1d" || name === "1w" || name === "1m") {
      interval = null;
    }

    dispatch(getChartData(days, interval, type));
  };

  const getMarketData = async () => {
    const type = "bar";
    const days = marketDate.days;
    let interval = "daily";
    if (marketDate.name === "1d") {
      interval = null;
    }
    dispatch(getChartData(days, interval, type));
  };

  useEffect(() => {
    dispatch(setCurrency(activeCurrency));
    getMarketData();
    getPricesData();
    dispatch(getPriceAndVolume());
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
            <MobileCharts
              errorMessage={errorMessage}
              currency={currency}
              pricesData={pricesData}
              currencyPrice={currencyPrice}
              pricesDate={pricesDate}
              setPricesDate={setPricesDate}
              marketData={marketData}
              currencyVolume={currencyVolume}
              marketDate={marketDate}
              setMarketDate={setMarketDate}
            />
            <ChartsDesktopContainer>
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
            </ChartsDesktopContainer>
            <CoinTableWrapper>
              <SubHeader>Your overview</SubHeader>
              <CoinTableContainer>
                <CoinTable
                  sortCoins={sortCoins}
                  sortBy={sortBy}
                  sortType={sortType}
                />
              </CoinTableContainer>
            </CoinTableWrapper>
            <LinksSocial />
          </Container>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default Home;
