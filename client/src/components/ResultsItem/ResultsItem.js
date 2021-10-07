import s from "./ResultsItem.module.scss";
import { ReactComponent as DisableStar } from "../../img/star.svg";
import { ReactComponent as ActiveStar } from "../../img/star-active.svg";
import { ReactComponent as HotelIcon } from "../../img/hotel.svg";
import { ReactComponent as Dash } from "../../img/dah.svg";
import { ReactComponent as Like } from "../../img/like.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/actions";

export default function ResultsItem(props) {
  const { title, price, stars, countDay, checkInDate, hotelID } = props;
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.search);
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

  const addToFavoritesHandler = () => {
    const hotelToRemove = favoritHotels.find(
      (hotel) => hotel.hotelId === hotelID
    );
    if (hotelToRemove) return dispatch(removeFromFavorites(hotelID));

    const hotelToAdd = hotels.find((hotel) => hotel.hotelId === hotelID);
    dispatch(addToFavorites({ ...hotelToAdd }));
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
                  dateFormat.split(",")[0].split(" ").reverse().join(" ") + ","
                }${dateFormat.split(",")[1]}`}</span>
                <span className={s.info__dah}>
                  <Dash />
                </span>
                <span className={s.info__day}>{countDay} день</span>
              </div>
            </div>
            <div className={s.info__opinion}>
              {opinion.map((star, index) => {
                return star ? (
                  <ActiveStar key={index} />
                ) : (
                  <DisableStar key={index} />
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
