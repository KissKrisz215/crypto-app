import { styled } from "styled-components";

export const SelectWrapper = styled.div`
  gap: 0.4rem;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const SelectButton = styled.div`
  background-color: ${(props) => props.theme.navbarBrand};
  font-size: 0.7rem;
  padding: 0.3rem;
  border: none;
  border-radius: 0.3rem;
`;

export const SelectOption = styled.div`
  color: ${(props) => props.theme.primary};
  padding: 0.1rem 0.1rem;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.main};
  }
`;

export const SelectHeader = styled.div`
  background-color: ${(props) => props.theme.navbarBrand};
  padding: 0.3rem;
  border-radius: 0.3rem;
  display: flex;
  gap: 0.1rem;
  font-size: 0.8rem;
`;

export const SelectDropdown = styled.div`
  position: absolute;
  z-index: 10;
  top: calc(100% + 0.1rem);
`;

export const SelectContainer = styled.div``;

export const ArrowLogo = styled.img`
  width: 0.5rem;
  filter: ${(props) => props.theme.themeIcon};
`;

export const NavigationText = styled.p`
  font-size: 0.7rem;
`;
