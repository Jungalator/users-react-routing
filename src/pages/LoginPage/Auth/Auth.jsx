import AuthTabs from "../AuthTabs/AuthTabs";
import s from "./Auth.module.css";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export const Auth = ({
  handleSubmit,
  toggleActiveTab,
  tab,
  logInSubmit,
  onChangeSignUp,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const visiblePassword = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className={s.formContainer}>
      <AuthTabs
        toggleActiveTab={toggleActiveTab}
        tab={tab}
        isVisible={isVisible}
      />
      {tab === "sign" ? (
        <SignIn
          visiblePassword={visiblePassword}
          handleSubmit={handleSubmit}
          isVisible={isVisible}
        />
      ) : (
        <SignUp
          visiblePassword={visiblePassword}
          logInSubmit={logInSubmit}
          onChangeSignUp={onChangeSignUp}
          isVisible={isVisible}
        />
      )}
    </div>
  );
};
