import {
  ADD_HOTEL,
  CHANGE_DATA_SEARCH,
  GET_HOTELS,
  HIDE_ERROR,
  LOGIN,
  LOGOUT,
  REMOVE_HOTEL,
  SHOW_ERROR,
  SORT_BY_PRICE,
  SORT_BY_RATING,
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

export function sortFavoritesByRating(toggle) {
  return {
    type: SORT_BY_RATING,
    payload: toggle,
  };
}

export function sortFavoritesByPrice(toggle) {
  return {
    type: SORT_BY_PRICE,
    payload: toggle,
  };
}
