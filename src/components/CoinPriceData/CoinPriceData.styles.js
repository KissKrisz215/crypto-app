import { styled } from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const PriceContainer = styled.div`
  background-color: ${(props) => props.theme.navbarBrand};
  width: 100%;
  border-radius: 0.5rem;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and ${breakpoint.device.sm} {
    background-color: ${(props) => props.theme.main};
    height: 100%;
    min-height: auto;
    width: 400px;
  }
`;

export const PriceHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.7rem;
`;

export const PricePercentageContainer = styled.div`
  display: flex;
`;

export const PricePercentage = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${(props) => (props.priceChange ? "#00FC2A" : "#FE1040")};
  font-size: 0.9rem;
`;

export const PriceBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const AmountText = styled.h4`
  font-size: 1.7rem;
  margin: 0;
`;

export const MarketDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  margin-left: 3rem;
`;

export const MarketDataWrapper = styled.div`
  width: 450px;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 0rem;
`;

export const ArrowLogo = styled.img`
  filter: ${(props) =>
    props.priceChange === true
      ? "invert(70%) sepia(65%) saturate(4561%) hue-rotate(88deg) brightness(121%) contrast(120%)"
      : "invert(14%) sepia(91%) saturate(4581%) hue-rotate(341deg) brightness(106%) contrast(99%)"};
  transform: ${(props) =>
    props.priceChange === true ? "rotate(180deg)" : "rotate(0deg)"};
  width: 11px;
`;

export const Profit = styled.p`
  color: ${(props) => (props.profit >= 0 ? "#00FC2A" : "#FE1040")};
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
`;

export const ProfitContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ProfitHeader = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
`;

export const LayerLogo = styled.img`
  margin: 0.7rem 0rem;
  filter: ${(props) => props.theme.themeIcon};
`;

export const MarketHeader = styled.div``;

export const MarketBody = styled.div``;

export const PriceProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const PriceProgressAmount = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

export const PriceProgressDate = styled.p`
  margin: 0;
  font-size: 0.7rem;
`;

export const PriceProgressContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: start;
`;

export const PriceProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: start;
`;
