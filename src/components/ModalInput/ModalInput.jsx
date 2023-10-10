import React from "react";
import { InputContainer, Input, ArrowLogo } from "./ModalInput.styles";
import Icons from "../../assets/index";

export default class ModalInput extends React.Component {
  render() {
    const { title, value, change, children, name, type } = this.props;

    return (
      <InputContainer>
        <Input
          type={type}
          name={name}
          onChange={change}
          value={value}
          placeholder={title}
        ></Input>
        <ArrowLogo src={Icons.ArrowIcon} />
        {children}
      </InputContainer>
    );
  }
}
