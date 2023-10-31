const initialState = {
  listData: null,
  errorMessage: null,
  isLoading: true,
};

export const GET_COINS_NO_RESULTS = "GET_COINS_NO_RESULTS";
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_ERROR = "GET_COINS_ERROR";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_LIST_DATA = "SET_LIST_DATA";

function coinSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_NO_RESULTS:
      return {
        listData: [],
        errorMessage: action.payload,
        isLoading: false,
      };
    case GET_COINS_SUCCESS:
      return {
        listData: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case GET_COINS_ERROR:
      return {
        isLoading: true,
        listData: [],
      };
    case SET_IS_LOADING:
      return {
        isLoading: action.payload,
      };
    case SET_ERROR_MESSAGE:
      return {
        errorMessage: action.payload,
      };
    case SET_LIST_DATA:
      return {
        listData: action.payload,
      };
    default:
      return state;
  }
}

export default coinSearchReducer;
