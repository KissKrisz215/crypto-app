import styled from "styled-components";

export const SearchInput = styled.input`
  background-color: ${(props) => props.theme.navbarBrand};
  border:none;
  border-radius: 0.5rem;
  width:100%;
  min-width:400px;
  color: ${(props) => props.theme.defaultTextColor};
`;
