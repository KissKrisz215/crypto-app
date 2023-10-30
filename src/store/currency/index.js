const initialState = {
  name: "usd",
  symbol: "$",
  isActive: true,
};

export const SET_ACTIVE_CURRENCY = "SET_ACTIVE_CURRENCY";

function activeCurrencyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_CURRENCY:
      return action.payload;
    default:
      return state;
  }
}

export default activeCurrencyReducer;
