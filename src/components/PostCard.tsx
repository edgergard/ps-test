import React from 'react'
import { Post } from '../types';

type Props = {
  post: Post;
}
export const PostCard: React.FC<Props> = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div className="user-card px-6 py-4 bg-slate-50 rounded-xl inline-block">
      <ul className="user-data flex flex-col gap-y-2 text-base sm:text-lg lg:text-xl mb-4">
        <li className="id flex gap-x-2">
          <p className="font-semibold">
            Post ID:
          </p>
          <p>{id}</p>
        </li>

        <li className="title flex gap-x-2 font-semibold">
          {title}
        </li>

        <li className="body flex gap-x-2">
          {body}
        </li>
      </ul>
    </div>
  );
};
