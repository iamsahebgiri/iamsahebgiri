import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from 'components/Layout';

function Blog({ frontMatter, children }) {
  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.summary}
      image={frontMatter.image}
      type="article"
    >
      <Box my={24}>
        <Heading py={2} textAlign="center">
          {frontMatter.title}
        </Heading>
        <Text textAlign="center" color="blueGray.500">
          By Saheb Giri
        </Text>
      </Box>
      <Box as="main">{children}</Box>
    </Layout>
  );
}

export default Blog;
