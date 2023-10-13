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
import Icons from "../../assets/";
import { formatPrice } from "../../utils";
import { formatDate } from "../../utils/formatDates";

const CoinPriceData = ({ activeCurrency, coin, coinData }) => {
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
        <LayerLogo src={Icons.Layer} />
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
