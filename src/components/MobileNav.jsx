import { useEffect, useRef, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import data from '../data';
import useAppContext from '../hooks/use-appContext';
import activeNavStyle from '../utils/activeLinkStyle';

const MobileNav = () => {
  const NavRef = useRef(null);
  const {
    state: { theme, isNavOpen },
    toggleTheme,
    closeNav
  } = useAppContext();

  const handleClose = (e) => {
    if (NavRef.current.contains(e.target) || e.target.nodeName === 'svg') {
      return;
    }

    closeNav();
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClose, { capture: false });

    return () => {
      document.body.removeEventListener('click', handleClose, {
        capture: false
      });
    };
  }, []);

  return (
    <Nav isOpen={isNavOpen} ref={NavRef}>
      <List>
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
      </List>
      <ToggleContainer>
        <div>
          <Toggle dark={theme === 'dark' ? true : false} onClick={toggleTheme}>
            {theme === 'dark' ? <CiLight /> : <CiDark />}
          </Toggle>
        </div>
      </ToggleContainer>
    </Nav>
  );
};

export default MobileNav;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 50;
  transition: transform 0.4s ease-out;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  background-color: ${({ theme: { colors } }) => colors.bodyBg};

  min-height: 100vh;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  width: 70%;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 4rem 1rem;

  li {
    padding: 1rem 12px;
    font-weight: 700;
  }
`;
const ToggleContainer = styled.div`
  position: sticky;
  bottom: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 2em;
  margin-bottom: 1rem;

  & > div {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 2.5rem;
    overflow: hidden;
    border-radius: 8px;
    padding: 0.8rem;

    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bodyBg};
  }
`;

const Toggle = styled.div`
  position: absolute;
  cursor: pointer;
  top: 5px;
  left: 5px;
  transform: ${({ dark }) => (dark ? 'translateX(60px)' : null)};
  transition: all 0.4s ease-out;
`;
