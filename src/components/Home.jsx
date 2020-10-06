import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PostItem from './PostItem';
import { getPosts } from '../utils/fetchPosts';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    gettingPosts();
  }, []);

  const gettingPosts = async () => {
    const res = await getPosts();
    setData(res);
  };

  return (
    <div>
      {/* {data && data.map((post) => <PostItem key={post.id} post={post} />)} */}
      <pre>{data ? JSON.stringify(data, null, 3) : <p>Loading...</p>}</pre>
    </div>
  );
};

export default Home;
