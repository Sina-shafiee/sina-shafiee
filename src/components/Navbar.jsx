import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CiDark, CiLight } from 'react-icons/ci';

import useAppContext from '../hooks/use-appContext';

import data from '../data';
import activeNavStyle from '../utils/activeLinkStyle';

const Navbar = () => {
  const {
    state: { theme },
    toggleTheme
  } = useAppContext();

  return (
    <Nav>
      <ul>
        {data.navbarLinks.map(({ url, title }) => {
          return (
            <li key={title}>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeNavStyle(theme) : null
                }
                to={url}
              >
                {title.toUpperCase()}
              </NavLink>
            </li>
          );
        })}
        <li onClick={toggleTheme}>
          {theme === 'dark' ? <CiLight /> : <CiDark />}
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: none;
  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
    display: block;
  }

  & > ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;

    & > li {
      padding: 7px 20px;
      font-weight: 700;
      font-size: 0.8em;

      &:hover {
        color: ${({ theme: { colors } }) => colors.primary};
      }
    }
    & > li:last-child {
      cursor: pointer;
      margin-left: 2rem;
      font-size: 1.6em;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
