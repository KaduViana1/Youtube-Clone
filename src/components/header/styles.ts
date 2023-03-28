import styled from 'styled-components';

export const Container = styled.header<{ darkMode: boolean }>`
  width: 100%;
  height: 55px;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{
  contentText?: string;
  margin?: string;
  darkMode: boolean;
}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => (margin ? margin : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :after {
    content: '${({ contentText }) => (contentText ? contentText : '')}';
    position: absolute;
    bottom: -40px;
    padding: 1px 10px;
    width: fit-content;
    min-width: fit-content;
    height: 30px;
    background-color: rgba(77, 77, 77, 0.8);

    display: none;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: white;
  }

  :hover {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 15%)' : '#f2f2f2'};
  }

  :hover::after {
    display: ${({ contentText }) => (contentText ? 'flex' : 'none')};
  }
`;

export const ButtonIcon = styled.img`
  width: 23px;
`;

export const SearchContainer = styled.div`
  display: flex;
`;
export const SearchInputContainer = styled.div<{ darkMode: boolean }>`
  width: 500px;
  height: 40px;
  border: ${({ darkMode }) =>
    darkMode ? '2px solid hsl(0, 0%, 15%)' : '1px solid #d3d3d3'};
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input<{ darkMode: boolean }>`
  width: 100%;
  height: 25px;
  outline: transparent;
  border: none;
  font-size: 1rem;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
`;

export const SearchButton = styled.button<{ darkMode: boolean }>`
  border-radius: 0 40px 40px 0;
  height: 40px;
  width: 70px;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 15%)' : '#f8f8f8'};
  border: ${({ darkMode }) =>
    darkMode ? '1px solid hsl(0, 0%, 15%)' : '1px solid #d3d3d3'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ::after {
    content: 'Search';
    position: absolute;
    bottom: -40px;
    padding: 2px 10px;
    min-width: fit-content;
    height: 30px;
    background-color: rgba(77, 77, 77, 0.9);

    display: none;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    color: white;
  }

  :hover::after {
    display: flex;
  }
`;

export const HeaderButton = styled.div`
  width: 200px;
  display: flex;
`;

export const LoginButton = styled.button<{ darkMode: boolean }>`
  border-radius: 20px;
  min-width: 100px;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  border: ${({ darkMode }) =>
    darkMode ? '1px solid hsl(0, 0%, 15%)' : '1px solid #d3d3d3'};
  padding: 0px 10px;
  font-size: 0.9rem;
  color: hsl(240, 100%, 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;

  :hover,
  :focus {
    background-color: ${({ darkMode }) =>
      darkMode ? 'rgba(26, 178, 255, 0.3)' : '#e6f7ff'};
    border-color: ${({ darkMode }) =>
      darkMode ? 'rgba(26, 178, 255, 0.3)' : '#e6f7ff'};
  }
`;

export const ProfileIcon = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const SettingsButton = styled.div<{ darkMode: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :active {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 15%)' : '#f2f2f2'};
    border-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 15%)' : '#f2f2f2'};
  }
`;

export const DropdownParent = styled.div`
  position: relative;
  margin-left: auto;
`;
