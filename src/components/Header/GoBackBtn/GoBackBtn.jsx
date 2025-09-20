import { useLocation, useNavigate, useParams } from "react-router";
import s from "./GoBackBtn.module.css";

export const GoBackBtn = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      {location.pathname === `/users/${params.userId}` && (
        <button className={s.goBackBtn} onClick={goBack}>
          Go back
        </button>
      )}
    </>
  );
};
