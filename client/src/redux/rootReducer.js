import { combineReducers } from "redux";
import { loadReducer } from "./loadReducer";
import { authReducer } from "./authReducer";
import { carouselReducer } from "./carouselReducer";
import { favoritesReducer } from "./favoritesReducer";
import { searchReducer } from "./searchReducer";
import { LOGOUT } from "./types";

const appReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  carousel: carouselReducer,
  favorites: favoritesReducer,
  load: loadReducer,
});

// const initialState = appReducer({}, {})

export const rootReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      return appReducer({}, action);
    default:
      return appReducer(state, action);
  }
};
