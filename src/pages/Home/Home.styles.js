import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Container = styled.div`
  margin-top: 3.5rem;
  padding: 0.6rem 0;
  max-width: 1350px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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

export const ChartsContainer = styled.div`
  display: flex;
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

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.p``;

export const CoinTableWrapper = styled.div`
  margin-top: 5rem;
  max-height: 700px;
  margin-bottom: 7rem;
  @media only screen and ${breakpoint.device.sm} {
    margin-top: 2rem;
  }
`;

export const CoinTableContainer = styled.div`
  background: ${(props) => props.theme.main};
  max-height: 900px;
  border-radius: 0.6rem;
  overflow: scroll;
`;

export const ChartsDesktopContainer = styled.div`
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;
