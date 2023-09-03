import { keyframes, styled } from "styled-components";

export const spinnerAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoadingBar = styled.div`
  animation: 1.5s linear infinite ${spinnerAnimation};
  animation-play-state: inherit;
  border: solid ${(props) => props.border} ${(props) => props.borderColor};
  border-bottom-color: ${(props) => props.color};
  border-radius: 50%;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
