import {
  Box, Container,
  Drawer,
  DrawerBody,
  DrawerContent, DrawerHeader,
  DrawerOverlay, Flex,
  HStack,
  Icon, Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import SiteLogo from "./Icons/SiteLogo";

const HeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <a href={href}>
        <Text
          mb={isActive ? 3 : 4}
          px={2}
          color={isActive ? "gray.900" : "gray.700"}
          fontWeight={isActive ? "medium" : "normal"}
        >
          {name}
        </Text>
        {isActive && <Box h={1} roundedTop={4} bgColor="brand.primary" />}
      </a>
    </Link>
  );
};

const MobileHeaderLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <a href={href} style={{ display: "block", width: "100%" }}>
        <Flex bgColor={isActive && "gray.200"} px={3} py={2} rounded="md">
          <Text>{name}</Text>
        </Flex>
      </a>
    </Link>
  );
};

export default function Header() {
  const URI = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Overthought",
      href: "/overthought",
    },
    {
      name: "Bits",
      href: "/bits",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bgColor="white" pt={3} shadow="sm">
      <Container maxW="4xl">
        <Flex justifyContent="space-between">
          <Flex alignItems="flex-end">
            <Box mr={12} pb={3}>
              <Link href="/">
                <a>
                  <SiteLogo />
                </a>
              </Link>
            </Box>
            <HStack spacing={6} display={["none", "none", "flex"]}>
              {URI.map((link) => (
                <HeaderLink key={link.href} href={link.href} name={link.name} />
              ))}
            </HStack>
          </Flex>
          <Flex alignItems="center" display={["flex", "flex", "none"]}>
            <Icon boxSize={6} onClick={onOpen} as={HiDotsVertical} mb={3} />
          </Flex>
        </Flex>
      </Container>

      {/* __________________Mobile Drawer__________________ */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <SiteLogo />
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={3} alignItems="flex-start">
                {URI.map((link) => (
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
