import React from "react";
import { ToggleContainer, ToggleButton } from "./ThemeToggle.styles";
import Icons from "../../assets/index";

const ThemeToggle = ({ handleChangeTheme }) => {
  return (
    <ToggleContainer>
      <ToggleButton src={Icons.ToggleIcon} onClick={handleChangeTheme} />
    </ToggleContainer>
  );
};

export default ThemeToggle;
