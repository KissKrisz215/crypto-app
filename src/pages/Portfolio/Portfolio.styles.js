import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Container = styled.div`
  height: 800px;
  overflow: visible;
  @media only screen and ${breakpoint.device.sm} {
    overflow: scroll;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3.5rem;
`;
