import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { UserList } from '../components';
import { SortType, User } from '../types';
import { getUsers } from '../api/api';
import { compareQuery } from '../utils';
import { useSearchParams } from 'react-router-dom';

function getPreparedUsers(users: User[], query: string, sort: SortType) {
  let preparedUsers = [...users];

  if (sort) {
    switch (sort) {
      case SortType.Asc: {
        preparedUsers = preparedUsers.sort((a, b) => {
          return b.username.localeCompare(a.username);
        });
        break;
      };

      case SortType.Desc: {
        preparedUsers = preparedUsers.sort((a, b) => {
          return a.username.localeCompare(b.username);
        });
        break;
      };

      default: {
        return preparedUsers;
      };
    };
  };

  if (query) {
    preparedUsers = preparedUsers.filter(({ username }) => {
      return compareQuery(query, username);
    });
  };

  return preparedUsers;
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = (searchParams.get('sort') || '');
  const query = (searchParams.get('query') || '');

  useEffect(() => {
    setIsLoading(true);
  
    getUsers()
      .then(setUsers)
      .catch(() => {
        setErrorMessage('Failed to get users data.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  
  const preparedUsers = getPreparedUsers(users, query, sort as SortType);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    params.set('query', event.target.value);
    setSearchParams(params);
  };

  const handleInputClear = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('query');
    setSearchParams(params);
  };

  const handleSortButtonClick = () => {
    const params = new URLSearchParams(searchParams);
    
    switch (sort) {
      case '' : {
        params.set('sort', 'ASC');
        break;
      };

      case 'ASC': {
        params.set('sort', 'DESC');
        break;
      };

      case 'DESC': {
        params.delete('sort');
        break;
      };

      default : {
        return;
      };
    };

    setSearchParams(params);
  };

  if (isLoading) {
    return (
      <p>Loader</p>
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
          Users Page
        </h1>

        <p className="text-2xl font-bold">
          {errorMessage}
        </p>
      </>
    );
  }

  return (
    <section>
      <h1 
        className="
          page-title text-4xl sm:text-5xl md:text-7xl
          font-semibold mb-4 md:mb-10"
      >
        Users Page
      </h1>
        <>
          <div className="flex items-center gap-x-8 mb-4 md:mb-10">
            <div
              className="
                flex
                rounded h-10 w-96 px-2 py-2 focus:outline focus:outline-2
                focus:outline-violet-800 bg-slate-50"
            >
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Enter username"
              className="outline-none w-full bg-slate-50"
            />
          
            {query && (
              <button onClick={handleInputClear}>
                <XMarkIcon className="w-6 h-6 text-slate-950" />
              </button>
            )}
            </div>

            <button
              onClick={handleSortButtonClick}
              className="
                user-button px-4 py-2 md:text-lg rounded-xl bg-violet-800
                text-violet-50 hover:bg-violet-700 transition-all"
            >
              {`Sort ${sort || 'None'}`}
            </button>
          </div>
    
          {preparedUsers.length ? (
            <UserList users={preparedUsers} />
          ) : (
            <p className="text-2xl font-bold">
              No such users found
            </p>
          )}
        </>
    </section>
  );
};