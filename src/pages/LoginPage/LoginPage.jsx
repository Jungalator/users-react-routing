import s from "./LoginPage.module.css";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { LoginForm } from "./LoginForm/LoginForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const user = {
      login: form.userName.value,
      password: form.userPassword.value,
    };

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <main className={s.loginMain}>
      <img src="/public/images/logo.png" alt="" width="45%" />
      <LoginForm handleSubmit={handleSubmit} />
    </main>
  );
};
