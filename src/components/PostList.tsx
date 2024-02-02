import React from 'react'
import { Post } from '../types';
import { PostCard } from './PostCard';

type Props = {
  posts: Post[];
}
export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="user-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map(post => <PostCard post={post} key={post.id} />)}
    </div>
  );
};
