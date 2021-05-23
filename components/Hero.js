import NextLink from 'next/link';
import React from 'react';
import { Button, Heading, Flex, Text, HStack } from '@chakra-ui/react';

export default function Intro() {
  return (
    <Flex flexDir="column" alignItems="center" py={[20]}>
      <Heading mb="3" as="h1">
        Hey, I am
        <span className="text-gradient">{' Saheb Giri'}</span>
      </Heading>
      <Text textAlign="center" maxW="xl" color="gray.600">
        I’m a developer and a student reading CSIT in SOA University at
        Bhubaneswar. You’ve found my personal slice of the internet.
      </Text>
      <HStack mt="6" spacing="3" zIndex="0">
        <NextLink href="/about">
          <Button colorScheme="orange">More about me</Button>
        </NextLink>

        <Button
          as="a"
          target="_blank"
          rel="noopener noreferer"
          href="https://docs.google.com/document/d/135XdFRBiKadLyHH2k5wN9fanflPzGwHmhIHwviUxay8/edit?usp=sharing"
        >
          Resume
        </Button>
      </HStack>
    </Flex>
  );
}
