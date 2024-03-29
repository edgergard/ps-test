import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

export const BackButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleButtonClick}
      className="
        back-button flex gap-x-2 items-center
        px-4 py-2 md:text-lg rounded-xl bg-violet-800
      text-violet-50 hover:bg-violet-700 transition-all"
    >
      <ArrowLeftIcon className="w-6 h-6 text-violet-50"/>
      Go Back
    </button>
  );
};