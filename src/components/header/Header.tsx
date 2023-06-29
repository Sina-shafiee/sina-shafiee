import { performRequest } from '@/lib/datocms';
import { navbarQuery } from '@/graphql/queries';
import { NavbarQuery } from '@/types/graphql';

import Navbar from '../navbar';
import Hero from '../Hero';

const Header = async () => {
  const { navbar } = await performRequest<NavbarQuery>({ query: navbarQuery });

  if (!navbar) {
    throw new Error('Header - Fetch failed!');
  }

  return (
    <header>
      <Navbar links={navbar.navLinks} />
      <Hero
        firstName={navbar.userFirstName}
        lastName={navbar.userLastName}
        userJob={navbar.userJob}
      />
    </header>
  );
};

export default Header;
