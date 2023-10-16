import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 450px;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.primary};
  background-color: #06d555;
  border: 1px solid #06d555;
  width: 100%;
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
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: 380px;
  border-radius: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  background-color: ${(props) => props.theme.navbarBrand};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ModalHeader = styled.h2``;

export const ModalBody = styled.div`
  display: flex;
  gap: 1.3rem;
  width: 100%;
  justify-content: center;
  margin-top: 0.8rem;
`;

export const IconWrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  border-radius: 0.4rem;
  width: 100%;
  height: 100%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
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
  right: 3%;
  top: 5%;
  width: 1.5rem;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ModalButton = styled.button`
  width: 240px;
  height: 50px;
  border-radius: 0.4rem;
  font-size: 0.7rem;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 0;
  opacity: ${(props) => (props.isComplete ? "1" : "0.6")};
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.7rem;
  gap: 0.6rem;
  width: 100%;
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
