import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') as string);
  const [userIcon, setUserIcon] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const getUser = (token: string) => {
    api
      .get('/user/get-user', { headers: { Authorization: token } })
      .then(({ data }) => {
        setUser(data.user);
        setUserIcon(data.user.name.slice(0, 1).toUpperCase());
        setLogin(true);
      })
      .catch(error => {
        console.log('User not authenticated', error);
      });
  };

  useEffect(() => {
    getUser(token);
  }, [token]);

  const handleLogin = (email: string, password: string) => {
    api
      .post('/user/log-in', { email, password })
      .then(({ data }) => {
        setLogin(true);
        localStorage.setItem('token', data.token);
        setToken(data.token);
        getUser(data.token);
      })
      .catch(error => {
        console.log('Unnable to login', error);
      });
  };

  const createUser = (name: string, email: string, password: string) => {
    api
      .post('/user/sign-up', { name, email, password })
      .then(() => handleLogin(email, password))
      .catch(error => console.error('Unable to create user', error));
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setUser({});
    setUserIcon('');
    navigate('/');
  };

  const changeTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
      document.body.style.backgroundColor = 'hsl(0, 0%, 5%)';
    } else {
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
      document.body.style.backgroundColor = 'white';
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setDarkMode(false);
      document.body.style.backgroundColor = 'white';
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = 'hsl(0, 0%, 5%)';
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        handleLogin,
        logOut,
        userIcon,
        createUser,
        darkMode,
        setDarkMode,
        changeTheme,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
