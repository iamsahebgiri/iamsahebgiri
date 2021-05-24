import {
  Alert,
  Button,
  Box,
  Code,
  Divider,
  Heading,
  Link,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'blue.500',
    dark: 'blue.500',
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900',
  };

  return (
    <Alert
      mb="4"
      pl="4"
      flexDirection="column"
      alignItems="flex-start"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      sx={{
        '> *:first-of-type': {
          mb: '0',
        },
      }}
      {...props}
    />
  );
};

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '0',
      scrollSnapMargin: '0', // Safari
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="orange.600"
          fontWeight="medium"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => (
    <DocsHeading
      as="h2"
      size="lg"
      fontWeight="bold"
      color="blueGray.900"
      {...props}
    />
  ),
  h3: (props) => (
    <DocsHeading
      as="h3"
      size="md"
      fontWeight="bold"
      color="blueGray.900"
      {...props}
    />
  ),
  h4: (props) => (
    <DocsHeading
      as="h4"
      size="sm"
      fontWeight="bold"
      color="blueGray.900"
      {...props}
    />
  ),
  h5: (props) => (
    <DocsHeading
      as="h5"
      size="sm"
      fontWeight="bold"
      color="blueGray.900"
      {...props}
    />
  ),
  h6: (props) => (
    <DocsHeading
      as="h6"
      size="xs"
      fontWeight="bold"
      color="blueGray.900"
      {...props}
    />
  ),
  inlineCode: (props) => <Code colorScheme="orange" {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props) => (
    <Text as="p" color="blueGray.800" mb="4" lineHeight="tall" {...props} />
  ),
  ul: (props) => (
    <Box as="ul" listStyleType="none" pt={2} mb="4" pl={4} ml={2} {...props} />
  ),
  ol: (props) => (
    <Box
      as="ol"
      listStyleType="none"
      sx={{ counterReset: 'customCounter' }}
      pt={2}
      pl={4}
      ml={2}
      mb="4"
      {...props}
    />
  ),
  li: (props) => (
    <Box
      as="li"
      pb="2"
      sx={{
        'ul &::before': {
          content: '"\\2022"',
          color: 'var(--chakra-colors-blueGray-500)',
          fontWeight: 'bold',
          display: 'inline-block',
          width: '1em',
          marginLeft: '-1em',
        },
        'ol &': {
          counterIncrement: 'customCounter',
        },
        'ol &::before': {
          content: "counter(customCounter) '.  '",
          color: 'var(--chakra-colors-blueGray-500)',
          fontWeight: 'semibold',
          display: 'inline-block',
          width: '1em',
          marginRight: '0.5em',
          marginLeft: '-1em',
        },
      }}
      {...props}
    />
  ),
  blockquote: Quote,
  table: (props) => (
    <Table size="sm" variant="striped" colorScheme="blueGray" {...props} />
  ),
  thead: Thead,
  tbody: Tbody,
  tfoot: Tfoot,
  tr: Tr,
  th: Th,
  td: Td,
  caption: TableCaption,
};

export { CustomLink };
export default MDXComponents;
