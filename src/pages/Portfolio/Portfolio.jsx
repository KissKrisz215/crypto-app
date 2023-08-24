import React from "react";

export default class Portfolio extends React.Component {
  componentDidMount() {
    this.props.handleChangeActive("portfolio");
    console.log(this.props.active);
  }

  render() {
    return <div></div>;
  }
}
