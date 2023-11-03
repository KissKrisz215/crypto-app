import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import breakpoint from "../../../styles/breakpoints";

export const Container = styled.div`
  padding: 0rem;
`;

export const TableWrapper = styled.table`
  width: 100%;
  padding: 0rem;
  border-collapse: collapse;
  min-height: 100vh;
`;

export const TableHead = styled.thead`
  position: sticky;
  z-index: 5;
  top: 0;
  background-color: ${(props) => props.theme.main};
`;

export const TableBody = styled.tbody``;

export const TableRowHeader = styled.tr``;

export const Title = styled.td`
  font-size: 0.8rem;
  padding: 1.2rem 0rem 1rem 0;
`;

export const ArrowIcon = styled(FontAwesomeIcon);

export const CircleIcon = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #00fc2a;
`;

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 0.5rem;
  padding: 0 0.8rem;
`;

export const Buttons = styled.button`
  background-color: ${(props) =>
    props.activeCategory.name === props.category.name
      ? "#06d555"
      : props.theme.navbarBrand};
  cursor: pointer;
  border: 0;
  font-size: 0.7rem;
  padding: 0.4rem 0.5rem;
  border-radius: 0.5rem;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.primary};
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 0.9rem;
`;

export const NavigationTitle = styled.p`
  font-size: 0.8rem;
  padding: 0;
  margin: 0;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: end;
  align-items: center;
  @media only screen and ${breakpoint.device.sm} {
    justify-content: space-between;
  }
`;

export const NavigationText = styled.p`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const SelectPageContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  display: flex;
  algin-items: center;
`;

export const ArrowLogo = styled.img`
  width: 0.9rem;
  filter: ${(props) => props.theme.themeIcon};
  transform: ${(props) => `rotate(${props.rotate})`};
  cursor: pointer;
  @media only screen and ${breakpoint.device.sm} {
    width: 0.5rem;
  }
`;

export const NavigationHeader = styled.div`
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;

export const ShowRowsContainer = styled.div`
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;

export const ShowRowsHeader = styled.p`
  margin: 0;
  font-size: 0.7rem;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;
