import { Box, Flex, Stack, Tag, Text, useColorModeValue } from '@chakra-ui/react';
import stacksData from 'data/stacksData.json';
import _ from 'underscore';

const StackDataDisplay = (props) => {
  const { data, title } = props;
  const headingColor = useColorModeValue('gray.700', 'gray.200');
  return (
    <Box>
      <Text fontWeight="semibold" color={headingColor}>
        {title}
      </Text>
      <Flex flexWrap="wrap" gap={3} mt={3}>
        {data.map((d) => (
          // <Box key={d.name} px={3} py={1} bg={pillColor} rounded="lg">
          //   <Text fontSize="sm" color={descriptionColor}>{d.name}</Text>
          // </Box>
          <Tag size="md" key={d.name} variant="subtle" colorScheme="orange">
            {d.name}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};

export default function Timeline() {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box>
      <Stack spacing={4}>
        <Box shadow="sm" p="6" rounded="md" bgColor={bgColor} userSelect="none">
          <Stack spacing={6}>
            <StackDataDisplay data={stacksData.langauges} title="Languages" />
            <StackDataDisplay
              data={_.sortBy(stacksData['libs-frameworks'], 'name')}
              title="Frameworks and Libraries"
            />
            <StackDataDisplay
              data={_.sortBy(stacksData.tools, 'name')}
              title="Tools"
            />
            <StackDataDisplay
              data={_.sortBy(stacksData.others, 'name')}
              title="Others"
            />
            <StackDataDisplay
              data={_.sortBy(stacksData.platforms, 'name')}
              title="Platforms"
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
