import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';

const Image = (props) => {
  return (
    <Box mt={4} rounded="lg" shadow="sm" overflow="hidden" lineHeight={0}>
      <NextImage {...props} />
    </Box>
  );
};

export default Image;