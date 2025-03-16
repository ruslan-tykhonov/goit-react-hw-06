import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  console.log('Contacts:', contacts);
  //Filtr for input
  const filtredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter.trim())
  );

  return (
    <div>
      <ul className={css.wrapper}>
        {filtredContacts.map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              <Contact {...contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
