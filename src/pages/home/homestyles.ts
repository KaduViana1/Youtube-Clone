import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean; darkMode: boolean }>`
  margin-top: 80px;
  max-width: 100%;
  box-sizing: border-box;
  display: grid;
  padding: ${({ openMenu }) => (openMenu ? '0 100px' : '0 30px')};
  grid-template-columns: ${({ openMenu }) =>
    openMenu ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
  column-gap: 20px;
  row-gap: 25px;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
`;

export const SeparatorContainer = styled.div<{ openMenu: boolean }>`
  display: flex;
  width: 100%;
  margin-block: 20px;
  padding: ${({ openMenu }) => (openMenu ? '0 100px' : '0 30px')};
`;

export const Separator = styled.div<{ darkMode: boolean }>`
  height: 20px;
  width: 100%;
  border-top: ${({ darkMode }) =>
    darkMode ? '2px solid hsl(0, 0%, 40%)' : '2px solid #d9d9d9'};
`;

export const ShortsHeader = styled.div<{
  darkMode: boolean;
  openMenu: boolean;
}>`
  align-items: center;
  margin-top: -10px;
  margin-bottom: 20px;
  display: flex;
  column-gap: 15px;
  height: 35px;
  width: 100%;
  font-size: 1.3rem;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  padding: ${({ openMenu }) => (openMenu ? '0 100px' : '0 30px')};
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;

export const ShortsContainer = styled.div<{
  openMenu: boolean;
  darkMode: boolean;
}>`
  max-width: 100%;
  display: grid;
  padding: ${({ openMenu }) => (openMenu ? '0 100px' : '0 30px')};
  grid-template-columns: ${({ openMenu }) =>
    openMenu ? 'repeat(8, 1fr)' : 'repeat(10, 1fr)'};
  column-gap: 20px;
  row-gap: 30px;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
`;
