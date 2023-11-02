import { Link } from "react-router-dom";
import { styled } from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const TableRowContainer = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.lines};
  cursor: pointer;
`;

export const CoinData = styled.td`
  font-size: 0.9rem;
  padding: 0.7rem 0.6rem 0.7rem 0.9rem;
`;

export const CoinDataDesktop = styled.td`
  font-size: 0.9rem;
  padding: 0.7rem 0.6rem 0.7rem 0.9rem;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: table-cell;
  }
`;

export const CoinIcon = styled.img`
  width: 31px;
`;

export const CoinHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
`;

export const DataDesktopContainer = styled.div`
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: inline-flex;
  }
`;
