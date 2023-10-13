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
import CoinMarketInfo from "../../components/CoinMarketInfo/CoinMarketInfo";
import CoinLink from "../../components/CoinLink/CoinLink";

const Coin = ({ handleChangeActive, active, activeCurrency }) => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [coinData, setCoinData] = useState(null);
  const [percentage, setPercentage] = useState(null);

  const getData = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      setIsLoading(false);
      setCoin(response.data);
      calculateCoinPriceChanges(response.data);
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

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Wrapper>
          {console.log(coin)}
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
            </BodyWrapper>
          </Container>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  );
};

export default Coin;
