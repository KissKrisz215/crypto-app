import React from "react";

export default class ThemeToggle extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.props.handleChangeTheme}>Change Theme</button>
      </div>
    );
  }
}
