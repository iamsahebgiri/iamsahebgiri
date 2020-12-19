import React from 'react';
import clsx from 'clsx';

function Tab({ title, isActive, onClick }) {
  return (
    <button
      className={clsx(
        'px-12 py-2 rounded-lg focus:outline-none dark:text-gray-300 transition ease-in-out duration-300',
        isActive && 'bg-white dark:bg-gray-500 shadow-md ',
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
export default function SegmentedButtons({ handleChange, tabs, value }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='bg-gray-200 dark:bg-gray-700 p-1 rounded-lg grid grid-cols-2 lg:grid-cols-4'>
        {tabs.map((tab, i) => (
          <Tab
            key={tab}
            title={tab}
            isActive={value === i}
            onClick={(e) => handleChange(e, i)}
          />
        ))}
      </div>
    </div>
  );
}
