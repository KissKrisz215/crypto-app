import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "../../styles/breakpoints";

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
  display: none;
  align-items: center;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
`;

export const InputIcon = styled.img`
  position: absolute;
  filter: ${(props) => props.theme.icons};
  height: 18px;
  padding: 0 0.9rem;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 250px;
  background-color: ${(props) => props.theme.navbarBrand};
  border-radius: 0.5rem;
  z-index: 5;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DropDownItem = styled(Link)`
  border-radius: 0.3rem;
  font-size: 0.8rem;
  text-decoration: none;
  width: 90%;
  display: block;
  padding: 0.3rem;
  &:hover {
    background-color: ${(props) => props.theme.main};
  }
`;

export const DropDownHeader = styled.div`
  padding: 0.4rem;
  font-size: 0.8rem;
`;
