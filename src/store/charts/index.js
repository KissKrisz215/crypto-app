const initialState = {
  marketData: null,
  pricesData: null,
  pricesDate: { name: "1d", days: 1 },
  marketDate: { name: "1d", days: 1 },
  currency: null,
  currencyPrice: null,
  currencyVolume: null,
  errorMessage: null,
};

export const GET_CHART_DATA_PENDING = "GET_CHART_DATA_PENDING";
export const GET_BAR_CHART_SUCCESS = "GET_BAR_CHART_SUCCESS";
export const GET_LINE_CHART_SUCCESS = "GET_LINE_CHART_SUCCESS";
export const GET_CHART_DATA_ERROR = "GET_CHART_DATA_ERROR";
export const GET_CURRENCY_SUCCESS = "GET_CURRENCY_SUCCESS";
export const SET_PRICES_DATE = "SET_PRICES_DATE";
export const SET_MARKET_DATE = "SET_MARKET_DATE";
export const SET_ACTIVE_CURRENCY = "SET_ACTIVE_CURRENCY";

function chartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHART_DATA_PENDING:
      return {
        ...state,
      };
    case GET_BAR_CHART_SUCCESS:
      return {
        ...state,
        marketData: action.payload,
        errorMessage: null,
      };
    case GET_LINE_CHART_SUCCESS:
      return {
        ...state,
        pricesData: action.payload,
        errorMessage: null,
      };
    case GET_CHART_DATA_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        marketData: null,
        pricesData: null,
      };
    case GET_CURRENCY_SUCCESS:
      return {
        ...state,
        currencyPrice: action.payload.currencyPrice,
        currencyVolume: action.payload.currencyVolume,
        errorMessage: null,
      };
    case SET_PRICES_DATE:
      return {
        ...state,
        pricesDate: action.payload,
        errorMessage: null,
      };
    case SET_MARKET_DATE:
      return {
        ...state,
        marketDate: action.payload,
        errorMessage: null,
      };
    case SET_ACTIVE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
        errorMessage: null,
      };
    default:
      return state;
  }
}

export default chartReducer;
