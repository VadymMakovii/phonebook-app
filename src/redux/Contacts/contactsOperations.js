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
      const { data } = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const { data } = await postContact(name, phone);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await removeContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ id, name, phone }, { rejectWithValue }) => {
    try {
      const {data} = await editContact(id, name, phone);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
