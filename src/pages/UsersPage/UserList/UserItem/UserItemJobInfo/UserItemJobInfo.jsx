import s from "./UserItemJobInfo.module.css";

export const UserItemJobInfo = ({ user }) => {
  return (
    <ul className={s.usersJobInfo}>
      <li className={s.usersJobInfoItem}>
        <p className={s.usersJobInfoName}>{user.companyName}</p>
      </li>
      <li className={s.usersJobInfoItem}>
        <p className={s.usersJobInfoAdj}>{user.companyAdjective}</p>
      </li>
    </ul>
  );
};
