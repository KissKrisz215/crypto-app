import axios from "axios";
import {
  GET_SEARCH_COINS_SUCCESS,
  GET_SEARCH_COINS_ERROR,
  GET_SEARCH_COINS_PENDING,
  CLEAR_SEARCH_RESULTS,
  GET_SEARCH_NOT_FOUND,
} from "./index";

export const getSearchResults = (searchValue) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_SEARCH_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/search?query=${searchValue}`
    );
    if (data.coins.length === 0) {
      dispatch({
        type: GET_SEARCH_NOT_FOUND,
        payload: "There was an error retrieving the data.",
      });
    } else {
      const slicedData = data.coins.slice(0, 25);
      dispatch({ type: GET_SEARCH_COINS_SUCCESS, payload: slicedData });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_COINS_ERROR,
    });
  }
};

export const clearSearchReesults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});
