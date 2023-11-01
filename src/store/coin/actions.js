import axios from "axios";
import {
  GET_COIN_DATA_PENDING,
  GET_COIN_DATA_SUCCESS,
  GET_COIN_DATA_ERROR,
  CHANGE_PERCENTAGE,
  SET_COIN_DATA,
} from "./index";
import { formatPercentageTwoDecimal, calculatePercentage } from "../../utils";

export const changePercentage = (percentage) => ({
  type: CHANGE_PERCENTAGE,
  payload: percentage,
});

export const setCoin = (data) => ({
  type: SET_COIN_DATA,
  payload: data,
});

export const getData = (id) => async (dispatch, getState) => {
  const state = getState();
  const activeCurrency = state.activeCurrency;
  dispatch({
    type: GET_COIN_DATA_PENDING,
  });
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
    );
    const price_change_percentage_24h = formatPercentageTwoDecimal(
      data.market_data.price_change_percentage_24h_in_currency[
        activeCurrency.name
      ]
    );

    const profit = (
      (price_change_percentage_24h *
        data.market_data.current_price[activeCurrency.name]) /
      100
    ).toFixed(2);

    const percentage = calculatePercentage(
      data.market_data.max_supply,
      data.market_data.circulating_supply
    );

    if (!isNaN(percentage)) {
      dispatch(changePercentage(percentage));
    }
    const coinData = {
      price_change_percentage_24h,
      profit,
    };
    dispatch({
      type: SET_COIN_DATA,
      payload: data,
    });
    dispatch({
      type: GET_COIN_DATA_SUCCESS,
      payload: coinData,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_COIN_DATA_ERROR,
      payload: "There was an error loading the data.",
    });
  }
};
