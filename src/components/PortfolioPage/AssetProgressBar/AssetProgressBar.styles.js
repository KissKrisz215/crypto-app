import { styled } from "styled-components";

export const Container = styled.td`
  padding: ${(props) => props.padding || "0 0.7rem"};
  min-width: ${(props) => props.width};
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #00fc2a;
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
  width: ${(props) =>
    props.percentage === 100 ? "0%" : `${props.percentage}%`};
  height: 100%;
`;
