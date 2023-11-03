import React from "react";
import { InputContainer, Input, ArrowLogo } from "./ModalInput.styles";
import Icons from "../../../assets/index";

const ModalInput = ({ title, value, change, children, name, type }) => (
  <InputContainer>
    <Input
      type={type}
      name={name}
      onChange={change}
      value={value}
      placeholder={title}
    />
    <ArrowLogo src={Icons.ArrowIcon} />
    {children}
  </InputContainer>
);

export default ModalInput;
