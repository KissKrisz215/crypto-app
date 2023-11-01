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
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/coin/actions";

const Coin = ({ handleChangeActive, active }) => {
  const { coinId } = useParams();
  const coin = useSelector((state) => state.coin.coin);
  const isLoading = useSelector((state) => state.coin.isLoading);
  const errorMessage = useSelector((state) => state.coin.errorMessage);
  const coinData = useSelector((state) => state.coin.coinData);
  const percentage = useSelector((state) => state.coin.percentage);
  const activeCurrency = useSelector((state) => state.activeCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    handleChangeActive("portfolio");
  }, [active]);

  useEffect(() => {
    dispatch(getData(coinId.toLowerCase()));
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
