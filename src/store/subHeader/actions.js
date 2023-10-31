import axios from "axios";
import {
  GET_NAVBAR_INFO_SUCCESS,
  GET_NAVBAR_INFO_ERROR,
  GET_NAVBAR_INFO_PENDING,
} from "./index";

export const getNavbarInfo = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_NAVBAR_INFO_PENDING });
    const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
    dispatch({ type: GET_NAVBAR_INFO_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({
      type: GET_NAVBAR_INFO_ERROR,
      payload: "An error occurred while fetching data. Please try again later.",
    });
  }
};
