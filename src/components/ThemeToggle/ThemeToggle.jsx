import React from "react";
import { ToggleContainer, ToggleButton } from "./ThemeToggle.styles";
import Icons from "../../assets/index";

export default class ThemeToggle extends React.Component {
  render() {
    return (
      <ToggleContainer>
        <ToggleButton
          src={Icons.ToggleIcon}
          onClick={this.props.handleChangeTheme}
        />
      </ToggleContainer>
    );
  }
}
