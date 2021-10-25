import { Code, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function InlineCode(props) {
  return (
    <Code
      bg={useColorModeValue('blue.50', 'blue.900')}
      color={useColorModeValue('blue.600', 'blue.200')}
      rounded="lg"
      {...props}
    />
  );
}
