import clsx from 'clsx';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// import { SiNuxtDotJs, SiSpotify, SiSass, SiBootstrap } from 'react-icons/si';

export default function Project({ project }) {
  const {
    coverImage,
    name,
    description,
    dateStarted,
    githubLink,
    hostedLink,
    techStack,
  } = project;
  const [isSmallImgLoaded, setIsSmallImgLoaded] = useState(false);
  const [isLargeImgLoaded, setIsLargeImgLoaded] = useState(false);

  useEffect(() => {
    // small image
    const img = new Image();
    img.src = `/_next/image?url=${coverImage}&w=640&q=1`;
    img.onload = () => {
      setIsSmallImgLoaded(true);
    };

    // large image
    const img_large = new Image();
    img_large.src = `/_next/image?url=${coverImage}&w=1920&q=100`;
    img_large.onload = () => {
      setIsLargeImgLoaded(true);
    };
  }, []);

  return (
    <div className='bg-white relative h-full p-3 rounded-lg shadow-sm dark:bg-gray-700'>
      <div
        className='placeholder rounded-lg bg-gray-200 relative bg-cover bg-no-repeat overflow-hidden'
        data-large={`/_next/image?url=${coverImage}&w=1920&q=100`}
      >
        <img
          src={`/_next/image?url=${coverImage}&w=640&q=1`}
          alt={name}
          className={clsx('img-small', isSmallImgLoaded && 'loaded')}
        />
        <img
          src={`/_next/image?url=${coverImage}&w=1920&q=100`}
          alt={name}
          className={clsx(
            'img-large transition ease-in-out duration-300',
            isLargeImgLoaded && 'loaded',
          )}
        />
        <div className='intrinsic-placeholder' />
      </div>

      <div className='flex flex-col justify-between content-between pt-5'>
        <div className='flex items-center justify-between'>
          <h2 className='font-heading text-xl mt-2 font-bold text-gray-900 dark:text-gray-300'>
            {name}
          </h2>
          <a href={hostedLink}>
            <div className='h-5 w-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='fill-current text-gray-900 dark:text-gray-300'
              >
                <g data-name='Layer 2'>
                  <g data-name='external-link'>
                    <rect width='24' height='24' opacity='0' />
                    <path d='M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z' />
                    <path d='M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z' />
                  </g>
                </g>
              </svg>
            </div>
          </a>
        </div>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>{description}</p>
        <div className='flex items-center justify-between mt-6'>
          <p className='text-gray-500'>{dateStarted}</p>
        </div>

        <a href={githubLink} target='_blank'>
          <button className='mt-8 rounded-lg my-2 px-4 w-full md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 md:text-lg xl:text-base font-semibold leading-tight transform hover:scale-95 hover:shadow-sm focus:outline-none transition ease-in-out duration-300 bg-primary text-white '>
            View at Github
          </button>
        </a>
      </div>
    </div>
  );
}
