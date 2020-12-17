import clsx from 'clsx';
import React from 'react';

export default function button({ children, isPrimary, isSecondary }) {
  return (
    <button
      className={clsx(
        'rounded-md my-2 px-4 w-full md:w-48 xl:w-52 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 md:text-lg xl:text-base font-semibold leading-tight shadow transform hover:scale-95 hover:shadow-sm focus:outline-none transition ease-in-out duration-300',
        isPrimary && 'bg-primary text-white ',
        isSecondary && 'bg-white text-gray-800 dark:bg-gray-200 hover:border',
      )}
    >
      {children}
    </button>
  );
}
