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
import Logo from '../../assets/logo.png';
import SeachIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import Profile from '../../assets/profile.png';
import Settings from '../../assets/dots.png';
import { useContext } from 'react';
import { OpenMenuContext } from '../../context/menuContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import Dropdown from '../dropdown/dropdown';

function Header() {
  const { openMenu, setOpenMenu, dropdown, setDropdown } =
    useContext(OpenMenuContext);
  const { login, userIcon } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer
          onClick={() => setOpenMenu(!openMenu)}
          margin="0 10px 0 0"
        >
          <ButtonIcon alt="hamburger" src={HamburgerIcon} />
        </ButtonContainer>
        <img
          alt=""
          src={Logo}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', width: '100px' }}
        />
      </LogoContainer>
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput placeholder="Search" />
        </SearchInputContainer>
        <SearchButton>
          <ButtonIcon alt="" src={SeachIcon} />
        </SearchButton>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={MicIcon} />
        </ButtonContainer>
      </SearchContainer>

      <HeaderButton>
        {login ? (
          <>
            <ButtonContainer margin="0 0 0 auto">
              <ButtonIcon alt="" src={VideoIcon} />
            </ButtonContainer>
            <ButtonContainer margin="0 0 0 10px">
              <ButtonIcon alt="" src={NotificationIcon} />
            </ButtonContainer>
            <DropdownParent>
              <ButtonContainer
                margin="0 15px 0 0"
                onClick={() => {
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
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                <ButtonIcon alt="" src={Settings} />
              </SettingsButton>
              <Dropdown />
            </DropdownParent>
            <LoginButton onClick={() => navigate('/login')}>
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
