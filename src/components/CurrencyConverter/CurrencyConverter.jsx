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

const CurrencyConverter = ({ activeCurrency, activeCoin }) => {
  const [isExchanged, setIsExchanged] = useState(true);
  const [coins, setCoins] = useState({
    coin1: {
      symbol: activeCurrency.symbol,
      name: activeCurrency.name.toUpperCase(),
      amount: activeCoin.market_data.current_price[activeCurrency.name],
    },
    coin2: {
      symbol: activeCoin.symbol.toUpperCase(),
      name: activeCoin.symbol.toUpperCase(),
      amount: 0,
    },
  });

  const calculatePrice = (name) => {
    if (name === "coin1") {
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
      console.log(coins.coin2.amount);
    } else if (name === "coin2") {
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
    coin.amount = event.target.value;
    const name = event.target.name;
    setCoins((prevData) => ({ ...prevData, coin }));
    calculatePrice(name);
  };

  useEffect(() => {
    setCoins((prevCoins) => ({
      ...prevCoins,
      coin1: {
        ...prevCoins.coin1,
        symbol: activeCurrency.symbol,
        name: activeCurrency.name.toUpperCase(),
      },
    }));
    calculatePrice("coin1");
  }, [activeCurrency]);

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
            onChange={() =>
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
            onChange={() =>
              handleAmountChange(event, isExchanged ? coins.coin2 : coins.coin1)
            }
          />
        </CurrencyInputContainer>
      </CurrencyTable>
    </Container>
  );
};

export default CurrencyConverter;
