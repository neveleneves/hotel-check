import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
});
