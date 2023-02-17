import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/roboto-mono"
import customTheme from 'theme';

import 'styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
