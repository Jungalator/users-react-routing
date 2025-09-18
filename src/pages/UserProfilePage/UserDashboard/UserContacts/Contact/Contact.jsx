import s from "./Contact.module.css";
export const Contact = ({ contactType, contactValue, title }) => {
  return (
    <li>
      <p className={s.contactTitle}>{title}</p>
      <a className={s.userContact} href={`${contactType}${contactValue}`}>
        {contactValue}
      </a>
    </li>
  );
};
