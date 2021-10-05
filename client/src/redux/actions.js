import { HIDE_ERROR, LOGIN, SHOW_ERROR } from "./types";

export function login(inputValue) {
  return {
    type: LOGIN,
    payload: inputValue,
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
  