import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean; darkMode: boolean }>`
  width: ${({ openMenu }) => (openMenu ? '230px' : '70px')};
  min-width: ${({ openMenu }) => (openMenu ? '230px' : '70px')};
  height: calc(100vh - 55px);
  box-sizing: border-box;
  padding: ${({ openMenu }) => (openMenu ? '10px 10px' : '10px 4px')};
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  position: fixed;
  top: 55px;
  z-index: 2;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};

  p {
    display: ${({ openMenu }) => (openMenu ? 'static' : 'none')};
  }
`;

export const MenuItem = styled.div<{ openMenu: boolean; darkMode: boolean }>`
  width: 98%;
  min-height: ${({ openMenu }) => (openMenu ? '45px' : '70px')};
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ openMenu }) => (openMenu ? 'row' : 'column')};
  align-items: center;
  justify-content: ${({ openMenu }) => (openMenu ? 'none' : 'center')};

  span {
    font-weight: ${({ openMenu }) => (openMenu ? '500px' : '400px')};
    margin-left: ${({ openMenu }) => (openMenu ? '20px' : 'none')};
    font-size: ${({ openMenu }) => (openMenu ? '14px' : '10px')};
  }

  :hover {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 15%)' : '#f2f2f2'};
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
`;

export const Separator = styled.div<{ openMenu: boolean; darkMode: boolean }>`
  height: 20px;
  width: 100%;
  border-top: ${({ darkMode }) =>
    darkMode ? '1px solid hsl(0, 0%, 40%)' : '1px solid #d9d9d9'};
  margin: 10px 0;
  display: ${({ openMenu }) => (openMenu ? 'static' : 'none')};
`;

export const ModalItem = styled.div<{ openMenu: boolean; darkMode: boolean }>`
  width: 98%;
  min-height: ${({ openMenu }) => (openMenu ? '45px' : '70px')};
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 15px;
  box-sizing: border-box;
  display: ${({ openMenu }) => (openMenu ? 'flex' : 'none')};
  flex-direction: ${({ openMenu }) => (openMenu ? 'row' : 'column')};
  align-items: center;
  justify-content: ${({ openMenu }) => (openMenu ? 'none' : 'center')};

  span {
    font-weight: ${({ openMenu }) => (openMenu ? '500' : '400px')};
    margin-left: ${({ openMenu }) => (openMenu ? '20px' : 'none')};
    font-size: ${({ openMenu }) => (openMenu ? '15px' : '12px')};
  }

  :hover {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 15%)' : '#f2f2f2'};
  }
`;

export const Title = styled.span<{ openMenu: boolean }>`
  display: ${({ openMenu }) => (openMenu ? 'static' : 'none')};
  font-size: 18px;
  margin-right: auto;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Footer = styled.div<{ openMenu: boolean }>`
  display: ${({ openMenu }) => (openMenu ? 'flex' : 'none')};
  flex-wrap: wrap;
  padding-inline: 15px;
  row-gap: 2px;
  column-gap: 10px;
  font-size: 12px;
  color: #999999;

  a {
    text-decoration: none;
    font-weight: 700;
    color: #737373;
  }

  a:visited {
    color: #737373;
  }

  p {
    font-size: 12px;
  }
`;
