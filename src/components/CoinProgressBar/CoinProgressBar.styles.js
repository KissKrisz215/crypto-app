import { styled } from "styled-components";

export const Container = styled.td`
  padding: 0 0.7rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  height: 9px;
  background-color: ${(props) => props.colors[1]};
  border-radius: 0.2rem;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.colors[0]};
  width: 30%;
  height: 100%;
`;

export const CircleIcon = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
