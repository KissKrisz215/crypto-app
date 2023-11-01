const initialState = "home";

export const SET_MOBILE_ACTIVE = "SET_MOBILE_ACTIVE";

function mobileActiveReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOBILE_ACTIVE:
      return action.payload;
    default:
      return state;
  }
}

export default mobileActiveReducer;
