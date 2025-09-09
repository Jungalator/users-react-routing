import s from "./Dashboard.module.css";
import { DashboardList } from "./DashboardList/DashboardList";

export const Dashboard = () => {
  return (
    <aside className={s.dashboard}>
      <DashboardList />
    </aside>
  );
};
