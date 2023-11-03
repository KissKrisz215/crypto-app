import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CoinContainer,
  CoinIconWrapper,
  CoinIconContainer,
  CoinIcon,
  CoinTitle,
  CoinInfoWrapper,
  CoinInfoContainer,
  CoinInfoHeader,
  HeaderInfo,
  EditButton,
  CoinInfoBody,
  CoinInfoItem,
  ItemHeader,
  ItemText,
  ButtonContainer,
  ArrowLogo,
  PriceContainer,
  MarketContainer,
} from "./AssetListItem.styles";
import Icons from "../../../assets/index";
import {
  formatPrice,
  formatNumberToDecimal,
  formatPercentage,
} from "../../../utils/formatPrices";
import AssetProgressBar from "../AssetProgressBar/AssetProgressBar";
import { LoadingBar } from "../../LoadingAnimations";
import { setData } from "../../../store/portfolio/actions";
import { useDispatch, useSelector } from "react-redux";
import { getMarketChanges } from "../../../store/coinList/actions";

const AssetListItem = ({ coin, setDataArray }) => {
  const data = useSelector((state) => state.portfolio.data);
  const isLoading = useSelector((state) => state.coinList.isLoading);
  const coinData = useSelector((state) => state.coinList.coinData);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const updatedPortfolio = data.filter((item) => item.id !== coin.id);
    dispatch(setData(updatedPortfolio));
  };

  useEffect(() => {
    dispatch(getMarketChanges(coin));
  }, []);

  if (isLoading) {
    return (
      <CoinContainer key={coin.name}>
        <CoinIconWrapper>
          <CoinIconContainer padding={"0rem"}>
            <LoadingBar
              width={"80px"}
              height={"80px"}
              padding={"0rem 2rem"}
            ></LoadingBar>
          </CoinIconContainer>
          <CoinTitle>
            <LoadingBar
              width={"100%"}
              height={"100%"}
              padding={"0.15rem 3.5rem"}
              margin={"0.4rem 0rem"}
            ></LoadingBar>
          </CoinTitle>
        </CoinIconWrapper>
        <CoinInfoWrapper>
          <CoinInfoContainer>
            <CoinInfoHeader>
              <HeaderInfo></HeaderInfo>
              <ButtonContainer></ButtonContainer>
            </CoinInfoHeader>
            <CoinInfoBody>
              <CoinInfoItem>
                <LoadingBar
                  width={"150px"}
                  height={"30px"}
                  padding={"0rem 2rem"}
                ></LoadingBar>
              </CoinInfoItem>
              <CoinInfoItem>
                <LoadingBar
                  width={"150px"}
                  height={"30px"}
                  padding={"0rem 2rem"}
                ></LoadingBar>
              </CoinInfoItem>
              <CoinInfoItem>
                <LoadingBar
                  width={"150px"}
                  height={"30px"}
                  padding={"0rem 2rem"}
                ></LoadingBar>
              </CoinInfoItem>
              <CoinInfoItem>
                <LoadingBar
                  width={"150px"}
                  height={"30px"}
                  padding={"0rem 2rem"}
                ></LoadingBar>
              </CoinInfoItem>
            </CoinInfoBody>
          </CoinInfoContainer>
          <CoinInfoContainer>
            <CoinInfoHeader></CoinInfoHeader>
            <CoinInfoBody>
              <CoinInfoItem>
                <LoadingBar
                  width={"150px"}
                  height={"30px"}
                  padding={"0rem 2rem"}
                ></LoadingBar>
              </CoinInfoItem>
              <CoinInfoItem>
                <LoadingBar
                  width={"150px"}
                  height={"30px"}
                  padding={"0rem 2rem"}
                ></LoadingBar>
              </CoinInfoItem>
              <CoinInfoItem>
                <LoadingBar
                  width={"150px"}
                  height={"30px"}
                  padding={"0rem 2rem"}
                ></LoadingBar>
              </CoinInfoItem>
              <CoinInfoItem>
                <LoadingBar
                  width={"150px"}
                  height={"30px"}
                  padding={"0rem 2rem"}
                ></LoadingBar>
              </CoinInfoItem>
            </CoinInfoBody>
          </CoinInfoContainer>
        </CoinInfoWrapper>
      </CoinContainer>
    );
  }

  return (
    <CoinContainer key={coin.name}>
      <CoinIconWrapper>
        <CoinIconContainer>
          <CoinIcon alt="Coin icon" src={coin.data.thumb} />
        </CoinIconContainer>
        <CoinTitle>
          {coin.data.name}({coin.data.symbol})
        </CoinTitle>
      </CoinIconWrapper>
      <CoinInfoWrapper>
        <MarketContainer>
          <CoinInfoContainer>
            <CoinInfoHeader>
              <HeaderInfo>Market price:</HeaderInfo>
              <ButtonContainer>
                <EditButton onClick={handleDelete} color={"#FE1040"}>
                  Delete
                </EditButton>
              </ButtonContainer>
            </CoinInfoHeader>
            <CoinInfoBody>
              <CoinInfoItem>
                <ItemHeader>Current Price:</ItemHeader>
                <ItemText change={true}>
                  {coin && coin.currency.symbol}{" "}
                  {coinData && coinData.current_price}
                </ItemText>
              </CoinInfoItem>
              <CoinInfoItem>
                <ItemHeader>Price change 24h:</ItemHeader>
                {coinData && (
                  <ItemText change={coinData.price_change > 0}>
                    <ArrowLogo
                      change={coinData.price_change > 0}
                      src={Icons.ArrowIcon}
                      alt="Price change 24h indicator"
                    />
                    {coin && coin.currency.symbol}
                    {coinData && Math.abs(coinData.price_change)}
                  </ItemText>
                )}
              </CoinInfoItem>
              <CoinInfoItem>
                <ItemHeader>Market Cap vs Volume:</ItemHeader>
                {coinData && (
                  <AssetProgressBar percentage={coinData.market_vs_volume} />
                )}
              </CoinInfoItem>
              <CoinInfoItem>
                <ItemHeader>Circ supply vs max supply:</ItemHeader>
                {coinData && <AssetProgressBar percentage={coinData.supply} />}
              </CoinInfoItem>
            </CoinInfoBody>
          </CoinInfoContainer>
        </MarketContainer>
        <PriceContainer>
          <CoinInfoContainer>
            <CoinInfoHeader>
              <HeaderInfo>Your coin:</HeaderInfo>
            </CoinInfoHeader>
            <CoinInfoBody>
              <CoinInfoItem>
                <ItemHeader>Coin amount:</ItemHeader>
                <ItemText change={true}>
                  {coin && formatNumberToDecimal(coin.purchaseAmount, 2)}{" "}
                  {coin && coin.data.symbol}
                </ItemText>
              </CoinInfoItem>
              <CoinInfoItem>
                <ItemHeader>Amount value:</ItemHeader>
                {coinData && (
                  <ItemText change={coinData.value >= coin.purchasePrice}>
                    <ArrowLogo
                      change={coinData.value >= coin.purchasePrice}
                      alt="Amount value change indicator"
                      src={Icons.ArrowIcon}
                    />
                    {coin && coin.currency.symbol}
                    {coinData && coinData.value}
                  </ItemText>
                )}
              </CoinInfoItem>
              <CoinInfoItem>
                <ItemHeader>Amount price change since purchase:</ItemHeader>
                {coinData && (
                  <ItemText
                    change={coinData.changeSincePurchase < 0 ? false : true}
                  >
                    {" "}
                    <ArrowLogo
                      change={coinData.changeSincePurchase < 0 ? false : true}
                      src={Icons.ArrowIcon}
                      alt="Amount price change since purchase indicator"
                    />
                    {coinData && coinData.changeSincePurchase}%
                  </ItemText>
                )}
              </CoinInfoItem>
              <CoinInfoItem>
                <ItemHeader>Purchase date:</ItemHeader>
                <ItemText change={true}> {coin && coin.purchaseDate}</ItemText>
              </CoinInfoItem>
            </CoinInfoBody>
          </CoinInfoContainer>
        </PriceContainer>
      </CoinInfoWrapper>
    </CoinContainer>
  );
};

export default AssetListItem;
