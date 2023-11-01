import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TableRowContainer,
  CoinData,
  CoinIcon,
  CoinHeader,
  DataDesktopContainer,
} from "./TableRow.styles";
import CoinPercentage from "../CoinPercentage/";
import CoinProgressBar from "../CoinProgressBar/";
import { formatCurrency, formatPercentage } from "../../utils/formatPrices";
import { LoadingBar } from "../LoadingAnimations";
import SparkLine from "../SparkLine/";

const TableRow = ({ index, coin, isLoading, colors, isMobileView }) => {
  const [coinData, setCoinData] = useState({
    marketCap: null,
    totalVolume: null,
    circulatingSupply: null,
    totalSupply: null,
    volumePercentage: null,
    supplyPercentage: null,
  });

  const navigate = useNavigate();

  const useRedirect = (link) => {
    navigate(link);
  };

  useEffect(() => {
    if (coin) {
      const marketCap = formatCurrency(coin.market_cap);
      const totalVolume = formatCurrency(coin.total_volume);
      const totalSupply = formatCurrency(coin.total_supply);
      const circulatingSupply = formatCurrency(coin.circulating_supply);
      const volumePercentage =
        formatPercentage(coin.total_volume / (coin.market_cap / 100)) + "%";
      const supplyPercentage =
        formatPercentage(circulatingSupply / (totalSupply / 100)) + "%";

      setCoinData({
        marketCap,
        totalVolume,
        totalSupply,
        circulatingSupply,
        volumePercentage,
        supplyPercentage,
      });
    }
  }, []);

  if (isLoading) {
    return (
      <TableRowContainer>
        <CoinData>
          <CoinHeader>
            <LoadingBar />
          </CoinHeader>
        </CoinData>
        <CoinData>
          <LoadingBar />
        </CoinData>
        <CoinData>
          <LoadingBar />
        </CoinData>
        <CoinData>
          <LoadingBar />
        </CoinData>
        <CoinData>
          <LoadingBar />
        </CoinData>
        <CoinData>
          <LoadingBar />
        </CoinData>
        <CoinData>
          <LoadingBar />
        </CoinData>
        <CoinData>
          <LoadingBar />
        </CoinData>
        <CoinData>
          <LoadingBar />
        </CoinData>
      </TableRowContainer>
    );
  }

  const {
    symbol,
    name,
    image,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
  } = coin;

  const {
    marketCap,
    totalVolume,
    circulatingSupply,
    totalSupply,
    volumePercentage,
    supplyPercentage,
  } = coinData;

  if (isMobileView) {
    return (
      <TableRowContainer
        onClick={() => useRedirect(`/coins/${coin.name.toLowerCase()}`)}
      >
        <CoinData>
          <CoinHeader>
            <CoinIcon src={image} />
            {name} ({symbol.toUpperCase()})
          </CoinHeader>
        </CoinData>
        <CoinData>${current_price}</CoinData>
        <CoinPercentage data={price_change_percentage_1h_in_currency} />
      </TableRowContainer>
    );
  }

  return (
    <TableRowContainer
      onClick={() => useRedirect(`/coins/${coin.name.toLowerCase()}`)}
    >
      <CoinData>{index}</CoinData>
      <CoinData>
        <CoinHeader>
          <CoinIcon src={image} />
          {name} ({symbol.toUpperCase()})
        </CoinHeader>
      </CoinData>
      <CoinData>${current_price}</CoinData>
      <CoinPercentage data={price_change_percentage_1h_in_currency} />
      <CoinPercentage data={price_change_percentage_24h_in_currency} />
      <CoinPercentage data={price_change_percentage_7d_in_currency} />
      <CoinProgressBar
        percentage={volumePercentage}
        base={marketCap}
        current={totalVolume}
        colors={colors}
      />
      <CoinProgressBar
        percentage={supplyPercentage}
        base={circulatingSupply}
        current={totalSupply}
        colors={colors}
      />
      <SparkLine
        data={coin.sparkline_in_7d.price}
        priceChangePercentage={coin.price_change_percentage_7d_in_currency}
      />
    </TableRowContainer>
  );
};

export default TableRow;
