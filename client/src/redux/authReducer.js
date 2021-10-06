import { HIDE_ERROR, LOGIN, LOGOUT, SHOW_ERROR } from "./types";

const initState = {
  user: {},
  error: {
    emailError: null,
    passwordError: null,
  },
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: { ...action.payload } };
    case LOGOUT:
      return { ...state, ...initState};
    case SHOW_ERROR:
      return { ...state, error: { ...action.payload } };
    case HIDE_ERROR:
      return { ...state, error: { ...action.payload } };
    default:
      return state;
  }
};
