import React from "react";
import { ThemeContext } from "styled-components";
import { Container, Wrapper } from "./Portfolio.styles";
import Icons from "../../assets/index";
import AddAssetButton from "../../components/AddAssetButton/";
import AssetsList from "../../components/AssetsList/AssetsList";

export default class Portfolio extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.props.handleChangeActive("portfolio");
    const data = JSON.parse(localStorage.getItem("portfolio"));
    this.setState({ data });
  }

  render() {
    const { activeCurrency } = this.props;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Wrapper>
            <Container>
              <AddAssetButton activeCurrency={activeCurrency} />
              <AssetsList data={this.state.data} />
            </Container>
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    );
  }
}
