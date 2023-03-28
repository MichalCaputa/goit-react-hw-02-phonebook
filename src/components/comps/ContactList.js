import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ data, remove }) => {
  const peopleData =
    data.filter.length > 0
      ? data.contacts.filter(contact =>
          contact.name.toLowerCase().includes(data.filter.toLowerCase())
        )
      : data.contacts;
  return (
    <ul className={css['contacts-list']}>
      {peopleData.map(contact => (
        <li key={contact.id} className={css.item}>
          <p className={css.name}>{contact.name}</p>
          <p className={css.number}>{contact.number}</p>
          <button id={contact.name} onClick={remove}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = { remove: PropTypes.func, data: PropTypes.object };
