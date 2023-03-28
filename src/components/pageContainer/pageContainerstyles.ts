import styled from 'styled-components';

export const MainContainer = styled.div<{
  openMenu: boolean;
  darkMode: boolean;
}>`
  width: 100%;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  padding-left: ${({ openMenu }) => (openMenu ? '230px' : '70px')};
`;
