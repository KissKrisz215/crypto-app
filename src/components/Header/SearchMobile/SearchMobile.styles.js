import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  position: fixed;
  top: 0;
  height: 100%;
  background-color: ${(props) => props.theme.main};
  width: 100%;
  z-index: 15;
  justify-content: center;
`;

export const SearchContainer = styled.div``;

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;
