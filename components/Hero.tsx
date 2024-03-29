import { Box, Button, Heading, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import SubHeading from './SubHeading';


export default function Hero() {
  return (
    <>
      <Box as="section">
        <Box
          maxW="3xl"
          mx="auto"
          px={{ base: '6', lg: '4' }}
          py={{ base: '16', sm: '32' }}
          textAlign="center"
        >
          <Tag colorScheme="orange" variant="solid" mb="8">
            Developer and Tinkerer
          </Tag>
          <Heading className="wordCarousel" as="h1" size="2xl">
            <>
              <Box
                height={{ base: '55px', sm: '72px' }}
                position="relative"
                pt="10px"
                mt="-10px"
                overflow="hidden"
              >
                <ul className="flip5">
                  <li>Namaskar</li>
                  <li>Hello</li>
                  <li>Nǐn hǎo</li>
                  <li>Zdravstvuyte</li>
                  <li>Bonjour</li>
                </ul>
              </Box>
              I am{' '}
              <Text
                as="span"
                bgGradient="linear(to-r, orange.500, orange.600)"
                bgClip="text"
              >
                Saheb Giri
              </Text>
            </>
          </Heading>
          <SubHeading mt="6" maxW="lg" mx="auto">
            I write code, build infrastructure, and create digital experiences.
            Currently an Engineering Undergrad doing B. Tech in Computer Science
            at Institute of Technical Education and Research.
          </SubHeading>

          <Box my="10">
            <Button
              as="a"
              href="./assets/resume.pdf"
              colorScheme="orange"
              target="_blank"
              rel="noopener noreferer"
            >
              Resume
            </Button>
            <Button
              ml="4"
              as="a"
              href="https://github.com/iamsahebgiri"
              target="_blank"
              rel="noopener noreferer"
            >
              Github
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
