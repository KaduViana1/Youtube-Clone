import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  margin-inline: auto;
  width: 1180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Separator = styled.div<{ darkMode: boolean }>`
  height: 20px;
  width: 100%;
  border-top: ${({ darkMode }) =>
    darkMode ? '1px solid hsl(0, 0%, 40%)' : '1px solid #d9d9d9'};
`;

export const Filters = styled.button<{ darkMode: boolean }>`
  margin-right: auto;
  width: 90px;
  height: 35px;
  border-radius: 1000px;
  border: none;
  background-color: inherit;
  color: inherit;
  margin-bottom: -10px;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: -10px;

  img {
    height: 15px;
  }

  :hover {
    background-color: ${({ darkMode }) =>
      darkMode ? ' hsl(0, 0%, 40%)' : '#d9d9d9'};
  }
`;
