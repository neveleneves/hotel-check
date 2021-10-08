import {
  ADD_HOTEL,
  CHANGE_DATA_SEARCH,
  GET_HOTELS,
  HIDE_ERROR,
  LOADING_ACTIVE,
  LOADING_DISABLE,
  LOGIN,
  LOGOUT,
  REMOVE_HOTEL,
  RESET_FAVORITES,
  SHOW_ERROR,
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DEFAULT,
  SORT_BY_PRICE_DESC,
  SORT_BY_RATING_ASC,
  SORT_BY_RATING_DEFAULT,
  SORT_BY_RATING_DESC,
} from "./types";

export function login(inputValue) {
  return {
    type: LOGIN,
    payload: inputValue,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function showError(messages) {
  return {
    type: SHOW_ERROR,
    payload: messages,
  };
}

export function hideError(messages) {
  return {
    type: HIDE_ERROR,
    payload: messages,
  };
}

export function changeDataSearch(inputsData) {
  return {
    type: CHANGE_DATA_SEARCH,
    payload: inputsData,
  };
}

export function getHotels(dataFromState) {
  return {
    type: GET_HOTELS,
    payload: dataFromState,
  };
}

export function addToFavorites(hotel) {
  return {
    type: ADD_HOTEL,
    payload: hotel,
  };
}

export function removeFromFavorites(hotelID) {
  return {
    type: REMOVE_HOTEL,
    payload: hotelID,
  };
}

export function resetFavorites(reset) {
  return {
    type: RESET_FAVORITES,
    payload: reset,
  };
}

export function sortByRatingAsc(mode) {
  return {
    type: SORT_BY_RATING_ASC,
    payload: mode,
  };
}

export function sortByRatingDesc(mode) {
  return {
    type: SORT_BY_RATING_DESC,
    payload: mode,
  };
}

export function sortByRatingDefault(mode) {
  return {
    type: SORT_BY_RATING_DEFAULT,
    payload: mode,
  };
}

export function sortByPriceAsc(mode) {
  return {
    type: SORT_BY_PRICE_ASC,
    payload: mode,
  };
}

export function sortByPriceDesc(mode) {
  return {
    type: SORT_BY_PRICE_DESC,
    payload: mode,
  };
}

export function sortByPriceDefault(mode) {
  return {
    type: SORT_BY_PRICE_DEFAULT,
    payload: mode,
  };
}

export function activeLoader(toggle) {
  return {
    type: LOADING_ACTIVE,
    payload: toggle,
  };
}

export function disableLoader(toggle) {
  return {
    type: LOADING_DISABLE,
    payload: toggle,
  };
}
