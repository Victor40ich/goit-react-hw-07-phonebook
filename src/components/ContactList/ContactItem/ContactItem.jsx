import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts-slice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteContactFromList = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id} className={styles.item}>
      <p className={styles.itemText}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={styles.itemButton}
        onClick={deleteContactFromList}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
