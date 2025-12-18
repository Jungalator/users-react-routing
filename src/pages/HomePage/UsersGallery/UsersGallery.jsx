import { useFetch } from "../../../hooks/useFetch";
import { GalleryItem } from "./GalleryItem";
import s from "./UsersGallery.module.css";
export const UsersGallery = ({ handleOpenImg, data }) => {
  return (
    <section className={s.gallerySection}>
      <ul className={s.galleryList}>
        {!data ? (
          <li>Loading...</li>
        ) : (
          data.map((user, index) => (
            <GalleryItem
              user={user}
              key={user.id}
              handleOpenImg={() => handleOpenImg(index)}
            />
          ))
        )}
      </ul>
    </section>
  );
};
