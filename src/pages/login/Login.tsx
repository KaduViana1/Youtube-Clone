import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import {
  ButtonsContainer,
  CreateButton,
  Forgot,
  Input,
  InputContainer,
  LoginButton,
  LoginContainer,
  Logo,
} from './loginstyles';
import GoogleLogo from '../../assets/google_logo.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { handleLogin, login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <>
      {login ? (
        navigate('/')
      ) : (
        <LoginContainer>
          <InputContainer>
            <Logo src={GoogleLogo} />
            <span style={{ fontSize: '1.5rem' }}>Sign in</span>
            <span style={{ fontSize: '1.1rem' }}>to continue to Youtube</span>
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
            <Forgot>Forgot Password?</Forgot>
            <ButtonsContainer>
              <CreateButton
                onClick={() => {
                  navigate('/create_user');
                }}
              >
                Create Account
              </CreateButton>
              <LoginButton
                onClick={e => {
                  handleLogin(email, password);
                }}
              >
                Sign-in
              </LoginButton>
            </ButtonsContainer>
          </InputContainer>
        </LoginContainer>
      )}
    </>
  );
}

export default Login;
