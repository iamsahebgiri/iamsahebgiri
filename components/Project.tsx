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
  Box
} from '@chakra-ui/react';

const Project = ({ project }) => {
  const { image, title, tags, theme, link, description, status } = project;
  const bg = useColorModeValue('white', 'gray.800');
  const colorHeading = useColorModeValue('gray.700', 'gray.200');
  const colorSubtitle = useColorModeValue('gray.600', 'gray.300');

  const statusMap = {
    active: 'green',
    wip: 'blue',
    dead: 'red',
    archived: 'yellow',
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
          src={`/assets/img/${image.url}`}
          height={image.height}
          width={image.width}
          layout="fixed"
          placeholder="blur"
          blurDataURL={`/assets/img/${image.url}?w=10&q=10`}
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
