import s from "./MainPage.module.scss";

import FavoritesBar from "../../components/FavoritesBar/FavoritesBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Results from "../../components/Results/Results";

export default function MainPage() {
  return (
    <main className={s.main}>
      <div className={s.main__container}>
        <div className={s.sidebar}>
          <SearchBar />
          <FavoritesBar />
        </div>
        <div className={s.content}>
          <Results />
        </div>
      </div>
    </main>
  );
}
