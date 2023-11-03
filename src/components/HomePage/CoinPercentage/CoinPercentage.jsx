import React from "react";
import {
  Container,
  ArrowLogo,
  CoinData,
  Wrapper,
} from "./CoinPercentage.styles";
import Icons from "../../../assets/index";
import { addCommas } from "../../../utils/formatPrices";

const CoinPercentage = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <ArrowLogo coinChange={data} src={Icons.ArrowIcon} />
        <CoinData coinChange={data}>{Math.abs(addCommas(data)) + "%"}</CoinData>
      </Wrapper>
    </Container>
  );
};

export default CoinPercentage;
