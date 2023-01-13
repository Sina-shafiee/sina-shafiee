import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import Navbar from './Navbar';
import MobileNav from './MobileNav';

import { Container } from './styled/Container.styled';
import { Flex } from './styled/flex.styled';
import { Button } from './styled/Button.styled';
import useAppContext from '../hooks/use-appContext';

const Header = () => {
  const { openNav } = useAppContext();
  const [showBackground, setShowBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader bg={showBackground}>
      <Container>
        <Flex align='center' justify='space-between'>
          <Logo>
            <svg
              viewBox='0 0 41 41'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='M20 0.5C9 0.5 0 9.5 0 20.5C0 31.5 9 40.5 20 40.5C31 40.5 40 31.5 40 20.5C40 9.5 31 0.5 20 0.5ZM11.8 28C9.6 28 7.8 26.2 7.8 24C7.8 21.8 9.6 20 11.8 20C14 20 15.8 21.8 15.8 24C15.8 26.2 14 28 11.8 28ZM28.5 26.9C26.7 28 24.3 27.3 23.2 25.5L17.6 15.8C16.5 14 17.2 11.6 19 10.5C20.8 9.4 23.2 10.1 24.3 11.9L29.9 21.6C31 23.5 30.3 25.9 28.5 26.9Z' />
              </g>
            </svg>
            <h1>ALI SINA</h1>
          </Logo>
          <Navbar />
          <ToggleBtn
            onClick={(e) => {
              openNav();
              e.stopPropagation();
            }}
          >
            <HiOutlineMenuAlt3 />
          </ToggleBtn>
          <MobileNav />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin-top: 1em;
  padding: 0.5rem 0;
  transition: background 0.4s linear;

  ${({ bg }) =>
    bg &&
    css`
      position: sticky;
      top: 0;
      left: 0;
      background-color: ${({ theme: { colors } }) => colors.bodyBg};
      box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
    `}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h1 {
    font-size: 1.2em;
    font-weight: 700;
    white-space: nowrap;
  }
  svg {
    width: 1.6em;
    fill: ${({ theme: { colors } }) => colors.text};
  }
`;

const ToggleBtn = styled(Button)`
  font-size: 1.7em;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
    display: none;
  }
`;
