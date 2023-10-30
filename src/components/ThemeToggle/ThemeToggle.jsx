import React from "react";
import { useDispatch } from "react-redux";
import { ToggleContainer, ToggleButton } from "./ThemeToggle.styles";
import Icons from "../../assets/index";
import { setActiveTheme } from "../../store/theme/actions";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  return (
    <ToggleContainer>
      <ToggleButton
        src={Icons.ToggleIcon}
        onClick={() => dispatch(setActiveTheme())}
      />
    </ToggleContainer>
  );
};

export default ThemeToggle;
