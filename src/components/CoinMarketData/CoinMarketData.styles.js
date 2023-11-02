import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const MarketDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  margin-left: 3rem;
`;

export const MarketDataWrapper = styled.div`
  width: 100%;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.navbarBrand};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 0rem;
  @media only screen and ${breakpoint.device.sm} {
    background-color: ${(props) => props.theme.main};
    width: 450px;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  margin-left: 3rem;
  display: flex;
`;
