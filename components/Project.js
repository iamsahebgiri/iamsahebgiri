import {
  Badge,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const Project = ({ project }) => {
  const { image_url, title, tags, theme, slug, description } = project;
  const bg = useColorModeValue('white', 'blueGray.700');
  const colorHeading = useColorModeValue('blueGray.700', 'blueGray.200');
  const colorSubtitle = useColorModeValue('blueGray.600', 'blueGray.300');
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
          boxSize="12"
          transition="all 0.2s ease-in-out"
          _groupHover={{ boxSize: '16' }}
        />
      </Flex>
      <Stack p="4" spacing="4">
        <Heading
          as="h3"
          fontSize="lg"
          color={colorHeading}
          fontWeight="semibold"
        >
          <LinkOverlay href={`project/${slug}/index.html`}>{title}</LinkOverlay>
          <Badge ml="1" colorScheme="red">
            Dead
          </Badge>
        </Heading>

        <Text fontSize="sm" color={colorSubtitle}>
          {description}
        </Text>
        <Text fontSize="xs" color={colorSubtitle}>
          May, 2020
        </Text>
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
      </Stack>
    </LinkBox>
  );
};

export default Project;
