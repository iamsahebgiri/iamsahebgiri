import { Text, Box, Tag, Link, useColorModeValue } from '@chakra-ui/react';
import Layout from 'components/Layout';
import NextLink from 'next/link';
import dayjs from 'dayjs';
import { getAllFilesFrontMatter } from 'lib/mdx';
import Title from 'components/Title';

const OverthoughtCard = ({ overthought }) => {
  const subtleColor = useColorModeValue('gray.600', 'gray.400')
  const { title, publishedAt, slug, summary } = overthought;
  
  return (
    <Box mb="14">
      <Text color={subtleColor}>{dayjs(publishedAt).format('MMMM D, YYYY')}</Text>
      <NextLink
        as={`/overthoughts/${slug}`}
        href={`/overthoughts/[slug]`}
        passHref
      >
        <Link display="inline-block" mt="1">
          <Text as="h2" fontWeight="semibold" fontSize="xl">
            {title}
          </Text>
        </Link>
      </NextLink>

      <Text mt="3" color={subtleColor}>
        {summary}
      </Text>
      <NextLink
        as={`/overthoughts/${slug}`}
        href={`/overthoughts/[slug]`}
        passHref
      >
        <Link display="inline-block" mt="2">
          <Text
            fontWeight="medium"
            color="orange.600"
            _hover={{ color: 'orange.700' }}
          >
            Read more &rarr;
          </Text>
        </Link>
      </NextLink>
    </Box>
  );
};

export default function Overthought({ overthoughts }) {
  return (
    <>
      <Layout
        title="Overthoughts"
        description="Thinking out loud about design, development, and building excellent software."
      >
        <Title
          name="Overthoughts"
          p="Thinking out loud about design, development, and building excellent software."
        />
        <Box p={0}>
          {overthoughts.map((overthought) => (
            <OverthoughtCard key={overthought.slug} overthought={overthought} />
          ))}
        </Box>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const overthoughts = await getAllFilesFrontMatter('overthoughts');

  return {
    props: {
      overthoughts: overthoughts.sort((a, b) =>
        new Date(a.publishedAt) < new Date(b.publishedAt) ? 1 : -1
      ),
    },
  };
}
