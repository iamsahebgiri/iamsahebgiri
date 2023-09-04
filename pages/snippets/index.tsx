import Layout from 'components/Layout';
import Title from 'components/Title';
import { getAllFilesFrontMatter } from 'lib/mdx';
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  useRadio,
  HStack,
  useRadioGroup,
  Flex
} from '@chakra-ui/react';
import { Tag } from '@chakra-ui/react';
import dayjs from 'dayjs';
import NextLink from 'next/link';
import { useState } from 'react';

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="3xl"
        _checked={{
          bg: 'orange.500',
          color: 'white',
          borderColor: 'orange.500'
        }}
        px={6}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const SnippetCard = ({ snippet }) => {
  const headingColor = useColorModeValue('gray.700', 'gray.200');
  const hoverColor = useColorModeValue('gray.800', 'gray.100');
  const descriptionColor = useColorModeValue('gray.500', 'gray.300');
  const bgColor = useColorModeValue('white', 'gray.800');
  const { title, publishedAt, slug, type } = snippet;

  const typeColors = {
    web: 'yellow',
    python: 'blue',
    linux: 'cyan'
  };

  return (
    <LinkBox
      as="article"
      bg={bgColor}
      mb="2"
      p="4"
      rounded="md"
      shadow="sm"
      role="group"
      _hover={{ shadow: 'md' }}
    >
      <Text color={descriptionColor}>
        {dayjs(publishedAt).format('MMMM D, YYYY')}
      </Text>
      <NextLink as={`/snippets/${slug}`} href={`/snippets/[slug]`} passHref>
        <LinkOverlay display="inline-block" mt="2">
          <Text
            fontWeight="medium"
            color={headingColor}
            _groupHover={{ color: hoverColor }}
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
  const [allSnippets, setAllSnippets] = useState(snippets);
  const types = ['All', 'Web', 'Python', 'Linux'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'topics',
    defaultValue: 'All',
    onChange: (type) => {
      if (type === 'All') {
        setAllSnippets(snippets);
      } else {
        const filteredSnippet = snippets.filter(
          (snippet) => snippet.type === type.toLowerCase()
        );
        setAllSnippets(filteredSnippet);
      }
    }
  });

  const group = getRootProps();

  return (
    <Layout
      title="Snippets"
      description="Collection of code snippets I've used in the past and saved for references."
    >
      <Title
        name="Snippets"
        p="Collection of code snippets I've used in the past and saved for references."
      />
      <Flex
        {...group}
        pb={6}
        flexWrap="wrap"
        gap={3}
        justifyContent={['left', 'center']}
      >
        {types.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Flex>
      <Box
        maxW="container.lg"
        display="grid"
        margin="0 auto"
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gridGap="2"
      >
        {allSnippets.map((snippet) => (
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
      )
    }
  };
}
