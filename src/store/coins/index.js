const initialState = {
  isLoading: true,
  data: [],
  errorMessage: null,
  showRows: 50,
  currentPage: 1,
  activeCategory: {
    name: "Cryptocurrency",
    category: null,
  },
};

export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";
export const SET_SHOW_ROWS = "SET_SHOW_ROWS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const GET_COINS_PENDING = "GET_COINS_PENDING";
export const GET_COINS_SUCCESS = "GET_COINS_ERROR";
export const SET_COINS_DATA = "SET_COINS_DATA";

function coinsListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };
    case SET_SHOW_ROWS:
      return {
        ...state,
        showRows: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case GET_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
        data: action.payload,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case SET_COINS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default coinsListReducer;
