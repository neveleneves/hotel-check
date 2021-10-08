import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as DisableStar } from "../../img/star.svg";
import { ReactComponent as ActiveStar } from "../../img/star-active.svg";
import { ReactComponent as Dash } from "../../img/dah.svg";
import { ReactComponent as Like } from "../../img/like.svg";
import { useEnumerate } from "../../hooks/useEnumerate";
import {
  removeFromFavorites,
  sortByPriceDefault,
  sortByRatingDefault,
} from "../../redux/actions";

import s from "./FavoritesItem.module.scss";

export default function FavoritesItem(props) {
  const { title, price, stars, hotelID, checkInDate, countDay } = props;
  const dispatch = useDispatch();
  const { favoriteHotels, sortByPrice, sortByRating } = useSelector(
    (state) => state.favorites
  );
  const { label } = useEnumerate(countDay, ["день", "дня", "дней"], "день");

  const removeFavoritesHandler = () => {
    const hotelToRemove = favoriteHotels.find(
      (hotel) => hotel.hotelId === hotelID
    );
    if (hotelToRemove) {
      dispatch(removeFromFavorites(hotelID));
      if (favoriteHotels.length === 1) {
        if (sortByRating !== "DEFAULT")
          dispatch(sortByRatingDefault("DEFAULT"));
        if (sortByPrice !== "DEFAULT") dispatch(sortByPriceDefault("DEFAULT"));
      }
    }
  };

  return (
    <li className={s.item}>
      <div className={s.item__wrapper}>
        <div className={s.item__main}>
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
        <button onClick={removeFavoritesHandler} className={s.item__button}>
          <Like />
        </button>
        <span className={s.item__price}>
          Price:{" "}
          <span className={s.item__priceValue}>{Math.round(price)} ₽</span>
        </span>
      </div>
      <span className={s.item__line}></span>
    </li>
  );
}
