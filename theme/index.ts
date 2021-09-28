import { extendTheme } from '@chakra-ui/react';

import components from "./components"
import foundations from "./foundations"
import styles from "./styles"

const theme = extendTheme({
  ...foundations,
  components,
  styles,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    cssVarPrefix: 'ck'
  }
});

export default theme;
