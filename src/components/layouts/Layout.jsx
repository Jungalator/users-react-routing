import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import s from "./Layout.module.css";

export const Layout = ({ page }) => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
