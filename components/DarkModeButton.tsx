import {
  Box,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { HiMoon, HiSun } from 'react-icons/hi';

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  return (
    <IconButton
      onClick={toggleColorMode}
      rounded="full"
      variant="ghost"
      aria-label="Toggle dark mode"
      icon={<Icon h="5" w="5" as={colorMode === 'light' ? HiMoon : HiSun} />}
      _focus={{ boxShadow: 'none' }}
      shadow="sm"
      height="auto"
      p={3}
      bg={bgColor}
    />
  );
};

export default DarkModeButton;
