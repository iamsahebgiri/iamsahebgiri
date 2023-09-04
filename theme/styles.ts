import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('gray.900', 'white')(props),
      bg: mode('gray.50', 'gray.900')(props),
      fontFeatureSettings: "'cv02','cv03','cv04' ,'cv11'",
    }
  })
};

export default styles;
