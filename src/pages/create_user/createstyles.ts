import styled from 'styled-components';

export const CreationContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  height: 500px;
  width: 450px;
  border-radius: 6px;
`;

export const Logo = styled.img`
  width: 70px;
`;

export const Input = styled.input`
  width: 80%;
  height: 50px;
  font-size: 1.2rem;
  border: 1px solid #d9d9d9;
  outline: transparent;
  border-radius: 5px;
  margin-top: 20px;
  padding-left: 15px;
  box-sizing: border-box;

  :focus {
    border: 2px solid #0066ff;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  width: 87%;
  height: 50px;
`;

export const LoginButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: hsl(216, 100%, 55%);
  outline: transparent;
  border: none;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  :hover,
  :focus {
    background-color: hsl(216, 100%, 50%);
  }
`;

export const CreateButton = styled.button`
  min-width: fit-content;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  outline: transparent;
  border: none;
  color: hsl(216, 100%, 60%);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;

  :hover,
  :focus {
    background-color: hsl(216, 100%, 98%);
    color: hsl(216, 100%, 55%);
  }
`;

export const Forgot = styled.span`
  align-self: flex-start;
  margin-left: 8%;
  text-decoration: none;
  color: hsl(216, 100%, 60%);
  cursor: pointer;
  font-weight: 600;
`;
