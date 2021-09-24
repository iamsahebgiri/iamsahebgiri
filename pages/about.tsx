import Layout from 'components/Layout';
import { Avatar } from '@chakra-ui/avatar';
import Icon from '@chakra-ui/icon';
import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout';
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiCode,
  HiColorSwatch,
  HiLightBulb,
  HiLink,
} from 'react-icons/hi';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

const Pill = (props) => {
  const { label, icon, color } = props.pill;
  return (
    <Flex
      borderWidth="1px"
      borderColor="blueGray.200"
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
        color="blueGray.600"
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
  return (
    <a target="_blank" rel="noopener noreferer noreferrer" href={href}>
      <Circle size="10" _hover={{ bg: 'blueGray.200' }} color="blueGray.800">
        <Icon as={icon} w="4" h="4" />
      </Circle>
    </a>
  );
};

export default function AboutPage() {
  const pills = [
    {
      label: 'Student',
      icon: HiAcademicCap,
      color: 'indigo.500',
    },
    {
      label: 'Software Engineer',
      icon: HiCode,
      color: 'red.500',
    },
    {
      label: 'Competitive Programmer',
      icon: HiLightBulb,
      color: 'purple.500',
    },
    {
      label: 'Product Designer',
      icon: HiColorSwatch,
      color: 'green.500',
    },
  ];
  const socialLinks = [
    {
      site: 'LinkedIn',
      href: 'https://www.linkedin.com/in/iamsahebgiri',
      icon: SiLinkedin,
    },
    {
      site: 'Github',
      href: 'https://github.com/iamsahebgiri',
      icon: SiGithub,
    },
    {
      site: 'Instagram',
      href: 'https://instagram.com/iamsahebgiri',
      icon: SiInstagram,
    },
    {
      site: 'Linktree',
      href: 'https://linktr.ee/iamsahebgiri',
      icon: HiLink,
    },
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
          <Text fontSize="sm" color="blueGray.600">
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
          <Text fontSize="md" lineHeight="tall" color="blueGray.600">
            I'm a student and a developer, currently studying Computer Science
            at Institute of Technical Education and Research.
            Before that, I was studying in DAV Public School and SVS Residential School.
          </Text>
          {/* <Text fontSize="md" lineHeight="tall" color="blueGray.700">
            On the side, I co-host the Design Details podcast, a weekly
            conversation about design process and culture. I also tinker with
            side projects here and there, like Staff Design where I interviewed
            high-level individual contributors, or Spec.fm, a podcast network I
            co-founded in 2015.
          </Text>
          <Text fontSize="md" lineHeight="tall" color="blueGray.700">
            I love writing and tweeting about design, technology, and startups.
          </Text> */}
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
