import styled from 'styled-components';

export const ModalContainer = styled.div<{ createVideoModal: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  display: ${({ createVideoModal }) => (createVideoModal ? 'flex' : 'none')};
`;

export const FormContainer = styled.div<{ darkMode: boolean }>`
  width: 50%;
  height: 800px;
  background-color: ${({ darkMode }) =>
    darkMode ? 'hsl(0, 0%, 15%)' : 'white'};
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 0 40px 0 black;
`;

export const FormHeader = styled.div<{ darkMode: boolean }>`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  border-bottom: ${({ darkMode }) =>
    darkMode ? '2px solid hsl(0, 0%, 40%)' : '2px solid #d9d9d9'};
  background-color: inherit;
  border-radius: 8px 8px 0 0;

  span {
    font-weight: 600;
    font-size: 1.3rem;
    margin-left: 20px;
  }
`;

export const HeaderButton = styled.button<{ darkMode: boolean }>`
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  outline: transparent;

  :focus {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 25%)' : 'hsl(0, 0%, 80%)'};
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const Form = styled.form<{ darkMode: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;

  input {
    width: 35%;
    height: 40px;
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
    color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
    outline: transparent;
    border: ${({ darkMode }) =>
      darkMode ? '3px solid hsl(0, 0%, 65%)' : '2px solid #d3d3d3'};
  }

  label {
    font-size: 2rem;
  }

  .textArea {
    width: 35%;
    height: 250px;
  }

  textarea {
    background-color: ${({ darkMode }) =>
      darkMode ? 'hsl(0, 0%, 5%)' : 'white'};
    color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
    outline: transparent;
    border: ${({ darkMode }) =>
      darkMode ? '3px solid hsl(0, 0%, 65%)' : '2px solid #d3d3d3'};
  }
`;

export const SubmitButton = styled.button`
  width: 130px;
  height: 40px;
  border: none;
  outline: transparent;
  font-size: 1rem;
  margin-top: 20px;
  cursor: pointer;
  background-color: hsl(195, 100%, 65%);

  :focus {
    background-color: hsl(204, 100%, 65%);
  }
`;
