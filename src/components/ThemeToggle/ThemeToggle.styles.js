import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const ToggleContainer = styled.div`
  background-color: ${(props) => props.theme.navbarBrand};
  padding: 0.5rem;
  border-radius: 0.4rem;
  display: none;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
`;

export const ToggleButton = styled.img`
  width: 30px;
  filter: ${(props) => props.theme.themeIcon};
  cursor: pointer;
`;
