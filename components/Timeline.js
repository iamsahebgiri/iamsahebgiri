import {
  Box,
  Divider,
  Flex,
  Text,
  Icon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { HiOutlinePencil } from "react-icons/hi";
import dayjs from "dayjs";
import Link from "next/link";

const NewPost = ({ blog }) => (
  <>
    <HStack spacing={4}>
      <Flex
        alignItems="center"
        justifyContent="center"
        h={10}
        w={10}
        bgColor="green.100"
        rounded="full"
      >
        <Icon color="green.700" boxSize={5} as={HiOutlinePencil} />
      </Flex>
      <Flex flexDirection="column">
        <Text m={0} fontWeight="medium">
          Published new post
        </Text>
        <Text m={0} fontSize="sm" color="gray.600">
          {dayjs(blog.date).format("MMMM D, YYYY")}
        </Text>
      </Flex>
    </HStack>

    <Link href={`/posts/${blog.slug}`}>
      <a href={`/posts/${blog.slug}`}>
      <Box
        ml={[0, 0, 16]}
        shadow="sm"
        _hover={{ shadow: "md", cursor: "pointer" }}
        p={3}
        mt={3}
        mb={12}
        rounded="md"
        bgColor="white"
      >
        <Text fontWeight="semibold">{blog.title}</Text>
        <Text mt={2} color="gray.600">
          {blog.excerpt}
        </Text>
      </Box>
      </a>
    </Link>
  </>
);

const Timeline = ({ data }) => {
  return (
    <Box my={12}>
      <Flex alignItems="center" mb={8}>
        <Box pr={3}>
          <Text fontWeight="bold" fontSize="md">
            September, 2020
          </Text>
        </Box>
        <Box bgColor="gray.200" flex="1" h="1px" />
      </Flex>
      {data.map((blog) => (
        <NewPost blog={blog} key={blog.slug} />
      ))}
    </Box>
  );
};

export default Timeline;
