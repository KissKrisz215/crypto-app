import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  padding: 0.6rem 1.4rem;
  border-radius: 0.4rem;
  background-color: ${(props) =>
    props.active === props.page ? props.theme.navbarBrand : null};
  transition: background-color 0.2s linear;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 0.6rem 0;
`;

export const Container = styled.div`
  display: flex;
`;
