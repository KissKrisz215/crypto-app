import React, { useEffect, useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { Container, Wrapper } from "./Portfolio.styles";
import Icons from "../../assets/index";
import AddAssetButton from "../../components/AddAssetButton/";
import AssetsList from "../../components/AssetsList/AssetsList";

const Portfolio = ({ handleChangeActive, activeCurrency }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleChangeActive("portfolio");
    const storedData = JSON.parse(localStorage.getItem("portfolio"));
    setData(storedData || []);
  }, [handleChangeActive]);

  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <Container>
        <AddAssetButton activeCurrency={activeCurrency} />
        <AssetsList data={data} />
      </Container>
    </Wrapper>
  );
};

export default Portfolio;
