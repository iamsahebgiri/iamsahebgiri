import React from 'react';
import Container from 'components/Container';
import Header from 'components/Header';
import { Box, Container as ChakraContainer } from '@chakra-ui/react';

function MainLayout({ children, frontMatter }) {
  return (
    <Container title={frontMatter.title}>
      <Header />
      <ChakraContainer maxW="3xl">{children}</ChakraContainer>
    </Container>
  );
}

export default MainLayout;
