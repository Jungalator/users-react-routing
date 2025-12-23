import s from "./LoginInput.module.css";

export const LoginInput = ({
  labelText,
  inputType,
  userName,
  minLength,
  onChangeSignUp,
  children,
}) => {
  return (
    <label className={s.formLabel}>
      <p className={s.formLabelText}>{labelText}</p>
      <input
        className={s.formInput}
        type={inputType}
        name={userName}
        required
        minLength={minLength}
        onChange={onChangeSignUp}
      />
      {children}
    </label>
  );
};
