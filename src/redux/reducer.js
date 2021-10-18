import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

// const contacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const initialState = JSON.parse(localStorage.getItem('contacts'));

const contacts = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
);

// export const contactsReducer = (state = initialState ?? contacts, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       localStorage.setItem('contacts', JSON.stringify([...state, payload]));
//       return [...state, payload];
//     case DELETE_CONTACT:
//       const contact = state.filter(contact => contact.id !== payload);
//       localStorage.setItem('contacts', JSON.stringify(contact));
//       return contact;

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

// export const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case FILTER_CONTACT:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

export default combineReducers({
  contacts,
  filter,
});

// export const ADD_CONTACT = 'contacts/AddContact';
// export const DELETE_CONTACT = 'contactList/DeleteContact';
// export const FILTER_CONTACT = 'filter/filterContact';
