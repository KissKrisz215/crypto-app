import { Link } from "react-router-dom";
import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.6rem 1.4rem;
  border-radius: 0.4rem;
  background-color: ${(props) =>
    props.active === props.page ? props.theme.navbarBrand : null};
  transition: background-color 0.2s linear;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;

export const OverviewContainer = styled(Link)`
  text-decoration: none;
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;

export const OverViewText = styled.p`
  font-size: 1.4rem;
  margin: 0;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 0.6rem 0;
  max-width: 1450px;
  width: 90%;
`;
