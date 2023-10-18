import React from "react";
import { Wrapper, InnerWrapper } from "./LoadingBar.styles";

const LoadingBar = ({ width, height, padding, margin, outerheight }) => (
  <Wrapper width={width} margin={margin} outerheight={outerheight}>
    <InnerWrapper height={height} padding={padding}></InnerWrapper>
  </Wrapper>
);

export default LoadingBar;
