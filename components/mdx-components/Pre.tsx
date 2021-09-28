import { chakra } from '@chakra-ui/react';
import * as React from 'react';

export default function Pre(props) {
  return <chakra.pre my="2em" borderRadius="sm" {...props} />;
}
