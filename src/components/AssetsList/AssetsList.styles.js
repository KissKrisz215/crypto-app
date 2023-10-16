import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0rem;
  padding: 0.6rem 0;
  max-width: 1460px;
  min-width: 1250px;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-height: 700px;
  height: 100%;
  border-radius: 0.6rem;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.general};
  font-weight: 500;
  font-size: 22px;
`;

export const CoinWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ErrorMessage = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;
