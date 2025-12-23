import s from "../Auth.module.css";
import { LoginInput } from "../LoginInput/LoginInput";
import { PasswordVisibleBtn } from "../LoginInput/PasswordVisibleBtn/PasswordVisibleBtn";

export default function SignUp({
  visiblePassword,
  isVisible,
  logInSubmit,
  onChangeSignUp,
}) {
  return (
    <form onSubmit={logInSubmit}>
      <LoginInput
        labelText="Login"
        inputType="text"
        userName="login"
        onChangeSignUp={onChangeSignUp}
      />
      <LoginInput
        labelText="Full name"
        inputType="text"
        userName="name"
        onChangeSignUp={onChangeSignUp}
      />
      <LoginInput
        labelText="Email"
        inputType="email"
        userName="email"
        onChangeSignUp={onChangeSignUp}
      />
      <LoginInput
        labelText="Phone number"
        inputType="tel"
        userName="phone"
        onChangeSignUp={onChangeSignUp}
      />
      <LoginInput
        labelText="Password"
        inputType={`${isVisible ? "text" : "password"}`}
        userName="password"
        minLength={8}
        onChangeSignUp={onChangeSignUp}
      >
        <PasswordVisibleBtn
          visiblePassword={visiblePassword}
          isVisible={isVisible}
        />
      </LoginInput>

      <button className={s.formButton} type="submit">
        Log in
      </button>
    </form>
  );
}
