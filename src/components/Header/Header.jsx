import { GoBackBtn } from "./GoBackBtn/GoBackBtn";
import s from "./Header.module.css";
import { LogOutBtn } from "./LogOutBtn";

export const Header = () => {
  return (
    <header className={s.header}>
      <img src="/public/images/Logo.png" alt="Logo users" width="5%" />
      <nav className={s.nav}>
        <GoBackBtn />
        <LogOutBtn />
      </nav>
    </header>
  );
};
