import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";

export const HeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: 100%;
  align-items: center;
  @media only screen and ${breakpoint.device.sm} {
    width: auto;
    align-items: auto;
  }
`;

export const LogoHeader = styled.h5`
  margin: 0;
  font-size: 0.8rem;
`;

export const LogoContainer = styled.div`
  width: 1.8rem;
  height: 1.9rem;
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.navbarBrand};
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ${breakpoint.device.sm} {
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const LogoWrapper = styled.div`
  background-color: transparent;
  width: 200px;
  border-radius: 0.5rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  @media only screen and ${breakpoint.device.sm} {
    background-color: ${(props) => props.theme.main};
  }
`;

export const LinkContainer = styled.div`
  background-color: ${(props) => props.theme.navbarBrand};
  width: 100%;
  height: 20%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.6rem 0rem;
  @media only screen and ${breakpoint.device.sm} {
    background-color: ${(props) => props.theme.main};
    width: 200px;
    padding: 0rem;
  }
`;

export const ClipBoardContainer = styled.div``;

export const ClipboardLogo = styled.img`
  filter: ${(props) => props.theme.themeIcon};
`;

export const CoinLink = styled.a`
  text-decoration: none;
  font-size: 0.55rem;
  cursor: pointer;
`;
