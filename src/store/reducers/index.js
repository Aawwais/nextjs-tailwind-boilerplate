// Root Reducer

import { combineReducers } from "redux";
import authReducer from "./authReducer";

export let rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
