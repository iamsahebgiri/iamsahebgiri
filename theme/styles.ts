import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      color: mode('blueGray.900', 'white')(props),
      bg: mode('blueGray.50', 'blueGray.900')(props)
    }
  })
};

export default styles;
