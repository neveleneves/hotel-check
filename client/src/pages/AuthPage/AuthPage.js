import { useState } from "react";
import { hideError, login, showError } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import s from "./AuthPage.module.scss";

export default function AuthPage() {
  const dispatch = useDispatch();
  const { emailError, passwordError } = useSelector(
    (state) => state.auth.error
  );

  const [authInputsValue, setAuthInputsValue] = useState({
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();

    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!re.test(String(event.target.email.value).toLowerCase()))
      return dispatch(
        showError({ emailError: "Неверный e-mail адрес", passwordError: null })
      );
    else dispatch(hideError({ emailError: null }));

    if (event.target.password.value.length < 8)
      return dispatch(
        showError({
          emailError: null,
          passwordError: "Длина пароля должна быть не менее 8 символов",
        })
      );
    else dispatch(hideError({ passwordError: null }));

    dispatch(login({ ...authInputsValue }));
  };

  const onChangeInputs = (event) => {
    setAuthInputsValue({
      ...authInputsValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <main className={s.auth}>
      <section className={`${s.content} ${s.content__wrapper}`}>
        <div className={s.content__form}>
          <form onSubmit={onSubmitForm} className={s.form}>
            <h1 className={s.form__title}>Simple Hotel Check</h1>
            <div className={s.form__container}>
              <div className={s.row}>
                <label className={s.row__name}>Логин</label>
                <input
                  type="email"
                  name="email"
                  maxLength="35"
                  onChange={onChangeInputs}
                  value={authInputsValue.email}
                  className={s.row__field}
                ></input>
                <label className={s.row__message}>{emailError}</label>
              </div>
              <div className={s.row}>
                <label className={s.row__name}>Пароль</label>
                <input
                  type="password"
                  name="password"
                  maxLength="35"
                  onChange={onChangeInputs}
                  value={authInputsValue.password}
                  className={s.row__field}
                ></input>
                <label className={s.row__message}>{passwordError}</label>
              </div>
            </div>
            <button type="submit" className={s.form__submit}>
              Войти
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
