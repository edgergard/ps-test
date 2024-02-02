import React from 'react'
import { Album } from '../types'

type Props = {
  album: Album;
};

export const AlbumCard: React.FC<Props> = ({ album }) => {
  const { id, title } = album;
  return (
    <div className="user-card px-6 py-4 bg-slate-50 rounded-xl inline-block">
    <ul className="user-data flex flex-col gap-y-2 text-base sm:text-lg lg:text-xl mb-4">
      <li className="id flex gap-x-2">
        <p className="font-semibold">
          Album ID:
        </p>
        <p>{id}</p>
      </li>

      <li className="title flex gap-x-2">
        <p className="font-semibold">
          Title:
        </p>
        <p>{title}</p>
      </li>
    </ul>
  </div>
  )
}
