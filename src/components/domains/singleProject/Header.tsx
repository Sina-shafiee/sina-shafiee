import Link from 'next/link';
import ArrowLeft from '@/assets/icons/arrowLeft.svg';

const Header = () => {
  return (
    <header>
      <Link href={'/projects'} className='flex items-center gap-2 py-6'>
        <ArrowLeft className='w-6' />
        Go Back
      </Link>
    </header>
  );
};

export default Header;
