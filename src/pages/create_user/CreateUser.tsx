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
  const { login, createUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const navigate = useNavigate();

  return (
    <>
      {login ? (
        navigate('/')
      ) : (
        <CreationContainer>
          <form
            onSubmit={e => {
              e.preventDefault();
              createUser(formData.name, formData.email, formData.password);
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
                Create Your Account
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
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={e =>
                  setFormData(prev => ({ ...prev, name: e.target.value }))
                }
              />
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
              <ButtonsContainer>
                <LoginButton
                  type="submit"
                  onSubmit={e => {
                    e.preventDefault();
                    createUser(
                      formData.name,
                      formData.email,
                      formData.password
                    );
                  }}
                >
                  Sign up
                </LoginButton>
                <CreateButton onClick={() => navigate('/login')}>
                  Sign in instead
                </CreateButton>
              </ButtonsContainer>
            </InputContainer>
          </form>
        </CreationContainer>
      )}
    </>
  );
}

export default CreateUser;
