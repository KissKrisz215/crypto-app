import React, { useState, useEffect } from "react";
import { Container, Wrapper, Header } from "./AssetsList.styles";

const AssetsList = ({ data }) => {
  const [dataArray, setData] = useState([]);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  return (
    <Container>
      <Header>Your Statistics</Header>
      <Wrapper>
        {dataArray &&
          dataArray.map((item) => (
            <h1 key={item.data.name}>{item.data.name}</h1>
          ))}
      </Wrapper>
    </Container>
  );
};

export default AssetsList;
