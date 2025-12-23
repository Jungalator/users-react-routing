import s from "../Auth.module.css";
import { LoginInput } from "../LoginInput/LoginInput";
import { PasswordVisibleBtn } from "../LoginInput/PasswordVisibleBtn/PasswordVisibleBtn";

export default function SignIn({ visiblePassword, isVisible, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <LoginInput labelText="Login" inputType="text" userName="userName" />
      <LoginInput
        labelText="Password"
        inputType={`${isVisible ? "text" : "password"}`}
        userName="password"
        minLength={8}
      >
        <PasswordVisibleBtn
          visiblePassword={visiblePassword}
          isVisible={isVisible}
        />
      </LoginInput>
      <button className={s.formButton} type="submit">
        Sign in
      </button>
    </form>
  );
}
