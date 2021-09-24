import dayjs from 'dayjs';
import _ from 'underscore';
import timelineData from 'data/timelineData.json';
import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import {
  HiPencil,
  HiBadgeCheck,
  HiCake,
  HiStar,
  HiAcademicCap,
  HiDeviceMobile,
  HiDesktopComputer,
} from 'react-icons/hi';

const Timeline = ({ timeline, isEnd }) => {
  const iconMap = {
    academic: HiAcademicCap,
    badge: HiBadgeCheck,
    cake: HiCake,
    desktop: HiDesktopComputer,
    mobile: HiDeviceMobile,
    pencil: HiPencil,
    star: HiStar,
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h="10"
          w="10"
          bgColor={`${timeline.color}.100`}
          rounded="full"
        >
          <Icon
            color={`${timeline.color}.700`}
            boxSize={5}
            as={iconMap[timeline.icon]}
          />
        </Flex>
        <Flex flexDirection="column">
          <Text m={0} fontWeight="medium">
            {timeline.title}
          </Text>
          <Text m={0} fontSize="sm" color="gray.600">
            {dayjs(timeline.date).format('MMMM D, YYYY')}
          </Text>
        </Flex>
      </HStack>

      <Flex my="2">
        <Box
          borderLeft={isEnd ? '0' : [0, 0, '1px']}
          borderLeftColor="#e2e8f0 !important"
          mx={[0, 0, '5']}
          py="4"
          pb="12"
          pl={[0, 0, '6']}
          width="full"
        >
          <Box shadow="sm" p="4" rounded="md" bgColor="white">
            <Text fontWeight="semibold">{timeline.cardTitle}</Text>
            <Text mt={2} color="gray.600">
              {timeline.cardDescription}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const TimelinePage = () => {
  const groupedTimelineData = _.chain(timelineData)
    .sortBy((timeline) => timeline.date)
    .reverse()
    .groupBy((timeline) =>
      dayjs(timeline.date).startOf('year').format('YYYY')
    )._wrapped;
  const groupedTimelineDataKeys = Object.keys(groupedTimelineData).reverse();

  return (
    <Box my={12}>
      {groupedTimelineDataKeys.map((timelineDataKey) => (
        <Box key={timelineDataKey}>
          <Flex alignItems="center" mb={8}>
            <Box pr={3}>
              <Text fontWeight="bold" fontSize="md">
                {timelineDataKey}
              </Text>
            </Box>
            <Box bgColor="blueGray.200" flex="1" h="1px" />
          </Flex>
          <Box>
            {groupedTimelineData[timelineDataKey].map((timeline, i) => (
              <Timeline
                key={timeline.id}
                timeline={timeline}
                isEnd={i === groupedTimelineData[timelineDataKey].length - 1}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TimelinePage;
