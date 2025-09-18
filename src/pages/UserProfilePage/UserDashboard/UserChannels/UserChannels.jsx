import { ChannelLink } from "./ChannelLink/ChannelLink";
import s from "./UserChannels.module.css";
export const UserChannels = () => {
  return (
    <li>
      <h3>Channels</h3>
      <ul className={s.userChannelsList}>
        <ChannelLink linkSvg="viber" linkHref="https://www.viber.com/" />
        <ChannelLink
          linkSvg="telegram"
          linkHref="https://web.telegram.org/a/"
        />
        <ChannelLink
          linkSvg="instagram"
          linkHref="https://www.instagram.com/"
        />
        <ChannelLink linkSvg="whatsapp" linkHref="https://www.whatsapp.com/" />
      </ul>
    </li>
  );
};
