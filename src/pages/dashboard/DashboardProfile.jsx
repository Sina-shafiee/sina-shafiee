import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Avatar from '../../assets/images/avatar.svg';
import { Button } from '../../components/styled/Button.styled';
import { useUpdateUserMutation } from '../../store/auth/authApi';
import { updateUser } from '../../store/auth/authSlice';

const DashboardProfile = () => {
  const { data: user, token } = useSelector((state) => state.user.user);
  const [formData, setFormData] = useState({
    email: user.email || '',
    name: user.name || ''
  });

  const dispatch = useDispatch();

  const { email, name } = formData;
  const [update, result] = useUpdateUserMutation();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && name.length > 5) {
      update({ name, token });
      return;
    }

    toast.error('Provide a valid name');
  };

  useEffect(() => {
    if (result.isError) {
      toast.error(result?.error?.data || 'Updating user failed');
    }

    if (result.isSuccess && result.data) {
      dispatch(updateUser(result.data.data));
      toast.success('Updated Successfully');
    }
  }, [result]);

  return (
    <StyledProfile>
      <img src={Avatar} alt='avatar' />
      <form onSubmit={handleSubmit}>
        <InputControl>
          <label htmlFor='email'>Your name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={handleInputChange}
          />
        </InputControl>
        <InputControl>
          <label htmlFor='email'>Your email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            placeholder='Your email'
            disabled
            onChange={handleInputChange}
          />
        </InputControl>

        <Button disabled={result.isLoading} secondary type='submit'>
          Save Changes
        </Button>
      </form>
    </StyledProfile>
  );
};

export default DashboardProfile;

const StyledProfile = styled.section`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  /* padding: 1rem; */
  grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
  img {
    width: 60%;
    align-self: center;
    justify-self: center;
    margin-left: -3rem;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
    /* 
    @media (min-width: ${({ theme: { breakPoints } }) => breakPoints.md}) {
      padding: 1rem;
    } */

    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export const InputControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > input {
    padding: 0.6rem;
    border-radius: 4px;
    font-size: 0.9em;
  }
  & > input:disabled {
    background-color: aliceblue;
  }
`;
