import s from "./AuthTabs.module.css";

export default function AuthTabs({ toggleActiveTab, tab }) {
  return (
    <ul className={s.tabsList}>
      <li
        className={`${s.tab} ${"sign" === tab && s.active}`}
        onClick={() => toggleActiveTab("sign")}
      >
        <p className={s.tabText}>Sign in</p>
      </li>
      <li
        className={`${s.tab} ${"log" === tab && s.active}`}
        onClick={() => toggleActiveTab("log")}
      >
        <p className={s.tabText}>Sign up</p>
      </li>
    </ul>
  );
}
