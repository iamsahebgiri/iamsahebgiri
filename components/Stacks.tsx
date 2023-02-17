import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import stacksData from 'data/stacksData.json';
import _ from 'underscore';

const StackDataDisplay = (props) => {
  const { data, title } = props;
  const headingColor = useColorModeValue('blueGray.700', 'blueGray.200');
  const descriptionColor = useColorModeValue('blueGray.600', 'blueGray.300');
  const pillColor = useColorModeValue('blueGray.100', 'blueGray.800');
  return (
    <Box>
      <Text fontWeight="semibold" color={headingColor}>
        {title}
      </Text>
      <Flex flexWrap="wrap" gap={2} mt={3}>
        {data.map((d) => (
          <Box key={d.name} px={2} py={1} bg={pillColor} rounded="md">
            <Text color={descriptionColor}>{d.name}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default function Timeline() {
  const bgColor = useColorModeValue('white', 'blueGray.800');

  return (
    <Box>
      <Stack spacing={4}>
        <Box shadow="sm" p="4" rounded="md" bgColor={bgColor} userSelect="none">
          <Stack spacing={4}>
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
