import s from "./GalleryItem.module.css";
export const GalleryItem = ({ user, handleOpenImg }) => {
  return (
    <li className={s.galleryItem}>
      {user.image1 ? (
        <img
          onClick={() => handleOpenImg(user.id)}
          className={s.galleryImg}
          src={`${user.image1}`}
          alt="Image of user"
        />
      ) : (
        <p className={s.galleryImgNotFound}>Image is not found</p>
      )}
    </li>
  );
};
