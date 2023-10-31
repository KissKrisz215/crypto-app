import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Header,
  CoinWrapper,
  ErrorMessage,
} from "./AssetsList.styles";
import AssetListItem from "../AssetListItem/AssetListItem";
import { useSelector } from "react-redux";

const AssetsList = () => {
  const data = useSelector((state) => state.portfolio.data);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (data.length === 0) {
      setErrorMessage("No Information Avaliable to Show!");
    } else {
      setErrorMessage(null);
    }
  }, [data]);

  return (
    <Container>
      <Header>Your Statistics</Header>
      <ErrorMessage>{errorMessage && errorMessage}</ErrorMessage>
      <Wrapper>
        <CoinWrapper>
          {data &&
            data.map((item) => <AssetListItem coin={item} key={item.name} />)}
        </CoinWrapper>
      </Wrapper>
    </Container>
  );
};

export default AssetsList;
