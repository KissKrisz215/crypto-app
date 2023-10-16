import styled from "styled-components";

export const CoinContainer = styled.div`
  margin: 1rem 0rem;
  display: flex;
  gap: 2rem;
`;

export const CoinWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${"" /* gap: 1.5rem; */}
`;

export const CoinIconWrapper = styled.div`
  max-width: 140px;
  width: 100%;
  min-height: 150px;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.main};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
`;

export const CoinIconContainer = styled.div`
  max-width: 60px;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem;
`;

export const CoinIcon = styled.img`
  width: 35px;
`;

export const CoinTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

export const CoinInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 0.6rem;
`;

export const CoinInfoContainer = styled.div`
  max-width: 100%;
  overflow: visible;
`;

export const CoinInfoHeader = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  position: relative;
`;

export const CoinInfoBody = styled.div`
  height: 65px;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.main};
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  gap: 0.1rem;
`;

export const CoinInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ItemHeader = styled.p`
  font-size: 0.7rem;
  padding: 0.2rem 0rem;
  margin: 0;
`;

export const ItemText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${(props) => (props.change ? "#00FC2A" : "#FE1040;")};
`;

export const ButtonContainer = styled.div`
  visibility: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.3rem;
  position: absolute;
  right: 0;
  cursor: pointer;
  top: calc(0% - 0.8rem);
  display: flex;
  gap: 0.3rem;
`;

export const EditButton = styled.div`
  font-size: 0.7rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.theme.main};
  padding: 0.3rem 0.6rem;
  border-radius: 0.1rem;
`;

export const HeaderInfo = styled.h4`
  font-size: 0.8rem;
  margin: 0;
`;

export const ArrowLogo = styled.img`
  filter: ${(props) =>
    props.change
      ? "invert(70%) sepia(65%) saturate(4561%) hue-rotate(88deg) brightness(121%) contrast(120%)"
      : "invert(14%) sepia(91%) saturate(4581%) hue-rotate(341deg) brightness(106%) contrast(99%)"};
  transform: ${(props) => (props.change ? "rotate(180deg)" : "rotate(0deg)")};
  width: 12px;
`;
