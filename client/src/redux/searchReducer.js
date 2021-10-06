import { CHANGE_DATA_SEARCH, GET_HOTELS } from "./types";

const initState = {
  input: {
    location: "Москва",
    dateValue: Date.now(),
    countDay: 1,
  },
  hotels: [],
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_DATA_SEARCH:
      return { ...state, input: {...action.payload} };
    case GET_HOTELS:
      return { ...state, hotels: action.payload };
    default:
      return state;
  }
};
