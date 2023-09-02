import { styled } from "styled-components";

export const Container = styled.td`
  font-size: 0.8rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
`;

export const Title = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const IconWrapper = styled.div`
  font-size: 0.9rem;
  transform: ${(props) =>
    props.sortType && props.sortBy === props.title
      ? "rotate(180deg)"
      : "rotate(0deg)"};
`;
