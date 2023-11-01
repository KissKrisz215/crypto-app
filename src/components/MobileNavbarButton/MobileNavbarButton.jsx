import React from "react";
import { Container, NavbarIcon } from "./MobileNavbarButton.styles";
import { useDispatch, useSelector } from "react-redux";
import { setMobileActive } from "../../store/mobileActive/actions";

const MobileNavbarButton = ({
  iconActive,
  iconLight,
  iconDark,
  name,
  link,
  action,
}) => {
  const active = useSelector((state) => state.mobileActive);
  const dispatch = useDispatch();

  return (
    <Container
      to={link}
      onClick={() => (action ? dispatch(setMobileActive("search")) : null)}
    >
      {name === active ? (
        <NavbarIcon src={iconActive} />
      ) : (
        <NavbarIcon src={iconLight} />
      )}
    </Container>
  );
};

export default MobileNavbarButton;
