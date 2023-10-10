import React, { useState, useEffect } from "react";
import { Container, Wrapper, Header } from "./AssetsList.styles";

function AssetsList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  return (
    <Container>
      <Header>Your Statistics</Header>
      <Wrapper>
        {data &&
          data.map((item) => <h1 key={item.data.name}>{item.data.name}</h1>)}
      </Wrapper>
    </Container>
  );
}

export default AssetsList;
