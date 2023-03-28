import { useState } from 'react';
import {
  ButtonContainer,
  Container,
  LogoContainer,
  ButtonIcon,
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HeaderButton,
  LoginButton,
  ProfileIcon,
  SettingsButton,
  DropdownParent,
} from './styles';
import HamburgerIcon from '../../assets/hamburger.png';
import HamburgerIcon_D from '../../assets/hamburger_D.png';
import Logo from '../../assets/logo.png';
import Logo_D from '../../assets/logo_D.png';
import SearchIcon from '../../assets/search.png';
import SearchIcon_D from '../../assets/search_D.png';
import MicIcon from '../../assets/microfone.png';
import MicIcon_D from '../../assets/microfone_D.png';
import VideoIcon from '../../assets/video.png';
import VideoIcon_D from '../../assets/video_D.png';
import NotificationIcon from '../../assets/sino.png';
import NotificationIcon_D from '../../assets/sino_D.png';
import Profile from '../../assets/profile.png';
import Settings from '../../assets/dots.png';
import Settings_D from '../../assets/dots_D.png';
import { useContext, useEffect } from 'react';
import { OpenMenuContext } from '../../context/menuContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import Dropdown from '../dropdown/dropdown';
import CreateVideo from '../createVideo/CreateVideo';
import { VideosContext } from '../../context/videosContext';

type PropsTypes = {
  setSearchParams: React.Dispatch<React.SetStateAction<any>>;
  search: string;
};

function Header({ setSearchParams, search }: PropsTypes) {
  const { openMenu, setOpenMenu, dropdown, setDropdown, handleModal } =
    useContext(OpenMenuContext);
  const { login, userIcon, darkMode } = useContext(UserContext);
  const { setSearchInputValue } = useContext(VideosContext);
  const navigate = useNavigate();

  useEffect(() => {
    const closeDropdown = () => {
      setDropdown(false);
    };
    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <Container darkMode={darkMode}>
      <CreateVideo></CreateVideo>
      <LogoContainer>
        <ButtonContainer
          darkMode={darkMode}
          onClick={() => setOpenMenu(!openMenu)}
          margin="0 10px 0 0"
        >
          <ButtonIcon
            alt="hamburger"
            src={darkMode ? HamburgerIcon_D : HamburgerIcon}
          />
        </ButtonContainer>
        <img
          alt=""
          src={darkMode ? Logo_D : Logo}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', width: '100px' }}
        />
      </LogoContainer>
      <form
        onSubmit={e => {
          e.preventDefault();
          navigate('/results');
        }}
      >
        <SearchContainer>
          <SearchInputContainer darkMode={darkMode}>
            <SearchInput
              onChange={e => setSearchInputValue(e.target.value)}
              darkMode={darkMode}
              placeholder="Search"
            />
          </SearchInputContainer>
          <SearchButton type="submit" darkMode={darkMode}>
            <ButtonIcon alt="" src={darkMode ? SearchIcon_D : SearchIcon} />
          </SearchButton>
          <ButtonContainer
            contentText="Search with your voice"
            darkMode={darkMode}
            margin="0 0 0 10px"
          >
            <ButtonIcon alt="" src={darkMode ? MicIcon_D : MicIcon} />
          </ButtonContainer>
        </SearchContainer>
      </form>

      <HeaderButton>
        {login ? (
          <>
            <ButtonContainer
              contentText="Create"
              onClick={() => handleModal()}
              darkMode={darkMode}
              margin="0 0 0 auto"
            >
              <ButtonIcon alt="" src={darkMode ? VideoIcon_D : VideoIcon} />
            </ButtonContainer>
            <ButtonContainer
              contentText="Notifications"
              darkMode={darkMode}
              margin="0 0 0 10px"
            >
              <ButtonIcon
                alt="Notifications"
                src={darkMode ? NotificationIcon_D : NotificationIcon}
              />
            </ButtonContainer>
            <DropdownParent>
              <ButtonContainer
                darkMode={darkMode}
                margin="0 15px 0 0"
                onClick={e => {
                  e.stopPropagation();
                  setDropdown(!dropdown);
                }}
                style={{
                  backgroundColor: 'hsl(15, 100%, 60%)',
                  color: 'white',
                  fontSize: '1.2rem',
                }}
              >
                {userIcon}
              </ButtonContainer>
              <Dropdown />
            </DropdownParent>
          </>
        ) : (
          <>
            <DropdownParent>
              <SettingsButton
                darkMode={darkMode}
                onClick={e => {
                  e.stopPropagation();
                  setDropdown(!dropdown);
                }}
              >
                <ButtonIcon alt="" src={darkMode ? Settings_D : Settings} />
              </SettingsButton>
              <Dropdown />
            </DropdownParent>
            <LoginButton darkMode={darkMode} onClick={() => navigate('/login')}>
              <ProfileIcon src={Profile} />
              Sign in
            </LoginButton>
          </>
        )}
      </HeaderButton>
    </Container>
  );
}

export default Header;
