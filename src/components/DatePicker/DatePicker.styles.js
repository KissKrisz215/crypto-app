import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 0%;
  top: 0%;
  margin: 1rem;
  display: flex;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 0.3rem;
`;

export const Date = styled.div`
  padding: 0.4rem 0.5rem;
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.date === props.name ? "#06d554" : null};
  border-radius: 0.3rem;
  margin: 0.3rem;
  &:hover {
    cursor: pointer;
  }
`;
