import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Container = styled.div`
  margin-top: 0rem;
  padding: 0rem;
  height: 100%;
  @media only screen and ${breakpoint.device.sm} {
  }
  padding: 0.6rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-height: 700px;
  height: 100%;
  border-radius: 0.6rem;
  width: 100%;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.general};
  font-weight: 500;
  font-size: 22px;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;

export const CoinWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8.5rem;
  @media only screen and ${breakpoint.device.sm} {
    gap: 0.5rem;
  }
`;

export const ErrorMessage = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0rem;
  @media only screen and ${breakpoint.device.sm} {
    margin-top: 2.5rem;
  }
`;
