const initialState = {
  isLoading: false,
  coin: null,
  errorMessage: null,
  percentage: null,
  coinData: null,
};

export const GET_COIN_DATA_PENDING = "GET_COIN_DATA_PENDING";
export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";
export const GET_COIN_DATA_ERROR = "GET_COIN_DATA_ERROR";
export const CHANGE_PERCENTAGE = "CHANGE_PERCENTAGE";
export const SET_COIN_DATA = "SET_COIN_DATA";

function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COIN_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coinData: action.payload,
      };
    case GET_COIN_DATA_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case CHANGE_PERCENTAGE:
      return {
        ...state,
        percentage: action.payload,
      };
    case SET_COIN_DATA:
      return {
        ...state,
        coin: action.payload,
      };
    default:
      return state;
  }
}

export default coinReducer;
