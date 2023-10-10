import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.5rem;
  padding: 0.6rem 0;
  max-width: 1350px;
  width: 90%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.general};
  font-weight: 500;
  font-size: 22px;
`;
