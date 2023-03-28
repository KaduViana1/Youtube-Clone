import { useContext, useEffect } from 'react';
import { DropdownItem, DropdownMenu, Separator, Right } from './dropdownstyles';
import { OpenMenuContext } from '../../context/menuContext';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../../assets/logout.png';
import LogoutIcon_D from '../../assets/logout_D.png';
import LoginIcon from '../../assets/login.png';
import LoginIcon_D from '../../assets/login_D.png';
import ThemeIcon from '../../assets/theme.png';
import ThemeIcon_D from '../../assets/theme_D.png';
import ArrowIcon from '../../assets/right.png';
import ArrowIcon_D from '../../assets/right_D.png';
import LanguageIcon from '../../assets/language.png';
import LanguageIcon_D from '../../assets/language_D.svg';
import LocationIcon from '../../assets/location.png';
import LocationIcon_D from '../../assets/location_D.png';
import RestrictedIcon from '../../assets/restricted.png';
import RestrictedIcon_D from '../../assets/restricted_D.png';
import KeyboardIcon from '../../assets/keyboard.png';
import KeyboardIcon_D from '../../assets/keyboard_D.png';
import SettingsIcon from '../../assets/settings.png';
import SettingsIcon_D from '../../assets/settings_D.png';
import HelpIcon from '../../assets/help.png';
import HelpIcon_D from '../../assets/help_D.png';
import FeedbackIcon from '../../assets/feedback.png';
import FeedbackIcon_D from '../../assets/feedback_D.svg';

function Dropdown() {
  const { dropdown, setDropdown } = useContext(OpenMenuContext);
  const { logOut, login, darkMode, changeTheme } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setDropdown(false);
  }, [login]);

  return (
    <>
      <DropdownMenu darkMode={darkMode} dropdown={dropdown}>
        <DropdownItem
          darkMode={darkMode}
          onClick={() => (login ? logOut() : navigate('/login'))}
        >
          {darkMode ? (
            <img src={login ? LogoutIcon_D : LoginIcon_D} alt="" />
          ) : (
            <img src={login ? LogoutIcon : LoginIcon} alt="" />
          )}
          <span>{login ? 'Sign out' : 'Sign in'} </span>
        </DropdownItem>
        <Separator darkMode={darkMode} />
        <DropdownItem darkMode={darkMode} onClick={() => changeTheme()}>
          <img src={darkMode ? ThemeIcon_D : ThemeIcon} alt="" />
          <span>Appearance:{darkMode ? ' Light' : ' Dark'} </span>
          <Right src={darkMode ? ArrowIcon_D : ArrowIcon} alt="" />
        </DropdownItem>
        <DropdownItem darkMode={darkMode}>
          <img src={darkMode ? LanguageIcon_D : LanguageIcon} alt="" />
          <span>Language: English</span>
          <Right src={darkMode ? ArrowIcon_D : ArrowIcon} alt="" />
        </DropdownItem>
        <DropdownItem darkMode={darkMode}>
          <img src={darkMode ? RestrictedIcon_D : RestrictedIcon} alt="" />
          <span>Restrict Mode: Off</span>
          <Right src={darkMode ? ArrowIcon_D : ArrowIcon} alt="" />
        </DropdownItem>
        <DropdownItem darkMode={darkMode}>
          <img src={darkMode ? LocationIcon_D : LocationIcon} alt="" />
          <span>Location: Brazil</span>
          <Right src={darkMode ? ArrowIcon_D : ArrowIcon} alt="" />
        </DropdownItem>
        <DropdownItem darkMode={darkMode}>
          <img src={darkMode ? KeyboardIcon_D : KeyboardIcon} alt="" />
          <span>Keybord shortcuts</span>
        </DropdownItem>
        <Separator darkMode={darkMode} />
        <DropdownItem darkMode={darkMode}>
          <img src={darkMode ? SettingsIcon_D : SettingsIcon} alt="" />
          <span>Settings</span>
        </DropdownItem>
        <Separator darkMode={darkMode} />
        <DropdownItem darkMode={darkMode}>
          <img src={darkMode ? HelpIcon_D : HelpIcon} alt="" />
          <span>Help</span>
        </DropdownItem>
        <DropdownItem darkMode={darkMode}>
          <img src={darkMode ? FeedbackIcon_D : FeedbackIcon} alt="" />
          <span>Send feedback</span>
        </DropdownItem>
      </DropdownMenu>
    </>
  );
}

export default Dropdown;
