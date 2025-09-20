import s from "./LoginForm.module.css";

export const LoginForm = ({ handleSubmit }) => {
  return (
    <div className={s.formContainer}>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input type="text" name="userName" required />
        </label>

        <label htmlFor="">
          <p>Password</p>
          <input type="text" name="userPassword" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
