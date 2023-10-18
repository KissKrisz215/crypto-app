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
} from "./AssetListItem.styles";
import Icons from "../../assets/index";
import {
  formatPrice,
  formatNumberToDecimal,
  formatPercentage,
} from "../../utils/formatPrices";
import AssetProgressBar from "../AssetProgressBar/AssetProgressBar";
import { LoadingBar } from "../LoadingAnimations";

const AssetListItem = ({ coin, setDataArray }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coinData, setCoinData] = useState(null);

  const getData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin.data.id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      getMarketChanges(data);
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };

  const getMarketChanges = (item) => {
    const marketVolume = formatNumberToDecimal(
      item.market_data.market_cap[coin.currency.name] /
        item.market_data.total_volume[coin.currency.name],
      0
    );

    const supplyData = formatPercentage(
      item.market_data.circulating_supply /
        (item.market_data.total_supply / 100)
    );

    const amountValue = formatNumberToDecimal(
      item.market_data.current_price[coin.currency.name] * coin.purchaseAmount,
      0
    );

    const current_price = item.market_data.current_price[coin.currency.name];

    const price_change = formatNumberToDecimal(
      item.market_data.price_change_24h_in_currency[coin.currency.name]
    );

    const changeSincePurchase = formatNumberToDecimal(
      ((current_price * coin.purchaseAmount - coin.purchasePrice) /
        coin.purchasePrice) *
        100,
      2
    );

    const data = {
      current_price,
      price_change,
      market_vs_volume: marketVolume,
      supply: supplyData,
      value: amountValue,
      changeSincePurchase,
    };
    setCoinData(data);
  };

  const handleDelete = (id) => {
    const portfolio = JSON.parse(localStorage.getItem("portfolio"));
    const updatedPortfolio = portfolio.filter((item) => item.id !== coin.id);
    setDataArray(updatedPortfolio);
    localStorage.setItem("portfolio", JSON.stringify(updatedPortfolio));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(coin);
  });

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
          <CoinIcon src={coin.data.thumb} />
        </CoinIconContainer>
        <CoinTitle>
          {coin.data.name}({coin.data.symbol})
        </CoinTitle>
      </CoinIconWrapper>
      <CoinInfoWrapper>
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
        <CoinInfoContainer>
          <CoinInfoHeader>
            <HeaderInfo>Your coin:</HeaderInfo>
          </CoinInfoHeader>
          <CoinInfoBody>
            <CoinInfoItem>
              <ItemHeader>Coin amount:</ItemHeader>
              <ItemText change={true}>
                {console.log("DATA!", coin)}
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
      </CoinInfoWrapper>
    </CoinContainer>
  );
};

export default AssetListItem;
