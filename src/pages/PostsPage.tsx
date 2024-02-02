import React, { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';
import { BackButton, Loader } from '../components';
import { useParams } from 'react-router-dom';
import { Post } from '../types';
import { getPosts } from '../api/api';

export const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
  
    getPosts(+id)
      .then(setPosts)
      .catch(() => {
        setErrorMessage('Failed to get posts data.');
      })
      .finally(() => {
        setIsLoading(false);
      });;
  }, []);

  if (isLoading) {
    return (
      <Loader />
    );
  };

  if (errorMessage) {
    return (
      <>
        <h1
          className="
            page-title text-4xl sm:text-5xl md:text-7xl
            font-semibold mb-4 md:mb-10"
        >
          Posts Page
        </h1>

        <p className="text-2xl font-bold">
          {errorMessage}
        </p>
      </>
    );
  }

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