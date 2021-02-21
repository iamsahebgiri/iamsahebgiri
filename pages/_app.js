import dynamic from "next/dynamic";
import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "@/styles/theme";

import "@/styles/index.css";
import "@/styles/nprogress.css";

const TopProgressBar = dynamic(
  () => import("./../components/top-progress-bar"),
  { ssr: false }
);

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <TopProgressBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
