import React from 'react'
import { User } from '../types'
import { Link } from 'react-router-dom';

type Props = {
  user: User;
};

export const UserCard: React.FC<Props> = ({ user }) => {
  const { id, name, username, email } = user;

  return (
    <div className="user-card px-6 py-4 bg-slate-50 rounded-xl inline-block">
      <ul className="user-data flex flex-col gap-y-2 text-base sm:text-lg lg:text-xl mb-4">
        <li className="id flex gap-x-2">
          <p className="font-semibold">
            User ID:
          </p>
          <p>{id}</p>
        </li>

        <li className="username flex gap-x-2">
          <p className="font-semibold">
            Username:
          </p>
          <p>{username}</p>
        </li>

        <li className="name flex gap-x-2">
          <p className="font-semibold">
            Name:
          </p>
          <p>{name}</p>
        </li>

        <li className="email flex gap-x-2">
          <p className="font-semibold">
            Email:
          </p>
          <p>{email}</p>
        </li>
      </ul>

      <div className="buttons flex gap-x-4">
        <Link
          to={`users/${id}/posts`}
          className="
            user-button px-4 py-2 md:text-lg rounded-xl bg-violet-800
            text-violet-50 hover:bg-violet-700 transition-all"
        >
          Posts
        </Link>

        <Link
          to={`users/${id}/albums`}
          className="
            user-button px-4 py-2 md:text-lg rounded-xl bg-violet-800
            text-violet-50 hover:bg-violet-700 transition-all"
        >
          Albums
        </Link>
      </div>
    </div>
  );
};