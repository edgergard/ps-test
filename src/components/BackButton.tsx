import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

export const BackButton = () => {
  return (
    <Link
      to="/"
      className="
        back-button flex gap-x-2 items-center
        px-4 py-2 md:text-lg rounded-xl bg-violet-800
      text-violet-50 hover:bg-violet-700 transition-all"
    >
      <ArrowLeftIcon className="w-6 h-6 text-violet-50"/>
      Go Back
    </Link>
  );
};