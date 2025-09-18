import { useFetch } from "../../../hooks/useFetch";
import { GalleryItem } from "./GalleryItem";
import s from "./UsersGallery.module.css";
export const UsersGallery = () => {
  const [data] = useFetch(`https://67f80d0c2466325443ebae62.mockapi.io/users`);
  return (
    <section className={s.gallerySection}>
      <ul className={s.galleryList}>
        {!data ? (
          <li>Loading...</li>
        ) : (
          data.map((user) => <GalleryItem user={user} key={user.id} />)
        )}
      </ul>
    </section>
  );
};
