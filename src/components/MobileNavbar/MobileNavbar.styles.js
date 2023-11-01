import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.navbarBrand};
  height: 80px;
  position: fixed;
  bottom: 0%;
  z-index: 50;
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;
