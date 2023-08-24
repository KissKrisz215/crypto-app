import styled from "styled-components";

export const CurrencyToggleContainer = styled.div`
  padding: 0rem 0.5rem;
  background: ${(props) => props.theme.navbarBrand};
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: relative;
  font-size: 17px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.navbarBrand};
  padding: 0.3rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 0.7rem);
`;

export const DropdownItem = styled.div`
  transition: background 0.1s linear;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 0.4rem;
  gap: 0.6rem;
  &:hover {
    background-color: ${(props) => props.theme.main};
    cursor: pointer;
  }
`;

export const DropdownIcon = styled.div`
  font-size: 17px;
  color: #00ff5f;
  background-color: #191b1f;
  padding: 0.3rem 0.3rem;
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const DropdownHeader = styled.p`
  font-size: 17px;
  display: inline-flex;
  gap: 0.2rem;
  align-items: center;
`;

export const ActiveDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DropdownArrow = styled.img`
  filter: invert(70%) sepia(65%) saturate(4561%) hue-rotate(88deg)
    brightness(121%) contrast(120%);
  width: 12px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
