import { useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import _ from 'underscore';
import timelineData from 'data/timelineData.json';
import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
  useToken
} from '@chakra-ui/react';
import {
  HiPencil,
  HiBadgeCheck,
  HiCake,
  HiStar,
  HiAcademicCap,
  HiDeviceMobile,
  HiDesktopComputer
} from 'react-icons/hi';

const TimelineCard = ({ timeline, isEnd }) => {
  const iconMap = {
    academic: HiAcademicCap,
    badge: HiBadgeCheck,
    cake: HiCake,
    desktop: HiDesktopComputer,
    mobile: HiDeviceMobile,
    pencil: HiPencil,
    star: HiStar
  };

  const cardBgColor = useColorModeValue('white', 'gray.800');
  const borderLeftColor = useColorModeValue('gray.200', 'gray.700');
  const subtleColor = useColorModeValue('gray.600', 'gray.400');

  const exactCardBgColor = useToken('colors', cardBgColor);
  const exactThemeColor = useToken(
    'colors',
    useColorModeValue(`${timeline.color}.100`, `${timeline.color}.800`)
  );

  const timelineCardRef = useRef(null);
  const { colorMode } = useColorMode();

  function mouseMoveHandler(e) {
    const { left, top } = timelineCardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    timelineCardRef.current.style.background = `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, ${exactThemeColor}, ${exactCardBgColor} 75%) no-repeat`;
  }

  useEffect(() => {
    timelineCardRef.current.style.background = exactCardBgColor;
  }, [colorMode, exactCardBgColor]);

  function mouseLeaveHandler(e) {
    timelineCardRef.current.style.background = exactCardBgColor;
  }

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
        <Flex flex={1} flexDirection="column">
          <Text m={0} fontWeight="medium">
            {timeline.title}
          </Text>
          <Text m={0} fontSize="sm" color={subtleColor}>
            {dayjs(timeline.date).format('MMMM D, YYYY')}
          </Text>
        </Flex>
      </HStack>

      <Flex my="2">
        <Box
          borderLeftWidth={isEnd ? '0' : [0, 0, '1px']}
          borderLeftColor={borderLeftColor}
          mx={[0, 0, '5']}
          py="4"
          pb="12"
          pl={[0, 0, '6']}
          width="full"
        >
          <Box
            shadow="sm"
            p="4"
            rounded="md"
            bgColor={cardBgColor}
            userSelect="none"
            ref={timelineCardRef}
            onMouseMove={mouseMoveHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Text fontWeight="semibold">{timeline.cardTitle}</Text>
            <Text mt={2} color={subtleColor}>
              {timeline.cardDescription}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const TimelinePage = () => {
  const hrColor = useColorModeValue('gray.200', 'gray.700');

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
            <Box bgColor={hrColor} flex="1" h="1px" />
          </Flex>
          <Box>
            {groupedTimelineData[timelineDataKey].map((timeline, i) => (
              <TimelineCard
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
