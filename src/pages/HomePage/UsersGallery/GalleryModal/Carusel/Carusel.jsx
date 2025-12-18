import s from "./Carusel.module.css";

export default function Carusel({ children, prevSlide, nextSlide }) {
  return (
    <div className={s.carusel}>
      {children}
      <button className={s.sliderBtn} onClick={prevSlide}>
        ◀︎
      </button>
      <button className={`${s.sliderBtn} ${s.next}`} onClick={nextSlide}>
        ▶︎
      </button>
    </div>
  );
}
