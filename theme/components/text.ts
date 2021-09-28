import { mode } from '@chakra-ui/theme-tools';

const Text = {
  baseStyle: (props) => ({
    color: mode('gray.800', 'gray.200')(props),
    fontFeatureSettings: "'cv02','cv03','cv04' ,'cv11'"
  })
};

export default Text;
