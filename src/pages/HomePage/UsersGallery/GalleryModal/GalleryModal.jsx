import { useEffect, useState } from "react";
import Carusel from "./Carusel/Carusel";
import s from "./GalleryModal.module.css";

export default function GalleryModal({ data, modalImgIdx, setModalActive }) {
  const [currentSlide, setCurrentSlide] = useState(modalImgIdx);

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr === 0 ? data.length - 1 : curr - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((curr) => (curr === data.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className={s.modalContainer}>
        <button className={s.closeBtn} onClick={() => setModalActive(false)}>
          <svg className={s.closeBtnSvg}>
            <use xlinkHref="favicon/sprites.svg#close"></use>
          </svg>
        </button>
        <Carusel nextSlide={nextSlide} prevSlide={prevSlide} data={data}>
          {data.map((item, index) => (
            <div
              key={index}
              className={s.caruselItem}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img src={`${item.image1}`} alt="" className={s.modalImg} />
            </div>
          ))}
        </Carusel>
      </div>
    </>
  );
}
