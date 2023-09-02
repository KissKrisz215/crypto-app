import React, { Component } from "react";
import axios from "axios";
import { ThemeContext } from "styled-components";
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.sortCoins = this.sortCoins.bind(this);
    this.state = {
      pricesData: null,
      marketData: null,
      errorMessage: null,
      currency: null,
      currencyPrice: null,
      currencyVolume: null,
      pricesDate: {
        name: "1d",
        days: 1,
      },
      marketDate: {
        name: "1d",
        days: 1,
      },
      sortBy: null,
      sortType: false,
    };
  }

  sortCoins(value) {
    this.setState({ sortBy: value, sortType: !this.state.sortType });
  }

  changePricesDate = (value) => {
    this.setState({
      pricesDate: value,
    });
  };

  changeMarketDate = (value) => {
    this.setState({
      marketDate: value,
    });
  };

  getData = async (days, interval) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${
          this.props.activeCurrency.name
        }&days=${days}${interval ? `&interval=${interval}` : null}`
      );
      return data;
    } catch (err) {
      console.log(err);
      this.setState({
        errorMessage: "There was an error retrieving the data.",
      });
    }
  };

  getPricesData = async () => {
    const days = this.state.pricesDate.days;
    let interval = "daily";
    switch (this.state.pricesDate.name) {
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
    const data = await this.getData(days, interval);
    const pricesData = data.prices;

    this.setState({ pricesData, errorMessage: null });
  };

  getMarketData = async () => {
    const days = this.state.marketDate.days;
    let interval = "daily";
    switch (this.state.marketDate.name) {
      case "1d":
        interval = null;
        break;
    }
    const data = await this.getData(days, interval);
    const marketData12 = data.total_volumes;

    this.setState({
      marketData: marketData12,
      errorMessage: null,
    });
  };

  getPriceAndVolume = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false"
      );

      const currencyPrice = addCommas(
        data.market_data.current_price[this.props.activeCurrency.name]
      );

      const currencyVolume = formatCurrency(
        data.market_data.total_volume[this.props.activeCurrency.name]
      );

      this.setState({ currencyPrice, currencyVolume });
    } catch (err) {
      console.log(err);
      this.setState({
        errorMessage: "There was an error retrieving the data.",
      });
    }
  };

  componentDidMount() {
    this.setState({ currency: this.props.activeCurrency });
    this.getMarketData();
    this.getPricesData();
    this.getPriceAndVolume();
    this.props.handleChangeActive("home");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeCurrency !== this.props.activeCurrency) {
      this.setState({ currency: this.props.activeCurrency });
      this.getMarketData();
      this.getPricesData();
      this.getPriceAndVolume();
    }

    if (prevState.marketDate.name !== this.state.marketDate.name) {
      this.getMarketData();
    }

    if (prevState.pricesDate.name !== this.state.pricesDate.name) {
      this.getPricesData();
    }
  }

  render() {
    const {
      errorMessage,
      currency,
      pricesData,
      currencyPrice,
      pricesDate,
      marketData,
      currencyVolume,
      marketDate,
      sortBy,
      sortType,
    } = this.state;
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
                  {this.state.pricesData && (
                    <ChartItem
                      currency={currency}
                      data={pricesData}
                      type="line"
                      color={theme.chart1}
                      title="BTC"
                      info={currencyPrice}
                      date={pricesDate.name}
                      changeDate={this.changePricesDate}
                    />
                  )}
                </ChartWrapper>
                <ChartWrapper>
                  {errorMessage && (
                    <ErrorContainer>
                      <ErrorMessage>{errorMessage}</ErrorMessage>
                    </ErrorContainer>
                  )}
                  {this.state.marketData && (
                    <ChartItem
                      currency={currency}
                      data={marketData}
                      type="bar"
                      color={theme.chart2}
                      title="BTC Volume"
                      info={currencyVolume}
                      date={marketDate.name}
                      changeDate={this.changeMarketDate}
                    />
                  )}
                </ChartWrapper>
              </ChartsContainer>
              <CoinTableWrapper>
                <Header>Your overview</Header>
                <CoinTableContainer>
                  <CoinTable
                    sortCoins={this.sortCoins}
                    sortBy={sortBy}
                    sortType={sortType}
                  />
                </CoinTableContainer>
              </CoinTableWrapper>
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Home;
