import React from "react";
import { TableRowContainer, CoinData, CoinIcon } from "./TableRow.styles";
import CoinPercentage from "../CoinPercentage/";
import CoinProgressBar from "../CoinProgressBar/";
import {
  formatCurrency,
  calculatePercentage,
  formatPercentage,
} from "../../utils/formatPrices";

export default class TableRow extends React.Component {
  state = {
    marketCap: null,
    totalVolume: null,
    circulatingSupply: null,
    totalSupply: null,
    volumePercentage: null,
    supplyPercentage: null,
  };

  componentDidMount() {
    if (this.props.coin) {
      const marketCap = formatCurrency(this.props.coin.market_cap);
      const totalVolume = formatCurrency(this.props.coin.total_volume);
      const totalSupply = formatCurrency(this.props.coin.total_supply);
      const circulatingSupply = formatCurrency(
        this.props.coin.circulating_supply
      );
      this.setState({
        marketCap,
        totalVolume,
        totalSupply,
        circulatingSupply,
      });
    }
  }

  render() {
    const {
      index,
      coin: {
        symbol,
        name,
        image,
        current_price,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency,
      },
    } = this.props;
    const {
      marketCap,
      totalVolume,
      circulatingSupply,
      totalSupply,
      volumePercentage,
      supplyPercentage,
    } = this.state;
    const { colors } = this.props;
    return (
      <TableRowContainer>
        <CoinData>{index + 1}</CoinData>
        <CoinData>
          <CoinIcon src={image} />
          {name}({symbol.toUpperCase()})
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
      </TableRowContainer>
    );
  }
}
