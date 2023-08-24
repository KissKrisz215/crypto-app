import styled from "styled-components";

export const SearchInput = styled.input`
  background-color: ${(props) => props.theme.navbarBrand};
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  height: 50px;
  min-width: 320px;
  padding: 0.1rem 2.3rem;
  font-size: 17px;
  color: ${(props) => props.theme.defaultTextColor};
  &::placeholder {
    color: ${(props) => props.theme.defaultTextColor};
    font-size: 17px;
    font-weight: 500;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.img`
  position: absolute;
  filter: ${(props) => props.theme.icons};
  height: 18px;
  padding: 0 0.9rem;
`;
