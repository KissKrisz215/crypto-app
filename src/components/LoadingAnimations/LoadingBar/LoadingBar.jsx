import React from "react";
import { Wrapper, InnerWrapper } from "./LoadingBar.styles";

const LoadingBar = ({ width, height, padding, margin }) => (
  <Wrapper width={width} margin={margin}>
    <InnerWrapper height={height} padding={padding}></InnerWrapper>
  </Wrapper>
);

export default LoadingBar;
