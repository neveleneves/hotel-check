import {
  ADD_HOTEL,
  REMOVE_HOTEL,
  RESET_FAVORITES,
  SORT_BY_PRICE_ASC,
  SORT_BY_PRICE_DEFAULT,
  SORT_BY_PRICE_DESC,
  SORT_BY_RATING_ASC,
  SORT_BY_RATING_DEFAULT,
  SORT_BY_RATING_DESC,
} from "./types";

const initState = {
  favoriteHotels: [],
  defaultList: [],
  sortByRating: "DEFAULT",
  sortByPrice: "DEFAULT",
};

export const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_HOTEL:
      return {
        ...state,
        favoriteHotels: state.favoriteHotels.concat(action.payload),
        defaultList: state.favoriteHotels.concat(action.payload),
      };
    case REMOVE_HOTEL:
      return {
        ...state,
        favoriteHotels: state.favoriteHotels.filter(
          (hotel) => hotel.hotelId !== action.payload
        ),
        defaultList: state.favoriteHotels.filter(
          (hotel) => hotel.hotelId !== action.payload
        ),
      };
    case RESET_FAVORITES:
      return {
        ...state,
        favoriteHotels: action.payload,
        defaultList: action.payload,
      };
    case SORT_BY_RATING_ASC:
      return {
        ...state,
        sortByRating: action.payload,
        favoriteHotels: state.favoriteHotels.sort((a, b) => {
          return a.stars - b.stars;
        }),
      };
    case SORT_BY_RATING_DESC:
      return {
        ...state,
        sortByRating: action.payload,
        favoriteHotels: state.favoriteHotels.sort((a, b) => {
          return b.stars - a.stars;
        }),
      };
    case SORT_BY_RATING_DEFAULT:
      return {
        ...state,
        sortByRating: action.payload,
        favoriteHotels: [...state.defaultList],
      };
    case SORT_BY_PRICE_ASC:
      return {
        ...state,
        sortByPrice: action.payload,
        favoriteHotels: state.favoriteHotels.sort((a, b) => {
          return a.priceFrom - b.priceFrom;
        }),
      };
    case SORT_BY_PRICE_DESC:
      return {
        ...state,
        sortByPrice: action.payload,
        favoriteHotels: state.favoriteHotels.sort((a, b) => {
          return b.priceFrom - a.priceFrom;
        }),
      };
    case SORT_BY_PRICE_DEFAULT:
      return {
        ...state,
        sortByPrice: action.payload,
        favoriteHotels: [...state.defaultList],
      };
    default:
      return state;
  }
};
