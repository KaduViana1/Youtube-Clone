import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  padding: ${({ openMenu }) => (openMenu ? '0 40px' : '0 0')};
  grid-template-columns: ${({ openMenu }) =>
    openMenu ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
  column-gap: 20px;
  row-gap: 25px;
`;

export const CategoryBar = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 55px;
  height: 50px;
  margin: 0 0 20px 0;
  padding-block: 5px;
  gap: 10px;
  background-color: white;
  flex-wrap: nowrap;
  overflow: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const CategorySelector = styled.button`
  outline: transparent;
  padding: 6px 10px;
  background-color: #e6e6e6;
  cursor: pointer;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  transition: 0.2s;
  max-height: 30px;
  min-width: fit-content;

  :hover {
    background-color: #d9d9d9;
  }
`;

export const Separator = styled.div`
  height: 20px;
  width: 100%;
  border-top: 3px solid #d9d9d9;
  margin: 10px 0;
`;

export const ShortsHeader = styled.div`
  align-items: center;
  margin-top: -10px;
  margin-bottom: 20px;
  display: flex;
  column-gap: 15px;
  height: 35px;
  width: 100%;
  font-size: 1.3rem;
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;

export const ShortsContainer = styled.div<{ openMenu: boolean }>`
  width: 100%;
  box-sizing: border-box;
  max-width: 1800px;
  display: grid;
  padding: ${({ openMenu }) => (openMenu ? '0 40px' : '0 0')};
  grid-template-columns: ${({ openMenu }) =>
    openMenu ? 'repeat(8, 1fr)' : 'repeat(10, 1fr)'};
  column-gap: 20px;
  row-gap: 30px;
`;
