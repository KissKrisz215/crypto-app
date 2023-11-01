import axios from "axios";
import {
  GET_MARKET_CHANGES_ERROR,
  GET_MARKET_CHANGES_SUCCESS,
  GET_MARKET_CHANGES_PENDING,
} from "./index";
import { formatNumberToDecimal } from "../../utils/formatPrices";
import { formatPercentage } from "../../utils/formatPrices";

export const getMarketChanges = (coin) => async (dispatch, getState) => {
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coin.data.id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
    );

    const marketVolume = formatNumberToDecimal(
      data.market_data.market_cap[coin.currency.name] /
        data.market_data.total_volume[coin.currency.name],
      0
    );

    const supplyData = formatPercentage(
      data.market_data.circulating_supply /
        (data.market_data.total_supply / 100)
    );

    const amountValue = formatNumberToDecimal(
      data.market_data.current_price[coin.currency.name] * coin.purchaseAmount,
      0
    );

    const current_price = data.market_data.current_price[coin.currency.name];

    const price_change = formatNumberToDecimal(
      data.market_data.price_change_24h_in_currency[coin.currency.name]
    );

    const changeSincePurchase = formatNumberToDecimal(
      ((current_price * coin.purchaseAmount - coin.purchasePrice) /
        coin.purchasePrice) *
        100,
      2
    );

    const data1 = {
      current_price,
      price_change,
      market_vs_volume: marketVolume,
      supply: supplyData,
      value: amountValue,
      changeSincePurchase,
    };
    dispatch({
      type: GET_MARKET_CHANGES_SUCCESS,
      payload: data1,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_MARKET_CHANGES_ERROR,
    });
  }
};
