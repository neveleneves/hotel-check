import FavoritesItem from "../FavoritesItem/FavoritesItem";
import s from "./FavoritesBar.module.scss";

export default function FavoritesBar() {
  return (
    <section className={`${s.favorites} ${s.favorites__wrapper} `}>
      <h2 className={s.favorites__title}>Избранное</h2>
      <nav className={`${s.filters} ${s.filters__wrapper}`}>
        <ul className={s.filters__list}>
          <li className={s.filter}>
            <button className={s.filter__button}>
              <span className={s.filter__title}>Рейтинг</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4999 7.24264L12.4392 8.3033L9.25724 5.12132L6.07526 8.3033L5.0146 7.24264L9.25724 3L13.4999 7.24264Z"
                  fill="black"
                  fillOpacity="0.32"
                />
                <path
                  d="M13.4999 10.8325L12.4392 9.77181L9.25724 12.9538L6.07526 9.77181L5.0146 10.8325L9.25724 15.0751L13.4999 10.8325Z"
                  fill="black"
                  fillOpacity="0.32"
                />
              </svg>
            </button>
          </li>
          <li className={s.filter}>
            <button className={s.filter__button}>
              <span className={s.filter__title}>Цена</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4999 7.24264L12.4392 8.3033L9.25724 5.12132L6.07526 8.3033L5.0146 7.24264L9.25724 3L13.4999 7.24264Z"
                  fill="black"
                  fillOpacity="0.32"
                />
                <path
                  d="M13.4999 10.8325L12.4392 9.77181L9.25724 12.9538L6.07526 9.77181L5.0146 10.8325L9.25724 15.0751L13.4999 10.8325Z"
                  fill="black"
                  fillOpacity="0.32"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      <div className={s.content}>
        <ul className={s.content__list}>
          <FavoritesItem/>
          <FavoritesItem/>
          <FavoritesItem/>
          <FavoritesItem/>
        </ul>
      </div>
    </section>
  );
}
