import { styled } from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Container = styled.div`
  position: absolute;
  top: 90%;
  width: 100%;
  margin: 1rem;
  display: flex;
  background-color: ${(props) => props.theme.navbarBrand};
  justify-content: space-around;
  border-radius: 0.3rem;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    width: auto;
    justify-content: none;
    right: 0%;
    top: 0%;
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const Date = styled.div`
  padding: 0.4rem 0.5rem;
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.date === props.name ? "#06d554" : null};
  border-radius: 0.3rem;
  margin: 0.3rem;
  &:hover {
    cursor: pointer;
  }
`;
