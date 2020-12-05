import { useState } from 'react';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemIcon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

import SunIcon from './Icons/Sun';
import PersonIcon from './Icons/Person';
import BookIcon from './Icons/Book';
import DocIcon from './Icons/Doc';
import BrowserIcon from './Icons/Browser';
import MoonIcon from './Icons/Moon';

const style = {
  // height: 300,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  paddingTop: 12,
  paddingBottom: 12,
};

const CustomLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className='text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1 transition ease-in-out duration-300'
    >
      {children}
    </a>
  );
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDrawer = () => setOpen((prevState) => !prevState);

  return (
    <>
      <div className='py-5 md:py-8 flex items-center justify-between'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <a>
              <svg
                width='34'
                height='34'
                viewBox='0 0 34 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='34'
                  height='34'
                  rx='17'
                  fill='url(#paint0_linear)'
                />
                <path
                  d='M15.11 28C14.994 27.9999 14.879 27.9796 14.77 27.94C14.5597 27.863 14.3814 27.7177 14.2635 27.5273C14.1457 27.3369 14.0951 27.1125 14.12 26.89L14.89 19.8H8.99998C8.81831 19.8003 8.64 19.7511 8.4842 19.6576C8.32839 19.5642 8.20098 19.4301 8.11565 19.2697C8.03032 19.1093 7.99029 18.9287 7.99986 18.7473C8.00944 18.5659 8.06825 18.3905 8.16998 18.24L16.06 6.44001C16.1848 6.25534 16.3677 6.11766 16.5796 6.04881C16.7916 5.97997 17.0205 5.98391 17.23 6.06001C17.4314 6.13477 17.6033 6.27239 17.7204 6.4525C17.8375 6.6326 17.8934 6.84562 17.88 7.06001L17.11 14.2H23C23.1817 14.1997 23.36 14.249 23.5158 14.3424C23.6716 14.4358 23.799 14.5699 23.8843 14.7303C23.9696 14.8907 24.0097 15.0713 24.0001 15.2527C23.9905 15.4341 23.9317 15.6095 23.83 15.76L15.94 27.56C15.8483 27.6957 15.7246 27.8068 15.5799 27.8835C15.4351 27.9603 15.2738 28.0003 15.11 28V28Z'
                  fill='black'
                  fillOpacity='0.2'
                />
                <path
                  d='M16.11 28C15.994 27.9999 15.879 27.9796 15.77 27.94C15.5597 27.863 15.3814 27.7177 15.2635 27.5273C15.1457 27.3369 15.0951 27.1125 15.12 26.89L15.89 19.8H9.99998C9.81831 19.8003 9.64 19.7511 9.4842 19.6576C9.32839 19.5642 9.20098 19.4301 9.11565 19.2697C9.03032 19.1093 8.99029 18.9287 8.99986 18.7473C9.00944 18.5659 9.06825 18.3905 9.16998 18.24L17.06 6.44001C17.1848 6.25534 17.3677 6.11766 17.5796 6.04881C17.7916 5.97997 18.0205 5.98391 18.23 6.06001C18.4314 6.13477 18.6033 6.27239 18.7204 6.4525C18.8375 6.6326 18.8934 6.84562 18.88 7.06001L18.11 14.2H24C24.1817 14.1997 24.36 14.249 24.5158 14.3424C24.6716 14.4358 24.799 14.5699 24.8843 14.7303C24.9696 14.8907 25.0097 15.0713 25.0001 15.2527C24.9905 15.4341 24.9317 15.6095 24.83 15.76L16.94 27.56C16.8483 27.6957 16.7246 27.8068 16.5799 27.8835C16.4351 27.9603 16.2738 28.0003 16.11 28V28Z'
                  fill='white'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear'
                    x1='17'
                    y1='0'
                    x2='17'
                    y2='34'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#FF8B00' />
                    <stop offset='1' stopColor='#FF5630' />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </Link>
          <div className='hidden md:block ml-12 space-x-10'>
            <Link href='/blog' passHref>
              <CustomLink>Blog</CustomLink>
            </Link>
            <Link href='/projects' passHref>
              <CustomLink>Projects</CustomLink>
            </Link>
            <Link href='/about' passHref>
              <CustomLink>About</CustomLink>
            </Link>
          </div>
        </div>
        <button
          className='focus:outline-none menuIcon md:hidden '
          onClick={toggleDrawer}
        >
          <div className='h-8 w-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='fill-current text-gray-800 dark:text-gray-200'
            >
              <g data-name='Layer 2'>
                <g data-name='menu'>
                  <rect
                    width='24'
                    height='24'
                    transform='rotate(180 12 12)'
                    opacity='0'
                  />
                  <rect x='3' y='11' width='18' height='2' rx='.95' ry='.95' />
                  <rect x='3' y='16' width='18' height='2' rx='.95' ry='.95' />
                  <rect x='3' y='6' width='18' height='2' rx='.95' ry='.95' />
                </g>
              </g>
            </svg>
          </div>
        </button>
        <div className='hidden md:flex items-center justify-center space-x-3'>
          {/* <a className='menuIcon ' href='#' alt='Resume'>
            <div className='h-5 w-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='fill-current text-gray-800 dark:text-gray-200'
              >
                <g data-name='Layer 2'>
                  <g data-name='file'>
                    <rect width='24' height='24' opacity='0' />
                    <path d='M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM17.65 9h-3.94a.79.79 0 0 1-.71-.85V4h.11zm-.21 11H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H11v4.15A2.79 2.79 0 0 0 13.71 11H18v8.5a.53.53 0 0 1-.56.5z' />
                  </g>
                </g>
              </svg>
            </div>
          </a> */}
          <button
            onClick={() => {
              document.body.classList.toggle('dark');
              setIsDarkMode((prevState) => !prevState);
            }}
            className='focus:outline-none'
          >
            <div className='h-5 w-5'>
              {isDarkMode ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='fill-current text-gray-800 dark:text-gray-200'
                >
                  <g data-name='Layer 2'>
                    <g data-name='moon'>
                      <rect width='24' height='24' opacity='0' />
                      <path d='M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z' />
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='fill-current text-gray-800 dark:text-gray-200'
                >
                  <g data-name='Layer 2'>
                    <g data-name='sun'>
                      <rect
                        width='24'
                        height='24'
                        transform='rotate(180 12 12)'
                        opacity='0'
                      />
                      <path d='M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z' />
                      <path d='M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z' />
                      <path d='M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z' />
                      <path d='M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z' />
                      <path d='M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z' />
                      <path d='M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z' />
                      <path d='M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z' />
                      <path d='M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z' />
                      <path d='M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z' />
                    </g>
                  </g>
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
      <Drawer
        anchor='bottom'
        open={open}
        PaperProps={{ style }}
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: 'rgba(9, 30, 66, 0.54)' },
          },
        }}
        onClose={toggleDrawer}
      >
        <Link href='/blog' passHref>
          <ListItem button component='a' onClick={toggleDrawer}>
            <ListItemIcon>
              <BookIcon style={{ color: '#42526E' }} />
            </ListItemIcon>
            <ListItemText>Blog</ListItemText>
          </ListItem>
        </Link>
        <Link href='/resume' passHref>
          <ListItem button component='a' onClick={toggleDrawer}>
            <ListItemIcon>
              <DocIcon style={{ color: '#42526E' }} />
            </ListItemIcon>
            <ListItemText>Resume</ListItemText>
          </ListItem>
        </Link>
        <Link href='/projects' passHref>
          <ListItem button component='a' onClick={toggleDrawer}>
            <ListItemIcon>
              <BrowserIcon style={{ color: '#42526E' }} />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItem>
        </Link>
        <Link href='/about' passHref>
          <ListItem button component='a' onClick={toggleDrawer}>
            <ListItemIcon>
              <PersonIcon style={{ color: '#42526E' }} />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
        </Link>
        <ListItem
          button
          onClick={() => {
            document.body.classList.toggle('dark');
            setIsDarkMode((prevState) => !prevState);
            toggleDrawer();
          }}
        >
          <ListItemIcon>
            {isDarkMode ? (
              <MoonIcon style={{ color: '#42526E' }} />
            ) : (
              <SunIcon style={{ color: '#42526E' }} />
            )}
          </ListItemIcon>
          <ListItemText>{isDarkMode ? 'Dark' : 'Light'} Mode</ListItemText>
        </ListItem>
      </Drawer>
    </>
  );
}
