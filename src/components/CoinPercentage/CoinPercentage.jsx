import React from "react";
import {
  Container,
  ArrowLogo,
  CoinData,
  Wrapper,
} from "./CoinPercentage.styles";
import Icons from "../../assets/index";
import { addCommas } from "../../utils/formatPrices";

export default class CoinPercentage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <Wrapper>
          <ArrowLogo coinChange={data} src={Icons.ArrowIcon} />
          <CoinData coinChange={data}>
            {Math.abs(addCommas(data)) + "%"}
          </CoinData>
        </Wrapper>
      </Container>
    );
  }
}
