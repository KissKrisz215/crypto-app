import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    width: 0%;
  }
  75% {
    width: 75%;
  }
  100% {
    width: 100%
  }
`;

export const Container = styled.div`
  position: relative;
  height: 8px;
  width: 100%;
`;

export const LoadingBarItem = styled.div`
  height: 100%;
  background-color: #2172e5;
  width: ${(props) => props.width};
  animation: ${loadingAnimation} 150ms linear;
  display: flex;
  left: 0;
  top: 0;
`;

const slide = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

export const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    #2172e5 4%,
    rgba(224, 222, 215, 0.4) 25%,
    #2172e5 36%
  );
  background-size: 1000px 10%;
  animation: ${slide} 2s infinite;
  border-radius: 0.3rem;
`;
