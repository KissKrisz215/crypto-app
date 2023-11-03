import React from "react";
import {
  PriceContainer,
  AmountContainer,
  AmountText,
  PricePercentageContainer,
  PricePercentage,
  ArrowLogo,
  PriceBody,
  ProfitContainer,
  ProfitHeader,
  PriceProgressContainer,
  PriceProgressWrapper,
  PriceProgressItem,
  PriceProgressAmount,
  PriceProgressDate,
  PriceHeader,
  LayerLogo,
  Profit,
} from "./CoinPriceData.styles";
import Icons from "../../../assets/";
import { formatPrice } from "../../../utils";
import { formatDate } from "../../../utils/formatDates";
import { LoadingBar } from "../../LoadingAnimations";

const CoinPriceData = ({ activeCurrency, coin, coinData, isLoading }) => {
  if (isLoading) {
    return (
      <PriceContainer>
        <PriceHeader>
          <AmountContainer>
            <AmountText>
              <LoadingBar width={"250px"} height={"35px"}></LoadingBar>
            </AmountText>
            <PricePercentageContainer></PricePercentageContainer>
          </AmountContainer>
        </PriceHeader>
        <PriceBody>
          <ProfitContainer>
            <LoadingBar
              width={"150px"}
              height={"25px"}
              margin={"1rem 0rem"}
            ></LoadingBar>
          </ProfitContainer>
        </PriceBody>
        <PriceProgressWrapper>
          <PriceProgressContainer>
            <PriceProgressItem></PriceProgressItem>
            <PriceProgressItem>
              <PriceProgressAmount>
                <LoadingBar
                  width={"250px"}
                  height={"25px"}
                  margin={"0.2rem 0rem"}
                ></LoadingBar>
              </PriceProgressAmount>
              <PriceProgressDate>
                <LoadingBar
                  width={"250px"}
                  height={"25px"}
                  margin={"0rem 0rem"}
                ></LoadingBar>
              </PriceProgressDate>
            </PriceProgressItem>
          </PriceProgressContainer>
          <PriceProgressContainer>
            <PriceProgressItem></PriceProgressItem>
            <PriceProgressItem>
              <PriceProgressAmount>
                <LoadingBar
                  width={"250px"}
                  height={"25px"}
                  margin={"0.2rem 0rem"}
                ></LoadingBar>
              </PriceProgressAmount>
              <PriceProgressDate>
                <LoadingBar
                  width={"250px"}
                  height={"25px"}
                  margin={"0rem 0rem"}
                ></LoadingBar>
              </PriceProgressDate>
            </PriceProgressItem>
          </PriceProgressContainer>
        </PriceProgressWrapper>
      </PriceContainer>
    );
  }

  return (
    <PriceContainer>
      <PriceHeader>
        <AmountContainer>
          <AmountText>
            {activeCurrency && activeCurrency.symbol}
            {coin &&
              formatPrice(coin.market_data.current_price[activeCurrency.name])}
          </AmountText>
          <PricePercentageContainer>
            {coinData && (
              <PricePercentage>
                <ArrowLogo
                  priceChange={parseInt(coinData.price_change_percentage_24h)}
                  alt="Coin 24h price change indicator"
                  src={Icons.ArrowIcon}
                />
                {coinData.price_change_percentage_24h + "%"}
              </PricePercentage>
            )}
          </PricePercentageContainer>
        </AmountContainer>
      </PriceHeader>
      <PriceBody>
        <ProfitContainer>
          <ProfitHeader>Profit:</ProfitHeader>
          {coinData && (
            <Profit profit={coinData.profit}>
              {activeCurrency.symbol}
              {Math.abs(coinData.profit)}
            </Profit>
          )}
        </ProfitContainer>
        <LayerLogo alt="Layer icon" src={Icons.Layer} />
      </PriceBody>
      <PriceProgressWrapper>
        <PriceProgressContainer>
          <PriceProgressItem>
            {coin && (
              <ArrowLogo
                priceChange={
                  parseInt(
                    coin.market_data.atl_change_percentage[activeCurrency]
                  )
                    ? false
                    : true
                }
                alt="Coin All time low indicator"
                src={Icons.ArrowIcon}
              />
            )}
          </PriceProgressItem>
          <PriceProgressItem>
            <PriceProgressAmount>
              All time High:{" "}
              {coin &&
                activeCurrency.symbol +
                  formatPrice(coin.market_data.ath[activeCurrency.name])}
            </PriceProgressAmount>
            <PriceProgressDate>
              {coin &&
                formatDate(coin.market_data.ath_date[activeCurrency.name])}
            </PriceProgressDate>
          </PriceProgressItem>
        </PriceProgressContainer>
        <PriceProgressContainer>
          <PriceProgressItem>
            {coin && (
              <ArrowLogo
                priceChange={
                  parseInt(
                    coin.market_data.atl_change_percentage[activeCurrency]
                  )
                    ? true
                    : false
                }
                src={Icons.ArrowIcon}
              />
            )}
          </PriceProgressItem>
          <PriceProgressItem>
            <PriceProgressAmount>
              All time Low:{" "}
              {coin &&
                activeCurrency.symbol +
                  formatPrice(coin.market_data.atl[activeCurrency.name])}
            </PriceProgressAmount>
            <PriceProgressDate>
              {coin &&
                formatDate(coin.market_data.atl_date[activeCurrency.name])}
            </PriceProgressDate>
          </PriceProgressItem>
        </PriceProgressContainer>
      </PriceProgressWrapper>
    </PriceContainer>
  );
};

export default CoinPriceData;
