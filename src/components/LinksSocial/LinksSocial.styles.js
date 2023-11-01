import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
`;

export const SocialLink = styled.a``;

export const SocialLogo = styled.img`
  width: 80px;
  height: 80px;
  filter: ${(props) => props.theme.themeIcon};
  cursor: pointer;
`;
