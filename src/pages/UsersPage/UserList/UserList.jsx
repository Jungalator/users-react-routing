import { Link } from "react-router";
import { UsersItem } from "./UserItem";
import s from "./UserList.module.css";
import { useFetch } from "../../../hooks/useFetch";

export const UserList = () => {
  const [data] = useFetch("https://67f80d0c2466325443ebae62.mockapi.io/users");
  return (
    <ul className={s.usersList}>
      {!data ? (
        <li>Loading...</li>
      ) : (
        data.map((user) => (
          <Link to={`${user.id}`} key={user.id} className={s.userLink}>
            <UsersItem user={user} />
          </Link>
        ))
      )}
    </ul>
  );
};
