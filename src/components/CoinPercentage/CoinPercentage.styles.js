import { styled } from "styled-components";

export const Container = styled.td``;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const CoinData = styled.p`
  color: ${(props) => (props.coinChange < 0 ? "#00FC2A" : "#FE1040")};
  font-size: 0.8rem;
`;

export const ArrowLogo = styled.img`
  filter: ${(props) =>
    props.coinChange < 0
      ? "invert(70%) sepia(65%) saturate(4561%) hue-rotate(88deg) brightness(121%) contrast(120%)"
      : "invert(14%) sepia(91%) saturate(4581%) hue-rotate(341deg) brightness(106%) contrast(99%)"};
  transform: ${(props) =>
    props.coinChange < 0 ? "rotate(180deg)" : "rotate(0deg)"};
  width: 12px;
`;
