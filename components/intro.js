import Button from './button';
import React from 'react';

export default function Intro() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-10 md:my-12'>
      <div>
        <div className='mt-12 mb-6 md:mb-4'>
          <h1 className='font-heading text-gray-800 font-semibold text-4xl sm:text-4xl md:text-4xl lg:text-5xl text-center md:text-left leading-snug lg:leading-tight'>
            Building software
            <br />
            <span className='text-gradient'>that matters</span>
          </h1>
        </div>
        <p className='leading-relaxed px-6 text-gray-500 text-center md:text-left md:w-9/12 md:px-0'>
          I develop software for people with simplicity, scalability and ease of
          use in mind while building.
        </p>
        <div className='mt-8 md:flex md:space-x-4'>
          <Button isPrimary>Get started</Button>
          <Button isSecondary> View more </Button>
        </div>
      </div>
      <div className='md:flex md:flex-row-reverse'>
        <div className='my-8 h-72 md:h-80 w-full bg-gray-800 rounded-lg p-3 '>
          <div className='flex items-center space-x-1'>
            <div className='h-3 w-3 rounded-lg bg-rose-500'></div>
            <div className='h-3 w-3 rounded-lg bg-yellow-500'></div>
            <div className='h-3 w-3 rounded-lg bg-green-500'></div>
          </div>
          <div className='text-white font-mono py-2'>
            Use :help to show console commands <br /> version: 2.1.2
          </div>
        </div>
      </div>
    </div>
  );
}
