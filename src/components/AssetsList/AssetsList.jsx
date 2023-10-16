import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  Header,
  CoinWrapper,
  ErrorMessage,
} from "./AssetsList.styles";
import AssetListItem from "../AssetListItem/AssetListItem";

const AssetsList = ({ data }) => {
  const [dataArray, setDataArray] = useState(data);
  const [errorMessage, setErrorMessage] = useState(null);

  const updateDataArrayFromLocalStorage = () => {
    const portfolio = localStorage.getItem("portfolio");
    if (portfolio) {
      setDataArray(JSON.parse(portfolio));
    }
  };

  const handleLocalStorageChange = (e) => {
    if (e.key === "portfolio") {
      updateDataArrayFromLocalStorage();
    }
  };

  useEffect(() => {
    updateDataArrayFromLocalStorage();

    window.addEventListener("storage", handleLocalStorageChange);

    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);

  useEffect(() => {
    updateDataArrayFromLocalStorage();
  }, [data]);

  useEffect(() => {
    if (dataArray.length === 0) {
      setErrorMessage("No Information Avaliable to Show!");
    } else {
      setErrorMessage(null);
    }
  }, [dataArray]);

  return (
    <Container>
      <Header>Your Statistics</Header>
      <ErrorMessage>{errorMessage && errorMessage}</ErrorMessage>
      <Wrapper>
        <CoinWrapper>
          {dataArray &&
            dataArray.map((item) => (
              <AssetListItem
                setDataArray={setDataArray}
                coin={item}
                key={item.name}
              />
            ))}
        </CoinWrapper>
      </Wrapper>
    </Container>
  );
};

export default AssetsList;
