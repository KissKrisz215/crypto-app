import { styled } from "styled-components";

export const TableRowContainer = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.lines};
`;

export const CoinData = styled.td`
  padding: 0.6rem;
  font-size: 0.9rem;
  padding: 0 0.7rem;
`;

export const CoinIcon = styled.img`
  width: 31px;
`;

export const CoinHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
`;
