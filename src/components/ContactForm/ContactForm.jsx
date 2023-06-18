import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts-slice';

const initialState = {
  name: '',
  number: '',
};

function ContactForm() {
  const [state, setState] = useState({
    ...initialState,
  });
  const { name, number } = state;
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    addNewContact({ name, number });
    setState({
      ...initialState,
    });
  };

  const addNewContact = ({ name, number }) => {
    if (checkContactExist(name)) {
      Notify.failure(`${name} is already in your contacts`);
      return;
    }
    dispatch(
      addContact({
        name,
        number,
      })
    );
  };

  const checkContactExist = name => {
    const normalizadName = name.toLowerCase().trim();
    const foundContact = contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizadName
    );
    return Boolean(foundContact);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label className={styles.labelText}>
        Name
        <input
          autoFocus
          onChange={handleInputChange}
          className={styles.input}
          value={name}
          type="text"
          name="name"
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adriafn, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.labelText}>
        Number
        <input
          onChange={handleInputChange}
          className={styles.input}
          value={number}
          type="tel"
          name="number"
          placeholder="Enter contact number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
