import { styled } from "styled-components";

export const Container = styled.td`
  padding: ${(props) => props.padding || "0 0.7rem"};
  width: ${(props) => props.width};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Title = styled.p`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
  color: ${(props) => props.color};
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || "9px"};
  background-color: ${(props) => props.colors[1]};
  border-radius: 0.2rem;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.colors[0]};
  width: ${(props) => props.percentage};
  height: 100%;
`;

export const CircleIcon = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
