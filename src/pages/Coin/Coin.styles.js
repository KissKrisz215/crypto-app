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
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  height: 280px;
`;
