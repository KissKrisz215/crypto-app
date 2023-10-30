const initialState = false;

export const SET_ACTIVE_THEME = "SET_ACTIVE_THEME";

function activeThemeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_THEME:
      return !state;
    default:
      return state;
  }
}

export default activeThemeReducer;
