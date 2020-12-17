import Button from './button';
import React from 'react';
import Container from './container';
import Thumbnail from './thumbnail';

export default function blog({ blogs }) {
  return (
    <div className='bg-gray-50 dark:bg-gray-800 py-12'>
      <Container>
        <h1 className='font-heading font-bold text-gray-800 dark:text-gray-100 text-3xl md:text-4xl py-6'>
          Ideas worth
          <span className='text-gradient'> spreading</span>
        </h1>
        {/* <p className='max-w-prose mb-8 font text-gray-600'>
          Stories help you bring your best ideas to life. I write the latest
          technology trend, tips, tricks, and tutorials in my blog.
        </p> */}
        <div className='container mx-auto py-6 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          {blogs.map((blog) => (
            <Thumbnail key={blog.slug} blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
}
