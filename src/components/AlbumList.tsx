import React from 'react'
import { Album } from '../types';
import { AlbumCard } from './AlbumCard';

type Props = {
  albums: Album[];
};

export const AlbumList: React.FC<Props> = ({ albums }) => {
  return (
    <div className="user-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {albums.map(album => <AlbumCard album={album} key={album.id} />)}
    </div>
  );
};