import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDataSearch, getHotels } from "../../redux/actions";

import s from "./SearchBar.module.scss";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { location, dateValue, countDay } = useSelector(
    (state) => state.search.input
  );

  const [searchValues, setSearchValues] = useState({
    location: location,
    dateValue: dateValue,
    countDay: countDay,
  });

  const onChangeInputs = (event) => {
    setSearchValues({
      ...searchValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
    dispatch(changeDataSearch({ ...searchValues }));
    dispatch(getHotels({ ...searchValues }));
  };

  return (
    <section className={`${s.search} ${s.search__wrapper}`}>
      <div className={s.search__form}>
        <form onSubmit={onSubmitSearch} className={s.form}>
          <div className={s.form__container}>
            <div className={s.row}>
              <label className={s.row__name}>Локация</label>
              <input
                type="text"
                maxLength="25"
                defaultValue={location}
                name="location"
                className={s.row__field}
                onChange={onChangeInputs}
              ></input>
            </div>
            <div className={`${s.row}`}>
              <label className={s.row__name}>Дата заселения</label>
              <input
                type="date"
                maxLength="15"
                name="dateValue"
                min={dateValue}
                defaultValue={dateValue}
                onChange={onChangeInputs}
                className={`${s.row__field} ${s.row__calendar}`}
              ></input>
              {/* <button type="button" className={s.row__icon}></button> */}
            </div>
            <div className={s.row}>
              <label className={s.row__name}>Количество дней</label>
              <input
                type="number"
                maxLength="25"
                defaultValue={countDay}
                onChange={onChangeInputs}
                name="countDay"
                className={s.row__field}
                min="1"
                max="100"
              ></input>
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
