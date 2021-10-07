import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as FilterArrows } from "../../img/filter.svg";
import { sortFavoritesByRating } from "../../redux/actions";
import EmptyMessage from "../EmptyMessage/EmptyMessage";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import s from "./FavoritesBar.module.scss";

export default function FavoritesBar() {
  const dispatch = useDispatch();
  const { favoritHotels, sortByRating, sortByPrice } = useSelector(
    (state) => state.favorites
  );
  const { dateValue, countDay } = useSelector((state) => state.search.input);

  const sortByRatingHandler = () => {
    if (!sortByRating) {
      dispatch(sortFavoritesByRating(sortByRating));
    }
  };

  const sortByPriceHandler = () => {
    if (sortByPrice) {
    }
  };

  return (
    <section className={`${s.favorites} ${s.favorites__wrapper} `}>
      <h2 className={s.favorites__title}>Избранное</h2>
      <nav className={`${s.filters} ${s.filters__wrapper}`}>
        <ul className={s.filters__list}>
          <li className={s.filter}>
            <button
              disabled={favoritHotels.length === 0 ? true : false}
              onClick={sortByRatingHandler}
              className={s.filter__button}
            >
              <span className={s.filter__title}>Рейтинг</span>
              <FilterArrows />
            </button>
          </li>
          <li className={s.filter}>
            <button
              disabled={favoritHotels.length === 0 ? true : false}
              onClick={sortByPriceHandler}
              className={s.filter__button}
            >
              <span className={s.filter__title}>Цена</span>
              <FilterArrows />
            </button>
          </li>
        </ul>
      </nav>
      <ul className={s.favorites__list}>
        {Array.isArray(favoritHotels) && favoritHotels.length !== 0 ? (
          favoritHotels.map((hotel) => {
            return (
              <FavoritesItem
                title={hotel.hotelName}
                price={hotel.priceFrom}
                checkInDate={new Date(dateValue)}
                countDay={countDay}
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
