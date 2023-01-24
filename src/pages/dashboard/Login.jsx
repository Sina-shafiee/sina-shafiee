import { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../components/styled/Container.styled';
import { useLoginMutation } from '../../store/auth/authApi';
import { useNavigate } from 'react-router';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Button } from '../../components/styled/Button.styled';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [login, result] = useLoginMutation();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleInputChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ email, password });
    navigate('/dashboard');
  };

  return (
    <Container>
      <StyledForm
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <InputControl>
          <label htmlFor='email'>Enter your email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
        </InputControl>
        <InputControl>
          <label htmlFor='email'>Enter your email</label>
          <PassInput>
            <input
              type={showPass ? 'text' : 'password'}
              name='password'
              value={password}
              onChange={handleInputChange}
            />
            <button type='button' onClick={() => setShowPass((prev) => !prev)}>
              {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </PassInput>
        </InputControl>
        <SubmitBtn primary type='submit'>
          Login
        </SubmitBtn>
      </StyledForm>
    </Container>
  );
};

export default Login;

export const StyledForm = styled.form`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 50%;
  margin: 0 auto;
  min-width: 300px;
  max-width: 600px;
`;
const InputControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & > input {
    padding: 0.6rem;
    border-radius: 4px;
  }
`;

const PassInput = styled.div`
  width: 100%;
  position: relative;

  & > button > svg {
    position: absolute;
    right: 8px;
    top: 0.7rem;
    color: #070707;
    font-size: 1.2em;
  }

  & > input {
    width: 100%;
    padding: 0.6rem;
    border-radius: 4px;
  }
`;

const SubmitBtn = styled(Button)`
  width: 100%;
  margin-top: 0.5rem;
`;
