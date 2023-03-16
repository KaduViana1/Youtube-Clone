import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => (margin ? margin : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
`;
export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.button`
  border-radius: 0 40px 40px 0;
  height: 37px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  width: 200px;
  display: flex;
`;

export const LoginButton = styled.button`
  border-radius: 20px;
  min-width: 100px;
  background-color: white;
  border: 1px solid #d3d3d3;
  padding: 0px 10px;
  font-size: 0.9rem;
  color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;

  :hover,
  :focus {
    background-color: #e6f7ff;
    border-color: #e6f7ff;
  }
`;

export const ProfileIcon = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const SettingsButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :active {
    background-color: #f2f2f2;
    border-color: #f2f2f2;
  }
`;

export const DropdownParent = styled.div`
  position: relative;
  margin-left: auto;
`;
