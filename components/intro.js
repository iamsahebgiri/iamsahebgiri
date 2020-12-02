import Button from './button';
import React from 'react';

export default function Intro() {
  return (
    <>
      <div className='mt-12 mb-6'>
        <h1 className='font-heading font-semibold text-2rem text-center leading-snug'>
          Building software
          <br />
          <span className='text-gradient'>that matters</span>
        </h1>
      </div>
      <p className='leading-relaxed px-6 text-gray-600 text-center'>
        I develop software for people with simplicity, scalability and ease of
        use in mind while building.
      </p>
      <div className='my-8 h-72 w-full bg-gray-500 rounded-lg'></div>
      <div className='my-8'>
        <Button isPrimary>Get started</Button>
        <Button isSecondary> View more </Button>
      </div>
    </>
  );
}
