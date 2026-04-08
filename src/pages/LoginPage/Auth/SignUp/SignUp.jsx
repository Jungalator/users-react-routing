import s from "../Auth.module.css";
import { LoginInput } from "../LoginInput/LoginInput";
import { PasswordVisibleBtn } from "../LoginInput/PasswordVisibleBtn/PasswordVisibleBtn";

export default function SignUp({
  visiblePassword,
  isVisible,
  signUpSubmit,
  onChangeSign,
  userSignUp,
}) {
  return (
    <form onSubmit={signUpSubmit}>
      <LoginInput
        labelText="Login"
        inputType="text"
        userName="login"
        onChangeSign={onChangeSign}
        userValue={userSignUp.login}
      />
      <LoginInput
        labelText="Full name"
        inputType="text"
        userName="name"
        onChangeSign={onChangeSign}
        userValue={userSignUp.name}
      />
      <LoginInput
        labelText="Email"
        inputType="email"
        userName="email"
        onChangeSign={onChangeSign}
        userValue={userSignUp.email}
      />
      <LoginInput
        labelText="Phone number"
        inputType="tel"
        userName="phone"
        onChangeSign={onChangeSign}
        userValue={userSignUp.phone}
      />
      <LoginInput
        labelText="Password"
        inputType={`${isVisible ? "text" : "password"}`}
        userName="password"
        minLength={8}
        onChangeSign={onChangeSign}
        userValue={userSignUp.password}
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
