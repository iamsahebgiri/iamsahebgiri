import {
  Avatar,
  Box,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  Spacer,
  Divider,
  Button,
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
      <Box my={12}>
        <Heading fontSize={['4xl', '5xl']} py={2}>
          {frontMatter.title}
        </Heading>
        <Flex alignItems="center" mt="2">
          <Popover trigger="hover" placement="bottom-start">
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
                      color="blueGray.800"
                    >
                      Saheb Giri
                    </Text>
                  </Flex>
                  <Text fontSize="sm" mt="2">
                    Developer, Student, Love to bring ideas to life.
                  </Text>
                  <Divider py="1" />
                  <Flex alignItems="center" mt="2">
                    <Text ml="2" fontSize="sm" color="blueGray.600">
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
          <Text ml="2" color="blueGray.500">
            Saheb Giri
          </Text>
          <Spacer />
          <Flex>
            <Text ml="2" color="blueGray.500">
              {dayjs(frontMatter.publishedAt).format('MMM D, YYYY')}
            </Text>
            <Text ml="2" color="blueGray.500">
              {' · '}
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        <AspectRatio ratio={16 / 9}>
          <Image
            mt="6"
            borderRadius="md"
            src={frontMatter.image}
            alt="Segun Adebayo"
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
      <Box as="main">{children}</Box>
      <TwitterCard title={frontMatter.title} slug={frontMatter.slug} />
    </Layout>
  );
}

export default Blog;
