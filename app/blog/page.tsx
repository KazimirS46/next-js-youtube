import { Metadata } from 'next';
import { PostSearch } from '@/components/PostSearch';
import { Posts } from '@/components/Posts';

export const metadata: Metadata = {
  title: 'Next App Blogs',
};

export default async function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
