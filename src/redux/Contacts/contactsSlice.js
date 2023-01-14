import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './contactsOperations';

const extraActions = [fetchContacts, addContact, deleteContact, changeContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};
const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};
const deleteContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
const changeContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1, action.payload);
};
const commonPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const anyFulfilledReducer = state => {
  state.error = null;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(changeContact.fulfilled, changeContactFulfilledReducer)
      .addMatcher(
        isAnyOf(fetchContacts.pending, addContact.pending),
        commonPendingReducer
      )
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
