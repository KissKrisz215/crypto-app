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
  };

  async handleData() {
    try {
      const {
        data: { data },
      } = await axios("https://api.coingecko.com/api/v3/global");
      this.setState({
        currencies: data.active_cryptocurrencies,
        exchanges: data.markets,
        bitcoinPercentage: formatPercentage(data.market_cap_percentage.btc),
        ethPercentage: formatPercentage(data.market_cap_percentage.eth),
        totalMarketCap: formatCurrency(
          data.total_market_cap[this.props.activeCurrency.name]
        ),
        totalVolume: formatCurrency(
          data.total_volume[this.props.activeCurrency.name]
        ),
        marketCapPercentage: calculatePercentage(
          data.total_market_cap[this.props.activeCurrency.name],
          data.total_volume[this.props.activeCurrency.name]
        ),
        totalMarketTrend:
          data.market_cap_change_percentage_24h_usd > 0 ? true : false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        errorMessage:
          "An error occurred while fetching data. Please try again later.",
      });
    }
  }

  componentDidMount() {
    this.handleData();
  }

  render() {
    return (
      <Container>
        <Col>Coins {this.state.currencies}</Col>
        <Col>Exchanges {this.state.exchanges}</Col>
        <Col>
          <Circle />
          <Row>
            <SubNavItem>{this.state.totalMarketCap}</SubNavItem>
            <ArrowLogo
              totalmarkettrend={this.state.totalMarketTrend}
              src={Icons.ArrowIcon}
            />
          </Row>
        </Col>
        <Col>
          <Circle />
          <SubNavItem>{this.state.totalVolume}</SubNavItem>
          <PercentageBar percentage={this.state.marketCapPercentage} />
        </Col>
        <Col>
          <Row>
            <CoinLogo src={Icons.BitcoinIcon} />
            <SubNavItem>{this.state.bitcoinPercentage + "%"}</SubNavItem>
          </Row>
          <PercentageBar percentage={this.state.bitcoinPercentage} />
        </Col>
        <Col>
          <Row>
            <CoinLogo src={Icons.EthereumIcon} />
            <SubNavItem> {this.state.ethPercentage + "%"}</SubNavItem>
          </Row>
          <PercentageBar percentage={this.state.ethPercentage} />
        </Col>
      </Container>
    );
  }
}
