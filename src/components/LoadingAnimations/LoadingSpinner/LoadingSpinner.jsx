import React from "react";
import { Container, LoadingBar } from "./LoadingSpinner.styles";

export default class LoadingSpinner extends React.Component {
  render() {
    const { width, height, border, color, borderColor } = this.props;
    return (
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
  }
}
