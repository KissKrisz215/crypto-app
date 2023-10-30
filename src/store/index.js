import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import activePageReducer from "./activePage/index";
import activeCurrencyReducer from "./currency";
import activeThemeReducer from "./theme";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  active: activePageReducer,
  activeCurrency: activeCurrencyReducer,
  handleActiveCurrency: activeCurrencyReducer,
  activeTheme: activeThemeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["activeCurrency", "activeTheme"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
