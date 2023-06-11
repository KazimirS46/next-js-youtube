'use client';

import { usePosts } from '@/store';
import { FormEventHandler, useState } from 'react';

export const PostSearch = () => {
  const [search, setSearch] = useState<string>('');
  const getPostBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await getPostBySearch(search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        placeholder='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
};
