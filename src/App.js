import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import { MenuContext, OpenMenuContext } from './context/menuContext';
import { UserStorage } from './context/userContext';
import CreateUser from './pages/create_user/CreateUser';
import History from './pages/history/History';
import Home from './pages/home/Home';
import Library from './pages/library/Library';
import Login from './pages/login/Login';

function App() {
  const { openMenu } = useContext(OpenMenuContext);

  return (
    <>
      <UserStorage>
        <MenuContext>
          <Header />
          <div style={{ width: '100%', display: 'flex' }}>
            <Menu />
            <div
              className="main"
              style={{
                padding: openMenu ? '0 50px' : '0 30px',
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/history" element={<History />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create_user" element={<CreateUser />} />
              </Routes>
            </div>
          </div>
        </MenuContext>
      </UserStorage>
    </>
  );
}

export default App;
