import axios from 'axios';

axios.defaults.baseURL = "https://phonebook-back-vgbi.onrender.com/api";

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const createUser = async (credentials) => {
  const { data } = await axios.post('/users/register', credentials);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await axios.post('/users/login', credentials);
  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};

export const refreshUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async (name, phone) => {
  const { data } = await axios.post('/contacts', { name, phone });
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const editContact = async (id, name, phone) => {
  const { data } = await axios.put(`/contacts/${id}`, { name, phone });
  return data;
};
