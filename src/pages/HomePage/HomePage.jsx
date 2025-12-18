import { Dashboard } from "../../components/Dashboard";
import { UsersGallery } from "./UsersGallery/UsersGallery";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import GalleryModal from "./UsersGallery/GalleryModal";

export const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalImgIdx, setModalImgIdx] = useState(0);
  const [data] = useFetch(`https://67f80d0c2466325443ebae62.mockapi.io/users`);

  const handleOpenImg = (idx) => {
    data.forEach((item, index) => {
      if (index === idx) setModalActive(true);
    });
    setModalImgIdx(idx);
  };

  return (
    <>
      <Dashboard />
      {modalActive && (
        <GalleryModal
          data={data}
          modalImgIdx={modalImgIdx}
          setModalActive={setModalActive}
        />
      )}
      <UsersGallery
        handleOpenImg={handleOpenImg}
        data={data}
        modalImgIdx={modalImgIdx}
      />
    </>
  );
};
