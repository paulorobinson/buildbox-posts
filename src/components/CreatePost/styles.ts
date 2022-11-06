import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  gap: 1rem;

  background-color: ${({ theme }) => theme.bg};
`;

export const InputUploadFile = styled.label`
  cursor: pointer;

  border-radius: 40%;
  border: 1px solid ${({ theme }) => theme.border};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 10rem;

  padding: 3.4rem;

  input {
    display: none;
  }
`;

export const ButtonComponent = styled.button``;

export const InputText = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.inputText};
`;
export const InputTextarea = styled.textarea`
  width: 100%;
  resize: none;

  color: ${({ theme }) => theme.inputText};
`;

export const WrapperFooterButtons = styled.footer`
  width: 100%;

  padding-top: 2rem;

  display: flex;
  justify-content: end;
  align-items: flex-end;

  gap: 1rem;
`;

export const ResetButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;

  padding: 1rem 2rem;
`;
export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.bgEnabledButton};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.bg};
  font-size: 1.2rem;
  cursor: pointer;

  padding: 1rem 2rem;

  transition: background-color 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.bgDisabledButton};
    cursor: not-allowed;
  }
`;
