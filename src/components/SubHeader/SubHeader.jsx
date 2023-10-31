import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getNavbarInfo } from "../../store/subHeader/actions";

const SubHeader = () => {
  const activeCurrency = useSelector((state) => state.activeCurrency);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.navbarInfo.isLoading);
  const data = useSelector((state) => state.navbarInfo.data);
  const errorMessage = useSelector((state) => state.navbarInfo.errorMessage);

  useEffect(() => {
    dispatch(getNavbarInfo());
  }, []);

  if (isLoading) {
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

  const {
    active_cryptocurrencies: currencies,
    markets: exchanges,
    total_market_cap: totalMarketCap,
    market_cap_percentage: marketCapPercentageData,
    total_volume: totalVolume,
    market_cap_change_percentage_24h_usd: totalMarketTrend,
  } = data;

  const bitcoinPercentage = formatPercentage(marketCapPercentageData.btc);
  const ethPercentage = formatPercentage(marketCapPercentageData.eth);

  return (
    <Container>
      <Col>Coins {currencies}</Col>
      <Col>Exchanges {exchanges}</Col>
      <Col>
        <Circle />
        <Row>
          <SubNavItem>
            {formatCurrency(totalMarketCap[activeCurrency.name])}
          </SubNavItem>
          <ArrowLogo
            totalmarkettrend={totalMarketTrend > 0}
            src={Icons.ArrowIcon}
          />
        </Row>
      </Col>
      <Col>
        <Circle />
        <SubNavItem>
          {formatCurrency(totalVolume[activeCurrency.name])}
        </SubNavItem>
        <PercentageBar
          percentage={calculatePercentage(
            totalMarketCap[activeCurrency.name],
            totalVolume[activeCurrency.name]
          )}
        />
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
};

export default SubHeader;
