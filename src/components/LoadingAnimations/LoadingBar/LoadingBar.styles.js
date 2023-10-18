import { styled, keyframes } from "styled-components";

const slide = keyframes`
0%{
    background-position: -500px 0;
}
100%{
    background-position: 500px 0;
}
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  width: ${(props) => (props.width ? props.width : `100%`)};
  height: ${(props) => (props.outerheight ? props.outerheight : `100%`)};
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin};
`;

export const InnerWrapper = styled.div`
  height: ${(props) => props.height || "22px"};
  width: 100%;
  background: ${(props) =>
    `linear-gradient(to right, ${props.theme.shine1} 4%,${props.theme.shine2} 25%, ${props.theme.shine1} 36%)`};
  background-size: 1000px 10%;
  animation: ${slide} 2s infinite;
  border-radius: 0.3rem;
  padding: ${(props) => props.padding};
`;
