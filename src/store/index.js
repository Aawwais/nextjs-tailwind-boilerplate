import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/index";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const reducer = (state, action) => {
  if (action.type === "RESET_ALL_SLICES") {
    storage.removeItem("persist:root");
    const { user, ...resetSlices } = state;
    const resetState = Object.keys(resetSlices).reduce((acc, key) => {
      acc[key] = undefined;
      return acc;
    }, {});
    state = {
      user,
      ...resetState,
    };
  }
  return persistedReducer(state, action);
};

const initialState = {};
const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
