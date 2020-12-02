import clsx from 'clsx';
import React from 'react';

export default function button({ children, isPrimary, isSecondary }) {
  return (
    <button
      className={clsx(
        'rounded-md my-2 px-4 w-full md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 md:text-lg xl:text-base font-semibold leading-tight shadow',
        isPrimary && 'bg-primary text-white',
        isSecondary && 'bg-gray-100 text-gray-800',
      )}
    >
      {children}
    </button>
  );
}
