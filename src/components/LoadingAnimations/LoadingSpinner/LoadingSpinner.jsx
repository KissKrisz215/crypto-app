import React from "react";
import { Container, LoadingBar } from "./LoadingSpinner.styles";

const LoadingSpinner = ({ width, height, border, color, borderColor }) => (
  <Container>
    <LoadingBar
      height={height}
      width={width}
      border={border}
      color={color}
      borderColor={borderColor}
    />
  </Container>
);

export default LoadingSpinner;
