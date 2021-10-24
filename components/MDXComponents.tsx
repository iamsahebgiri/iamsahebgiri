import { Box, Heading, List, ListItem } from '@chakra-ui/react';
import BlockQuote from 'components/mdx-components/BlockQuote';
import InlineCode from 'components/mdx-components/InlineCode';
import LinkedHeading from 'components/mdx-components/LinkedHeading';
import Hr from 'components/mdx-components/Hr';
import Link from 'components/mdx-components/Link';
import P from 'components/mdx-components/P';
import Pre from 'components/mdx-components/Pre';
import Codeblock from 'components/mdx-components/codeblock/CodeBlock';
import Image from 'components/mdx-components/Image';

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" {...props} />,
  h2: (props) => <LinkedHeading as="h2" size="lg" {...props} />,
  h3: (props) => <LinkedHeading as="h3" size="md" {...props} />,
  h4: (props) => <LinkedHeading as="h4" size="sm" {...props} />,
  h5: (props) => <LinkedHeading as="h5" size="sm" {...props} />,
  h6: (props) => <LinkedHeading as="h6" size="xs" {...props} />,
  inlineCode: InlineCode,
  code: Codeblock,
  pre: Pre,
  hr: Hr,
  a: Link,
  p: P,
  blockquote: BlockQuote,
  br: (props) => <Box height="24px" {...props} />,
  ul: (props) => <List px={3} styleType="square" {...props} />,
  ol: (props) => <List as="ol" styleType="decimal" {...props} />,
  li: (props) => <ListItem {...props} />,
  Image
};

export default MDXComponents;
