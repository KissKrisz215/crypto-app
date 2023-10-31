import axios from "axios";
import {
  GET_COINS_NO_RESULTS,
  GET_COINS_SUCCESS,
  GET_COINS_ERROR,
  SET_IS_LOADING,
  SET_ERROR_MESSAGE,
  SET_LIST_DATA,
} from "./index";

export const getData = (searchValue) => async (dispatch, getState) => {
  try {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/search?query=${searchValue}`
    );
    if (data.coins.length === 0) {
      dispatch({
        type: GET_COINS_NO_RESULTS,
        payload: "There was an error retrieving the data.",
      });
    } else {
      const slicedData = data.coins.slice(0, 25);
      dispatch({
        type: GET_COINS_SUCCESS,
        payload: slicedData,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_COINS_ERROR,
    });
  }
};

export const setIsLoading = (value) => ({
  type: SET_IS_LOADING,
  payload: value,
});

export const setErrorMessage = (value) => ({
  type: SET_ERROR_MESSAGE,
  payload: value,
});

export const setListData = (value) => ({
  type: SET_LIST_DATA,
  payload: value,
});
