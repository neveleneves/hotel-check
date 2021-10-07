import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../CarouselItem/CarouselItem";
import ResultsItem from "../ResultsItem/ResultsItem";
import EmptyMessage from "../EmptyMessage/EmptyMessage";
import { ReactComponent as TitleArrow } from "../../img/arrow.svg";

import s from "./Results.module.scss";

export default function Results() {
  const { location, dateValue, countDay } = useSelector(
    (state) => state.search.input
  );
  const { images } = useSelector((state) => state.carousel);
  const { hotels } = useSelector((state) => state.search);
  const { favoritHotels } = useSelector((state) => state.favorites);

  return (
    <section className={`${s.results} ${s.results__wrapper}`}>
      <div className={s.content}>
        <div className={s.content__header}>
          <div className={s.title}>
            <h2 className={s.title__text}>Отели</h2>
            <span className={s.title__arrow}>
              <TitleArrow />
            </span>
            <h2 className={s.title__text}>{location}</h2>
          </div>
          <div className={s.date}>
            <span className={s.date__value}>
              {new Date(dateValue).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className={s.content__carousel}>
          <ul className={s.carousel}>
            <Carousel
              showThumbs={false}
              width={600}
              centerMode={true}
              centerSlidePercentage={29}
              showStatus={false}
            >
              {images.length !== 0
                ? images.map((image, index) => {
                    return (
                      <CarouselItem
                        src={image.src.default}
                        alt={image.alt}
                        key={index}
                      />
                    );
                  })
                : null}
            </Carousel>
          </ul>
        </div>
        <div className={s.main}>
          <div className={s.main__header}>
            <h3 className={s.main__title}>
              Добавлено в Избранное:
              <span className={s.main__value}>{favoritHotels.length}</span>
              отеля
            </h3>
          </div>
          <ul className={s.main__list}>
            {Array.isArray(hotels) && hotels.length !== 0 ? (
              hotels.map((hotel) => {
                return (
                  <ResultsItem
                    title={hotel.hotelName}
                    price={hotel.priceFrom}
                    checkInDate={new Date(dateValue)}
                    countDay={countDay}
                    stars={hotel.stars}
                    hotelID={hotel.hotelId}
                    key={hotel.hotelId}
                  />
                );
              })
            ) : (
              <EmptyMessage message={"Результатов не найдено"} />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
