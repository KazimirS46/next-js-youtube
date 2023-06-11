'use client';

import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import { Posts } from '@/components/Posts';
import { getAllPosts } from '@/services/getPosts';
import { PostSearch } from '@/components/PostSearch';

export const metadata: Metadata = {
  title: 'Next App Blogs',
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
