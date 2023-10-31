import axios from "axios";
import {
  GET_CHART_DATA_PENDING,
  GET_BAR_CHART_SUCCESS,
  GET_LINE_CHART_SUCCESS,
  GET_CHART_DATA_ERROR,
  GET_CURRENCY_SUCCESS,
  SET_PRICES_DATE,
  SET_MARKET_DATE,
  SET_ACTIVE_CURRENCY,
} from "./index";
import { addCommas, formatCurrency } from "../../utils";

export const getChartData =
  (days, interval, type) => async (dispatch, getState) => {
    try {
      const state = getState();
      const currency = state.activeCurrency;

      dispatch({ type: GET_CHART_DATA_PENDING });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${
          currency.name
        }&days=${days}${interval ? `&interval=${interval}` : ""}`
      );
      if (type === "line") {
        dispatch({ type: GET_LINE_CHART_SUCCESS, payload: data.prices });
      } else if (type === "bar") {
        dispatch({ type: GET_BAR_CHART_SUCCESS, payload: data.total_volumes });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_CHART_DATA_ERROR,
        payload: "There was an error retrieving the data.",
      });
    }
  };

export const getPriceAndVolume = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const currency = state.activeCurrency;
    dispatch({ type: GET_CHART_DATA_PENDING });
    const { data } = await axios(
      "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false"
    );

    const currencyPrice = addCommas(
      data.market_data.current_price[currency.name]
    );

    const currencyVolume = formatCurrency(
      data.market_data.total_volume[currency.name]
    );

    dispatch({
      type: GET_CURRENCY_SUCCESS,
      payload: { currencyPrice, currencyVolume },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_CHART_DATA_ERROR,
      payload: "There was an error retrieving the data.",
    });
  }
};

export const setMarketDate = (date) => (dispatch, getState) => {
  dispatch({ type: SET_MARKET_DATE, payload: date });
};

export const setPricesDate = (date) => (dispatch, getState) => {
  dispatch({ type: SET_PRICES_DATE, payload: date });
};

export const setCurrency = (currency) => ({
  type: SET_ACTIVE_CURRENCY,
  payload: currency,
});
