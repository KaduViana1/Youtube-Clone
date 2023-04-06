import { Route, Routes, useSearchParams } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import PageContainer from './components/pageContainer/PageContainer';
import { MenuContext } from './context/menuContext';
import { UserStorage } from './context/userContext';
import { VideoStorage } from './context/videosContext';
import CreateUser from './pages/create_user/CreateUser';
import Home from './pages/home/Home';

import Login from './pages/login/Login';
import Search from './pages/search/Search';

function App() {
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });
  const search = searchParams.get('search');

  return (
    <>
      <UserStorage>
        <VideoStorage>
          <MenuContext>
            <Header setSearchParams={setSearchParams} search={search} />
            <div
              style={{
                width: '100%',
                display: 'flex',
              }}
            >
              <Menu />
              <PageContainer>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/create_user" element={<CreateUser />} />
                  <Route
                    path="/results"
                    element={
                      <Search
                        search={search}
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                      />
                    }
                  />
                </Routes>
              </PageContainer>
            </div>
          </MenuContext>
        </VideoStorage>
      </UserStorage>
    </>
  );
}

export default App;
