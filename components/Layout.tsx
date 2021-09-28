import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Container } from '@chakra-ui/react'
import Header from './Header'

export default function Layout(props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Saheb Giri',
    description: `Student and Developer`,
    image: 'https://iamsahebgiri.vercel.app/assets/banner.jpg',
    type: 'website',
    ...customMeta,
  }
  return (
    <Box>
      <Head>
        <title>{`${meta.title} / Saheb Giri`}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://iamsahebgiri.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://iamsahebgiri.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Saheb Giri" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={`${meta.title} / Saheb Giri`} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iamsahebgiri" />
        <meta name="twitter:title" content={`${meta.title} / Saheb Giri`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <Container py={16} maxW="3xl" minH="100vh">
        <Box>{children}</Box>
      </Container>
    </Box>
  )
}
