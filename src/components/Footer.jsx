import styled from 'styled-components';
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

import { Button } from './styled/Button.styled';
import { Container } from './styled/Container.styled';
import { LogoContainer } from './styled/LogoContainer.styled';

import SubScribeBg from '../assets/images/footer-bg.png';

const Footer = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledFooter>
      <Container>
        <SubscribeContainer>
          <h2>Get Updates</h2>
          <p>Enter your email and receive updates</p>
          <Form onSubmit={handleFormSubmit}>
            <input
              onBlur={(e) => (e.target.placeholder = 'Your Email')}
              onFocus={(e) => (e.target.placeholder = '')}
              type='email'
              placeholder='Your Email'
            />
            <Button light>GET STARTED</Button>
          </Form>
        </SubscribeContainer>
        <FooterBottom>
          <LogoContainer primary>
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
          </LogoContainer>
          <h4>FOLLOW ME</h4>
          <SocialContainer>
            <FaTelegram />
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
          </SocialContainer>
          <CopyRight>Copyright ©2023 All rights reserved</CopyRight>
        </FooterBottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 1rem;
`;

const SubscribeContainer = styled.section`
  background-image: url(${SubScribeBg});
  min-height: 500px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fefefe;
  gap: 1rem;

  & > h2 {
    text-transform: uppercase;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
    flex-direction: row;
  }

  input[type='email'] {
    padding: 10px;
    min-width: 200px;
    width: 60%;
    max-width: 400px;
    background-color: transparent;
    color: #fefefe;
    border: 1px solid #fefefe;
    border-radius: 8px;
    outline: none;
    font-size: 1em;
  }
  input[type='email']::placeholder {
    color: #fefefe;
  }
`;

const FooterBottom = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > h4 {
    font-size: 0.9em;
    font-weight: 500;
    letter-spacing: 2px;
    margin-top: 1rem;
  }
`;

const SocialContainer = styled.section`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: #aaaaaa;
  font-size: 1.2em;

  & > svg {
    cursor: pointer;
    transition: all 0.2s ease-in;
  }
  & > svg:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const CopyRight = styled.p`
  margin-top: 3rem;
  font-size: 0.8em;
  font-weight: 300;
`;
