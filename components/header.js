import { useState } from 'react';
import Link from 'next/link';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Drawer from '@material-ui/core/Drawer';

const style = {
  height: 300,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  paddingTop: 12,
  paddingBottom: 12,
};
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='my-5 flex items-center justify-between'>
        <Link href='/'>
          <svg
            width='34'
            height='34'
            viewBox='0 0 34 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='34' height='34' rx='17' fill='url(#paint0_linear)' />
            <path
              d='M16.11 28C15.994 27.9998 15.879 27.9795 15.77 27.94C15.5597 27.863 15.3814 27.7177 15.2635 27.5273C15.1457 27.3369 15.0951 27.1125 15.12 26.89L15.89 19.8H9.99998C9.81831 19.8002 9.64 19.751 9.4842 19.6576C9.32839 19.5642 9.20098 19.4301 9.11565 19.2697C9.03032 19.1093 8.99029 18.9287 8.99986 18.7473C9.00944 18.5659 9.06825 18.3905 9.16998 18.24L17.06 6.43998C17.1848 6.25531 17.3677 6.11763 17.5796 6.04878C17.7916 5.97994 18.0205 5.98388 18.23 6.05997C18.4314 6.13474 18.6033 6.27236 18.7204 6.45246C18.8375 6.63257 18.8934 6.84559 18.88 7.05998L18.11 14.2H24C24.1817 14.1997 24.36 14.2489 24.5158 14.3424C24.6716 14.4358 24.799 14.5699 24.8843 14.7303C24.9696 14.8906 25.0097 15.0712 25.0001 15.2527C24.9905 15.4341 24.9317 15.6095 24.83 15.76L16.94 27.56C16.8483 27.6957 16.7246 27.8068 16.5799 27.8835C16.4351 27.9602 16.2738 28.0002 16.11 28Z'
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
        </Link>
        <button
          className='focus:outline-none menuIcon'
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <div className='h-8 w-8'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
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
      </div>
      <SwipeableDrawer
        anchor='bottom'
        open={open}
        PaperProps={{ style }}
        ModalProps={{
          BackdropProps: {
            style: { backgroundColor: 'rgba(9, 30, 66, 0.54)' },
          },
        }}
        onOpen={() => setOpen((prevState) => !prevState)}
        onClose={() => setOpen((prevState) => !prevState)}
      ></SwipeableDrawer>
    </>
  );
}
