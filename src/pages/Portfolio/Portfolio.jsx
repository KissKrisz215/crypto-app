import React from "react";

export default class Portfolio extends React.Component {
  componentDidMount() {
    this.props.handleChangeActive("portfolio");
  }

  render() {
    return <div></div>;
  }
}
