import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Container = styled.div`
  margin-top: 5rem;
  display: none;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
`;

export const SocialLink = styled.a``;

export const SocialLogo = styled.img`
  width: 80px;
  height: 80px;
  filter: ${(props) => props.theme.themeIcon};
  cursor: pointer;
`;
