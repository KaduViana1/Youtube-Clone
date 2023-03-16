import { useContext, useEffect } from 'react';
import { DropdownItem, DropdownMenu, Separator, Right } from './dropdownstyles';
import { OpenMenuContext } from '../../context/menuContext';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../../assets/logout.png';
import LoginIcon from '../../assets/login.png';
import ThemeIcon from '../../assets/theme.png';
import ArrowIcon from '../../assets/right.png';
import LanguageIcon from '../../assets/language.png';
import LocationIcon from '../../assets/location.png';
import RestrictedIcon from '../../assets/restricted.png';
import KeyboardIcon from '../../assets/keyboard.png';
import SettingsIcon from '../../assets/settings.png';
import HelpIcon from '../../assets/help.png';
import FeedbackIcon from '../../assets/feedback.png';

function Dropdown() {
  const { dropdown, setDropdown } = useContext(OpenMenuContext);
  const { logOut, login } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setDropdown(false);
  }, [login]);

  return (
    <>
      <DropdownMenu dropdown={dropdown}>
        <DropdownItem onClick={() => (login ? logOut() : navigate('/login'))}>
          <img src={login ? LogoutIcon : LoginIcon} alt="" />
          <span>{login ? 'Sign out' : 'Sign in'} </span>
        </DropdownItem>
        <Separator />
        <DropdownItem>
          <img src={ThemeIcon} alt="" />
          <span>Appearance: Light</span>
          <Right src={ArrowIcon} alt="" />
        </DropdownItem>
        <DropdownItem>
          <img src={LanguageIcon} alt="" />
          <span>Language: English</span>
          <Right src={ArrowIcon} alt="" />
        </DropdownItem>
        <DropdownItem>
          <img src={RestrictedIcon} alt="" />
          <span>Restrict Mode: Off</span>
          <Right src={ArrowIcon} alt="" />
        </DropdownItem>
        <DropdownItem>
          <img src={LocationIcon} alt="" />
          <span>Location: Brazil</span>
          <Right src={ArrowIcon} alt="" />
        </DropdownItem>
        <DropdownItem>
          <img src={KeyboardIcon} alt="" />
          <span>Keybord shortcuts</span>
        </DropdownItem>
        <Separator />
        <DropdownItem>
          <img src={SettingsIcon} alt="" />
          <span>Settings</span>
        </DropdownItem>
        <Separator />
        <DropdownItem>
          <img src={HelpIcon} alt="" />
          <span>Help</span>
        </DropdownItem>
        <DropdownItem>
          <img src={FeedbackIcon} alt="" />
          <span>Send feedback</span>
        </DropdownItem>
      </DropdownMenu>
    </>
  );
}

export default Dropdown;
