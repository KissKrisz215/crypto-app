import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.5rem;
  padding: 0.6rem 0;
  max-width: 1350px;
  width: 90%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.general};
  font-weight: 500;
  font-size: 22px;
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
  margin-top: 1.5rem;
`;

export const ChartWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.theme.main};
  border-radius: 0.5rem;
`;
