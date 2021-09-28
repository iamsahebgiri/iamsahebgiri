import React from 'react';
import { useColorModeValue, Divider } from '@chakra-ui/react';

export default function Hr() {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return <Divider borderColor={borderColor} my={4} w="100%" />;
}
