import { UserAvatar } from "./UserAvatar";
import { UserContacts } from "./UserContacts/UserContacts";
import { UserChannels } from "./UserChannels";
import s from "./UserDashboard.module.css";

export const UserDashboard = ({ user }) => {
  //   console.log(currentUser.birthdate);
  //   console.log(new Date().getTime());

  return (
    <aside className={s.userDashboard}>
      <ul className={s.userDashboardList}>
        <UserAvatar user={user} />
        <UserContacts user={user} />
        <UserChannels />
      </ul>
    </aside>
  );
};
