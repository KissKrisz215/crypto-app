import { combineReducers, createStore } from "redux";
import activePageReducer from "./activePage/index";

const reducers = combineReducers({
  active: activePageReducer,
});

export const store = createStore(reducers);
