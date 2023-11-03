import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";

export const MobileChartMenu = styled.div`
  display: block;
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;

export const Container = styled.div`
  margin: 1.8rem 0rem;
`;

export const ChartMenuContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

export const ChartMenu = styled.div`
  display: flex;
  gap: 1rem;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
`;

export const ContainerCirlce = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) =>
    props.item.name === props.activeOption.name ? "#06D554" : "transparent"};
  box-shadow: ${(props) =>
    props.item.name === props.activeOption.name
      ? "rgba(0, 255, 95, 0.25) 0px 0px 0px 5px"
      : null};
  border: 1px solid ${(props) => props.theme.lineBackground};
  border-radius: 50%;
  cursor: pointer;
`;

export const ChartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const ChartContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  height: 270px;
`;
