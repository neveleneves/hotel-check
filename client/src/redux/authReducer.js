import { HIDE_ERROR, LOGIN, SHOW_ERROR } from "./types";

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
    case SHOW_ERROR:
      return { ...state, error: {...action.payload} };
    case HIDE_ERROR:
      return { ...state, error: {...action.payload} };
    default:
      return state;
  }
};
