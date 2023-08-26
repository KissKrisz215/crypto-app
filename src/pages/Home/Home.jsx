import React from "react";
import {
  Container,
  Header,
  Wrapper,
  ChartsContainer,
  ChartWrapper,
} from "./Home.styles";
import Chart from "../../components/Chart/Chart";
export default class Home extends React.Component {
  componentDidMount() {
    this.props.handleChangeActive("home");
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Header>Your overview</Header>
          <ChartsContainer>
            <ChartWrapper>
              <Chart></Chart>
            </ChartWrapper>
            <ChartWrapper>
              <Chart></Chart>
            </ChartWrapper>
          </ChartsContainer>
        </Container>
      </Wrapper>
    );
  }
}
