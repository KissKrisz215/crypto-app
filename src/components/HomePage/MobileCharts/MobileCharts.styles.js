import styled from "styled-components";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import breakpoint from "../../../styles/breakpoints";

export const ChartsMobileContainer = styled.div`
  display: block;
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;

export const CustomButtonNext = styled(ButtonNext)`
  background-color: transparent;
  border: 0;
  position: absolute;
`;

export const CustomButtonBack = styled(ButtonBack)`
  background-color: transparent;
  border: 0;
  margin: 0 1.6rem;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
`;

export const ChartsContainer = styled.div`
  ${"" /* display: flex; */}
  position: relative;

  justify-content: center;
  gap: 1.3rem;
  @media only screen and ${breakpoint.device.sm} {
    margin-top: 1.5rem;
  }
`;

export const ChartWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  height: 380px;
  background-color: ${(props) => props.theme.navbarBrand};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  @media only screen and ${breakpoint.device.sm} {
    background-color: ${(props) => props.theme.main};
  }
`;
