import {CHANGE_DATA_SEARCH, GET_HOTELS, HIDE_ERROR, LOGIN, LOGOUT, SHOW_ERROR } from "./types";

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
    payload: dataFromState
  };
}