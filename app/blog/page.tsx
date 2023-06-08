import { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

export const metadata: Metadata = {
  title: 'Next App Blogs',
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog</h1>
      <ul className='postList'>
        {posts.map((post: any) => (
          <li className='postLink' key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
