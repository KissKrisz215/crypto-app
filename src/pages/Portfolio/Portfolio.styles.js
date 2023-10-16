import styled from "styled-components";

export const Container = styled.div`
  height: 800px;
  overflow: scroll;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0rem;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.primary};
  background-color: #06d555;
  border: 1px solid #06d555;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 70px;
  padding: 0.7rem;
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
  max-height: 400px;
  border-radius: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  background-color: ${(props) => props.theme.navbarBrand};
  display: ${(props) => (props.isOpen ? "block" : "none")};
  flex-direction: column;
  align-items: center;
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
  gap: 0.7rem;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  margin-top: 0.8rem;
`;

export const IconWrapper = styled.div`
  background-color: ${(props) => props.theme.main};
  border-radius: 0.4rem;
  width: 100%;
  height: 100%;
  max-width: 130px;
  max-height: 140px;
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
