import s from "./DashboardItem.module.css";
import { Link } from "react-router";
export const DashboardItem = ({ name, pageTo }) => {
  return (
    <li className={s.dashboardItem}>
      <Link className={s.dashboardLink} to={pageTo}>
        {name}
      </Link>
    </li>
  );
};
