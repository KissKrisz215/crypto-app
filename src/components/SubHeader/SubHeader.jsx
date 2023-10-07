import React from "react";
import axios from "axios";
import {
  Container,
  Col,
  Row,
  Circle,
  CoinLogo,
  ArrowLogo,
  SubNavItem,
} from "./SubHeader.styles";
import {
  formatPercentage,
  formatCurrency,
  calculatePercentage,
} from "../../utils/index";
import Icons from "../../assets/index";
import PercentageBar from "../PercentageBar/index";
import { LoadingBar } from "../LoadingAnimations";
export default class SubHeader extends React.Component {
  state = {
    currencies: null,
    exchanges: null,
    totalMarketCap: null,
    totalVolume: null,
    bitcoinPercentage: null,
    ethPercentage: null,
    marketCapPercentage: null,
    totalMarketTrend: null,
    errorMessage: null,
    isLoading: true,
  };

  async handleData() {
    const {
      activeCurrency: { name },
    } = this.props;

    try {
      const {
        data: { data },
      } = await axios("https://api.coingecko.com/api/v3/global");
      this.setState({
        currencies: data.active_cryptocurrencies,
        exchanges: data.markets,
        bitcoinPercentage: formatPercentage(data.market_cap_percentage.btc),
        ethPercentage: formatPercentage(data.market_cap_percentage.eth),
        totalMarketCap: formatCurrency(data.total_market_cap[name]),
        totalVolume: formatCurrency(data.total_volume[name]),
        marketCapPercentage: calculatePercentage(
          data.total_market_cap[name],
          data.total_volume[name]
        ),
        totalMarketTrend:
          data.market_cap_change_percentage_24h_usd > 0 ? true : false,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        errorMessage:
          "An error occurred while fetching data. Please try again later.",
        isLoading: true,
      });
    }
  }

  componentDidMount() {
    this.handleData();
  }

  render() {
    const {
      currencies,
      exchanges,
      totalMarketCap,
      totalMarketTrend,
      totalVolume,
      bitcoinPercentage,
      ethPercentage,
    } = this.state;

    if (this.state.isLoading) {
      return (
        <Container>
          <Col>
            <LoadingBar />
          </Col>
          <Col>
            <LoadingBar />
          </Col>
          <Col>
            <LoadingBar />
          </Col>
          <Col>
            <LoadingBar />
          </Col>
          <Col>
            <LoadingBar />
          </Col>
          <Col>
            <LoadingBar />
          </Col>
        </Container>
      );
    }

    return (
      <Container>
        <Col>Coins {currencies}</Col>
        <Col>Exchanges {exchanges}</Col>
        <Col>
          <Circle />
          <Row>
            <SubNavItem>{totalMarketCap}</SubNavItem>
            <ArrowLogo
              totalmarkettrend={totalMarketTrend}
              src={Icons.ArrowIcon}
            />
          </Row>
        </Col>
        <Col>
          <Circle />
          <SubNavItem>{totalVolume}</SubNavItem>
          <PercentageBar percentage={this.state.marketCapPercentage} />
        </Col>
        <Col>
          <Row>
            <CoinLogo src={Icons.BitcoinIcon} />
            <SubNavItem>{bitcoinPercentage + "%"}</SubNavItem>
          </Row>
          <PercentageBar percentage={bitcoinPercentage} />
        </Col>
        <Col>
          <Row>
            <CoinLogo src={Icons.EthereumIcon} />
            <SubNavItem> {ethPercentage + "%"}</SubNavItem>
          </Row>
          <PercentageBar percentage={ethPercentage} />
        </Col>
      </Container>
    );
  }
}
