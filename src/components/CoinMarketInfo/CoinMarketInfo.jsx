import React from "react";
import {
  HeaderInfoContainer,
  LogoWrapper,
  LogoContainer,
  Logo,
  LogoHeader,
  LinkContainer,
  ClipBoardContainer,
  CoinLink,
  ClipboardLogo,
} from "./CoinMarketInfo.styles";
import Icons from "../../assets/";

export const CoinMarketInfo = ({ coin }) => {
  return (
    <HeaderInfoContainer>
      <LogoWrapper>
        <LogoContainer>{coin && <Logo src={coin.image.thumb} />}</LogoContainer>
        {coin && (
          <LogoHeader>
            {coin.name}({coin.symbol.toUpperCase()})
          </LogoHeader>
        )}
      </LogoWrapper>
      <LinkContainer>
        <ClipBoardContainer>
          {coin && (
            <CoinLink href={`${coin.links.homepage[0]}`} target="_blank">
              <ClipboardLogo src={Icons.Link} />
            </CoinLink>
          )}
        </ClipBoardContainer>
        {coin && (
          <CoinLink href={`${coin.links.homepage[0]}`} target="_blank">
            {coin.links.homepage[0]}
          </CoinLink>
        )}
      </LinkContainer>
    </HeaderInfoContainer>
  );
};

export default CoinMarketInfo;
