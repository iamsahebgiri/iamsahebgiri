import { mode } from '@chakra-ui/theme-tools';

const Heading = {
  baseStyle: (props) => ({
    color: mode('gray.800', 'gray.100')(props),
    fontFeatureSettings: "'cv02','cv03','cv04' ,'cv11'"
  })
};

export default Heading;
