import s from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <section className={`${s.search} ${s.search__wrapper}`}>
      <div className={s.search__form}>
        <form className={s.form}>
          <div className={s.form__container}>
            <div className={s.row}>
              <label className={s.row__name}>Локация</label>
              <input type="text" className={s.row__field}></input>
            </div>
            <div className={s.row}>
              <label className={s.row__name}>Дата заселения</label>
              <input type="text" className={s.row__field}></input>
            </div>
            <div className={s.row}>
              <label className={s.row__name}>Количество дней</label>
              <input type="text" className={s.row__field}></input>
            </div>
          </div>
          <button type="submit" className={s.form__submit}>
            Найти
          </button>
        </form>
      </div>
    </section>
  );
}
