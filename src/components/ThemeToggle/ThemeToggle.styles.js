import styled from "styled-components";

export const ToggleContainer = styled.div`
  background-color: ${(props) => props.theme.navbarBrand};
  padding: 0.5rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`;

export const ToggleButton = styled.img`
  width: 30px;
  filter: ${(props) => props.theme.themeIcon};
  cursor: pointer;
`;
