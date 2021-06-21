import { Box, Heading, Text } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';
import Layout from '@/components/Layout';

export default function PostPage({ mdxSource, frontMatter }) {
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
      <Box as="main">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const overthoughts = await getFiles('overthoughts');

  return {
    paths: overthoughts.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const overthought = await getFileBySlug('overthoughts', params.slug);

  return { props: overthought };
}
