import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 100%;
  background-color: ${(props) => props.theme.main};
  display: flex;
  gap: 1.5rem;
  padding: 0.3rem 2rem;
  border-radius: 0 0 0.5rem 0.5rem;
`;

export const Col = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 17px;
`;

export const Row = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const Circle = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${(props) => props.theme.general};
  border-radius: 50%;
`;

export const SubNavItem = styled.p`
  font-size: 17px;
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
