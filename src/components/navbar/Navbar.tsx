import NavbarLink from '../ui/Link';

type NavLinkRecord = {
  __typename?: string;
  rel: string;
  title: string;
  url: string;
  textContent: string;
};

type Props = {
  links: Array<NavLinkRecord>;
};

const Navbar = ({ links }: Props) => {
  return (
    <nav>
      <ul className='flex items-center py-6 gap-6'>
        {links.map((link) => {
          const { title, url, rel, textContent } = link;
          return (
            <li
              key={title}
              className='text-sm smallTablet:text-base font-light'
            >
              <NavbarLink
                rel={rel}
                textContent={textContent}
                title={title}
                url={url}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
