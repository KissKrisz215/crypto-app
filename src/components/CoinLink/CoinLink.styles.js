import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const LinkWrapper = styled.div`
  background-color: ${(props) => props.theme.navbarBrand};
  height: 50px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 0 0.7rem;
  @media only screen and ${breakpoint.device.sm} {
    background-color: ${(props) => props.theme.main};
    width: 100%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkLogo = styled.img`
  filter: ${(props) => props.theme.themeIcon};
`;

export const LinkItem = styled.a`
  text-decoration: none;
  font-size: 0.6rem;
  cursor: pointer;
`;

export const CopyClipBoard = styled.div`
  position: relative;
  &:hover {
    .ClipBoardToolTip {
      visibility: visible;
    }
  }
`;

export const ClipBoardItem = styled.img`
  cursor: pointer;
  filter: ${(props) => props.theme.themeIcon};
  width: 20px;
`;

export const ClipBoardToolTip = styled.p`
  visibility: visible;
  width: 120px;
  background-color: rgb(85, 85, 85);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  font-size: 0.8rem;
  &:after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;
