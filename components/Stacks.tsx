import stacksData from 'data/stacksData.json';
import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';
import _ from 'underscore';

export default function Timeline() {
  const sortedStacksData = _.sortBy(stacksData, 'name');

  return (
    <Box>
      <VStack spacing="4">
        {sortedStacksData.map((stack) => (
          <LinkBox
            shadow="sm"
            p="4"
            key={stack.name}
            transition="all 0.2s ease-in-out"
            _hover={{ shadow: 'md' }}
            rounded="md"
            bgColor={useColorModeValue('white', 'blueGray.800')}
            width="full"
          >
            <Flex flexDirection={['column', 'row']}>
              <Box>
                <Image
                  src={`/assets/stacks/${stack.image}`}
                  width={64}
                  height={64}
                  layout="fixed"
                  placeholder="blur"
                  blurDataURL={`/assets/stacks/${stack.image}?w=10&q=10`}
                  alt={`${stack.name} icon`}
                  className="rounded-lg"
                />
              </Box>
              <Box ml={['0', '4']}>
                <LinkOverlay isExternal href={stack.url}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    color={useColorModeValue('blueGray.700', 'blueGray.200')}
                    fontWeight="semibold"
                  >
                    {stack.name}
                  </Heading>
                </LinkOverlay>
                <Text mt="1" color={useColorModeValue('blueGray.600', 'blueGray.300')}>
                  {stack.description}
                </Text>
              </Box>
            </Flex>
          </LinkBox>
        ))}
      </VStack>
    </Box>
  );
}
