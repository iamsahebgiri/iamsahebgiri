import { mode } from '@chakra-ui/theme-tools';

const SubHeading = {
  baseStyle: (props) => ({
    fontSize: 'md',
    color: mode('gray.500', 'gray.400')(props)
  }),
  variants: {
    base: {
      textTransform: 'initial'
    },
    allCaps: {
      textTransform: 'uppercase'
    }
  },
  defaultProps: {
    variant: 'base'
  }
};

export default SubHeading;
