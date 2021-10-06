import { useSelector } from "react-redux";
import CarouselItem from "../CarouselItem/CarouselItem";
import ResultsItem from "../ResultsItem/ResultsItem";
import s from "./Results.module.scss";

export default function Results() {
  const { location, dateValue, countDay } = useSelector(
    (state) => state.search.input
  );
  const localDate = new Date(dateValue);

  return (
    <section className={`${s.results} ${s.results__wrapper}`}>
      <div className={s.content}>
        <div className={s.content__header}>
          <div className={s.title}>
            <h2 className={s.title__text}>Отели</h2>
            <span className={s.title__arrow}>
              <svg
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999878 1.33334L9.66654 10L0.999878 18.6667"
                  stroke="#A7A7A7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className={s.title__text}>{location}</h2>
          </div>
          <div className={s.date}>
            <span className={s.date__value}>
              {localDate.toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className={s.content__carousel}>
          <ul className={s.carousel}>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </ul>
        </div>
        <div className={s.main}>
          <div className={s.main__header}>
            <h3 className={s.main__title}>
              Добавлено в Избранное:
              <span className={s.main__value}>3</span>
              отеля
            </h3>
          </div>
          <ul className={s.main__list}>
            <ResultsItem countDay={countDay} />
          </ul>
        </div>
      </div>
    </section>
  );
}
