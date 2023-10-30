import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import activePageReducer from "./activePage/index";
import activeCurrencyReducer from "./currency";

const rootReducer = combineReducers({
  active: activePageReducer,
  activeCurrency: activeCurrencyReducer,
  handleActiveCurrency: activeCurrencyReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["activeCurrency"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
