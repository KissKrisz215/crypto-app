import React from "react";
import { TableRowContainer, CoinData, CoinIcon } from "./TableRow.styles";
import CoinPercentage from "../CoinPercentage/";

export default class TableRow extends React.Component {
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
      </TableRowContainer>
    );
  }
}
