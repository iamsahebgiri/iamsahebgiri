import { mode } from '@chakra-ui/theme-tools';

const Card = {
  baseStyle: (props) => ({
    background: mode('white', 'gray.800')(props)
  }),
  variants: {
    quite: {
      borderRadius: 'md',
      boxShadow: 'sm'
    },
    loud: {
      borderRadius: 'md',
      boxShadow: 'xl'
    }
  },
  defaultProps: {
    variant: 'quite'
  }
};

export default Card;
