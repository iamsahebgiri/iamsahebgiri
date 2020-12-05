import dynamic from 'next/dynamic';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../styles/index.css';
import '../styles/nprogress.css';

const TopProgressBar = dynamic(
  () => import('./../components/top-progress-bar'),
  { ssr: false },
);

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Inter"',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ].join(','),
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <TopProgressBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
