import React from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";

export default function title({ name, p }) {
  return (
    <Flex alignItems="center" flexDir="column" py={[8, 12, 16]}>
      <Heading mb={3} as="h1">
        {name}
        <span className="text-gradient">.</span>
      </Heading>
      <Text maxW="md" textAlign="center" color="gray.500" px="2">
        {p}
      </Text>
    </Flex>
  );
}
