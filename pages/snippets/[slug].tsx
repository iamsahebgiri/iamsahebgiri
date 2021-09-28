import { useMemo } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getFileBySlug } from 'lib/mdx';
import components from 'components/MDXComponents';
import Layout from 'components/Layout';

export default function SnippetPage({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout title={frontMatter.title}>
      <Box my={24}>
        <Heading py={2} textAlign="center">
          {frontMatter.title}
        </Heading>
      </Box>
      <Box as="main">
        <Component components={components} />
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const snippets = await getFiles('snippets');

  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const snippet = await getFileBySlug('snippets', params.slug);

  return { props: snippet };
}
