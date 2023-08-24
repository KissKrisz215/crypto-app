import React from "react";

export default class Home extends React.Component {
  componentDidMount() {
    this.props.handleChangeActive("home");
  }

  render() {
    return <div></div>;
  }
}
