import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "../../styles/breakpoints";

export const Container = styled.div`
  margin-top: 3.5rem;
  padding: 0.6rem 0;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
    flex-direction: auto;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.general};
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 1.5rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 80%;
  margin-top: 1.5rem;
  height: 280px;
  flex-direction: column;
  @media only screen and ${breakpoint.device.sm} {
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
  }
`;
//NEED FIX LATER !!!!

export const BodyWrapper = styled.div`
  margin: 24.8rem 0rem 2rem;
  width: 80%;
  @media only screen and ${breakpoint.device.sm} {
    margin: 1.8rem 0rem;
    width: 100%;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const DescriptionContainer = styled.div`
  background-color: ${(props) => props.theme.navbarBrand};
  border-radius: 0.4rem;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and ${breakpoint.device.sm} {
    background-color: ${(props) => props.theme.main};
  }
`;

export const DescriptionText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  height: ${(props) => props.height};
  a {
    font-size: 0.8rem;
    text-decoration: none;
  }
`;

export const LayerLogo = styled.img`
  margin: 0.2rem 0rem;
  width: 20px;
  filter: ${(props) => props.theme.themeIcon};
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.9rem;
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    width: 100%;
  }
`;
