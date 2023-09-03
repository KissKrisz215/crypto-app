import React from "react";
import { Container, LoadingBar } from "./LoadingSpinner.styles";

export default class LoadingSpinner extends React.Component {
  render() {
    return (
      <Container>
        <LoadingBar height="100px" width="100px" border="12px" />
      </Container>
    );
  }
}
