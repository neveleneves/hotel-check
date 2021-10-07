import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as DisableStar } from "../../img/star.svg";
import { ReactComponent as ActiveStar } from "../../img/star-active.svg";
import { ReactComponent as Dash } from "../../img/dah.svg";
import { ReactComponent as Like } from "../../img/like.svg";
import { removeFromFavorites } from "../../redux/actions";

import s from "./FavoritesItem.module.scss";

export default function FavoritesItem(props) {
  const { title, price, stars, hotelID, checkInDate, countDay } = props;
  const dispatch = useDispatch();
  const { favoritHotels } = useSelector((state) => state.favorites);

  const opinion = Array(5).fill(false);
  for (let i = 0; i !== stars; i++) {
    opinion[i] = true;
  }

  const dateFormat = checkInDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const removeFavoritesHandler = () => {
    const hotelToRemove = favoritHotels.find(
      (hotel) => hotel.hotelId === hotelID
    );
    if (hotelToRemove) return dispatch(removeFromFavorites(hotelID));
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
                  dateFormat.split(",")[0].split(" ").reverse().join(" ") + ","
                }${dateFormat.split(",")[1]}`}</span>
                <span className={s.info__dah}>
                  <Dash />
                </span>
                <span className={s.info__day}>{countDay} день</span>
              </div>
            </div>
            <div className={s.info__opinion}>
              <span className={s.info__star}>
                {opinion.map((star, index) => {
                  return star ? (
                    <ActiveStar key={index} />
                  ) : (
                    <DisableStar key={index} />
                  );
                })}
              </span>
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
