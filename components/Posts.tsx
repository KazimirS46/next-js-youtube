'use client';
import useSWR from 'swr';
import Link from 'next/link';
import { getAllPosts } from '@/services/getPosts';

export const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts);

  return isLoading ? (
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
