import React from 'react';
import { useColorModeValue, Alert } from '@chakra-ui/react';

export default function BlockQuote(props) {
  const bg = useColorModeValue('blue.50', 'blue.900');

  return (
    <Alert
      mb="4"
      pl="4"
      flexDirection="column"
      alignItems="flex-start"
      bg={bg}
      status="info"
      sx={{
        '> *:first-of-type': {
          mb: '0'
        }
      }}
      {...props}
    />
  );
}
