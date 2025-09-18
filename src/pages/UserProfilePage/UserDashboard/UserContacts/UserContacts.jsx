import { Contact } from "./Contact/Contact";
import s from "./UserContacts.module.css";
export const UserContacts = ({ user }) => {
  return (
    <li>
      <h3>Contacts</h3>
      <ul className={s.contactsList}>
        <Contact
          contactType="tel:"
          contactValue={user.phoneNumber}
          title="Phone number:"
        />
        <Contact
          contactType="mailto:"
          contactValue={user.email}
          title="Email:"
        />
      </ul>
    </li>
  );
};
