import s from "./LoginPage.module.css";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { SignInForm } from "./LoginForm/LoginForm";
import { useState } from "react";

export const LoginPage = () => {
  const [tabName, setTabName] = useState("sign");
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const user = {
      login: form.userName.value.trim(),
      password: form.userPassword.value.trim(),
    };

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  const toggleActiveTab = (tabId) => {
    setTabName(tabId);
  };

  return (
    <main className={s.loginMain}>
      <img src="/public/images/logo.png" alt="" width="45%" />
      <SignInForm
        handleSubmit={handleSubmit}
        toggleActiveTab={toggleActiveTab}
        tab={tabName}
      />
    </main>
  );
};
