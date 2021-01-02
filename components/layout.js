import SEO from './seo';

export default function Layout({ children, title, description, image }) {
  return (
    <div className='dark:bg-gray-900'>
      <SEO
        title={`${(title
          ? title
          : 'Home') + ' ・ Saheb Giri'}`}
        description={description}
        image={image}
      />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
    </div>
  );
}
