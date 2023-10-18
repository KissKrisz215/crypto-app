import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 3.5rem;
  padding: 0.6rem 0;
  max-width: 1200px;
  width: 90%;
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
  justify-content: space-between;
  width: 100%;
  margin-top: 1.5rem;
  height: 280px;
`;

export const BodyWrapper = styled.div`
  margin: 1.8rem 0rem;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const DescriptionContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  border-radius: 0.4rem;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 0.9rem;
`;
