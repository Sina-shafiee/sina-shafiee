import { IconProps } from '../icons.type';

const ArrowBack = ({ ...props }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
      />
    </svg>
  );
};

export default ArrowBack;
