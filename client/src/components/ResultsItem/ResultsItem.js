import { useDispatch, useSelector } from "react-redux";
import s from "./ResultsItem.module.scss";
import { ReactComponent as DisableStar } from "../../img/star.svg";
import { ReactComponent as ActiveStar } from "../../img/star-active.svg";
import { ReactComponent as HotelIcon } from "../../img/hotel.svg";
import { ReactComponent as Dash } from "../../img/dah.svg";
import { ReactComponent as Like } from "../../img/like.svg";
import { useEnumerate } from "../hooks/useEnumerate";
import {
  addToFavorites,
  removeFromFavorites,
  sortByPriceDefault,
  sortByRatingDefault,
} from "../../redux/actions";

export default function ResultsItem(props) {
  const { title, price, stars, countDay, checkInDate, hotelID } = props;
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.search);
  const { favoriteHotels, sortByPrice, sortByRating } = useSelector(
    (state) => state.favorites
  );
  const { label } = useEnumerate(countDay, ["день", "дня", "дней"], "день");

  const addToFavoritesHandler = () => {
    const hotelToRemove = favoriteHotels.find(
      (hotel) => hotel.hotelId === hotelID
    );
    if (hotelToRemove) {
      if (favoriteHotels.length > 1) {
        return dispatch(removeFromFavorites(hotelID));
      } else {
        resetSortings();
        return dispatch(removeFromFavorites(hotelID));
      }
    }
    resetSortings();
    const hotelToAdd = hotels.find((hotel) => hotel.hotelId === hotelID);
    dispatch(addToFavorites({ countDay, checkInDate, ...hotelToAdd }));
  };

  const resetSortings = () => {
    if (sortByRating !== "DEFAULT") dispatch(sortByRatingDefault("DEFAULT"));
    if (sortByPrice !== "DEFAULT") dispatch(sortByPriceDefault("DEFAULT"));
  };

  return (
    <li className={s.item}>
      <div className={s.item__wrapper}>
        <div className={s.item__main}>
          <div className={s.item__icon}>
            <HotelIcon />
          </div>
          <div className={s.info}>
            <div className={s.info__wrapper}>
              <h3 className={s.info__title}>{title}</h3>
              <div className={s.info__checkInDate}>
                <span className={s.info__date}>{`${
                  checkInDate
                    .toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                    .split(",")[0]
                    .split(" ")
                    .reverse()
                    .join(" ") + ","
                }${
                  checkInDate
                    .toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                    .split(",")[1]
                }`}</span>
                <span className={s.info__dah}>
                  <Dash />
                </span>
                <span className={s.info__day}>
                  {countDay} {label}
                </span>
              </div>
            </div>
            <div className={s.info__opinion}>
              {Array(5)
                .fill(false)
                .fill(true, 0, stars)
                .map((star, index) => {
                  return star ? (
                    <span key={index} className={s.info__star}>
                      <ActiveStar />
                    </span>
                  ) : (
                    <span key={index} className={s.info__star}>
                      <DisableStar key={index} />
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
        <div className={s.extra}>
          <button onClick={addToFavoritesHandler} className={s.extra__button}>
            <Like />
          </button>
          <span className={s.extra__price}>
            Price:
            <span className={s.extra__priceValue}>{Math.round(price)} ₽</span>
          </span>
        </div>
      </div>
      <span className={s.item__line}></span>
    </li>
  );
}
