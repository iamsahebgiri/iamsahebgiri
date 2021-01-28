import dynamic from 'next/dynamic';

import '../styles/index.css';
import '../styles/nprogress.css';

const TopProgressBar = dynamic(
  () => import('./../components/top-progress-bar'),
  { ssr: false },
);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}
