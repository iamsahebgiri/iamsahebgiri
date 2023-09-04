import {
  Box,
  chakra,
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
  IconButton,
  shouldForwardProp
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import SiteLogo from './Logo';
import navLinks from 'data/navLinks.json';
import DarkModeButton from './DarkModeButton';

const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop)
});

const HeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;

  const textColorLight = useColorModeValue('orange.600', 'orange.500');
  const textColorDark = useColorModeValue('gray.700', 'gray.400');

  return (
    <NextLink href={href} passHref>
      <Link borderRadius="full" p="0.5" position="relative" role="group">
        <Flex py={1} px={2} rounded="full" align="end" justifyContent="center">
          <Text
            fontSize="sm"
            color={isActive ? textColorLight : textColorDark}
            fontWeight="medium"
            _groupHover={{
              color: textColorLight
            }}
          >
            {name}
          </Text>
          {isActive && (
            <MotionBox
              layoutId="bubble"
              // @ts-ignore
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              height="1px"
              width="70%"
              pos="absolute"
              top="38px"
              bgGradient="linear(to-r, transparent, orange.500, transparent)"
            />
          )}
        </Flex>
      </Link>
    </NextLink>
  );
};

const MobileHeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split('/')[1]}` === href;

  const bgColor = useColorModeValue('orange.100', 'orange.300');
  const textColorActive = useColorModeValue('gray.900', 'orange.600');
  const textColorDark = useColorModeValue('gray.700', 'gray.400');

  return (
    <NextLink href={href} passHref>
      <Link width="full" borderRadius="md">
        <Flex bgColor={isActive && bgColor} px="4" py="2" rounded="md">
          <Text
            color={isActive ? textColorActive : textColorDark}
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

  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <>
      <Flex width="100%">
        <Container maxW="3xl" padding={2} my={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <IconButton
              onClick={onOpen}
              rounded="full"
              variant="ghost"
              aria-label="Toggle dark mode"
              icon={<Icon h="5" w="5" as={HiOutlineMenu} />}
              _focus={{ boxShadow: 'none' }}
              shadow="sm"
              height="auto"
              display={['flex', 'flex', 'none']}
              p={3}
              bg={bgColor}
            />
            <NextLink href="/">
              <Link>
                <SiteLogo />
              </Link>
            </NextLink>
            <Box
              bg={bgColor}
              rounded="full"
              display={['none', 'none', 'flex']}
              py={1.5}
              px={3}
              shadow="sm"
            >
              <HStack spacing="3">
                {navLinks.map((link) => (
                  <HeaderLink
                    key={link.href}
                    href={link.href}
                    name={link.name}
                  />
                ))}
              </HStack>
            </Box>
            <DarkModeButton />
          </Flex>
        </Container>
      </Flex>
      {/* __________________Mobile Drawer__________________ */}
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
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
    </>
  );

  // return (
  //   <Flex
  //     bgColor={bgColor}
  //     shadow="sm"
  //     position="fixed"
  //     width="100%"
  //     zIndex="1"
  //   >
  //     <Container maxW="4xl">
  //       <Flex justifyContent="space-between" alignItems="center">
  //         <Flex alignItems="center" display={['flex', 'flex', 'none']}>
  //           <Icon boxSize="6" onClick={onOpen} as={HiOutlineMenu} />
  //         </Flex>
  //         <Flex alignItems="center" py="3">
  //           <Flex alignItems="center">
  //             <NextLink href="/">
  //               <Link>
  //                 <SiteLogo />
  //               </Link>
  //             </NextLink>
  //           </Flex>
  //         </Flex>
  //         <HStack ml="10" spacing="3" display={['none', 'none', 'flex']}>
  //           {navLinks.map((link) => (
  //             <HeaderLink key={link.href} href={link.href} name={link.name} />
  //           ))}
  //         </HStack>
  //         <DarkModeButton />
  //       </Flex>
  //     </Container>

  //     {/* __________________Mobile Drawer__________________ */}
  //     <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
  //       <DrawerOverlay>
  //         <DrawerContent maxW="2xs" bg={bgColor}>
  //           <DrawerHeader h="14" py="2.5">
  //             <SiteLogo />
  //           </DrawerHeader>

  //           <Divider />

  //           <DrawerBody mt="3">
  //             <VStack spacing="1" alignItems="flex-start">
  //               {navLinks.map((link) => (
  //                 <MobileHeaderLink
  //                   key={link.href}
  //                   href={link.href}
  //                   name={link.name}
  //                 />
  //               ))}
  //             </VStack>
  //           </DrawerBody>
  //         </DrawerContent>
  //       </DrawerOverlay>
  //     </Drawer>
  //   </Flex>
  // );
}
