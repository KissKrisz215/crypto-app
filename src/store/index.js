import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import activePageReducer from "./activePage/index";
import activeCurrencyReducer from "./currency";
import activeThemeReducer from "./theme";
import thunk from "redux-thunk";
import searchReducer from "./search";
import navbarInfoReducer from "./subHeader";
import chartReducer from "./charts";
import coinsListReducer from "./coins";
import portfolioDataReducer from "./portfolio";

const rootReducer = combineReducers({
  active: activePageReducer,
  activeCurrency: activeCurrencyReducer,
  handleActiveCurrency: activeCurrencyReducer,
  activeTheme: activeThemeReducer,
  search: searchReducer,
  navbarInfo: navbarInfoReducer,
  chart: chartReducer,
  coins: coinsListReducer,
  portfolio: portfolioDataReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["activeCurrency", "activeTheme", "portfolio"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
