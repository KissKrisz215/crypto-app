import React from "react";
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
import { formatCurrency } from "../../utils";
import CoinTable from "../../components/CoinTable/";
export default class Home extends React.Component {
  state = {
    pricesData: null,
    marketData: null,
    errorMessage: null,
    currency: null,
    currencyPrice: null,
    currencyVolume: null,
  };
  async getCurrencyData() {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.activeCurrency.name}&days=180&interval=daily`
      );
      const pricesData = data.prices;
      const marketData = data.total_volumes.slice(
        data.total_volumes.length - 25,
        data.total_volumes.length
      );
      this.setState({
        pricesData,
        marketData,
        errorMessage: null,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        errorMessage: "There was an error retrieving the data.",
      });
    }
  }

  async getPriceAndVolume() {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false"
      );
      const currencyPrice =
        data.market_data.current_price[this.props.activeCurrency.name];
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
  }

  componentDidMount() {
    this.setState({ currency: this.props.activeCurrency });
    this.getCurrencyData();
    this.getPriceAndVolume();
    this.props.handleChangeActive("home");
  }

  componentDidUpdate() {
    if (this.state.currency.name !== this.props.activeCurrency.name) {
      this.getCurrencyData();
      this.getPriceAndVolume();
      this.setState({ currency: this.props.activeCurrency });
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          return (
            <Wrapper>
              <Container>
                <Header>Your overview</Header>
                <ChartsContainer>
                  <ChartWrapper>
                    {this.state.errorMessage && (
                      <ErrorContainer>
                        <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
                      </ErrorContainer>
                    )}
                    {this.state.pricesData && (
                      <ChartItem
                        currency={this.state.currency}
                        data={this.state.pricesData}
                        type="line"
                        color={theme.chart1}
                        title="BTC"
                        info={this.state.currencyPrice}
                      ></ChartItem>
                    )}
                  </ChartWrapper>
                  <ChartWrapper>
                    {this.state.errorMessage && (
                      <ErrorContainer>
                        <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
                      </ErrorContainer>
                    )}
                    {this.state.marketData && (
                      <ChartItem
                        currency={this.state.currency}
                        data={this.state.marketData}
                        type="bar"
                        color={theme.chart2}
                        title="BTC Volume"
                        info={this.state.currencyVolume}
                      ></ChartItem>
                    )}
                  </ChartWrapper>
                </ChartsContainer>
                <CoinTableWrapper>
                  <Header>Your overview</Header>
                  <CoinTableContainer>
                    <CoinTable />
                  </CoinTableContainer>
                </CoinTableWrapper>
              </Container>
            </Wrapper>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
