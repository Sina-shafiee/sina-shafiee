import Link from 'next/link';
import { NavbarProps } from './Navbar.types';

import styles from './Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = ({ links }: NavbarProps) => {
  const router = useRouter();

  const isLinkActive = (path: string): boolean => router.pathname === path;

  return (
    <nav>
      <ul className={styles.list}>
        {links.map((link) => {
          const { id, path, title } = link;
          return (
            <li key={id}>
              <Link
                className={styles.link}
                style={
                  isLinkActive(path)
                    ? { borderBottomWidth: '2px', borderBottomStyle: 'solid' }
                    : undefined
                }
                href={path}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
