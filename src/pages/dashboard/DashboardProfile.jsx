import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Avatar from '../../assets/images/avatar.svg';
import { Button } from '../../components/styled/Button.styled';

const DashboardProfile = () => {
  const user = useSelector((state) => state.user.user.data);
  const [formData, setFormData] = useState({
    email: user.email || '',
    name: user.name || ''
  });

  const { email, name } = formData;

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <StyledProfile>
      <img src={Avatar} alt='avatar' />
      <form>
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

        <Button secondary type='submit'>
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
