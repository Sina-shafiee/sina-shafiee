'use client';

import NextLink from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { capitalize } from '@/utils/utils';

type Props = {
  url: string;
  rel: string;
  title: string;
  textContent: string;
};

const NavbarLink = ({ rel, textContent, title, url }: Props) => {
  const activeSegment = usePathname();
  const isActiveSegment = activeSegment === url;

  return (
    <NextLink
      href={url}
      rel={rel}
      title={title}
      className={`relative tracking-wider text-sm pb-1 capitalize font-serif hover:before:scale-x-100 hover:before:origin-left before:w-full before:h-[2px]  before:transition-transform before:duration-300 before:bg-primary before:absolute before:left-0 before:bottom-0 ${
        isActiveSegment
          ? 'before:scale-x-100 before:origin-left'
          : 'before:scale-x-0 before:origin-right'
      }`}
    >
      {capitalize(textContent)}
    </NextLink>
  );
};

export default NavbarLink;
