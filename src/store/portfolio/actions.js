import axios from "axios";
import { SET_PORTFOLIO_DATA } from "./index";

export const setData = (data) => ({
  type: SET_PORTFOLIO_DATA,
  payload: data,
});
