const initialState = {
  isLoading: true,
  coinData: null,
};

export const GET_MARKET_CHANGES_ERROR = "GET_MARKET_CHANGES_ERROR";
export const GET_MARKET_CHANGES_SUCCESS = "GET_MARKET_CHANGES_SUCCESS";
export const GET_MARKET_CHANGES_PENDING = "GET_MARKET_CHANGES_PENDING";

function coinListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MARKET_CHANGES_ERROR:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MARKET_CHANGES_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MARKET_CHANGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coinData: action.payload,
      };
    default:
      return state;
  }
}

export default coinListReducer;
