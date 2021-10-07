import s from "./EmptyMessage.module.scss";

export default function EmptyMessage(props) {
  const { message } = props;

  return (
    <div className={s.message}>
      <div className={s.message__wrapper}>
        <h3 className={s.message__title}>{message}</h3>
      </div>
    </div>
  );
}
