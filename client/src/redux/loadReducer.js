import { LOADING_ACTIVE, LOADING_DISABLE } from "./types";

const initState = {
  loading: false,
};

export const loadReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_ACTIVE:
      return { ...state, loading: true };
    case LOADING_DISABLE:
      return { ...state, loading: false  };
    default:
      return state;
  }
};
