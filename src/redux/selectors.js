export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const allContacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};
