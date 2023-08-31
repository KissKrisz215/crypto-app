import React from "react";
import { Container, Percentage } from "./PercentageBar.styles";

export default class PercentageBar extends React.Component {
  render() {
    const { percentage } = this.props;
    return (
      <Container>
        <Percentage percentage={percentage} />
      </Container>
    );
  }
}
