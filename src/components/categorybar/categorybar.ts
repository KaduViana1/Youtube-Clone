import styled from 'styled-components';

export const CategoryBar = styled.div<{ darkMode: boolean; openMenu: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: flex-start;
  max-width: ${({ openMenu }) =>
    openMenu ? 'calc(100% - 260px)' : 'calc(100% - 100px)'};
  top: 55px;
  height: 60px;
  padding-block: 5px;
  margin-left: 20px;
  padding-left: 1px;
  padding-right: 20px;
  gap: 10px;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  flex-wrap: nowrap;
  overflow: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const CategoryItem = styled.button<{ darkMode: boolean }>`
  outline: transparent;
  padding: 6px 10px;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 20%)' : '#e6e6e6'};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  cursor: pointer;
  font-size: 0.95rem;
  border: none;
  border-radius: 8px;
  transition: 0.2s;
  max-height: 30px;
  min-width: fit-content;

  :hover {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 30%)' : '#d9d9d9'};
  }
`;

export const ScrollButtonL = styled.button<{
  darkMode: boolean;
  leftArrow: boolean;
  contentText: string;
}>`
  display: ${({ leftArrow }) => (leftArrow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 40px;
  width: 40px;
  border: ${({ darkMode }) =>
    darkMode ? '1px solid hsl(0, 0%, 5%)' : '1px solid white'};
  border-radius: 50%;
  outline: none;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  cursor: pointer;
  box-shadow: ${({ darkMode }) =>
    darkMode ? '0 0 10px 10px hsl(0, 0%, 5%)' : '0 0 10px 10px white'};

  :hover {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 30%)' : '#d9d9d9'};
    border-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 30%)' : '#d9d9d9'};
  }

  :active {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 40%)' : '#b3b3b3'};
    border-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 40%)' : '#b3b3b3'};
  }

  img {
    height: 20px;
    width: 20px;
  }

  :after {
    content: '${({ contentText }) => (contentText ? contentText : '')}';
    position: absolute;
    bottom: -50px;
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

  :hover::after {
    display: ${({ contentText }) => (contentText ? 'flex' : 'none')};
  }
`;

export const ScrollButtonR = styled.button<{
  darkMode: boolean;
  rightArrow: boolean;
  contentText: string;
}>`
  position: fixed;
  display: ${({ rightArrow }) => (rightArrow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  right: 10px;
  height: 40px;
  width: 40px;
  border: ${({ darkMode }) =>
    darkMode ? '1px solid hsl(0, 0%, 5%)' : '1px solid white'};
  border-radius: 50%;
  outline: none;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
  cursor: pointer;
  box-shadow: ${({ darkMode }) =>
    darkMode ? '0 0 10px 10px hsl(0, 0%, 5%)' : '0 0 10px 10px white'};

  :hover {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 30%)' : '#d9d9d9'};
    border-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 30%)' : '#d9d9d9'};
  }

  :active {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 40%)' : '#b3b3b3'};
    border-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 40%)' : '#b3b3b3'};
  }

  img {
    height: 18px;
    width: 18px;
  }

  :after {
    content: '${({ contentText }) => (contentText ? contentText : '')}';
    position: absolute;
    bottom: -50px;
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

  :hover::after {
    display: ${({ contentText }) => (contentText ? 'flex' : 'none')};
  }
`;
