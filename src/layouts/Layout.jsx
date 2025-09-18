import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import s from "./Layout.module.css";

export const Layout = () => {
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
