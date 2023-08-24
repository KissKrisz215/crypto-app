import React from "react";

export default class Coin extends React.Component {

  componentDidMount(){
    this.props.handleChangeActive('portfolio');
    console.log(this.props.active);
  }

  render() {
    return (
      <div>
      <h1>Coin Page</h1>
      </div>
    );
  }
}
