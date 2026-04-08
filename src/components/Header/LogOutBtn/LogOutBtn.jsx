import { useNavigate } from "react-router";
import { useAuth } from "../../../hoc/AuthProvider";
import s from "./LogOutBtn.module.css";

export const LogOutBtn = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <button
      className={s.logoutBtn}
      onClick={() => {
        localStorage.setItem("user", null);
        logout(() => navigate("/login", { replace: true }));
      }}
    >
      ⌽
    </button>
  );
};
