import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "styled-components";
import {
  Container,
  Wrapper,
  Header,
  HeaderContainer,
  BodyWrapper,
  BodyContainer,
  DescriptionContainer,
  DescriptionText,
  LayerLogo,
  LinkContainer,
} from "./Coin.styles";
import Icons from "../../assets/";
import { formatPercentageTwoDecimal } from "../../utils";
import { calculatePercentage } from "../../utils/formatPrices";
import CoinPriceData from "../../components/CoinPriceData";
import CoinMarketData from "../../components/CoinMarketData";
import CoinMarketInfo from "../../components/CoinMarketInfo/";
import CoinLink from "../../components/CoinLink/";
import CurrencyConverter from "../../components/CurrencyConverter/";
import CoinChart from "../../components/CoinChart/";
import { LoadingBar } from "../../components/LoadingAnimations";
import { LoadingSpinner } from "../../components/LoadingAnimations";
import { useSelector } from "react-redux";

const Coin = ({ handleChangeActive, active }) => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [coinData, setCoinData] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const activeCurrency = useSelector((state) => state.activeCurrency);

  const getData = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      setCoin(response.data);
      calculateCoinPriceChanges(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setErrorMessage("There was an error loading the data.");
    }
  };

  const calculateCoinPriceChanges = (coin) => {
    const price_change_percentage_24h = formatPercentageTwoDecimal(
      coin.market_data.price_change_percentage_24h_in_currency[
        activeCurrency.name
      ]
    );

    const profit = (
      (price_change_percentage_24h *
        coin.market_data.current_price[activeCurrency.name]) /
      100
    ).toFixed(2);

    const percentage = calculatePercentage(
      coin.market_data.max_supply,
      coin.market_data.circulating_supply
    );

    setCoinData({
      price_change_percentage_24h,
      profit,
    });

    if (!isNaN(percentage)) {
      setPercentage(percentage);
    }
  };

  useEffect(() => {
    handleChangeActive("portfolio");
  }, [active]);

  useEffect(() => {
    getData(coinId.toLowerCase());
  }, [coinId]);

  if (isLoading) {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Wrapper>
            <Container>
              <Header>Your Summary</Header>
              <HeaderContainer>
                <CoinMarketInfo coin={coin} isLoading={isLoading} />
                <CoinPriceData
                  activeCurrency={activeCurrency}
                  coin={coin}
                  coinData={coinData}
                  isLoading={isLoading}
                />
                <CoinMarketData
                  coin={coin}
                  percentage={percentage}
                  isLoading={isLoading}
                />
              </HeaderContainer>
              <BodyWrapper>
                <Header>Description</Header>
                <BodyContainer>
                  <DescriptionContainer>
                    <DescriptionText height="350px">
                      <LoadingSpinner
                        width="100px"
                        height="100px"
                        border="12px"
                        color="#06d554"
                        borderColor={theme.navbarBrand}
                      />
                    </DescriptionText>
                  </DescriptionContainer>
                  <LinkContainer>
                    <CoinLink isLoading={isLoading}></CoinLink>
                    <CoinLink isLoading={isLoading}></CoinLink>
                    <CoinLink isLoading={isLoading}></CoinLink>
                  </LinkContainer>
                </BodyContainer>
              </BodyWrapper>
              <CurrencyConverter
                activeCurrency={activeCurrency}
                activeCoin={null}
                isLoading={isLoading}
              />
              <CoinChart
                color={theme.lineGraph}
                bgColor={theme.lineBackground}
                coin={coinId}
                currency={activeCurrency}
                isLoading={isLoading}
              />
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    );
  }

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Wrapper>
          <Container>
            <Header>Your Summary</Header>
            <HeaderContainer>
              <CoinMarketInfo coin={coin} />
              <CoinPriceData
                activeCurrency={activeCurrency}
                coin={coin}
                coinData={coinData}
              />
              <CoinMarketData
                coin={coin}
                percentage={percentage}
                activeCurrency={activeCurrency}
              />
            </HeaderContainer>
            <BodyWrapper>
              <Header>Description</Header>
              <BodyContainer>
                <DescriptionContainer>
                  <LayerLogo src={Icons.Layer} />
                  {coin && (
                    <DescriptionText
                      dangerouslySetInnerHTML={{
                        __html: coin.description.en,
                      }}
                    ></DescriptionText>
                  )}
                </DescriptionContainer>
                <LinkContainer>
                  {coin &&
                    coin.links.blockchain_site
                      .slice(0, 3)
                      .map((link) => <CoinLink link={link}>{link}</CoinLink>)}
                </LinkContainer>
              </BodyContainer>
              {console.log(coin)}
            </BodyWrapper>
            {coin && (
              <CurrencyConverter
                isLoading={isLoading}
                activeCoin={coin}
                activeCurrency={activeCurrency}
              />
            )}
            <CoinChart
              color={theme.lineGraph}
              bgColor={theme.lineBackground}
              coin={coinId}
              currency={activeCurrency}
              isLoading={isLoading}
            />
          </Container>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default Coin;
