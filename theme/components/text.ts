import { mode } from '@chakra-ui/theme-tools';

const Text = {
  baseStyle: (props) => ({
    color: mode('gray.800', 'gray.200')(props),
  })
};

export default Text;
