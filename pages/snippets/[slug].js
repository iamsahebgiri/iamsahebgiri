import { Box, Heading, Text } from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';
import Layout from '@/components/Layout';

export default function SnippetPage({ mdxSource, frontMatter }) {
  return (
    <Layout title={frontMatter.title}>
      <Box my={24}>
        <Heading py={2} textAlign="center">
          {frontMatter.title}
        </Heading>
      </Box>
      <Box as="main">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const overthoughts = await getFiles('snippets');

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
  const overthought = await getFileBySlug('snippets', params.slug);

  return { props: overthought };
}
