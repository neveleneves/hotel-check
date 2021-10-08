import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFavorites,
  sortByPriceAsc,
  sortByPriceDefault,
  sortByPriceDesc,
  sortByRatingAsc,
  sortByRatingDefault,
  sortByRatingDesc,
} from "../../redux/actions";
import EmptyMessage from "../EmptyMessage/EmptyMessage";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import s from "./FavoritesBar.module.scss";

export default function FavoritesBar() {
  const dispatch = useDispatch();
  const { favoriteHotels, sortByRating, sortByPrice } = useSelector(
    (state) => state.favorites
  );

  useEffect(() => {
    dispatch(sortByPriceDefault("DEFAULT"));
    dispatch(sortByRatingDefault("DEFAULT"));
    dispatch(resetFavorites([]));
  }, [dispatch]);

  const sortByRatingHandler = () => {
    if (sortByPrice !== "DEFAULT") {
      dispatch(sortByPriceDefault("DEFAULT"));
    }

    switch (sortByRating) {
      case "DEFAULT":
        dispatch(sortByRatingAsc("ASC"));
        break;
      case "ASC":
        dispatch(sortByRatingDesc("DESC"));
        break;
      default:
        dispatch(sortByRatingDefault("DEFAULT"));
        break;
    }
  };

  const sortByPriceHandler = () => {
    if (sortByRating !== "DEFAULT") {
      dispatch(sortByRatingDefault("DEFAULT"));
    }

    switch (sortByPrice) {
      case "DEFAULT":
        dispatch(sortByPriceAsc("ASC"));
        break;
      case "ASC":
        dispatch(sortByPriceDesc("DESC"));
        break;
      default:
        dispatch(sortByPriceDefault("DEFAULT"));
        break;
    }
  };

  return (
    <section className={`${s.favorites} ${s.favorites__wrapper} `}>
      <h2 className={s.favorites__title}>Избранное</h2>
      <nav className={`${s.filters} ${s.filters__wrapper}`}>
        <ul className={s.filters__list}>
          <li className={s.filter}>
            <button
              disabled={favoriteHotels.length === 0 ? true : false}
              onClick={sortByRatingHandler}
              className={
                sortByRating === "DEFAULT"
                  ? `${s.filter__button}`
                  : `${s.filter__button} ${s.filter__button_active}`
              }
            >
              <span
                className={
                  sortByRating === "DEFAULT"
                    ? `${s.filter__title}`
                    : `${s.filter__title} ${s.filter__title_active}`
                }
              >
                Рейтинг
              </span>
              <span
                className={
                  sortByRating === "DEFAULT"
                    ? `${s.filter__icon}`
                    : sortByRating === "ASC"
                    ? `${s.filter__icon} ${s.filter__icon_ascending}`
                    : `${s.filter__icon} ${s.filter__icon_descending}`
                }
              ></span>
            </button>
          </li>
          <li className={s.filter}>
            <button
              disabled={favoriteHotels.length === 0 ? true : false}
              onClick={sortByPriceHandler}
              className={
                sortByPrice === "DEFAULT"
                  ? `${s.filter__button}`
                  : `${s.filter__button} ${s.filter__button_active}`
              }
            >
              <span
                className={
                  sortByPrice === "DEFAULT"
                    ? `${s.filter__title}`
                    : `${s.filter__title} ${s.filter__title_active}`
                }
              >
                Цена
              </span>
              <span
                className={
                  sortByPrice === "DEFAULT"
                    ? `${s.filter__icon}`
                    : sortByPrice === "ASC"
                    ? `${s.filter__icon} ${s.filter__icon_ascending}`
                    : `${s.filter__icon} ${s.filter__icon_descending}`
                }
              ></span>
            </button>
          </li>
        </ul>
      </nav>
      <ul className={s.favorites__list}>
        {Array.isArray(favoriteHotels) && favoriteHotels.length !== 0 ? (
          favoriteHotels.map((hotel) => {
            return (
              <FavoritesItem
                title={hotel.hotelName}
                price={hotel.priceFrom}
                checkInDate={new Date(hotel.checkInDate)}
                countDay={hotel.countDay}
                stars={hotel.stars}
                hotelID={hotel.hotelId}
                key={hotel.hotelId}
              />
            );
          })
        ) : (
          <EmptyMessage message={"Список избранного пуст"} />
        )}
      </ul>
    </section>
  );
}
