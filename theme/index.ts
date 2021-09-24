import { extendTheme } from '@chakra-ui/react';

import components from "./components"
import foundations from "./foundations"
import styles from "./styles"

const theme = extendTheme({
  styles,
  foundations,
  components,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'ck'
  }
});

export default theme;
