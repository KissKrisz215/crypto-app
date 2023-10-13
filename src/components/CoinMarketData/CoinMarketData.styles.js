import styled from "styled-components";

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

export const ProgressBarContainer = styled.div`
  width: 100%;
  margin-left: 3rem;
  display: flex;
`;
