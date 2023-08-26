import React from "react";
import { Container, Percentage } from "./PercentageBar.styles";

export default class PercentageBar extends React.Component {
  render() {
    return (
      <Container>
        <Percentage percentage={this.props.percentage} />
      </Container>
    );
  }
}
