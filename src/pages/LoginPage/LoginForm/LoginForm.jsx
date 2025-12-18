import AuthTabs from "../AuthTabs/AuthTabs";
import s from "./LoginForm.module.css";
import { LoginInput } from "./LoginInput/LoginInput";
import { PasswordVisibleBtn } from "./LoginInput/PasswordVisibleBtn/PasswordVisibleBtn";
import { useState } from "react";

export const SignInForm = ({ handleSubmit, toggleActiveTab, tab }) => {
  const [isVisible, setIsVisible] = useState(false);
  const visiblePassword = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className={s.formContainer}>
      <AuthTabs toggleActiveTab={toggleActiveTab} tab={tab} />
      <form onSubmit={handleSubmit}>
        <LoginInput labelText="Name" inputType="text" userName="userName" />
        <LoginInput
          labelText="Password"
          inputType={`${isVisible ? "text" : "password"}`}
          userName="userPassword"
          minLength={8}
        />
        <PasswordVisibleBtn
          visiblePassword={visiblePassword}
          isVisible={isVisible}
        />
        <button className={s.formButton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
