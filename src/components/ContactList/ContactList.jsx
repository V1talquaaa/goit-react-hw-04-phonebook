import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({contacts, handleDelete}) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactList}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => handleDelete(id)}
              id={id}
              className={css.deleteBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export { ContactList };

