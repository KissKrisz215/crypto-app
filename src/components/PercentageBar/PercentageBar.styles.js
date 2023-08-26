import styled from "styled-components";

export const Container = styled.div`
  background-color: #2172e5;
  width: 60px;
  height: 13px;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
`;

export const Percentage = styled.div`
  background-color: ${(props) => props.theme.general};
  width: ${(props) => props.percentage}%;
  height: 13px;
  position: absolute;
  border-radius: 1rem;
`;
