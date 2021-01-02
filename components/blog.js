import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import React from 'react';
import Container from './container';
import Thumbnail from './thumbnail';
import Title from './title';

export default function blog({ blogs }) {
  const [isBlog, setIsBlog] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/blog') {
      setIsBlog(true);
    }
  }, []);

  return (
    <div>
      <div className='bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800'>
        <Title
          name='Overthought'
          p='Thinking out loud about design, development, and building excellent
            software.'
        />
      </div>

      <div className='bg-gray-100 dark:bg-gray-800'>
        <Container>
          <div className='container mx-auto py-6 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            {blogs.map((blog, index) => (
              <Thumbnail key={blog.slug} blog={blog} index={index} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
