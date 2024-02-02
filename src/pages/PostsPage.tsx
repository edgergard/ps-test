import React, { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';
import { BackButton } from '../components';
import { useParams } from 'react-router-dom';
import { Post } from '../types';
import { getPosts } from '../api/api';

export const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    getPosts(+id)
      .then(setPosts)
      .catch(() => {
        setErrorMessage('Failed to get users data.');
      });
  }, []);

  return (
    <section>
      <div className="flex items-center gap-x-4 mb-4 md:mb-10">
        <BackButton />

        <h1 className="page-title text-4xl sm:text-5xl md:text-7xl font-semibold">
          Posts Page
        </h1>
      </div>

      <PostList posts={posts} />
    </section>
  );
};