'use client';

import { shallow } from 'zustand/shallow';
import { usePosts } from '@/store';
import Link from 'next/link';
import { useEffect } from 'react';

export const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  );

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul className='postList'>
      {posts.map((post: any) => (
        <li className='postLink' key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
