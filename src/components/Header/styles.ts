import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.header};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 0;
`;

export const LogoImage = styled.img``;
