import React, { useEffect, useState } from 'react';
import { AlbumList, BackButton, Loader } from '../components';
import { getAlbums } from '../api/api';
import { useParams } from 'react-router-dom';
import { Album } from '../types';

export const AlbumsPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getAlbums(+id)
      .then(setAlbums)
      .catch(() => {
        setErrorMessage('Failed to get albums data.');
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          Albums Page
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
          Albums Page
        </h1>
      </div>

    
      <AlbumList albums={albums} />
    </section>
  );
};