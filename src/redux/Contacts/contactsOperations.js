import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  postContact,
  removeContact,
  editContact,
} from 'services/contacts-API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contacts = await postContact(name, number);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await removeContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const contacts = await editContact(id, name, number);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
