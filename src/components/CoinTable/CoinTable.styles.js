import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  padding: 0rem 0.5rem;
  border-collapse: collapse;
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
  padding: 1rem;
`;

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
`;
