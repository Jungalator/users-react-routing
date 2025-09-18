import { DashboardItem } from "./DashboardItem/DashboardItem";
import s from "./DashboardList.module.css";

export const DashboardList = () => {
  return (
    <ul className={s.dashboardList}>
      <DashboardItem name="Home" pageTo="/" />
      <DashboardItem name="Users" pageTo="/users" />
      <DashboardItem name="Settings" pageTo="/" />
      <DashboardItem name="About" pageTo="/" />
    </ul>
  );
};
