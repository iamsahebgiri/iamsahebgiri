/* eslint react-hooks/rules-of-hooks: 0 */ 
import React, { useState } from 'react';
import {
  Box,
  HStack,
  Text,
  useClipboard,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react';
import Highlight from './highlight';
import { HiCheck, HiOutlineDuplicate } from 'react-icons/hi';
import InlineCode from './InlineCode';

const Codeblock = (props) => {
  const showLines = true;

  const { className, children, viewlines, title, metastring, ln, ...rest } = props;

  const [editorCode] = useState(children);

  const { hasCopied, onCopy } = useClipboard(editorCode);

  const language = className?.replace(/language-/, '');

  if(!className) {
    return <InlineCode children={children} />;
  }

  return (
    <Box
      rounded="md"
      overflow="hidden"
      bg={useColorModeValue('white', '#1A202C')}
      my={4}
      borderWidth="1px"
      borderColor={useColorModeValue('blueGray.200', 'blueGray.700')}
    >
      {title ? (
        <HStack
          px={4}
          py={1}
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth="1px"
          borderBottomColor={useColorModeValue('blueGray.200', 'blueGray.700')}
        >
          <Text
            fontSize="sm"
            fontWeight="500"
            color={useColorModeValue('blueGray.500', 'blueGray.300')}
          >
            {title}
          </Text>
          <IconButton
            aria-label="copy"
            size="sm"
            colorScheme="blue"
            onClick={onCopy}
            variant="ghost"
            color={
              hasCopied
                ? useColorModeValue('green.600', 'green.100')
                : useColorModeValue('blueGray.500', 'blueGray.300')
            }
            bg={
              hasCopied ? useColorModeValue('green.50', 'green.800') : undefined
            }
            icon={
              hasCopied ? (
                <HiCheck size={18} />
              ) : (
                <HiOutlineDuplicate size={18} />
              )
            }
          />
        </HStack>
      ) : undefined}
      <Highlight
        codeString={editorCode}
        language={language}
        metastring={metastring}
        showLines={showLines}
        ln={ln}
      />
    </Box>
  );
};

export default Codeblock;
