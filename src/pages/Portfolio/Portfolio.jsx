import React, { useEffect, useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { Container, Wrapper } from "./Portfolio.styles";
import Icons from "../../assets/index";
import AddAssetButton from "../../components/PortfolioPage/AddAssetButton";
import AssetsList from "../../components/PortfolioPage/AssetsList";
import { useSelector } from "react-redux";
import { setData } from "../../store/portfolio/actions";

const Portfolio = ({ handleChangeActive, active }) => {
  const data = useSelector((state) => state.portfolio.data);

  useEffect(() => {
    handleChangeActive("portfolio");
  }, [active]);

  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <AddAssetButton setData={setData} />
      <Container>
        <AssetsList data={data} />
      </Container>
    </Wrapper>
  );
};

export default Portfolio;
