import React, { useEffect, useState } from "react";
import {
  Container,
  CurrencyTable,
  CurrencySymbol,
  ExchangeIcon,
  CurrencyInput,
  DollarSign,
  CurrencyInputContainer,
} from "./CurrencyCoverter.styles";
import Icons from "../../assets/";
import { formatPrice } from "../../utils";
import { LoadingBar } from "../LoadingAnimations";

const CurrencyConverter = ({ activeCurrency, activeCoin, isLoading }) => {
  const [isExchanged, setIsExchanged] = useState(true);
  const [coins, setCoins] = useState({
    coin1: {
      symbol: activeCurrency.symbol,
      name: activeCurrency.name.toUpperCase(),
      amount: activeCoin
        ? activeCoin.market_data.current_price[activeCurrency.name]
        : 0,
    },
    coin2: {
      symbol: activeCoin ? activeCoin.symbol.toUpperCase() : "",
      name: activeCoin ? activeCoin.symbol.toUpperCase() : "",
      amount: 1,
    },
  });

  const calculatePrice = (name) => {
    if (name === "coin1" && activeCoin) {
      const price =
        coins.coin1.amount /
        activeCoin.market_data.current_price[activeCurrency.name];
      setCoins((prevData) => ({
        ...prevData,
        coin2: {
          ...prevData.coin2,
          amount: formatPrice(price),
        },
      }));
    } else if (name === "coin2" && activeCoin) {
      const price =
        activeCoin.market_data.current_price[activeCurrency.name] *
        coins.coin2.amount;
      setCoins((prevData) => ({
        ...prevData,
        coin1: {
          ...prevData.coin1,
          amount: price,
        },
      }));
    }
  };

  const handleAmountChange = (event, coin) => {
    if (activeCoin) {
      coin.amount = event.target.value;
      const name = event.target.name;
      setCoins((prevData) => ({ ...prevData, coin }));
      calculatePrice(name);
    }
  };

  useEffect(() => {
    if (!isLoading && activeCoin) {
      setCoins((prevCoins) => ({
        ...prevCoins,
        coin1: {
          ...prevCoins.coin1,
          symbol: activeCurrency.symbol,
          name: activeCurrency.name.toUpperCase(),
        },
        coin2: {
          symbol: activeCoin.symbol.toUpperCase(),
          name: activeCoin.symbol.toUpperCase(),
          amount: 1,
        },
      }));
      calculatePrice("coin2");
    }
  }, [activeCurrency, activeCoin, isLoading]);

  if (isLoading) {
    return (
      <Container>
        <CurrencyTable padding={"0.15rem"}>
          <LoadingBar padding={"0.3rem 0rem"} />
        </CurrencyTable>
        <ExchangeIcon
          onClick={() => setIsExchanged(!isExchanged)}
          src={Icons.Exchange}
        />
        <CurrencyTable padding={"0.15rem"}>
          <LoadingBar padding={"0.3rem 0rem"} />
        </CurrencyTable>
      </Container>
    );
  }

  return (
    <Container>
      <CurrencyTable>
        <CurrencySymbol>
          {isExchanged ? coins.coin1.name : coins.coin2.name}
        </CurrencySymbol>
        <CurrencyInputContainer>
          <DollarSign>
            {" "}
            {isExchanged ? coins.coin1.symbol : coins.coin2.symbol}
          </DollarSign>
          <CurrencyInput
            value={isExchanged ? coins.coin1.amount : coins.coin2.amount}
            type="number"
            name={isExchanged ? "coin1" : "coin2"}
            onChange={(event) =>
              handleAmountChange(event, isExchanged ? coins.coin1 : coins.coin2)
            }
          />
        </CurrencyInputContainer>
      </CurrencyTable>
      <ExchangeIcon
        onClick={() => setIsExchanged(!isExchanged)}
        src={Icons.Exchange}
      />
      <CurrencyTable>
        <CurrencySymbol>
          {isExchanged ? coins.coin2.name : coins.coin1.name}
        </CurrencySymbol>
        <CurrencyInputContainer>
          <DollarSign>
            {" "}
            {isExchanged ? coins.coin2.symbol : coins.coin1.symbol}
          </DollarSign>
          <CurrencyInput
            value={isExchanged ? coins.coin2.amount : coins.coin1.amount}
            type="number"
            name={isExchanged ? "coin2" : "coin1"}
            onChange={(event) =>
              handleAmountChange(event, isExchanged ? coins.coin2 : coins.coin1)
            }
          />
        </CurrencyInputContainer>
      </CurrencyTable>
    </Container>
  );
};

export default CurrencyConverter;
