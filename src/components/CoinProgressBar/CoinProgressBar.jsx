import React from "react";
import {
  Container,
  TitleContainer,
  Title,
  ProgressBarContainer,
  ProgressBar,
  CircleIcon,
} from "./CoinProgressBar.styles";

export default class CoinProgressBar extends React.Component {
  render() {
    const baseColor = this.props.colors[0];
    const currentColor = this.props.colors[1];
    const { colors, base, current } = this.props;
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
          <ProgressBar colors={colors} />
        </ProgressBarContainer>
      </Container>
    );
  }
}
