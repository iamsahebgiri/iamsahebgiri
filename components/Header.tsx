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
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import SiteLogo from './Logo';
import navLinks from 'data/navLinks.json';
import DarkModeButton from './DarkModeButton';

const HeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;

  return (
    <NextLink href={href} passHref>
      <Link borderRadius="md" p="0.5">
        <Box py={1} px={2} rounded="md">
          <Text
            fontSize="sm"
            color={isActive ? useColorModeValue('blueGray.900', 'blueGray.300') : useColorModeValue('blueGray.700', 'blueGray.400')}
            fontWeight={isActive ? 'semibold' : 'normal'}
          >
            {name}
          </Text>
        </Box>
      </Link>
    </NextLink>
  );
};

const MobileHeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;
  return (
    <NextLink href={href} passHref>
      <Link width="full" borderRadius="md">
        <Flex bgColor={isActive && useColorModeValue('orange.100', 'orange.300')} px="4" py="2" rounded="md">
          <Text
            color={isActive ? useColorModeValue('blueGray.900', 'orange.600') : useColorModeValue('blueGray.700', 'blueGray.400')}
            fontWeight={isActive && 'semibold'}
          >
            {name}
          </Text>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue('white', 'blueGray.800');

  return (
    <Flex
      bgColor={bgColor}
      backdropFilter="saturate(180%) blur(20px)"
      borderBottom="1px"
      borderBottomColor={useColorModeValue("blueGray.100", "blueGray.700")}
      position="fixed"
      width="100%"
      zIndex="1"
    >
      <Container maxW="4xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" display={['flex', 'flex', 'none']}>
            <Icon boxSize="6" onClick={onOpen} as={HiOutlineMenu} />
          </Flex>
          <Flex alignItems="center" py="3">
            <Flex alignItems="center">
              <NextLink href="/">
                <Link>
                  <SiteLogo />
                </Link>
              </NextLink>
            </Flex>
          </Flex>
          <HStack ml="10" spacing="3" display={['none', 'none', 'flex']}>
            {navLinks.map((link) => (
              <HeaderLink key={link.href} href={link.href} name={link.name} />
            ))}
          </HStack>
          <DarkModeButton />
        </Flex>
      </Container>

      {/* __________________Mobile Drawer__________________ */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent maxW="2xs" bg={bgColor}>
            <DrawerHeader h="14" py="2.5">
              <SiteLogo />
            </DrawerHeader>

            <Divider />

            <DrawerBody mt="3">
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
