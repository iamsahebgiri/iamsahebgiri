import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Button from './button';
import React from 'react';
import Container from './container';
import Thumbnail from './thumbnail';

export default function blog({ blogs }) {
  const [isBlog, setIsBlog] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/blog') {
      setIsBlog(true);
    }
  }, []);

  return (
    <div
      className={clsx(
        isBlog && 'bg-white dark:bg-gray-900 pb-12',
        !isBlog && 'bg-gray-50 dark:bg-gray-800 py-12',
      )}
    >
      <Container>
        <h1 className='font-heading font-bold text-gray-800 dark:text-gray-100 text-3xl md:text-4xl py-6'>
          Ideas worth
          <span className='text-gradient'> spreading</span>
        </h1>
        <div className='container mx-auto py-6 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          {blogs.map((blog, index) => (
            <Thumbnail key={blog.slug} blog={blog} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
