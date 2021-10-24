import { chakra, Heading, HTMLChakraProps } from '@chakra-ui/react';
import React from 'react';

export default function LinkedHeading(props: HTMLChakraProps<any>) {
  return (
    <Heading
      data-group=""
      css={{ scrollMarginBlock: '4.5rem' }}
      my="6"
      {...props}
    >
      <span className="content">{props.children}</span>
      {props.id && (
        <chakra.a
          aria-label="anchor"
          color="orange.600"
          fontWeight="normal"
          outline="none"
          _focus={{ opacity: 1, boxShadow: 'outline' }}
          opacity={0}
          _groupHover={{ opacity: 1 }}
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </chakra.a>
      )}
    </Heading>
  );
}
