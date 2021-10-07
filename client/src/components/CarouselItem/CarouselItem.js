import s from "./CarouselItem.module.scss";

export default function CarouselItem(props) {
  const { src, alt } = props;

  return (
    <div className={s.item}>
      <img src={src} alt={alt} className={s.item__img}></img>
    </div>
  );
}
