import React from 'react';

export default function title({ name, p }) {
  return (
    <div className='py-8 md:py-16 flex items-center flex-col'>
      <h1 className='font-heading font-bold text-center text-gray-800 dark:text-gray-100 text-3xl md:text-4xl'>
        {name}
        <span className='text-gradient'>.</span>
      </h1>
      <p className='text-center mt-2 max-w-md text-gray-500 px-2'>{p}</p>
    </div>
  );
}
