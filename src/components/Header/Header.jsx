import { useLocation, useNavigate, useParams } from "react-router";
import s from "./Header.module.css";

export const Header = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <header className={s.header}>
      {location.pathname === `/users/${params.userId}` && (
        <button className={s.goBackBtn} onClick={goBack}>
          Go back
        </button>
      )}
    </header>
  );
};
