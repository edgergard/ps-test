import React, { useEffect, useState } from 'react';
import { AlbumList, BackButton } from '../components';
import { getAlbums } from '../api/api';
import { useParams } from 'react-router-dom';
import { Album } from '../types';

export const AlbumsPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    getAlbums(+id)
      .then(setAlbums)
      .catch(() => {
        setErrorMessage('Failed to get users data.');
      });
  }, []);

  return (
    <section>
      <div className="flex items-center gap-x-4 mb-4 md:mb-10">
        <BackButton />

        <h1 className="page-title text-4xl sm:text-5xl md:text-7xl font-semibold">
          Albums Page
        </h1>
      </div>

    
      <AlbumList albums={albums} />
    </section>
  );
};