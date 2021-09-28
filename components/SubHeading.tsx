import { chakra, useStyleConfig } from '@chakra-ui/react';

export default function SubHeading(props) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('SubHeading', { variant });

  return <chakra.p __css={styles} {...rest} />;
}
