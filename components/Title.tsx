import React from 'react';
import { Box, Heading, Flex, Text, useColorModeValue } from '@chakra-ui/react';

export default function Title({ name, p }) {
  const color = useColorModeValue('gray.600', 'gray.300');
  return (
    <Flex alignItems="center" flexDir="column" py={[8, 12, 16]}>
      <Heading mb={3} as="h1">
        {name}
        <span className="text-gradient">.</span>
      </Heading>
      <Text maxW="md" textAlign="center" color={color} px="2">
        {p}
      </Text>
    </Flex>
  );
}
