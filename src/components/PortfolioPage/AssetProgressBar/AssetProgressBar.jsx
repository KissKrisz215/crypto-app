import React from "react";
import { ThemeContext } from "styled-components";
import {
  ProgressBarContainer,
  ProgressBar,
  Container,
  Title,
} from "./AssetProgressBar.styles";

const AssetProgressBar = ({ percentage }) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <Container width={"100px"} padding={"0.3rem"}>
          <Title>{percentage}%</Title>
          <ProgressBarContainer
            colors={[theme.defaultTextColor, "#00FC2A"]}
            height={"10px"}
          >
            <ProgressBar
              colors={[theme.defaultTextColor, "#00FC2A"]}
              percentage={percentage}
            />
          </ProgressBarContainer>
        </Container>
      )}
    </ThemeContext.Consumer>
  );
};

export default AssetProgressBar;
