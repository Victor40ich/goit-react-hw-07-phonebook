import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../redux/selectors';

function App() {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <div style={{ marginBottom: '30px', width: '350px' }}>
          <h2 style={{ marginBottom: '10px', fontSize: '40px' }}>PhoneBook</h2>
          <ContactForm />
        </div>
        <div>
          <h3 style={{ marginBottom: '10px', fontSize: '30px' }}>Contacts</h3>
          <Filter />
          {filteredContacts.length ? (
            <ContactList contacts={filteredContacts} />
          ) : (
            <p style={{ fontSize: 18, color: '#010101' }}>
              There are no contacts in your phonebook
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
