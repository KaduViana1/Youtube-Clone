import styled from 'styled-components';

export const DropdownMenu = styled.div<{ dropdown: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-block: 10px;
  margin-top: 5px;
  right: 0;
  width: 300px;
  display: ${({ dropdown }) => (dropdown ? 'flex' : 'none')};
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 30px -20px hsl(0, 0%, 50%);
`;

export const DropdownItem = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  border: none;
  outline: none;
  background-color: inherit;
  text-align: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  padding-inline: 15px;

  :hover,
  :focus {
    background-color: #f3f3f3;
  }

  img {
    width: 20px;
    max-height: 25px;
  }
`;

export const Separator = styled.div`
  height: 2px;
  width: 100%;
  border-top: 1px solid #d9d9d9;
  margin: 10px 0;
`;

export const Right = styled.img`
  margin-left: auto;
  max-width: 1em;
`;
