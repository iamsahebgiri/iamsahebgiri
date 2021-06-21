import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { Box, Link, Text, LinkBox, LinkOverlay } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import dayjs from 'dayjs';
import NextLink from 'next/link';

const SnippetCard = ({ snippet }) => {
  const { title, publishedAt, slug, type } = snippet;

  const typeColors = {
    javascript: 'yellow',
    python: 'blue',
    linux: 'cyan',
  };

  return (
    <LinkBox
      as="article"
      bg="white"
      mb="2"
      p="4"
      rounded="md"
      shadow="sm"
      role="group"
      _hover={{ shadow: 'md' }}
    >
      <Text color="gray.500">{dayjs(publishedAt).format('MMMM D, YYYY')}</Text>
      <NextLink as={`/snippets/${slug}`} href={`/snippets/[slug]`} passHref>
        <LinkOverlay display="inline-block" mt="2">
          <Text
            fontWeight="medium"
            color="blueGray.600"
            _groupHover={{ color: 'blueGray.800' }}
          >
            {title}
          </Text>
        </LinkOverlay>
      </NextLink>
      <Box mt="4">
        <Tag variant="subtle" colorScheme={`${typeColors[type]}`}>
          {type}
        </Tag>
      </Box>
    </LinkBox>
  );
};

export default function SnippetsPage({ snippets }) {
  return (
    <Layout
      title="Snippets"
      description="Collection of code snippets I've used in the past and saved for references."
    >
      <Title
        name="Snippets"
        p="Collection of code snippets I've used in the past and saved for references."
      />
      <Box
        maxW="container.lg"
        display="grid"
        margin="0 auto"
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gridGap="2"
      >
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.slug} snippet={snippet} />
        ))}
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets');

  return {
    props: {
      snippets: snippets.sort((a, b) =>
        new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1
      ),
    },
  };
}
