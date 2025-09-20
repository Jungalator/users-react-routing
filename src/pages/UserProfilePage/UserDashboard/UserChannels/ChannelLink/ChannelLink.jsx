import s from "./ChannelLink.module.css";

export const ChannelLink = ({ linkSvg, linkHref }) => {
  return (
    <li className={s.userChannelsItem}>
      <a className={s.channelLink} href={`${linkHref}`}>
        <svg className={s.channelLinkSvg} height="100%" width="100%">
          <use xlinkHref={`/public/favicon/sprites.svg#${linkSvg}`}></use>
        </svg>
      </a>
    </li>
  );
};
