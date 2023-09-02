import React from "react";
import {
  Container,
  Title,
  TitleWrapper,
  IconWrapper,
} from "./CoinButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

export default class CoinButton extends React.Component {
  render() {
    const { title, sortType, sortBy, sortCoins } = this.props;
    return (
      <Container onClick={() => sortCoins(title)}>
        <TitleWrapper>
          <Title>{title}</Title>
          <IconWrapper title={title} sortType={sortType} sortBy={sortBy}>
            <FontAwesomeIcon size="xs" icon={faArrowDownWideShort} />
          </IconWrapper>
        </TitleWrapper>
      </Container>
    );
  }
}
