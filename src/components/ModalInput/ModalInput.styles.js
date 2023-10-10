import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 0.7rem;
  background-color: transparent;
  border: none;
  &::placeholder {
    color: ${(props) => props.theme.primary};
  }
  &:focus {
    outline: none;
  }
`;

export const ArrowLogo = styled.img`
  filter: invert(70%) sepia(65%) saturate(4561%) hue-rotate(88deg)
    brightness(121%) contrast(120%);
  width: 15px;
  position: absolute;
  right: 5%;
  top: 50%;
`;
