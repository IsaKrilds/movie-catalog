import styled from 'styled-components';

export const Container = styled.div<{ $imageLink: string }>`
  width: 200px;
  height: 300px;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  background-image: url(${({ $imageLink }) => $imageLink});
  background-repeat: no-repeat;
  background-size: contain;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
