import React from 'react'
import { UserCard } from '../components';
import { User } from '../types';

type Props = {
  users: User[];
};

export const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div className="user-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => <UserCard user={user} key={user.id} />)}
    </div>
  );
};
