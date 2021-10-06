import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/actions";

import s from "./Navbar.module.scss";

export default function Navbar() {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout())
  }

  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <nav className={s.menu}>
          <h1 className={s.header__title}>
            <NavLink to="/main" className={s.header__link}>
              Simple Hotel Check
            </NavLink>
          </h1>
          <ul className={s.menu__list}>
            <li className={s.menu__item}>
              <NavLink to="/auth"  onClick={onClickLogout} className={s.link}>
                <span className={s.link__title}>Выйти</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                    stroke="#41522E"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17L21 12L16 7"
                    stroke="#41522E"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H9"
                    stroke="#41522E"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
