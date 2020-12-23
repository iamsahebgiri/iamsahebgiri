import React from 'react';
import Typed from 'typed.js';
import Button from './button';

export default function Intro() {
  React.useEffect(() => {
    const typed = new Typed('#terminal', {
      strings: [
        '$ npx create-react-app my-app \n$ cd my-app\n$ npm start',
        '$ npx create-nextjs-app my-awesome-app \n$ cd my-awesome-app\n$ yarn dev',
        '$ pip install tensorflow',
        '$ pip install django \n$ django-admin startproject dj-shop',
        '$ expo init my-rn-project ',
        '$ git push --froce ^1000\n  `pushed to origin with option force`',
      ],
      typeSpeed: 30,
      backSpeed: 0,
      loop: true,
      showCursor: false,
      smartBackspace: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-10 md:my-12'>
      <div>
        <div className='mt-12 mb-6 md:mb-4'>
          <h1 className='font-heading text-gray-800 dark:text-gray-100 font-bold text-4xl sm:text-4xl md:text-4xl lg:text-5xl text-center md:text-left leading-snug lg:leading-tight'>
            Build products
            <br />
            <span className='text-gradient'>that matter</span>
          </h1>
        </div>
        <p className='leading-relaxed px-6 text-gray-500 text-center md:text-left md:w-9/12 md:px-0'>
          I solve problems of people by creating applications and websites and
          minimize their frustration of life.
        </p>
        <div className='mt-8 md:flex md:space-x-4'>
          <Button isPrimary>Get started</Button>
          <Button isSecondary> View more </Button>
        </div>
      </div>
      <div className='md:flex md:flex-row-reverse overflow-hidden'>
        <div className='my-8 h-72 md:h-80 w-full bg-gray-800 rounded-lg p-3 '>
          <div className='flex items-center space-x-1'>
            <div className='h-3 w-3 rounded-lg bg-rose-500 hover:bg-rose-600'></div>
            <div className='h-3 w-3 rounded-lg bg-yellow-500 hover:bg-yellow-600'></div>
            <div className='h-3 w-3 rounded-lg bg-green-500 hover:bg-green-600'></div>
          </div>
          <div className='text-white font-mono py-2'>
            <div id='terminal' style={{ whiteSpace: 'pre' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
