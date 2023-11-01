import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 1.7rem;
  right: 2.3rem;
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.theme.navbarBrand};
  border: 1px solid ${(props) => props.theme.general};
  padding: 0.6em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  z-index: 10;
`;
