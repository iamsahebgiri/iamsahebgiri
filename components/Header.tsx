import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import SiteLogo from './Logo';
import navLinks from 'data/navLinks.json';

const HeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;

  return (
    <NextLink href={href} passHref>
      <Link>
        <Text
          mb={isActive ? 3 : 4}
          px={2}
          color={isActive ? 'blueGray.900' : 'blueGray.700'}
          fontWeight={isActive ? 'medium' : 'normal'}
        >
          {name}
        </Text>
        {isActive && <Box h="1" roundedTop="md" bgColor="myOrange.800" />}
      </Link>
    </NextLink>
  );
};

const MobileHeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;
  return (
    <NextLink href={href} passHref>
      <Link width="full" _focus={{ boxShadow: 'none' }}>
        <Flex
          bgColor={isActive && 'orange.200'}
          color={isActive && 'orange.700'}
          fontWeight={isActive && 'semibold'}
          px="4"
          py="2"
          rounded="md"
        >
          <Text>{name}</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bgColor="white"
      pt="3"
      shadow="sm"
      position="fixed"
      width="100%"
      zIndex="1"
    >
      <Container maxW="3xl">
        <Flex justifyContent="space-between">
          <Flex alignItems="flex-end">
            <Flex alignItems="center" mr="12" pb="3">
              <NextLink href="/">
                <Link>
                  <SiteLogo />
                </Link>
              </NextLink>
            </Flex>

            <HStack spacing="6" display={['none', 'none', 'flex']}>
              {navLinks.map((link) => (
                <HeaderLink key={link.href} href={link.href} name={link.name} />
              ))}
            </HStack>
          </Flex>
          <Flex alignItems="center" display={['flex', 'flex', 'none']}>
            <Icon boxSize="6" onClick={onOpen} as={HiMenuAlt4} mb="3" />
          </Flex>
        </Flex>
      </Container>

      {/* __________________Mobile Drawer__________________ */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent maxW="2xs">
            <DrawerHeader>
              <SiteLogo />
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing="1" alignItems="flex-start">
                {navLinks.map((link) => (
                  <MobileHeaderLink
                    key={link.href}
                    href={link.href}
                    name={link.name}
                  />
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
