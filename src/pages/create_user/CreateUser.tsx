import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import {
  ButtonsContainer,
  CreateButton,
  Input,
  InputContainer,
  LoginButton,
  CreationContainer,
  Logo,
} from './createstyles';
import GoogleLogo from '../../assets/google_logo.png';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const { handleLogin, login, createUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  return (
    <>
      {login ? (
        navigate('/')
      ) : (
        <CreationContainer>
          <InputContainer>
            <Logo src={GoogleLogo} />
            <span style={{ fontSize: '1.5rem' }}>Create Your Account</span>
            <span style={{ fontSize: '1.1rem' }}>to continue to Youtube</span>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <ButtonsContainer>
              <CreateButton onClick={() => navigate('/login')}>
                Sign in instead
              </CreateButton>
              <LoginButton
                onClick={e => {
                  createUser(name, email, password);
                }}
              >
                Sign up
              </LoginButton>
            </ButtonsContainer>
          </InputContainer>
        </CreationContainer>
      )}
    </>
  );
}

export default CreateUser;
