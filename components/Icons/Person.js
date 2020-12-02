import { SvgIcon } from '@material-ui/core';

export default function PersonIcon(props) {
  return (
    <SvgIcon {...props}>
      <g data-name='Layer 2'>
        <g data-name='person'>
          <rect width='24' height='24' opacity='0' />
          <path d='M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z' />
          <path d='M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z' />
        </g>
      </g>
    </SvgIcon>
  );
}
