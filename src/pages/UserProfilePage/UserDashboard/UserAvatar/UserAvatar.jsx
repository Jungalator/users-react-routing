import s from "./UserAvatar.module.css";
export const UserAvatar = ({ user }) => {
  return (
    <li>
      <img className={s.userAvatar} src={`${user.avatar}`} alt="User Avatar" />
      <p className={s.userName}>{user.name}</p>
    </li>
  );
};
