import s from "./InfoListItem.module.css";

export const InfoListItem = ({ title, text }) => {
  return (
    <>
      <li className={s.userInfoListItem}>
        <p className={s.title}>{title}:</p>
        <p className={s.text}>{text}</p>
      </li>
    </>
  );
};
