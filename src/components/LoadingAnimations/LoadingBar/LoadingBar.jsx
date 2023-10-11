import React from "react";
import { Wrapper, InnerWrapper } from "./LoadingBar.styles";

const LoadingBar = ({ width, height }) => (
  <Wrapper width={width}>
    <InnerWrapper height={height}></InnerWrapper>
  </Wrapper>
);

export default LoadingBar;
