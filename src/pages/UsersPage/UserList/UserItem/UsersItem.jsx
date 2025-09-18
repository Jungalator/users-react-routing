import { UserItemInfo } from "./UserItemInfo/UserItemInfo";
import { UserItemJobInfo } from "./UserItemJobInfo/UserItemJobInfo";
import { Link } from "react-router";
import s from "./UsersItem.module.css";

export const UsersItem = ({ user }) => {
  return (
    <li className={s.usersItem}>
      <img
        className={s.usersItemAvatar}
        src={`${user.avatar}`}
        alt="User avatar"
      />
      <UserItemInfo user={user} />
      <UserItemJobInfo user={user} />
    </li>
  );
};
