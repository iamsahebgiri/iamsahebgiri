import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('blueGray.900', 'white')(props),
      bg: mode('blueGray.50', 'blueGray.900')(props),
      fontFeatureSettings: "'cv02','cv03','cv04' ,'cv11'",
    }
  })
};

export default styles;
