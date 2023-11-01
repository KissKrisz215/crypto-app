import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Icons from "../../assets/index";
import { Container } from "./MobileNavbar.styles";
import MobileNavbarButton from "../MobileNavbarButton";
import { setMobileActive } from "../../store/mobileActive/actions";

const MobileNavbar = () => {
  const active = useSelector((state) => state.mobileActive);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === "/") {
      dispatch(setMobileActive("home"));
    } else if (currentPath.includes("portfolio")) {
      dispatch(setMobileActive("portfolio"));
    } else if (currentPath.includes("coins")) {
      dispatch(setMobileActive("summary"));
    }
  }, [currentPath]);

  return (
    <Container>
      <MobileNavbarButton
        iconActive={Icons.OverViewGreen}
        iconLight={Icons.OverViewLight}
        iconDark={Icons.OverViewDark}
        name="home"
        link="/home"
      />
      <MobileNavbarButton
        iconActive={Icons.PortfolioGreen}
        iconLight={Icons.PortfolioLight}
        iconDark={Icons.PortfolioDark}
        name="portfolio"
        link="/portfolio"
      />
      <MobileNavbarButton
        iconActive={Icons.SummaryGreen}
        iconLight={Icons.SummaryLight}
        iconDark={Icons.SummaryDark}
        name="summary"
      />
      <MobileNavbarButton
        iconActive={Icons.SearchGreen}
        iconLight={Icons.SearchLight}
        iconDark={Icons.SearchDark}
        name="search"
        action={true}
      />
    </Container>
  );
};

export default MobileNavbar;
