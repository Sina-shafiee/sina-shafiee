import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';
import Avatar from '../assets/images/avatar.svg';
import { CiLogout, CiDark, CiLight } from 'react-icons/ci';
import useAppContext from '../hooks/use-appContext';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

const SideBar = () => {
  const { data: user } = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(true);
  const listRef = useRef(null);
  const footerRef = useRef(null);

  const {
    state: { theme },
    toggleTheme
  } = useAppContext();

  const handleToggle = (e) => {
    if (
      listRef.current.contains(e.target) ||
      footerRef.current.contains(e.target)
    ) {
      return;
    }

    setOpen((prev) => !prev);
  };

  return (
    <Aside onClick={handleToggle}>
      <div>
        <Logo isOpen={open}>
          <img src={Avatar} alt='avatar' />
          <div>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        </Logo>
        <List ref={listRef}>
          {data.sideBarLinks.map(({ link, title, icon, id }) => {
            return (
              <Text isOpen={open} key={id}>
                {icon}
                <NavLink to={link}>
                  <LinkTitle isOpen={open}>{title}</LinkTitle>
                </NavLink>
              </Text>
            );
          })}
        </List>
      </div>

      <Footer ref={footerRef}>
        <div>
          <button>
            <Text as={'div'} isOpen={open}>
              <CiLogout /> <LinkTitle isOpen={open}>Logout</LinkTitle>
            </Text>
          </button>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Text as={'div'} isOpen={open}>
            <CiDark />{' '}
            <LinkTitle isOpen={open} style={{ textTransform: 'capitalize' }}>
              {theme} Mode
            </LinkTitle>
            <Toggle isOpen={open} colorTheme={theme}>
              <span onClick={toggleTheme}>
                {theme === 'dark' ? <CiLight /> : <CiDark />}
              </span>{' '}
            </Toggle>
          </Text>
        </div>
      </Footer>
    </Aside>
  );
};

export default SideBar;

const Aside = styled.aside`
  height: 100vh;
  max-width: 300px;
  position: sticky;
  top: 0;
  left: 0;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.sideBarBg};
  display: flex;
  gap: 3rem;
  padding: 2rem 0.5rem;
  flex-direction: column;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.sm}) {
    padding: 2rem 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  h2 {
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 700;
    white-space: nowrap;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 0.8em;
  }
  & > div {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
  img {
    width: ${({ isOpen }) => (isOpen ? '2.5rem' : '2rem')};
    fill: ${({ theme: { colors }, primary }) =>
      (primary && colors.primary) || colors.text};
  }
`;

const List = styled.ul`
  list-style: none;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  justify-self: flex-start;
  gap: 1rem;
`;

const Text = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.9em;
  font-weight: 500;
  svg {
    font-size: ${({ isOpen }) => (isOpen ? '1.4em' : '1.8em')};
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const LinkTitle = styled.span`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Footer = styled.div``;

const Toggle = styled.div`
  position: relative;
  font-size: 1.4em;
  width: 60px;
  border-radius: 8px;
  min-height: 1.5rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: ${({ theme: { colors } }) => colors.bodyBg};

  & span {
    position: absolute;
    left: 3px;
    cursor: pointer;
    top: -3px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.primary};
    transition: all 0.3s ease-out;
    transform: ${({ colorTheme }) =>
      colorTheme === 'dark' ? 'translateX(22px)' : 'translateX(0)'};
  }
  & span svg {
    color: #fefefe;
    font-size: 1em;
  }
`;
