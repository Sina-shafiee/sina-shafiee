import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import data from '../data';
import Avatar from '../assets/images/avatar.svg';
import { CiLogout, CiDark, CiLight } from 'react-icons/ci';
import useAppContext from '../hooks/use-appContext';

const SideBar = () => {
  const {
    state: { theme },
    toggleTheme
  } = useAppContext();
  return (
    <Aside>
      <Logo>
        <img src={Avatar} alt='avatar' />
        <div>
          <h2>{'Sina Shafiee'}</h2>
          <p>{'sinashafiee@gmail.com'}</p>
        </div>
      </Logo>
      <List>
        {data.sideBarLinks.map(({ link, title, icon, id }) => {
          return (
            <li key={id}>
              <NavLink to={link}>
                <Text>
                  {icon} <span>{title}</span>
                </Text>
              </NavLink>
            </li>
          );
        })}
      </List>

      <Footer>
        <div>
          <button>
            <Text>
              <CiLogout /> <span>Logout</span>
            </Text>
          </button>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Text>
            <CiDark />{' '}
            <span style={{ textTransform: 'capitalize' }}>{theme} Mode</span>
            <Toggle colorTheme={theme}>
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
  background-color: ${({ theme: { colors } }) => colors.sideBarBg};
  display: flex;
  gap: 3rem;
  padding: 2rem 2rem 3rem 1rem;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  h2 {
    font-size: 0.9em;
    font-weight: 700;
    white-space: nowrap;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 0.8em;
  }
  img {
    width: 2.5em;
    fill: ${({ theme: { colors }, primary }) =>
      (primary && colors.primary) || colors.text};
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.8em;
  font-weight: 500;
  & > svg {
    font-size: 1.4em;
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const Footer = styled.div``;

const Toggle = styled.div`
  position: relative;
  font-size: 1.4em;
  width: 60px;
  border-radius: 8px;
  min-height: 1.5rem;
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
  }
`;
