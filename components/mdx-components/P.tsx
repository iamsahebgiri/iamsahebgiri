import { Text } from '@chakra-ui/react';
import React from 'react';

export default function P(props: any) {
  return (
    <Text as="p" my="4" lineHeight="tall" {...props} />
  );
}
