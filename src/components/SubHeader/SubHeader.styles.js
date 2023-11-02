import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Container = styled.div`
  position: absolute;
  top: 100%;
  background-color: ${(props) => props.theme.navbarBrand};
  display: flex;
  gap: 0.7rem;
  padding: 0.3rem 0rem;
  border-radius: 0 0 0.5rem 0.5rem;
  width: 100%;
  @media only screen and ${breakpoint.device.sm} {
    width: auto;
    background-color: ${(props) => props.theme.main};
    justify-content: auto;
    padding: 0.3rem 2rem;
  }
`;

export const Col = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  min-width: 90px;
  max-height: 40px;
  @media only screen and ${breakpoint.device.sm} {
    max-height: auto;
    min-height: 45px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 0.1rem;
  @media only screen and ${breakpoint.device.sm} {
    gap: 0.3rem;
  }
`;

export const Circle = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${(props) => props.theme.general};
  border-radius: 50%;
`;

export const SubNavItem = styled.p`
  font-size: 0.8rem;
`;

export const CoinLogo = styled.img``;

export const ArrowLogo = styled.img`
  filter: ${(props) =>
    props.totalmarkettrend
      ? "invert(70%) sepia(65%) saturate(4561%) hue-rotate(88deg) brightness(121%) contrast(120%)"
      : "invert(14%) sepia(91%) saturate(4581%) hue-rotate(341deg) brightness(106%) contrast(99%)"};
  transform: ${(props) =>
    props.totalMarketTrend ? "rotate(180deg)" : "rotate(0deg)"};
  width: 12px;
`;

export const ColHeader = styled.div`
  margin: 0;
  display: none;
  gap: 0.2rem;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    gap: 1rem;
  }
`;

export const ColBody = styled.div`
  margin: 0;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    justify-content: auto;
    width: auto;
    gap: 1rem;
  }
`;
