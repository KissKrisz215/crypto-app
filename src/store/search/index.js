const initialState = {
  data: null,
  errorMessage: null,
  isLoading: true,
};

export const GET_SEARCH_COINS_SUCCESS = "GET_SEARCH_COINS_SUCCESS";
export const GET_SEARCH_COINS_PENDING = "GET_SEARCH_COINS_PENDING";
export const GET_SEARCH_COINS_ERROR = "GET_SEARCH_COINS_ERROR";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
export const GET_SEARCH_NOT_FOUND = "GET_SEARCH_NOT_FOUND";

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        data: null,
      };
    case GET_SEARCH_COINS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case GET_SEARCH_COINS_ERROR:
      return {
        ...state,
        data: [],
        isLoading: true,
      };
    case GET_SEARCH_NOT_FOUND:
      return {
        ...state,
        data: [],
        errorMessage: action.payload,
        isLoading: false,
      };
    case CLEAR_SEARCH_RESULTS:
      return {};
    default:
      return state;
  }
}

export default searchReducer;
