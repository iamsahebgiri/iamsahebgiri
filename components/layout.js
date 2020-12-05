import Footer from '../components/footer';
import Meta from '../components/meta';

export default function Layout({ children }) {
  return (
    <div className='dark:bg-gray-900'>
      <Meta />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
