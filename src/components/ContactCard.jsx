import styled from 'styled-components';
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram
} from 'react-icons/ai';

const ContactCard = () => {
  return (
    <CardWrapper>
      <h2>GET IN TOUCH</h2>

      <section>
        <Section>
          <AiOutlineMail />
          <a href='mailto:alisinashafieezada@gmail.com'>
            alisinashafieezada@gmail.com
          </a>
        </Section>
        <Section>
          <AiOutlineGithub />
          <a href='https://github.com/sina-shafiee/'>
            https://github.com/sina-shafiee/
          </a>
        </Section>
        <Section>
          <AiFillLinkedin />
          <a href='https://www.linkedin.com/in/sina-shaf1ee/'>
            https://www.linkedin.com/in/sina-shaf1ee/
          </a>
        </Section>

        <Section>
          <AiOutlineInstagram />
          <a href='https://www.instagram.com/sina-shaf1ee/'>
            https://www.instagram.com/sina-shaf1ee/
          </a>
        </Section>
      </section>
    </CardWrapper>
  );
};

export default ContactCard;

const CardWrapper = styled.div`
  min-width: 100%;
  height: 100%;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;

  & > section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.lg}) {
    padding: 2rem;
    min-width: 50%;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  & > svg {
    font-size: 2rem;
  }
`;
