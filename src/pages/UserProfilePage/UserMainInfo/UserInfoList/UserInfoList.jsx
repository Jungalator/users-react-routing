import { InfoListItem } from "./InfoListItem/InfoListItem";
import s from "./UserInfoList.module.css";

export const UserInfoList = ({ listItem, listTitle, listTitleLogo }) => {
  return (
    <article>
      <div className={s.userInfoTitleContainer}>
        <span className={s.logoTitle}>{listTitleLogo}</span>
        <h4 className={s.userInfoTitle}>{listTitle}</h4>
      </div>
      <ul className={s.infoList}>
        {Object.entries(listItem).map(([title, text], index) => {
          return <InfoListItem title={title} text={text} key={index} />;
        })}
      </ul>
    </article>
  );
};
