import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import styled, { keyframes } from 'styled-components';
import { Button } from './styled/Button.styled';
// import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { ImSpinner8 } from 'react-icons/im';

const ContactForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const onCaptchaChange = () => {
    setDisabled((prev) => !prev);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!disabled) {
      return emailjs
        .sendForm(
          'service_55kdulk',
          'template_n9j115p',
          form.current,
          'tnbHFnuGvWt7idUc-'
        )
        .then(
          () => {
            setLoading(false);
            toast.success('Message sended!');
            e.reset();
          },
          () => {
            setLoading(false);
            toast.error('Sorry try again later..');
          }
        );
    }

    setLoading(false);
    toast.error('Please check the captcha');
  };
  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <InputControl>
        <input
          required
          minLength={4}
          maxLength={20}
          type='text'
          placeholder='Your Name'
          id='user_name'
          name='user_name'
        />
      </InputControl>
      <InputControl>
        <input
          placeholder='Your email'
          type='email'
          id='user_email'
          name='user_email'
          required
        />
      </InputControl>
      <InputControl>
        <textarea
          required
          minLength={20}
          maxLength={100}
          placeholder='Your message'
          name='message'
          id='message'
        ></textarea>
      </InputControl>
      {/* <ReCAPTCHA
        sitekey='6LfUvTMkAAAAAK-SqHA6Og6EvOshdtpqSBNyF-nQ'
        onChange={onCaptchaChange}
      /> */}

      <SubmitBtn primary type='submit'>
        {loading ? (
          <Spinner>
            <ImSpinner8 />
          </Spinner>
        ) : (
          'Send Message'
        )}
      </SubmitBtn>
    </StyledForm>
  );
};

export default ContactForm;

const SpinAnimation = keyframes`
 0% { transform: rotate(0deg); }
 50% {transform: rotate(180deg);}
 100% { transform: rotate(360deg); }
`;

const StyledForm = styled.form`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.lg}) {
    min-width: 50%;
  }
`;

const InputControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > label {
    font-size: 1.1em;
  }
  & > input {
    padding: 0.8rem;
    border-radius: 4px;
    border: 1px solid black;
    font-size: 0.9em;
  }

  & textarea {
    font: inherit;
    resize: vertical;
    border-radius: 4px;
    border: 1px solid black;
    padding: 0.8rem;
    min-height: 100px;
    max-height: 200px;
  }
`;

const SubmitBtn = styled(Button)`
  margin-top: 1rem;
`;

export const Spinner = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.26em;
  justify-content: center;
  animation: ${SpinAnimation} 1s linear infinite;
`;
