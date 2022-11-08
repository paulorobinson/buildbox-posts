import styled from 'styled-components';

export const WrapperImage = styled.section``;

export const Image = styled.img`
  border-radius: 40%;
  border: 1px solid ${({ theme }) => theme.border};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 10rem;
`;
