import s from "./UserInfoText.module.css";

export const UserInfoText = ({ infoText }) => {
  return (
    <article>
      <p className={s.infoText}>{infoText}</p>
    </article>
  );
};
