import dynamic from 'next/dynamic';
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import customTheme from '@/styles/theme';
import MDXComponents from '@/components/MDXComponents';

import '@/styles/index.css';
import { prismLightTheme, prismDarkTheme } from '@/styles/prism';

const TopProgressBar = dynamic(
  () => import('../components/TopProgressBar'),
  { ssr: false }
);

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
        `}
      />
      {children}
    </>
  );
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <MDXProvider components={MDXComponents}>
        <TopProgressBar />
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
