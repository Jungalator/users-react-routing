import { GoBackBtn } from "./GoBackBtn/GoBackBtn";
import s from "./Header.module.css";
import { LogOutBtn } from "./LogOutBtn";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <img
          src="/public/images/Logo.png"
          alt="Logo users"
          width="50px"
          height="50px"
        />
        <h3 className={s.logoText}>YOUSERS</h3>
      </div>
      <nav className={s.nav}>
        <GoBackBtn />
        <LogOutBtn />
      </nav>
    </header>
  );
};
