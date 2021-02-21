import SEO from './seo';
import { Box } from '@chakra-ui/react';

export default function Layout({ children, title, description, image }) {
  return (
    <Box bgColor="gray.50">
      <SEO
        title={`${(title
          ? title
          : 'Home') + ' - Saheb Giri'}`}
        description={description}
        image={image}
      />
      <div>
        <main>{children}</main>
      </div>
    </Box>
  );
}
