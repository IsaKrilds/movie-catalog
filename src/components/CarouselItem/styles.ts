import styled from 'styled-components';

export const Container = styled.div<{ $imageLink: string }>`
  width: 200px;
  height: 300px;
  border-radius: ${({ theme }) => theme.spacing(0.5)}px;
  background-image: url(${({ $imageLink }) => $imageLink});
  background-repeat: no-repeat;
  background-size: contain;
`;
