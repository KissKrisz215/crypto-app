import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoint from "../../styles/breakpoints";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 80%;
  @media only screen and ${breakpoint.device.sm} {
    width: 450px;
  }
`;

export const Button = styled.button`
  color: ${(props) => props.theme.primary};
  background-color: #06d555;
  border: 1px solid #06d555;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 70px;
  padding: 0.8rem;
  border-radius: 0.4rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  background-color: Red;
  width: 85%;
  max-width: 400px;
  top: 60%;
  max-height: 550px;
  border-radius: 0.4rem;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -70%);
  background-color: ${(props) => props.theme.navbarBrand};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 10;
  padding: 1.9rem 0rem;
  @media only screen and ${breakpoint.device.sm} {
    max-width: 700px;
    position: absolute;
    max-height: 380px;
    top: 50%;
    width: 100%;
    padding-top: 0rem;
    height: 100%;
    padding: 1.5rem 0rem 0rem;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ModalHeader = styled.h2`
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;

export const ModalHeaderMobile = styled.h2`
  display: block;
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  gap: 0rem;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: 0.8rem;
  @media only screen and ${breakpoint.device.sm} {
    gap: 1.3rem;
    flex-direction: row;
    align-items: start;
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  border-radius: 0.4rem;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  @media only screen and ${breakpoint.device.sm} {
    width: 100%;
    height: 100%;
    max-width: 150px;
  }
`;

export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconTitle = styled.p`
  margin: 0;
  font-size: 0.7rem;
  text-align: center;
`;

export const Icon = styled.img`
  width: 50%;
`;

export const ModalButtonContainer = styled.div``;

export const ModalCloseButton = styled.img`
  position: absolute;
  right: 5%;
  top: 3%;
  width: 1.5rem;
  cursor: pointer;
  @media only screen and ${breakpoint.device.sm} {
    right: 3%;
    top: 5%;
  }
`;

export const InputWrapper = styled.div`
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media only screen and ${breakpoint.device.sm} {
    width: 100%;
    gap: 0.5rem;
  }
`;

export const ModalButton = styled.button`
  width: 240px;
  height: 2rem;
  border-radius: 0.4rem;
  font-size: 0.7rem;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 0;
  opacity: ${(props) => (props.isComplete ? "1" : "0.6")};
  @media only screen and ${breakpoint.device.sm} {
    height: 50px;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.7rem;
  gap: 0.6rem;
  width: 100%;
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    align-items: start;
    align-items: auto;
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  height: 200px;
  max-height: 250px;
  left: 0%;
  background-color: ${(props) => props.theme.main};
  border-radius: 0.5rem;
  z-index: 5;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DropDownItem = styled(Link)`
  border-radius: 0.3rem;
  font-size: 0.8rem;
  text-decoration: none;
  width: 90%;
  display: block;
  padding: 0.3rem;
  &:hover {
    background-color: ${(props) => props.theme.main};
  }
`;

export const DropDownHeader = styled.div`
  padding: 0.4rem;
  font-size: 0.8rem;
`;

export const ModalBackDrop = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(25, 27, 31, 0.1);
  z-index: 5;
`;
