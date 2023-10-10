import React from "react";
import { ThemeContext } from "styled-components";
import { Container, Wrapper } from "./Portfolio.styles";
import Icons from "../../assets/index";
import AddAssetButton from "../../components/AddAssetButton/";

export default class Portfolio extends React.Component {
  componentDidMount() {
    this.props.handleChangeActive("portfolio");
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Wrapper>
            <Container>
              <AddAssetButton />
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}
