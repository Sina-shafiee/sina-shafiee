import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLoginMutation } from '../store/auth/authApi';
import { useNavigate } from 'react-router';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { ImSpinner8 } from 'react-icons/im';
import { Button } from '../components/styled/Button.styled';
import { useEffect } from 'react';
import { addUser } from '../store/auth/authSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [login, result] = useLoginMutation();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password } = formData;

  const handleInputChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };

  useEffect(() => {
    if (result.isError) {
      toast.error(result.error.data.message);
    }

    if (result.data && result.isSuccess) {
      toast.success('Logged in 🤗');
      dispatch(addUser(result.data));

      navigate('/dashboard');
    }
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Provide valid Credential');
      return;
    }

    login({ email, password });
  };

  return (
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
          onBlur={(e) => (e.target.placeholder = 'Your email')}
          onFocus={(e) => (e.target.placeholder = '')}
          placeholder='Your email'
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
            onBlur={(e) => (e.target.placeholder = 'Your password')}
            onFocus={(e) => (e.target.placeholder = '')}
            id='password'
            placeholder='Your password'
            onChange={handleInputChange}
          />
          <button type='button' onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </PassInput>
      </InputControl>
      <SubmitBtn primary type='submit'>
        {result.isLoading ? (
          <Spinner>
            <ImSpinner8 />
          </Spinner>
        ) : (
          'Login'
        )}
      </SubmitBtn>
    </StyledForm>
  );
};

export default Login;

const SpinAnimation = keyframes`
 0% { transform: rotate(0deg); }
 50% {transform: rotate(180deg);}
 100% { transform: rotate(360deg); }
`;

export const StyledForm = styled.form`
  min-height: 80vh;
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 50%;
  margin: 0 auto;
  min-width: 300px;
  max-width: 600px;
`;
export const InputControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > input {
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 0.9em;
  }
`;

export const PassInput = styled.div`
  width: 100%;
  position: relative;

  & > button > svg {
    position: absolute;
    right: 8px;
    top: 0.8rem;
    color: #070707;
    font-size: 1.2em;
  }

  & > input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 0.9em;
  }
`;

export const SubmitBtn = styled(Button)`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  height: 2.7rem;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.26em;
  justify-content: center;
  animation: ${SpinAnimation} 1s linear infinite;
`;
