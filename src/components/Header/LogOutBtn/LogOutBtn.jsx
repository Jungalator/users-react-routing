import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import s from "./LogOutBtn.module.css";

export const LogOutBtn = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <button
      className={s.logoutBtn}
      onClick={() => {
        localStorage.setItem("user", null);
        signOut(() => navigate("/login", { replace: true }));
      }}
    >
      ⌽
    </button>
  );
};
