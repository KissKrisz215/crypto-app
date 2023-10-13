import React from "react";
import CoinMarketItem from "../../components/CoinMarketItem/CoinMarketItem";
import {
  MarketDataContainer,
  MarketDataWrapper,
  ProgressBarContainer,
} from "./CoinMarketData.styles";
import CoinProgressBar from "../CoinProgressBar";
import { formatPrice, formatNumberToDecimal } from "../../utils";

const CoinMarketData = ({
  coin,
  percentage,
  data,
  activeCurrency,
  currencySymbol,
}) => {
  return (
    <MarketDataWrapper>
      {coin && (
        <MarketDataContainer>
          <CoinMarketItem
            title={"Market Cap"}
            data={formatPrice(coin.market_data.market_cap[activeCurrency.name])}
            activeCurrency={activeCurrency}
          />
          <CoinMarketItem
            title={"Fully Diluted Valuation"}
            data={formatPrice(
              coin.market_data.fully_diluted_valuation[activeCurrency.name]
            )}
            activeCurrency={activeCurrency}
          />
          <CoinMarketItem
            title={"Volume 24h"}
            data={formatPrice(
              coin.market_data.total_volume[activeCurrency.name]
            )}
            activeCurrency={activeCurrency}
          />
          <CoinMarketItem
            title={"Volume / Market"}
            data={formatNumberToDecimal(
              coin.market_data.total_volume[activeCurrency.name] /
                coin.market_data.market_cap[activeCurrency.name],
              5
            )}
          />
        </MarketDataContainer>
      )}
      {coin && (
        <MarketDataContainer>
          <CoinMarketItem
            title={"Total Volume"}
            data={formatPrice(
              coin.market_data.total_volume[activeCurrency.name]
            )}
            activeCurrency={activeCurrency}
            currencySymbol={coin.symbol.toUpperCase()}
          />
          <CoinMarketItem
            title={"Circulaing Supply"}
            data={formatPrice(coin.market_data.circulating_supply)}
            activeCurrency={activeCurrency}
            currencySymbol={coin.symbol.toUpperCase()}
          />
          <CoinMarketItem
            title={"Max Supply"}
            data={formatPrice(coin.market_data.max_supply)}
            activeCurrency={activeCurrency}
            currencySymbol={coin.symbol.toUpperCase()}
          />
        </MarketDataContainer>
      )}
      <ProgressBarContainer>
        <CoinProgressBar
          percentage={(percentage ? percentage : "0") + "%"}
          base={(percentage ? percentage : "0") + "%"}
          current={"100%"}
          colors={["#FEE158", "#FE8C01"]}
          width={"250px"}
          height={"7px"}
          padding={"0"}
        />
      </ProgressBarContainer>
    </MarketDataWrapper>
  );
};

export default CoinMarketData;
