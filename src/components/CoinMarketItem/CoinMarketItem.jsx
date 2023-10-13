import React from "react";
import { Container, PlusIcon, Title, Value } from "./CoinMarketItem.styles";
import Icons from "../../assets/";

const CoinMarketItem = ({ title, data, activeCurrency, currencySymbol }) => {
  return (
    <Container>
      <PlusIcon src={Icons.Plus} />
      <Title>{title}:</Title>
      <Value>
        {activeCurrency && activeCurrency.symbol}
        {data && data} {currencySymbol}
      </Value>
    </Container>
  );
};

export default CoinMarketItem;
