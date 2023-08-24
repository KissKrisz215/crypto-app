import React from "react";

export default class Home extends React.Component {

  componentDidMount(){
    this.props.handleChangeActive('home');
    console.log(this.props.active);
  }

  render() {
      return (
        <div>
        <h1>CoinsList</h1>
        </div>
      )
      }
    }