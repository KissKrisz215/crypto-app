import React from "react";
import { Container, Percentage } from "./PercentageBar.styles";

const PercentageBar = ({ percentage }) => (
  <Container>
    <Percentage percentage={percentage} />
  </Container>
);

export default PercentageBar;
