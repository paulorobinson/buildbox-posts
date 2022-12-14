import { IoCloseCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.border};
  padding: 2rem;

  background-color: ${({ theme }) => theme.bg};
`;

export const WrapperHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`;

export const CloseIcon = styled(IoCloseCircleOutline).attrs({
  size: '2rem',
  color: '#D65923',
})`
  cursor: pointer;
`;

export const WrapperContent = styled.section`
  display: flex;
  gap: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MessagePost = styled.p`
  padding-bottom: 2rem;
`;

export const TextSendTo = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  filter: brightness(0.8);
`;

export const Username = styled.p`
  filter: brightness(0.9);
`;
