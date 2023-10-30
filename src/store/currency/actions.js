import { SET_ACTIVE_CURRENCY } from "./index";

export const setActiveCurrency = (active) => ({
  type: SET_ACTIVE_CURRENCY,
  payload: active,
});
