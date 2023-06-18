export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filter;
export const getFilteredContacts = ({
  contacts: { contacts },
  filter: { filter },
}) =>
  contacts.filter(({ name }) => {
    return name.toLowerCase().trim().includes(filter.toLowerCase().trim());
  });
