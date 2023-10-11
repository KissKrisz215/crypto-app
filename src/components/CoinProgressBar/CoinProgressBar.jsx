import React from "react";
import {
  Container,
  TitleContainer,
  Title,
  ProgressBarContainer,
  ProgressBar,
  CircleIcon,
} from "./CoinProgressBar.styles";

const CoinProgressBar = ({ colors, base, current, percentage }) => {
  const baseColor = colors[0];
  const currentColor = colors[1];

  return (
    <Container>
      <TitleContainer>
        <Title color={baseColor}>
          <CircleIcon color={baseColor} />
          {base}
        </Title>
        <Title color={currentColor}>
          <CircleIcon color={currentColor} />
          {current}
        </Title>
      </TitleContainer>
      <ProgressBarContainer colors={colors}>
        <ProgressBar colors={colors} percentage={percentage} />
      </ProgressBarContainer>
    </Container>
  );
};

export default CoinProgressBar;
