import Layout from 'components/Layout';
import {
  Avatar,
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiCode,
  HiColorSwatch,
  HiLightBulb,
  HiLink
} from 'react-icons/hi';
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiLeetcode,
  SiTwitter
} from 'react-icons/si';

const Pill = (props) => {
  const { label, icon, color } = props.pill;
  const pillColor = useColorModeValue('blurGray.200', 'blueGray.800');
  return (
    <Flex
      borderWidth="1px"
      borderColor={pillColor}
      role="group"
      _hover={{ bg: 'blueGray.100', cursor: 'pointer' }}
      py="2"
      px="3"
      alignItems="center"
      rounded="full"
      transition="all 0.3s ease-in-out"
    >
      <Icon as={icon} w="5" h="5" color={color} mr="2" />
      <Text
        fontWeight="semibold"
        fontSize="sm"
        _groupHover={{ color: color }}
        transition="all 0.3s ease-in-out"
      >
        {label}
      </Text>
    </Flex>
  );
};

const SocialLink = ({ socialLink }) => {
  const { href, icon } = socialLink;
  const iconColor = useColorModeValue('blueGray.800', 'blueGray.300');
  const iconHoverColor = useColorModeValue('blueGray.200', 'blueGray.800');
  return (
    <a target="_blank" rel="noopener noreferer noreferrer" href={href}>
      <Circle size="10" _hover={{ bg: iconHoverColor }} color={iconColor}>
        <Icon as={icon} w="4" h="4" />
      </Circle>
    </a>
  );
};

export default function AboutPage() {
  const headingColor = useColorModeValue('blueGray.700', 'blueGray.200');
  const descriptionColor = useColorModeValue('blueGray.600', 'blueGray.300');
  const pills = [
    {
      label: 'Student',
      icon: HiAcademicCap,
      color: 'indigo.500'
    },
    {
      label: 'Developer',
      icon: HiCode,
      color: 'red.500'
    },
    {
      label: 'Tinkerer',
      icon: HiLightBulb,
      color: 'purple.500'
    }
    // {
    //   label: 'Competitive Programmer',
    //   icon: HiLightBulb,
    //   color: 'purple.500'
    // },
    // {
    //   label: 'Product Designer',
    //   icon: HiColorSwatch,
    //   color: 'green.500'
    // }
  ];
  const socialLinks = [
    {
      site: 'LinkedIn',
      href: 'https://www.linkedin.com/in/iamsahebgiri',
      icon: SiLinkedin
    },
    {
      site: 'Github',
      href: 'https://github.com/iamsahebgiri',
      icon: SiGithub
    },
    {
      site: 'LeetCode',
      href: 'https://leetcode.com/iamsahebgiri',
      icon: SiLeetcode
    },
    {
      site: 'Twitter',
      href: 'https://twitter.com/iamsahebgiri',
      icon: SiTwitter
    },
    {
      site: 'Linktree',
      href: 'https://linktr.ee/iamsahebgiri',
      icon: HiLink
    }
  ];
  return (
    <Layout title="About" description="Code less, think more.">
      <Box pt="12">
        <Avatar size="2xl" name="Saheb Giri" src="/assets/iamsahebgiri.jpg" />

        <Flex alignItems="center" mt="4">
          <Heading fontSize="2xl">Saheb Giri</Heading>
          <Icon as={HiBadgeCheck} w="6" h="6" ml="2" color="messenger.500" />
        </Flex>
        <Flex alignItems="center" mt="1">
          <Text fontSize="sm" color={headingColor}>
            @iamsahebgiri &#183; CSIT Student, SOA &#183; he/him &#183;
            Bhubaneswar
          </Text>
        </Flex>
        <Flex mt="6" w={['auto', 'lg']}>
          <Wrap>
            {pills.map((pill) => (
              <WrapItem key={pill.label}>
                <Pill pill={pill} />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
        <Stack mt="8">
          <Text fontSize="md" lineHeight="tall" color={descriptionColor}>
            Hey, I'm Saheb. I'm a student and a developer.
          </Text>
          <Text fontSize="md" lineHeight="tall" color={descriptionColor}>
            I'm currently studying Computer Science at Institute of Technical
            Education and Research.
          </Text>
          <Text fontSize="md" lineHeight="tall" color={descriptionColor}>
            I take joy in solving complex problems with elegant solutions by
            simplifying and distilling core concepts.
          </Text>
          <Text fontSize="md" lineHeight="tall" color={descriptionColor}>
            I'm proficient in full stack development and DevOps in cloud
            environments with a track record of owning the full cycle from idea
            to production and owning operating services using many of the SRE
            principles.
          </Text>
          <Text fontSize="md" lineHeight="tall" color={descriptionColor}>
            I'm an effective communicator and thrive in cross-functional teams.
            I enjoy learning and see it as an integral part of team work. I
            combine those skills with teamwork and a strong understanding of the
            organizational structure to work efficiently and pragmatically in
            alignment with business goals.
          </Text>
          <Text fontSize="md" lineHeight="tall" color={descriptionColor}>
            I take an active interest in technology, arts, business, and how
            their conflation impacts society.
          </Text>
          <Text fontSize="md" lineHeight="tall" color={descriptionColor}>
            I'm a proponent of the open-source software and have contributed to
            several projects in addition to maintaining several open-source
            projects.
          </Text>
          <Text fontSize="md" lineHeight="tall" color={descriptionColor}>
            When I'm not working in front of screen, I enjoy cooking, reading
            and nature 🌳⛵️⛰.
          </Text>
        </Stack>
        <HStack spacing="6" mt="6">
          {socialLinks.map((socialLink) => (
            <SocialLink key={socialLink.site} socialLink={socialLink} />
          ))}
        </HStack>
      </Box>
    </Layout>
  );
}
