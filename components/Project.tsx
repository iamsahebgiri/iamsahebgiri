import Image from 'next/image';
import {
  Badge,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
  Box,
} from '@chakra-ui/react';

const Project = ({ project }) => {
  const { image_url, title, tags, theme, link, description, status } = project;
  const bg = useColorModeValue('white', 'blueGray.700');
  const colorHeading = useColorModeValue('blueGray.700', 'blueGray.200');
  const colorSubtitle = useColorModeValue('blueGray.600', 'blueGray.300');

  const statusMap = {
    active: 'green',
    dead: 'red',
    unmaintained: 'yellow',
  };
  return (
    <LinkBox
      as="article"
      shadow="sm"
      transition="all 0.2s ease-in-out"
      _hover={{ shadow: 'md' }}
      bg={bg}
      rounded="md"
      role="group"
    >
      <Flex
        height="32"
        alignItems="center"
        justifyContent="center"
        bg={`${theme}.100`}
        roundedTop="md"
      >
        <Image
          src={`/assets/img/${image_url}`}
          width="48"
          height="48"
          layout="fixed"
          placeholder="blur"
          blurDataURL={`/assets/img/${image_url}?w=10&q=10`}
          alt={title}
        />
      </Flex>
      <Stack p="4">
        <Flex alignItems="center">
          <Heading
            as="h3"
            fontSize="lg"
            color={colorHeading}
            fontWeight="semibold"
          >
            <LinkOverlay isExternal href={link}>
              {title}
            </LinkOverlay>
          </Heading>
          <Badge ml="2" colorScheme={statusMap[status.toLowerCase()]}>
            {status}
          </Badge>
        </Flex>
        <Box>
          <Wrap>
            {tags?.map((tag) => (
              <WrapItem key={tag}>
                <Badge
                  color={colorSubtitle}
                  textTransform="capitalize"
                  fontWeight="medium"
                >
                  {tag}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        <Text fontSize="sm" color={colorSubtitle}>
          {description}
        </Text>
      </Stack>
    </LinkBox>
  );
};

export default Project;
