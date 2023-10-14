import React, { useEffect, useState } from "react";
import {
  Container,
  ChartMenuContainer,
  ChartMenu,
  ContainerCirlce,
  ChartItem,
} from "./CoinChart.styles";

const options = [
  {
    name: "1d",
  },
  {
    name: "7d",
  },
  {
    name: "30d",
  },
  {
    name: "90d",
  },
  {
    name: "1y",
  },
  {
    name: "Max",
  },
];

const CoinChart = () => {
  const [activeOption, setActiveOption] = useState("1d");

  const handleActiveOption = (name) => {
    setActiveOption(name);
  };

  return (
    <Container>
      <ChartMenuContainer>
        <ChartMenu>
          {options &&
            options.map((item) => (
              <ChartItem
                onClick={() => handleActiveOption(item.name)}
                activeOption={activeOption}
                key={item.name}
              >
                <ContainerCirlce item={item} activeOption={activeOption} />
                {item.name}
              </ChartItem>
            ))}
        </ChartMenu>
      </ChartMenuContainer>
    </Container>
  );
};

export default CoinChart;
