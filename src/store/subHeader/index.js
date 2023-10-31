const initialState = {
  data: null,
  errorMessage: null,
  isLoading: true,
};

export const GET_NAVBAR_INFO_SUCCESS = "GET_NAVBAR_INFO_SUCCESS";
export const GET_NAVBAR_INFO_PENDING = "GET_NAVBAR_INFO_PENDING";
export const GET_NAVBAR_INFO_ERROR = "GET_NAVBAR_INFO_ERROR";

function navbarInfoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NAVBAR_INFO_PENDING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        data: null,
      };
    case GET_NAVBAR_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        errorMessage: null,
        isLoading: false,
      };
    case GET_NAVBAR_INFO_ERROR:
      return {
        ...state,
        data: null,
        isLoading: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default navbarInfoReducer;
