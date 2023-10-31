import axios from "axios";
import {
  SET_ACTIVE_CATEGORY,
  SET_SHOW_ROWS,
  SET_CURRENT_PAGE,
  GET_COINS_PENDING,
  GET_COINS_SUCCESS,
  SET_COINS_DATA,
} from "./index";

export const getCoins = () => async (dispatch, getState) => {
  const state = getState();
  const activeCategory = state.coins.activeCategory;
  const showRows = state.coins.showRows;
  const currentPage = state.coins.currentPage;

  const loadingData = Array.from({ length: showRows });
  dispatch({ type: GET_COINS_PENDING, payload: loadingData });

  try {
    let category;
    if (activeCategory) {
      category = activeCategory.category;
    }

    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd${
        category ? `&category=${category}&` : "&"
      }order=market_cap_desc&per_page=${showRows}&page=${currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: GET_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_COINS_PENDING, payload: loadingData });
  }
};

export const setActiveCategory = (category) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: category,
});

export const setShowRows = (rows) => ({
  type: SET_SHOW_ROWS,
  payload: rows,
});

export const setCurrentPage = (page) => (dispatch, getState) => {
  if (page > 0) {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: page,
    });
  }
};

export const setData = (data) => ({
  type: SET_COINS_DATA,
  payload: data,
});
