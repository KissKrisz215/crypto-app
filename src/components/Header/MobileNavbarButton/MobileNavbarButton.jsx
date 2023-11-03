import React from "react";
import { Container, NavbarIcon } from "./MobileNavbarButton.styles";
import { useDispatch, useSelector } from "react-redux";
import { setMobileActive } from "../../../store/mobileActive/actions";

const MobileNavbarButton = ({
  iconActive,
  iconLight,
  iconDark,
  name,
  link,
  action,
}) => {
  const active = useSelector((state) => state.mobileActive);
  const activeTheme = useSelector((state) => state.activeTheme);
  const dispatch = useDispatch();

  return (
    <Container
      to={link}
      onClick={() => (action ? dispatch(setMobileActive("search")) : null)}
    >
      {name === active ? (
        <NavbarIcon alt={`${name} button active`} src={iconActive} />
      ) : (
        <NavbarIcon
          alt={`${name} button inactive`}
          src={activeTheme === true ? iconDark : iconLight}
        />
      )}
    </Container>
  );
};

export default MobileNavbarButton;
