import Link from 'next/link';

type Props = {
  posts: any[];
};

export const Posts = ({ posts }: Props) => {
  return (
    <ul className='postList'>
      {posts.map((post: any) => (
        <li className='postLink' key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
