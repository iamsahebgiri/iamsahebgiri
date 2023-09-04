import {
  // Avatar,
  Box,
  Flex,
  Heading,
  // Popover,
  // PopoverArrow,
  // PopoverBody,
  // PopoverContent,
  // PopoverTrigger,
  Text,
  // Spacer,
  // Divider,
  // Button,
  Image,
  AspectRatio
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import TwitterCard from 'components/TwitterCard';
import dayjs from 'dayjs';
import React from 'react';

function Blog({ frontMatter, children }) {
  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.summary}
      image={frontMatter.image}
      type="article"
    >
      <Box my={3}>
        <Flex>
          <Text color="gray.500">
            {dayjs(frontMatter.publishedAt).format('MMM D, YYYY')}
          </Text>
          <Text ml="2" color="gray.500">
            {' · '}
            {frontMatter.readingTime.text}
          </Text>
        </Flex>
        <Heading py={2}>{frontMatter.title}</Heading>
        <Flex alignItems="center" mt={3}>
          {/* <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Avatar
                _hover={{ cursor: 'pointer' }}
                name="Saheb Giri"
                size="sm"
                src="/assets/iamsahebgiri.jpg"
              />
            </PopoverTrigger>

            <PopoverContent _focus={{ boxShadow: 'none' }}>
              <PopoverArrow />
              <PopoverBody>
                <Box>
                  <Flex alignItems="center">
                    <Avatar
                      name="Saheb Giri"
                      size="sm"
                      src="/assets/iamsahebgiri.jpg"
                    />
                    <Text
                      ml="2"
                      fontSize="xl"
                      fontWeight="semibold"
                      color="gray.800"
                    >
                      Saheb Giri
                    </Text>
                  </Flex>
                  <Text fontSize="sm" mt="2">
                    Developer, Student, Love to bring ideas to life.
                  </Text>
                  <Divider py="1" />
                  <Flex alignItems="center" mt="2">
                    <Text ml="2" fontSize="sm" color="gray.600">
                      343 Followers
                    </Text>
                    <Spacer />
                    <a
                      href="https://www.instagram.com/iamsahebgiri/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" colorScheme="twitter">
                        Follow
                      </Button>
                    </a>
                  </Flex>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Text ml="2" color="gray.500">
            Saheb Giri
          </Text>
          <Spacer /> */}
        </Flex>
      </Box>
      {frontMatter.image ? (
        <Box mt="6">
          <AspectRatio ratio={16 / 9}>
            <Image
              borderRadius="xl"
              src={frontMatter.image}
              alt={frontMatter.title}
              objectFit="cover"
            />
          </AspectRatio>
        </Box>
      ) : null}

      <Box as="main">{children}</Box>
      <TwitterCard title={frontMatter.title} slug={frontMatter.slug} />
    </Layout>
  );
}

export default Blog;
