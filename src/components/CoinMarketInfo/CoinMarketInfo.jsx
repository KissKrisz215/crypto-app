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
import { LoadingBar } from "../LoadingAnimations";

export const CoinMarketInfo = ({ coin, isLoading }) => {
  if (isLoading) {
    return (
      <HeaderInfoContainer>
        <LogoWrapper>
          {isLoading}
          <LoadingBar
            width={"100px"}
            height={"35px"}
            padding={"1.5rem"}
            outerheight={"none"}
          ></LoadingBar>
          {coin && (
            <LogoHeader>
              {isLoading ? (
                <LoadingBar
                  width={"100px"}
                  height={"10px"}
                  padding={"0.3rem 0rem"}
                ></LoadingBar>
              ) : (
                <>
                  {coin.name}({coin.symbol.toUpperCase()})
                </>
              )}
            </LogoHeader>
          )}
        </LogoWrapper>
        <LinkContainer>
          <LoadingBar width={"150px"} />
        </LinkContainer>
      </HeaderInfoContainer>
    );
  }

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
