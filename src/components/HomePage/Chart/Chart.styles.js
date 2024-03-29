import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1.5rem;
`;

export const ChartHeader = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const HeaderTitle = styled.h4`
  margin: 0;
`;

export const HeaderParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export const SubTitle = styled.h5`
  margin: 0;
  font-size: 1.6rem;
`;

export const ChartWrapper = styled.div`
  width: 85%;
  height: 70%;
`;
