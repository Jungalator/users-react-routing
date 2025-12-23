import s from "./PasswordVisibleBtn.module.css";

export const PasswordVisibleBtn = ({ isVisible, visiblePassword }) => {
  return (
    <button className={s.visibleBtn} onClick={visiblePassword} type="button">
      <svg fill="#fff" className={s.visibleSvg}>
        <use
          xlinkHref={`/public/favicon/sprites.svg#${
            isVisible ? "glyphOpen" : "glyphClose"
          }`}
        ></use>
      </svg>
    </button>
  );
};
