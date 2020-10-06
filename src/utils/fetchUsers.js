import axios from 'axios';

export const getUsers = async (url) => {
  const res = await axios(url);
  return res.data;
};
