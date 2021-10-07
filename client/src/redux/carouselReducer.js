// import { HIDE_ERROR, LOGIN, LOGOUT, SHOW_ERROR } from "./types";

const initState = {
  images: [
    {
      src: require('../img/carousel-1.jpg'),
      alt: "Изображение дома, озера и леса",
    },
    {
      src: require('../img/carousel-2.jpg'),
      alt: "Изображение леса сверху",
    },
    {
      src: require('../img/carousel-3.jpg'),
      alt: "Изображение леса и дороги сверху",
    },
    {
      src: require('../img/carousel-4.jpg'),
      alt: "Изображение леса и дороги сверху",
    },
  ],
};

export const carouselReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
