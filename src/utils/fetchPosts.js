import axios from 'axios';

export const getPosts = async () => {
  const res = await axios(`https://jsonplaceholder.typicode.com/posts`);
  return res.data;
};
