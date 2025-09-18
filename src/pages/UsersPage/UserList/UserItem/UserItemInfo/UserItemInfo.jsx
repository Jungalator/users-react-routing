import s from "./UserItemInfo.module.css";

export const UserItemInfo = ({ user }) => {
  return (
    <ul className={s.usersInfoList}>
      <li className={s.usersInfoItem}>
        <p className={s.usersInfoName}>{user.name}</p>
      </li>
      <li className={s.usersInfoItem}>{user.email}</li>
    </ul>
  );
};
