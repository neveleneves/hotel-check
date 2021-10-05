import s from "./MainPage.module.scss";

import FavoritesBar from "../../components/FavoritesBar/FavoritesBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Results from "../../components/Results/Results";
import Navbar from '../../components/Navbar/Navbar'

export default function MainPage() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}
