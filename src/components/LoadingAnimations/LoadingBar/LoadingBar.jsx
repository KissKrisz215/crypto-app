import React from "react";
import { Wrapper, InnerWrapper } from "./LoadingBar.styles";

export default class LoadingBar extends React.Component {
  render() {
    const { width, height } = this.props;
    return (
      <Wrapper width={width}>
        <InnerWrapper height={height}></InnerWrapper>
      </Wrapper>
    );
  }
}
