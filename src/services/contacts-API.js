import axios from 'axios';

axios.defaults.baseURL = 'https://63b2f32a5901da0ab372e575.mockapi.io';

export const getTweets = async (page, limit) => {
  const { data } = await axios.get('/users', { params: { page, limit } });
  return data;
};

export const getTweetsById = async id => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

export const updatedTweetById = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, { followers });
  return data;
};
