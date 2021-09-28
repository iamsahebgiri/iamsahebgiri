import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function MdxLink(props: any) {
  const color = useColorModeValue('blue.600', 'blue.500');
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color} {...props} />
      </NextLink>
    );
  }

  return <Link color={color} isExternal {...props} />;
}
