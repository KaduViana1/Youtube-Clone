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
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  return (
    <>
      {login ? (
        navigate('/')
      ) : (
        <LoginContainer>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleLogin(formData.email, formData.password);
            }}
          >
            <InputContainer>
              <Logo src={GoogleLogo} />
              <span
                style={{
                  fontSize: '1.5rem',
                  backgroundColor: 'white',
                  color: 'black',
                }}
              >
                Sign in
              </span>
              <span
                style={{
                  fontSize: '1.1rem',
                  backgroundColor: 'white',
                  color: 'black',
                }}
              >
                to continue to Youtube
              </span>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e =>
                  setFormData(prev => ({ ...prev, email: e.target.value }))
                }
              />
              <Input
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={e =>
                  setFormData(prev => ({ ...prev, password: e.target.value }))
                }
              />
              <Forgot>Forgot Password?</Forgot>
              <ButtonsContainer>
                <LoginButton
                  type="submit"
                  onSubmit={e => {
                    e.preventDefault();
                    handleLogin(formData.email, formData.password);
                  }}
                >
                  Sign-in
                </LoginButton>
                <CreateButton
                  onClick={() => {
                    navigate('/create_user');
                  }}
                >
                  Create Account
                </CreateButton>
              </ButtonsContainer>
            </InputContainer>
          </form>
        </LoginContainer>
      )}
    </>
  );
}

export default Login;
