import { useState } from "react";
import { hideError, login, showError } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import s from "./AuthPage.module.scss";

export default function AuthPage() {
  const [authInputsValue, setAuthInputsValue] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { emailError, passwordError } = useSelector(
    (state) => state.auth.error
  );

  const onSubmitForm = (event) => {
    event.preventDefault();

    const validTestEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!validTestEmail.test(String(event.target.email.value).toLowerCase()))
      return dispatch(
        showError({
          emailError: "Неверный e-mail адрес",
          passwordError: null,
        })
      );
    else dispatch(hideError({ emailError: null, passwordError: null }));

    const validTestPassword = /[а-яА-Я]/;
    if (
      event.target.password.value.length < 8 ||
      validTestPassword.test(String(event.target.password.value))
    )
      return dispatch(
        showError({
          emailError: null,
          passwordError: "Неверный пароль",
        })
      );
    else dispatch(hideError({ passwordError: null, emailError: null }));

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
                <label
                  className={
                    emailError
                      ? `${s.row__name} ${s.row__name_incorrect}`
                      : `${s.row__name}`
                  }
                >
                  Логин
                </label>
                <input
                  type="email"
                  name="email"
                  maxLength="35"
                  onChange={onChangeInputs}
                  value={authInputsValue.email}
                  className={
                    emailError
                      ? `${s.row__field} ${s.row__field_incorrect}`
                      : `${s.row__field}`
                  }
                  required
                ></input>
                <label
                  className={
                    emailError
                      ? `${s.row__message} ${s.row__message_incorrect}`
                      : `${s.row__message}`
                  }
                >
                  {emailError}
                </label>
              </div>
              <div className={s.row}>
                <label
                  className={
                    passwordError
                      ? `${s.row__name} ${s.row__name_incorrect}`
                      : `${s.row__name}`
                  }
                >
                  Пароль
                </label>
                <input
                  type="password"
                  name="password"
                  maxLength="35"
                  onChange={onChangeInputs}
                  value={authInputsValue.password}
                  className={
                    passwordError
                      ? `${s.row__field} ${s.row__field_incorrect}`
                      : `${s.row__field}`
                  }
                  required
                ></input>
                <label
                  className={
                    passwordError
                      ? `${s.row__message} ${s.row__message_incorrect}`
                      : `${s.row__message}`
                  }
                >
                  {passwordError}
                </label>
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
