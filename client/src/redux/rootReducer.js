import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { carouselReducer } from "./carouselReducer";
import { favoritesReducer } from "./favoritesReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  carousel: carouselReducer,
  favorites: favoritesReducer,
});
