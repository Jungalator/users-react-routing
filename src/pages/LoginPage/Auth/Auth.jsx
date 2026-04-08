import AuthTabs from "../AuthTabs/AuthTabs";
import s from "./Auth.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export const Auth = ({
  handleSubmit,
  toggleActiveTab,
  tab,
  signUpSubmit,
  onChangeSign,
  onChangeSignIn,
  errorMessage,
  isVisible,
  visiblePassword,
  userSignUp,
  userSignIn,
}) => {
  return (
    <div className={s.formContainer}>
      <AuthTabs
        toggleActiveTab={toggleActiveTab}
        tab={tab}
        isVisible={isVisible}
      />
      <p className={s.errorMessage}>{errorMessage}</p>
      {tab === "sign" ? (
        <SignIn
          visiblePassword={visiblePassword}
          handleSubmit={handleSubmit}
          isVisible={isVisible}
          onChangeSignIn={onChangeSignIn}
          userSignIn={userSignIn}
        />
      ) : (
        <SignUp
          visiblePassword={visiblePassword}
          signUpSubmit={signUpSubmit}
          onChangeSign={onChangeSign}
          isVisible={isVisible}
          userSignUp={userSignUp}
        />
      )}
    </div>
  );
};
