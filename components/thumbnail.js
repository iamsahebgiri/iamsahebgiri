import clsx from 'clsx';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Thumbnail({ blog }) {
  const { coverImage, title, type, date, slug } = blog;
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
    img_large.src = `/_next/image?url=${coverImage}&w=640&q=100`;
    img_large.onload = () => {
      setIsLargeImgLoaded(true);
    };
  }, []);

  return (
    <Link href={`/posts/${slug}`}>
      <a className='thumbnail-link'>
        <div className='bg-white h-full p-3 rounded-lg shadow-sm dark:bg-gray-700'>
          <div
            className='placeholder rounded-lg bg-gray-200 relative bg-cover bg-no-repeat overflow-hidden'
            data-large={`/_next/image?url=${coverImage}&w=640&q=100`}
          >
            <img
              src={`/_next/image?url=${coverImage}&w=640&q=1`}
              alt={title}
              className={clsx('img-small', isSmallImgLoaded && 'loaded')}
            />
            <img
              src={`/_next/image?url=${coverImage}&w=640&q=100`}
              alt={title}
              className={clsx(
                'img-large transition ease-in-out duration-300',
                isLargeImgLoaded && 'loaded',
              )}
            />
            <div className='intrinsic-placeholder' />
          </div>

          <div className='flex flex-col justify-between py-5'>
            <div>
              <div className='text-green-500 uppercase text-sm'>{type}</div>
              <h2 className='font-heading text-xl mt-2 text-gray-900 dark:text-gray-300'>
                {title}
              </h2>
            </div>
            <p className='text-sm text-gray-400 dark:text-gray-400 mt-2'>
              {date}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
