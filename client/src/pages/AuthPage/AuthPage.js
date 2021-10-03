import s from "./AuthPage.module.scss";

export default function AuthPage() {
  return (
    <main className={s.auth}>
      <section className={`${s.content} ${s.content__wrapper}`}>
        <div className={s.content__form}>
          <form className={s.form}>
            <h1 className={s.form__title}>Simple Hotel Check</h1>
            <div className={s.form__container}>
              <div className={s.row}>
                <label className={s.row__name}>Логин</label>
                <input
                  type="email"
                  maxLength="35"
                  className={s.row__field}
                ></input>
                <label className={s.row__message}>Error</label>
              </div>
              <div className={s.row}>
                <label className={s.row__name}>Пароль</label>
                <input
                  type="password"
                  maxLength="35"
                  className={s.row__field}
                ></input>
                <label className={s.row__message}>Error</label>
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
