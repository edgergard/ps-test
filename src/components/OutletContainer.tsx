import React from 'react';

type Props = {
  children: React.ReactElement | null;
};

const OutletContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-violet-200">
      <main className="mx-auto min-h-screen max-w-screen-2xl py-12 px-8 lg:px-4">
        {children}
      </main>
    </div>
  );
};

export default OutletContainer;