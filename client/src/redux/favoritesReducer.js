import {
  ADD_HOTEL,
  REMOVE_HOTEL,
  SORT_BY_PRICE,
  SORT_BY_RATING,
} from "./types";

const initState = {
  favoritHotels: [],
  sortByRating: false,
  sortByPrice: false,
};

export const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_HOTEL:
      return {
        ...state,
        favoritHotels: state.favoritHotels.concat(action.payload),
      };
    case REMOVE_HOTEL:
      return {
        ...state,
        favoritHotels: state.favoritHotels.filter(
          (hotel) => hotel.hotelId !== action.payload
        ),
      };
    case SORT_BY_RATING:
      return {
        ...state,
        // sortByRating: state.sortByRating === action.payload ? true : false,
        favoritHotels: state.favoritHotels.sort((a, b) => {
          console.log(a.stars)
          return b.stars - a.stars;
        }),
      };
    case SORT_BY_PRICE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
