import s from "./LoginInput.module.css";

export const LoginInput = ({
  labelText,
  inputType,
  userName,
  minLength,
  onChangeSign,
  children,
  userValue,
}) => {
  return (
    <label className={s.formLabel}>
      <p className={s.formLabelText}>{labelText}</p>
      <input
        className={s.formInput}
        type={inputType}
        name={`${userName}`}
        value={userValue}
        required
        minLength={minLength}
        onChange={onChangeSign}
      />
      {children}
    </label>
  );
};
