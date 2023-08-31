import React from "react";
import axios from "axios";
import {
  Container,
  TableHead,
  TableRowHeader,
  Title,
  TableBody,
} from "./CoinTable.styles";
import TableRow from "../TableRow/TableRow";
import percentageBarColors from "../../utils/PercentageBarColors";

export default class CoinTable extends React.Component {
  state = {
    data: [],
    errorMessage: null,
  };

  async getCoins() {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      this.setState({ data });
    } catch (err) {
      console.log(err);
      this.setState({ errorMessage: "There was an error loading the data." });
    }
  }

  componentDidMount() {
    this.getCoins();
  }

  render() {
    return (
      <Container>
        <TableHead>
          <TableRowHeader>
            <Title>#</Title>
            <Title>Name</Title>
            <Title>Price</Title>
            <Title>1h%</Title>
            <Title>24h%</Title>
            <Title>7d%</Title>
            <Title>24h Volume/Market Cap</Title>
            <Title>Circulating/Total Supply</Title>
            <Title>Last 7d</Title>
          </TableRowHeader>
        </TableHead>
        <TableBody>
          {this.state.data &&
            this.state.data.map((coin, index) => (
              <TableRow
                coin={coin}
                index={index}
                colors={percentageBarColors[index % 10]}
              />
            ))}
        </TableBody>
      </Container>
    );
  }
}
