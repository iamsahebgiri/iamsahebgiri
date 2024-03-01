import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(localStorage?.getItem('theme') ?? 'light');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="h-12 w-12 md:h-10 md:w-10 flex items-center justify-center ring-1 ring-neutral-900/5 shadow-sm hover:bg-neutral-50 dark:ring-0 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:shadow-highlight/4 group focus:outline-none focus-visible:ring-2 rounded-full focus-visible:ring-orange-500 dark:focus-visible:ring-2 dark:focus-visible:ring-neutral-400"
    >
      {theme === 'light' ? (
        <svg
          width="36"
          height="36"
          viewBox="-6 -6 36 36"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-orange-500 fill-orange-100 group-hover:stroke-orange-600 dark:stroke-neutral-400 dark:fill-neutral-400/20 dark:group-hover:stroke-neutral-300"
        >
          <g className="dark:opacity-0">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
            <path
              d="M12 4v.01M17.66 6.345l-.007.007M20.005 12.005h-.01M17.66 17.665l-.007-.007M12 20.01V20M6.34 17.665l.007-.007M3.995 12.005h.01M6.34 6.344l.007.007"
              fill="none"
            ></path>
          </g>
          <g className="opacity-0 dark:opacity-100">
            <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
            <path
              d="M12 3v1M18.66 5.345l-.828.828M21.005 12.005h-1M18.66 18.665l-.828-.828M12 21.01V20M5.34 18.666l.835-.836M2.995 12.005h1.01M5.34 5.344l.835.836"
              fill="none"
            ></path>
          </g>
        </svg>
      ) : (
        <svg
          viewBox="-6 -6 36 36"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-orange-500 fill-orange-100 group-hover:stroke-orange-600 dark:stroke-neutral-400 dark:fill-neutral-400/20 dark:group-hover:stroke-neutral-300"
        >
          <g className="dark:opacity-0">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
            <path
              d="M12 4v.01M17.66 6.345l-.007.007M20.005 12.005h-.01M17.66 17.665l-.007-.007M12 20.01V20M6.34 17.665l.007-.007M3.995 12.005h.01M6.34 6.344l.007.007"
              fill="none"
            ></path>
          </g>
          <g className="opacity-0 dark:opacity-100">
            <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
            <path
              d="M12 3v1M18.66 5.345l-.828.828M21.005 12.005h-1M18.66 18.665l-.828-.828M12 21.01V20M5.34 18.666l.835-.836M2.995 12.005h1.01M5.34 5.344l.835.836"
              fill="none"
            ></path>
          </g>
        </svg>
      )}
    </button>
  );
}
