const initialState = "home";

export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";

function activePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return action.payload;
    default:
      return state;
  }
}

export default activePageReducer;
